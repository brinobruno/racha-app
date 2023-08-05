import { useClipboard } from 'src/services/hooks/useClipboard'

export function CopyButton() {
  const { copy, state } = useClipboard()

  if (state.status === 'unsupported') {
    return null
  }

  if (state.status === 'error') {
    return <button>{state.message}</button>
  }

  if (state.status === 'copied') {
    return <button>Already copied!</button>
  }

  return <button onClick={() => copy('Some content to copy')}>Copy</button>
}
