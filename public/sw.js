if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const o=e=>i(e,t),r={module:{uri:t},exports:c,require:o};s[t]=Promise.all(a.map((e=>r[e]||o(e)))).then((e=>(n(...e),c)))}}define(["./workbox-f1770938"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/0e5ce63c-4b4af542537b7227.js",revision:"oyYeTSgiw7zpkZE7kqAiG"},{url:"/_next/static/chunks/138-666597d314978ac9.js",revision:"oyYeTSgiw7zpkZE7kqAiG"},{url:"/_next/static/chunks/190-d5463e504743ce53.js",revision:"oyYeTSgiw7zpkZE7kqAiG"},{url:"/_next/static/chunks/208-d90f31d10bbc9375.js",revision:"oyYeTSgiw7zpkZE7kqAiG"},{url:"/_next/static/chunks/260-96c5b5fcf19e258e.js",revision:"oyYeTSgiw7zpkZE7kqAiG"},{url:"/_next/static/chunks/326-be1714c0c97666dc.js",revision:"oyYeTSgiw7zpkZE7kqAiG"},{url:"/_next/static/chunks/343-521c9b07f4fbe6e1.js",revision:"oyYeTSgiw7zpkZE7kqAiG"},{url:"/_next/static/chunks/484-b66e3dcd7ad3dbcd.js",revision:"oyYeTSgiw7zpkZE7kqAiG"},{url:"/_next/static/chunks/521-5bff86f85c1a6a07.js",revision:"oyYeTSgiw7zpkZE7kqAiG"},{url:"/_next/static/chunks/892-2cc2387d7ff0f5ce.js",revision:"oyYeTSgiw7zpkZE7kqAiG"},{url:"/_next/static/chunks/964-d0bc7153b59f0427.js",revision:"oyYeTSgiw7zpkZE7kqAiG"},{url:"/_next/static/chunks/app/(auth)/fixation/defect/%5BdefectId%5D/contractors/page-11a071f4692bcff8.js",revision:"oyYeTSgiw7zpkZE7kqAiG"},{url:"/_next/static/chunks/app/(auth)/layout-41c8155f1e840c06.js",revision:"oyYeTSgiw7zpkZE7kqAiG"},{url:"/_next/static/chunks/app/(auth)/profile/page-f071b74fe8863e34.js",revision:"oyYeTSgiw7zpkZE7kqAiG"},{url:"/_next/static/chunks/app/(auth)/tasks/%5Bid%5D/fixation/defect/page-1beadf73ca822e61.js",revision:"oyYeTSgiw7zpkZE7kqAiG"},{url:"/_next/static/chunks/app/(auth)/tasks/%5Bid%5D/fixation/work/page-30765634b0cdb1f0.js",revision:"oyYeTSgiw7zpkZE7kqAiG"},{url:"/_next/static/chunks/app/(auth)/tasks/page-c860dd2d5a99f472.js",revision:"oyYeTSgiw7zpkZE7kqAiG"},{url:"/_next/static/chunks/app/_not-found/page-989a123f86d4b72a.js",revision:"oyYeTSgiw7zpkZE7kqAiG"},{url:"/_next/static/chunks/app/layout-4bb343c1575ebe9c.js",revision:"oyYeTSgiw7zpkZE7kqAiG"},{url:"/_next/static/chunks/app/login/page-4bf22c5d6551ef2f.js",revision:"oyYeTSgiw7zpkZE7kqAiG"},{url:"/_next/static/chunks/app/page-c4d90df23dcd2aa7.js",revision:"oyYeTSgiw7zpkZE7kqAiG"},{url:"/_next/static/chunks/fd9d1056-b7a8ffc649e62c14.js",revision:"oyYeTSgiw7zpkZE7kqAiG"},{url:"/_next/static/chunks/framework-f66176bb897dc684.js",revision:"oyYeTSgiw7zpkZE7kqAiG"},{url:"/_next/static/chunks/main-8ea70648bc923817.js",revision:"oyYeTSgiw7zpkZE7kqAiG"},{url:"/_next/static/chunks/main-app-c0c6a7f55797996a.js",revision:"oyYeTSgiw7zpkZE7kqAiG"},{url:"/_next/static/chunks/pages/_app-6a626577ffa902a4.js",revision:"oyYeTSgiw7zpkZE7kqAiG"},{url:"/_next/static/chunks/pages/_error-1be831200e60c5c0.js",revision:"oyYeTSgiw7zpkZE7kqAiG"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-5fcee96275f9641d.js",revision:"oyYeTSgiw7zpkZE7kqAiG"},{url:"/_next/static/css/4d5330269f0f794c.css",revision:"4d5330269f0f794c"},{url:"/_next/static/css/742e77ee35e5d2ff.css",revision:"742e77ee35e5d2ff"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/_next/static/oyYeTSgiw7zpkZE7kqAiG/_buildManifest.js",revision:"2ec694eb52ae4f523f265a46bae4d768"},{url:"/_next/static/oyYeTSgiw7zpkZE7kqAiG/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/icon512_maskable.png",revision:"a15507a144d07554676c451f5ceea24e"},{url:"/icon512_rounded.png",revision:"7ef9d2c5a0e9f28ff10d72082ec97d62"},{url:"/manifest.json",revision:"a7097283310ddb4f58b19944f72299d0"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/swe-worker-5c72df51bb1f6ee0.js",revision:"5a47d90db13bb1309b25bdf7b363570e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:i})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&i&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:i})=>"1"===e.headers.get("RSC")&&i&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET"),self.__WB_DISABLE_DEV_LOGS=!0}));
