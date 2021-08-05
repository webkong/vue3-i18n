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
    "revision": "4602a2d302899220ce2a8dbd74d31a51"
  },
  {
    "url": "api/index.html",
    "revision": "27f93836b166a82a3bcc5e3e592d0619"
  },
  {
    "url": "assets/css/0.styles.25341f19.css",
    "revision": "b7693a4ef171089f970e52d7f4789baa"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.95d01568.js",
    "revision": "a74343c2a7b8bfbef08179613851c0a8"
  },
  {
    "url": "assets/js/11.d10c6f46.js",
    "revision": "8479476ad704269eb7dfa886c5ee6e7f"
  },
  {
    "url": "assets/js/12.f2c763e5.js",
    "revision": "b85fb9fa6ed87749dc49a3cf1ed76649"
  },
  {
    "url": "assets/js/13.d85acfcd.js",
    "revision": "02af7385b7975d628062beb84494a879"
  },
  {
    "url": "assets/js/14.032afd40.js",
    "revision": "014d5a1edbfd42d4b8e727285d6564fe"
  },
  {
    "url": "assets/js/15.c108cd0c.js",
    "revision": "e4a52bafa84ae4d67788d1e5f8e95c91"
  },
  {
    "url": "assets/js/16.988c33b8.js",
    "revision": "645126a1e09ab250a782b9185be8061e"
  },
  {
    "url": "assets/js/17.f78c331d.js",
    "revision": "312691c8b1fb58f33ae23d803c2e02be"
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
    "url": "assets/js/5.be29ba0d.js",
    "revision": "f3a8982dbf4db6b5a299b07e9afb7473"
  },
  {
    "url": "assets/js/6.d21e0be0.js",
    "revision": "fa119447ee8b8ea757b1634568d3642d"
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
    "url": "assets/js/9.5d3cfdd0.js",
    "revision": "bdbf1d9c1d66f2c301ceba02b5fd4d4b"
  },
  {
    "url": "assets/js/app.ea3d1dc2.js",
    "revision": "de13eeffdd3e1fca134a2d2852d05727"
  },
  {
    "url": "guide/examples.html",
    "revision": "d7419d5e0d0b94b4a5f1ccc63501a35e"
  },
  {
    "url": "guide/formatting.html",
    "revision": "64020f93bd4ea07f23a66961194c7c62"
  },
  {
    "url": "index.html",
    "revision": "2b435bb9a8e5ef63223421d3fd58bc3c"
  },
  {
    "url": "installation.html",
    "revision": "d213a7d0ff65d4027e89f2955037dd6a"
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
    "url": "zh/api/index.html",
    "revision": "84b3ff4f9c9aecddc695bee7112d4a98"
  },
  {
    "url": "zh/guide/examples.html",
    "revision": "a0d7031917d6bf60acf0dc3dc7c749bb"
  },
  {
    "url": "zh/guide/formatting.html",
    "revision": "6f6f72c1eb3f82109609b1b344c6eac2"
  },
  {
    "url": "zh/index.html",
    "revision": "fea3ba2dcfcec958919ae6104f8b3537"
  },
  {
    "url": "zh/installation.html",
    "revision": "8b9e5caad37e2ce5c8da1fba12d59872"
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
