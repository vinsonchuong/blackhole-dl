#!/usr/bin/env node
import {createElement as h} from 'react'
import {render} from 'ink'
import download from './index.js'
import Progress from './progress.js'

async function run() {
  const url = process.argv[2]
  const events = download(url)

  for await (const {fileName, progress} of events) {
    render(h(Progress, {fileName, progress}))
  }
}

run()
