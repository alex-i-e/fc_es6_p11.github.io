export default function initGoogleMap() {
    console.log(' >>> init MAP ...');

    return new Promise((res, rej) => {
        try {
            // The location of Uluru
            const uluru = {lat: -25.344, lng: 131.036};
            // The map, centered at Uluru
            const map = new google.maps.Map(
                document.getElementById('map'), {zoom: 4, center: uluru});
            // The marker, positioned at Uluru
            const marker = new google.maps.Marker({position: uluru, map: map});

            res({marker, map, uluru});
        } catch (err) {
            rej(err);
        }
    });
}

export function onLoadCallback() {
    console.log(' >>> onLoadCallback MAP ...');

    return new Promise((res, rej) => {
        try {
            // The location of Uluru
            const uluru = {lat: -25.344, lng: 131.036};
            // The map, centered at Uluru
            const map = new google.maps.Map(
                document.getElementById('map'), {zoom: 4, center: uluru});
            // The marker, positioned at Uluru
            const marker = new google.maps.Marker({position: uluru, map: map});

            res({marker, map, uluru});
        } catch (err) {
            rej(err);
        }
    });
}


function loadError(oError) {
    throw new URIError('The script ' + oError.target.src + ' didn\'t load correctly.');
}

export function prefixScript(url, onloadFunction) {
    const newScript = document.createElement('script');
    newScript.onerror = loadError;

    if (onloadFunction) {
        newScript.onload = onloadFunction;
    }

    document.currentScript.parentNode.insertBefore(newScript, document.currentScript);
    newScript.src = url;
}

export function affixScriptToHead(url, onloadFunction) {
    return new Promise((resolve, reject) => {
        const s = document.createElement('script');
        s.src = url;
        s.onload = (s) => resolve(onloadFunction);  // resolve with script, not event
        s.onerror = reject;
        document.head.appendChild(s);
    });
}