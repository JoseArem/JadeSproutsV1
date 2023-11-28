// Almacenamiento en caché de los elementos de JadeSprouts 

const CACHE_NAME = 'PWA de JADE SPROUTS';

self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      cache.addAll([
        '/JadeSproutsV1/',
        '/JadeSproutsV1/script.js',
        '/JadeSproutsV1/style.css',
        '/JadeSproutsV1/Geolocalizacion.html',
        '/JadeSproutsV1/Contacto.html',
        '/JadeSproutsV1/map.js',
        '/JadeSproutsV1/images/aplicacion1.png',
        '/JadeSproutsV1/images/aplicacion2.png',
        '/JadeSproutsV1/images/aplicacion3.png',
        '/JadeSproutsV1/images/BobbyNHInfo.png',
        '/JadeSproutsV1/images/features-icon-1.png',
        '/JadeSproutsV1/images/features-icon-2.png',
        '/JadeSproutsV1/images/features-icon-3.png',
        '/JadeSproutsV1/images/features-icon-4.png',
        '/JadeSproutsV1/images/FondoFinal.jpg',
        '/JadeSproutsV1/images/footer-form-bg.png',
        '/JadeSproutsV1/images/footer-form-pattern.svg',
        '/JadeSproutsV1/images/footerFondo.jpg',
        '/JadeSproutsV1/images/form-pattern.png',
        '/JadeSproutsV1/images/img-pattern.png',
        '/JadeSproutsV1/images/JadeSlogoSimple.png',
        '/JadeSproutsV1/images/logo_icono.ico',
        '/JadeSproutsV1/images/logo.png',
        '/JadeSproutsV1/images/LogoNH.png',
        '/JadeSproutsV1/images/separator.svg',
        '/JadeSproutsV1/images/separator1.png',
        '/JadeSproutsV1/images/slider-1.jpg',
        '/JadeSproutsV1/images/slider-2.jpg',
        '/JadeSproutsV1/images/slider-3.jpg',
        '/JadeSproutsV1/images/avatar1.jpg',
        '/JadeSproutsV1/images/about-abs-image.png',
        '/JadeSproutsV1/images/about-banner.png',
        '/JadeSproutsV1/images/footer-bg.jpg',
        '/JadeSproutsV1/images/hero-slider-1.jpg',
        '/JadeSproutsV1/images/hero-slider-2.jpg',
        '/JadeSproutsV1/images/hero-slider-3.jpg',
        '/JadeSproutsV1/images/service-1.png',
        '/JadeSproutsV1/images/service-2.png',
        '/JadeSproutsV1/images/service-3.png',
        '/JadeSproutsV1/images/special-dish-banner.png',
        '/JadeSproutsV1/images/testi-avatar.jpg',
        '/JadeSproutsV1/images/testimonial-bg.jpg',
      ]);
    })()
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      // Obtiene los recursos desde el caché
      const cachedResponse = await cache.match(event.request);
      if (cachedResponse) {
        return cachedResponse;
      } else {
        try {
          // Si los recursos no están en el caché, intenta obtenerlos desde la red
          const fetchResponse = await fetch(event.request);
          // Guarda los recursos en el caché y los devuelve
          cache.put(event.request, fetchResponse.clone());
          return fetchResponse;
        } catch (e) {
          // La red falló
        }
      }
    })()
  );
});
