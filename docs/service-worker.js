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
    "revision": "3f41b7fc5d567f10f53faa02b4cff06c"
  },
  {
    "url": "api/api.html",
    "revision": "c4eb6f19e677e70f2748f34f4b7da8cb"
  },
  {
    "url": "assets/css/0.styles.81887141.css",
    "revision": "c47ce1fed069ef8861b2721ab9bd32e5"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.e8212e51.js",
    "revision": "dbe38e3669f3754790230d41eb9017ec"
  },
  {
    "url": "assets/js/11.d10c6f46.js",
    "revision": "8479476ad704269eb7dfa886c5ee6e7f"
  },
  {
    "url": "assets/js/12.5505869e.js",
    "revision": "f9576eceecb7c45a58d96c692b431a06"
  },
  {
    "url": "assets/js/13.71b3dc2f.js",
    "revision": "dbd8e0c74e53bab64271f46586b6c0b4"
  },
  {
    "url": "assets/js/14.b1a08dba.js",
    "revision": "cab735d972d179020d569ab3fb4d7a22"
  },
  {
    "url": "assets/js/15.d7200e5c.js",
    "revision": "3d7b50e314f65f60a6c2254ee703395f"
  },
  {
    "url": "assets/js/16.97ed8ef3.js",
    "revision": "dea07ec42fead3dc9b7fc50cbc81f446"
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
    "url": "assets/js/4.097a04aa.js",
    "revision": "a4da5a231afdf27ed565a5739cd534e6"
  },
  {
    "url": "assets/js/5.8f14e0b3.js",
    "revision": "6fec3b81a4ca4e72891e2cc26eaa7b1b"
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
    "url": "assets/js/9.acf68c94.js",
    "revision": "bdbf1d9c1d66f2c301ceba02b5fd4d4b"
  },
  {
    "url": "assets/js/app.92094c2d.js",
    "revision": "532a85fa1c932d25a13208e075720763"
  },
  {
    "url": "guide/examples.html",
    "revision": "db5f7b61f4f39674ba74ba72a82c2c5d"
  },
  {
    "url": "guide/formatting.html",
    "revision": "2aaf0a40849c65d11aaafa05549953a1"
  },
  {
    "url": "index.html",
    "revision": "ee761562de0ad01a6c07381d9d26b563"
  },
  {
    "url": "installation.html",
    "revision": "7c36e1c16df29001c572ff4707603a58"
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
    "revision": "5c093f15ad30709c610ae760c9e66aed"
  },
  {
    "url": "zh/guide/examples.html",
    "revision": "f8d614629feafef85d985654bf6d4215"
  },
  {
    "url": "zh/guide/formatting.html",
    "revision": "76f7e396e1302397882ecec5a600aeef"
  },
  {
    "url": "zh/index.html",
    "revision": "6930dde9a39cf4cd6896d90c9b35567d"
  },
  {
    "url": "zh/installation.html",
    "revision": "eed629157b427ecfc772760385a38de7"
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
