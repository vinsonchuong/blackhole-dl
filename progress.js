import {createElement as h, Fragment} from 'react'
import {Text} from 'ink'

export default function ({fileName, progress}) {
  if (progress === 'Loading...') {
    return h(Text, {}, 'Loading...')
  }

  if (progress === 'Download complete.') {
    return h(
      Fragment,
      {},
      h(Text, {}, fileName),
      h(Text, {}, 'Download complete.')
    )
  }

  return h(Fragment, {}, h(Text, {}, fileName), h(Text, {}, progress))
}
