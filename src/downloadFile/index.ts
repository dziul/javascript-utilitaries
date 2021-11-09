const DELAY = 500

export const downloadFile = (url: string, elementTarget: HTMLElement | null) =>
  new Promise((resolve: (arg: void) => void) => {
    if (!elementTarget) throw new Error('Not found element target')

    const anchor = document.createElement('a')
    anchor.href = url
    anchor.hidden = true
    anchor.download = ''
    elementTarget.appendChild(anchor)
    anchor.click()

    window.setTimeout(() => {
      elementTarget.removeChild(anchor)
      resolve()
    }, DELAY)
  })
  
  
export default downloadFile
