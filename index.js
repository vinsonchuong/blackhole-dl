import {promises as fs} from 'fs'
import {fromQueue} from 'heliograph'
import {closeBrowser} from 'puppet-strings'
import {openChrome} from 'puppet-strings-chrome'

export default function(url) {
  const events = fromQueue()

  async function run() {
    try {
      const browser = await openChrome()

      const page = await browser.puppeteer.browser.newPage()
      await page._client.send('Page.setDownloadBehavior', {
        behavior: 'allow',
        downloadPath: process.cwd()
      })
      await page.goto(url)

      await page.waitForSelector('#downloader')

      let fileName
      while (true) {
        const progress = await page.$eval('.upload-info', node => node.textContent)

        if (!fileName && progress !== 'Loading...') {
          fileName = await page.$eval('.filename', node => node.textContent)
        }

        events.push({fileName, progress})

        if (progress === 'Download complete.') {
          break
        }
      }

      while (true) {
        const directoryContents = await fs.readdir(process.cwd())
        if (directoryContents.includes(fileName)) {
          break
        }
      }

      await closeBrowser(browser)
      events.end()
    } catch (error) {
      events.push(error)
    }
  }
  run()

  return events
}
