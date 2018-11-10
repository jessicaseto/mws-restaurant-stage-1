/* File to register the service worker */
if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then(function() {
    console.log('Service Worker registered');
  }).catch(function() {
    console.log('Error trying to register Service Worker');
  });
} else {
  console.log('No Service Worker in navigator');
}