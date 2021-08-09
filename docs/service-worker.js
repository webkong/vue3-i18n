/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "deb33cf6e4452d528cbe5142f7a6539f"
  },
  {
    "url": "api/api.html",
    "revision": "b0a4b0826ec3acbba70e6d1bd25e1bca"
  },
  {
    "url": "assets/css/0.styles.4f9405d1.css",
    "revision": "2fdc2fbcbfd3df7f6cc217e95a04fb8c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.c821b47f.js",
    "revision": "5a0b97faed59485ceae0c5b5f1d63b74"
  },
  {
    "url": "assets/js/11.d10c6f46.js",
    "revision": "8479476ad704269eb7dfa886c5ee6e7f"
  },
  {
    "url": "assets/js/12.9863cd7b.js",
    "revision": "157c06f7c8867179d07f0f275359c1b0"
  },
  {
    "url": "assets/js/13.6dcd17e6.js",
    "revision": "6965575c794653ffc4731b62e6dc715b"
  },
  {
    "url": "assets/js/14.b1a08dba.js",
    "revision": "cab735d972d179020d569ab3fb4d7a22"
  },
  {
    "url": "assets/js/15.f4fc8329.js",
    "revision": "21857ad7c42e9f5cb26902bf6713ec35"
  },
  {
    "url": "assets/js/16.cf5440a4.js",
    "revision": "77dcb01b57ebc1014615a06524d405a0"
  },
  {
    "url": "assets/js/17.f0a2f031.js",
    "revision": "f673d8a3951e0cb19e8ca14b4d0452e5"
  },
  {
    "url": "assets/js/18.12480274.js",
    "revision": "00d8bece645d1d4e98e1fd4878c1c215"
  },
  {
    "url": "assets/js/2.156f5114.js",
    "revision": "746f5e7669b206a82e3fe789862a16cd"
  },
  {
    "url": "assets/js/3.0e1f7f5d.js",
    "revision": "9dfe80b024150f0e8e6bb00d40fadf84"
  },
  {
    "url": "assets/js/4.4ad3649b.js",
    "revision": "9130271db73263efa831587b7693faea"
  },
  {
    "url": "assets/js/5.f974f56a.js",
    "revision": "d44c45c08873effd89ebcea2cab6e4b8"
  },
  {
    "url": "assets/js/6.927f38b1.js",
    "revision": "7d3645637438fab46cb16fbe68fd5dba"
  },
  {
    "url": "assets/js/7.d910c35c.js",
    "revision": "04ed7aa21cd780d39adf673a92309fb0"
  },
  {
    "url": "assets/js/8.5ae9bace.js",
    "revision": "87dd4a7a7c3ec8b202d791344b227e2f"
  },
  {
    "url": "assets/js/9.73958ba3.js",
    "revision": "572cb40d65cdb40d696e6bbf1d7d9709"
  },
  {
    "url": "assets/js/app.6bf5ee6e.js",
    "revision": "5e4d6e8efd8d781cd77db0ddc335a3a7"
  },
  {
    "url": "guide/examples.html",
    "revision": "fee29f5f43ea0009c4a50e215b5acd18"
  },
  {
    "url": "guide/formatting.html",
    "revision": "4cef44c004c5f89835f7ca4e6d100efe"
  },
  {
    "url": "index.html",
    "revision": "a12dd45ae12db89edc528267c7732fb1"
  },
  {
    "url": "installation.html",
    "revision": "47dd0b7358d2ba73ee93760c3133a3c7"
  },
  {
    "url": "logo.jpg",
    "revision": "b9680cf2582749595950550650a80232"
  },
  {
    "url": "logo.svg",
    "revision": "4667b1c6bdbdfc68157197a697f6f22e"
  },
  {
    "url": "zh/api/api.html",
    "revision": "f03a3e4938e641dad4280788a81b9044"
  },
  {
    "url": "zh/guide/examples.html",
    "revision": "429278f2e0a0c34428743e5bd1a91a7b"
  },
  {
    "url": "zh/guide/formatting.html",
    "revision": "f60c4f3a1015a54756f54155b629e329"
  },
  {
    "url": "zh/index.html",
    "revision": "231bdfa883f408ae8313313c93b043ac"
  },
  {
    "url": "zh/installation.html",
    "revision": "1b2c0e1f5f6d8e23c0e95d224e2786be"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
