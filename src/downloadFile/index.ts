const DELAY = 500

export const downloadFile = (url: string, elementTarget?: HTMLElement) =>
  new Promise((resolve: (arg: void) => void) => {
    const  target  = elementTarget || document.body

    const anchor = document.createElement('a')
    anchor.href = url
    anchor.hidden = true
    anchor.download = ''
    target.appendChild(anchor)
    anchor.click()

    window.setTimeout(() => {
      target.removeChild(anchor)
      resolve()
    }, DELAY)
  })
  
  
export default downloadFile
