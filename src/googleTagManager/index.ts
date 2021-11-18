enum EventConfig {
  LayerName = 'dataLayer',
  Timeout = 2000,
}

type WindowWithGTM = Window &
  typeof globalThis & {
    [EventConfig.LayerName]: Record<string, unknown>[]
  }

interface DataLayerProps {
  event: string
  eventCallback?: (gtmId: string, config: Record<string, unknown>) => void
  eventTimeoutCallback?: () => void
  eventTimeout?: number
  [k: string]: unknown
}

const innerWindow = window as WindowWithGTM

const snippet = {
  iframe: (id: string) => {
    return `<iframe src="https://www.googletagmanager.com/ns.html?id=${id}" height="0" width="0"
    style="display:none;visibility:hidden"></iframe>`
  },
  script: (id: string) => {
    return `
    (function (w, d, s, l, i) {
      w[l] = w[l] || []; w[l].push({
        'gtm.start':
          new Date().getTime(), event: 'gtm.js'
      }); const f = d.getElementsByTagName(s)[0],
        j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.id = "${id}"; j.async = true; j.src =
          'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
    })(window, document, 'script', '${EventConfig.LayerName}', '${id}');
    `
  },
}

const addScript = (id: string) => {
  const script = document.createElement('script')
  script.insertAdjacentHTML('beforeend', snippet.script(id))

  const firstScriptInDocument = document.getElementsByTagName('script')[0]
  firstScriptInDocument.after(script)
}

const addIframe = (id: string) => {
  const iframe = document.createElement('noscript')
  iframe.insertAdjacentHTML('beforeend', snippet.iframe(id))
  document.body.insertAdjacentElement('afterbegin', iframe)
}

export const gtmPush = (...datas: DataLayerProps[]) => {
  if (!innerWindow[EventConfig.LayerName]) {
    throw new Error(`Not exists window.${EventConfig.LayerName}`)
  }
  datas.forEach(data => {
    innerWindow[EventConfig.LayerName].push(data)
  })
}

export const gtmInitialize = (id: string) => {
  innerWindow[EventConfig.LayerName] = []
  addScript(id)
  addIframe(id)

  return gtmPush
}
