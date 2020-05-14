# Egresados

[Isidro Amaury Tobias Quiroz](mailto:contact@amaurytq.dev)

> Nuxt, Koa, Docker

## Get started

- create `.env` file
  - This repository include `.env.sample` file

```bash
$ cp .env.sample .env
# customize your .env file
```

- setup acme.json

```bash
$ touch ./traefik/acme.json
$ chmod 600 ./traefik/acme.json
# customize your .env file
```

> on ./traefik.yml use your email on certificatesResolvers > appresolver > acme > email

- starting server

```bash
$ docker-compose up -d
```

# LICENSE

[MIT](LICENSE)
