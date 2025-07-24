// Service Worker para Casa Tech Senac
const CACHE_NAME = 'casa-tech-v1.0.0';
const urlsToCache = [
    '/',
    '/index.html',
    '/styles.css',
    '/script.js',
    '/config.js',
    '/assets/brasao-comandante-ia.png',
    '/assets/brasao-engenheiro-automacao.png',
    '/assets/brasao-mestre-vr.png',
    '/assets/brasao-hacker-futuro.png',
    'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
];

// Instalação do Service Worker
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('Cache aberto');
                return cache.addAll(urlsToCache);
            })
    );
});

// Interceptação de requisições
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                // Cache hit - retorna a resposta
                if (response) {
                    return response;
                }

                return fetch(event.request).then(
                    function(response) {
                        // Verifica se recebemos uma resposta válida
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }

                        // IMPORTANTE: Clone a resposta. Uma resposta é um stream
                        // e porque queremos que o browser consuma a resposta
                        // assim como o cache consumindo a resposta, precisamos
                        // cloná-la para que tenhamos dois streams.
                        var responseToCache = response.clone();

                        caches.open(CACHE_NAME)
                            .then(function(cache) {
                                cache.put(event.request, responseToCache);
                            });

                        return response;
                    }
                );
            })
    );
});

// Atualização do Service Worker
self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cacheName) {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Removendo cache antigo:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Sincronização em background (para futuras funcionalidades)
self.addEventListener('sync', function(event) {
    if (event.tag === 'background-sync') {
        event.waitUntil(doBackgroundSync());
    }
});

function doBackgroundSync() {
    // Implementar sincronização de dados quando necessário
    return Promise.resolve();
}

// Notificações push (para futuras funcionalidades)
self.addEventListener('push', function(event) {
    const options = {
        body: event.data ? event.data.text() : 'Nova atualização disponível!',
        icon: '/assets/brasao-comandante-ia.png',
        badge: '/assets/brasao-comandante-ia.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
        },
        actions: [
            {
                action: 'explore',
                title: 'Ver mais',
                icon: '/assets/brasao-comandante-ia.png'
            },
            {
                action: 'close',
                title: 'Fechar',
                icon: '/assets/brasao-comandante-ia.png'
            }
        ]
    };

    event.waitUntil(
        self.registration.showNotification('Casa Tech Senac', options)
    );
});

// Clique em notificações
self.addEventListener('notificationclick', function(event) {
    event.notification.close();

    if (event.action === 'explore') {
        // Abrir a aplicação
        event.waitUntil(
            clients.openWindow('/')
        );
    }
});

