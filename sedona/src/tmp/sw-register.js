'use strict';

(function (window, document, undefined) {
  'use strict';

  if (navigator.serviceWorker.controller) {
    console.log('active service worker found, no need to register');
  } else {
    //Register the ServiceWorker
    navigator.serviceWorker.register('sedona-sw.js', {
      scope: 'build/js/sedona-sw.js'
    }).then(function (reg) {
      console.log('Service worker has been registered for scope:' + reg.scope);
    });
  };
})(window, document, undefined);