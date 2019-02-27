export default function initGoogleMap() {
  // eslint-disable-next-line
  console.log(' >>> init MAP ...');

  return new Promise((res, rej) => {
    try {
      // The location of Uluru
      const uluru = { lat: -25.344, lng: 131.036 };
      // The map, centered at Uluru
      const map = new google.maps.Map(document.getElementById('map'), { zoom: 4, center: uluru });
      // The marker, positioned at Uluru
      const marker = new google.maps.Marker({ position: uluru, map });

      res({ marker, map, uluru });
    } catch (err) {
      rej(err);
    }
  });
}

export function onLoadCallback() {
  // eslint-disable-next-line
  console.log(' >>> onLoadCallback MAP ...');

  return new Promise((res, rej) => {
    try {
      // The location of Uluru
      const uluru = { lat: -25.344, lng: 131.036 };
      // The map, centered at Uluru
      const map = new google.maps.Map(document.getElementById('map'), { zoom: 4, center: uluru });
      // The marker, positioned at Uluru
      const marker = new google.maps.Marker({ position: uluru, map });

      res({ marker, map, uluru });
    } catch (err) {
      rej(err);
    }
  });
}

function loadError(oError: any): void {
  throw new URIError(`The script ${oError.target.src} didn't load correctly.`);
}

export function prefixScript(
  url: string,
  onloadFunction: (this: GlobalEventHandlers, ev: Event) => any
) {
  const newScript = document.createElement('script');
  newScript.onerror = loadError;

  if (onloadFunction) {
    newScript.onload = onloadFunction;
  }

  (document as any).currentScript.parentNode.insertBefore(newScript, document.currentScript);
  newScript.src = url;
}

export function affixScriptToHead(url: string, onloadFunction: Function) {
  return new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = url;
    s.onload = () => resolve(onloadFunction); // resolve with script, not event
    s.onerror = reject;
    document.head.appendChild(s);
  });
}
