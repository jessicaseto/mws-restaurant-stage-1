const staticCacheName = 'restaurant-reviews-static-v1';
const cacheFiles = [
  '/',
  '/index.html',
  '/restaurant.html',
  '/js/dbhelper.js',
  '/js/main.js',
  '/js/registersw.js',
  '/js/restaurant_info.js',
  '/data/restaurants.json',
  '/css/styles.css',
  '/img/1.jpg',
  '/img/2.jpg',
  '/img/3.jpg',
  '/img/4.jpg',
  '/img/5.jpg',
  '/img/6.jpg',
  '/img/7.jpg',
  '/img/8.jpg',
  '/img/9.jpg',
  '/img/10.jpg'
];

/* When the service working is being installed, cache resources
 * for offline use.
 */
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(staticCacheName).then(function(cache) {
      return cache.addAll(cacheFiles);
    }).catch(function(err) {
      console.log(err);
    })
  );
});

/* Delete old caches when the new service worker is being activated. */
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          return cacheName.startsWith('restaurant-reviews-') &&
                 cacheName != staticCacheName;
        }).map(function(cacheName) {
          return caches.delete(cacheName);
        })
      );
    })
  );
});

/* During a fetch event, check if the event request object matches
 * with any item in the cache before fetching the item from the network
 */
self.addEventListener('fetch', function(event) {
  console.log('fetching');
  event.respondWith(
    caches.match(event.request, {ignoreSearch: true}).then(function(response) {
      if (response) {
        console.log('Found ' + event.request + ' in cache');
        return response;
      } else {
        console.log('Could not find ' + event.request + ' in cache');
        return fetch(event.request).then(function(response) {
          // From https://matthewcranford.com/restaurant-reviews-app-walkthrough-part-4-service-workers/
          caches.open(staticCacheName).then(function(cache) {
            cache.put(event.request, response.clone());
            return response;
          })
        })
      }
    }).catch(function(err) {
      console.log(err);
    })
  );
});