import useProxy from 'rocket-booster';

addEventListener('fetch', (event) => {
  const proxy = useProxy();
  proxy.use('/', {
    loadBalancing: {
        policy: 'random',
    },
    upstream: [
        {
        domain: 'google.de',
        protocol: 'https',
        weight: 20,
        },
        {
        domain: 's2.example.com',
        protocol: 'https',
        weight: 30,
        },
        {
        domain: 's3.example.com',
        protocol: 'https',
        weight: 50,
        },
    ],
    /* ... */
  });
  const response = proxy.apply(event.request);
  event.respondWith(response);
});
