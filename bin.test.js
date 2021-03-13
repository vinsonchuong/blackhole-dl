import test from 'ava'
import {promises as fs} from 'fs'
import * as childProcess from 'child_process'
import {promisify} from 'util'

const exec = promisify(childProcess.exec)

test('downloading a file via CLI', async (t) => {
  try {
    await fs.unlink('hello-world.txt')
  } catch {}

  await exec("./bin.js 'https://app.blackhole.run/#55913751ec1EX5YjX7bjY71n8z3sZZaaacGZ26LahXN4'")

  t.is(
    await fs.readFile('hello-world.txt', 'utf8'),
    'Hello World!\n'
  )

  try {
    await fs.unlink('hello-world.txt')
  } catch {}
})
