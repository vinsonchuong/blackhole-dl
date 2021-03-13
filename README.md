# blackhole-dl
[![npm](https://img.shields.io/npm/v/blackhole-dl.svg)](https://www.npmjs.com/package/blackhole-dl)
[![CI Status](https://github.com/vinsonchuong/blackhole-dl/workflows/CI/badge.svg)](https://github.com/vinsonchuong/blackhole-dl/actions?query=workflow%3ACI)
[![dependencies Status](https://david-dm.org/vinsonchuong/blackhole-dl/status.svg)](https://david-dm.org/vinsonchuong/blackhole-dl)
[![devDependencies Status](https://david-dm.org/vinsonchuong/blackhole-dl/dev-status.svg)](https://david-dm.org/vinsonchuong/blackhole-dl?type=dev)

A CLI for downloading files from [BlackHole](https://blackhole.run/)

## Usage
Install [blackhole-dl](https://www.npmjs.com/package/blackhole-dl)
by running:

```sh
yarn global add blackhole-dl
```

Then, run the CLI, passing it the URL to a file:

```sh
blackhole-dl 'https://app.blackhole.run/#55913751ec1EX5YjX7bjY71n8z3sZZaaacGZ26LahXN4'
```

`blackhole-dl` uses Chrome to open the URL and download the file.

Also, we provide a JavaScript API for writing your own scripts:

```js
import download from 'blackhole-dl'

async function run() {
  const events = download('https://app.blackhole.run/#55913751ec1EX5YjX7bjY71n8z3sZZaaacGZ26LahXN4')
  for await (const {fileName, progress} of events) {
    console.log(fileName, progress)
  }
}
run()
```
