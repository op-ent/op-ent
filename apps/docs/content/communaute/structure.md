# Structure

Une fois que vous avez lu le [guide de contribution](/communaute/contribuer), voici un guide plus spécifique concernant la structure du projet (`op-ent/op-ent`).

## Guide du monorepo

Le repository comprend 2 parties majoritaires : `apps` et `packages`. Tout le reste est lié à de la configuration.

### `apps`

Ce dossier contient toutes les applications liées à op-ent. En voici la liste (dernière actualisation le 08/03/2023) :

- `www` : Le site public, [op-ent.fr](https://op-ent.fr) ([source](https://github.com/op-ent/op-ent/tree/main/apps/www))
- `docs` : La documentation sur laquelle vous vous trouvez, [docs.op-ent.fr](https://docs.op-ent.fr) ([source](https://github.com/op-ent/op-ent/tree/main/apps/docs))
- `api` : L'API qui gère toutes les données de l'application. N'est pas encore disponible en ligne mais sera probablement à l'adresse [api.op-ent.fr](https://www.youtube.com/watch?v=dQw4w9WgXcQ) ([source](https://github.com/op-ent/op-ent/tree/main/apps/api))
- `app` : L'application web. N'est pas encore disponible en ligne mais sera probablement à l'adresse [app.op-ent.fr](https://www.youtube.com/watch?v=dQw4w9WgXcQ) ([source](https://github.com/op-ent/op-ent/tree/main/apps/app))

### `packages`

Ce dossier contient des éléments réutilisables de façon interne et/ou publiés sur NPM. En voici la liste (dernière actualisation le 08/03/2023) :

- `client` : Le client TypeScript permettant d'interagir facilement avec l'API ([source](https://github.com/op-ent/op-ent/tree/main/packages/client))
- `shared-ui` : Une librairie de composants/hooks réalisée avec React et TypeScript ([source](https://github.com/op-ent/op-ent/tree/main/packages/shared-ui))
- `eslint-config-shared` : Une configuration eslint ([source](https://github.com/op-ent/op-ent/tree/main/packages/eslint-config-shared))
- `tailwind-shared` : Un theme [Tailwind CSS](https://tailwindcss.com) ([source](https://github.com/op-ent/op-ent/tree/main/packages/tailwind-shared))
- `tsconfig-shared` : Un ensemble de configurations TypeScript ([source](https://github.com/op-ent/op-ent/tree/main/packages/tsconfig-shared))

## Tester

Aucun test n'est pas implémenté pour le moment, mais c'est quelque chose que nous souhaitons mettre en place. Si vous avez de l'expérience dans ce domaine, contactez-nous.

## Linting

Exécutez `pnpm lint:all` à la racine.

## Guide de la documentation

Si vous ajoutez une nouvelle fonctionnalité ou si vous refaites ou modifiez le comportement d'op-ent d'une autre manière, vous voudrez probablement documenter les changements. Merci d'inclure tout changement à la documentation dans la même PR. Vous n'êtes pas obligé d'écrire la documentation dès le premier commit (mais merci de le faire dès que votre pull request est suffisamment mature).

## Configurer votre environnement de développement local

Pour contribuer à op-ent, vous devez mettre en place un environnement local.

1. Faites un [fork](https://help.github.com/articles/fork-a-repo/) du [repository op-ent/op-ent](https://github.com/op-ent/op-ent/tree/main/packages/client) vers votre compte GitHub, puis [clonez-le](https://help.github.com/articles/cloning-a-repository/)
2. Vérifiez que vous utilisez une version de Node.js proche de la `16.15.0`
3. Installez [Docker](https://www.docker.com/)
4. Exécutez `pnpm install` à la racine
5. Créez une nouvelle branche pour votre modification : `git checkout -b my-new-branch`

Chaque projet a sa propre documentation, lisez leur README.
