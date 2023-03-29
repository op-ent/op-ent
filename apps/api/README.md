# api

Application [AdonisJS](https://adonisjs.com/)

## Prérequis

- Node.js `16.15.0`
- Docker

Sur Linux, il faut créer un alias pour la commande `docker-compose`:

```sh
echo 'docker compose --compatibility "$@"' | sudo tee -a /bin/docker-compose
sudo chmod +x /bin/docker-compose
```

## Développer

> Toutes les commandes s'exécutent à la racine du repository

Installez les dépendences avec `pnpm install`.

Copier le fichier `env.example` vers `.env`.

Executez ces commandes dans 2 consoles différentes :

```sh
pnpm api:docker:dev
pnpm api:dev
```

Pour exécuter des commandes avec [ace](https://docs.adonisjs.com/guides/ace-commandline), exécutez `pnpm api:ace your_command`.
