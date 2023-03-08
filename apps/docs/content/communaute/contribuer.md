# Contribuer

op-ent est un projet communautaire : nous aimons les contributions de toutes sortes !

Vous pouvez contribuer de différentes manières au projet.

## Triage des issues et aide dans les discussions

Consultez les [issues](https://github.com/op-ent/op-ent/issues) et les [discussions](https://github.com/op-ent/op-ent/discussions). Aider d'autres utilisateurs, partager des solutions de contournement, créer des reproductions, ou même examiner les bugs et partager vos découvertes fait une énorme différence.

## Créer une issue

Merci de prendre le temps de créer une issue !

- **Signaler des bugs** : Consultez [notre guide](/communaute/signaler-un-bug) pour savoir ce qu'il faut faire avant d'ouvrir une issue.
- **Demandes de fonctionnalités** : Vérifiez qu'il n'existe pas d'issue ou de discussion couvrant le champ d'application de la fonctionnalité que vous envisagez. Si la fonctionnalité que vous avez en tête est générale ou si l'API n'est pas tout à fait claire, envisagez d'ouvrir une discussion dans la section Idées pour en discuter d'abord avec la communauté.

## Envoyer une pull request

### Avant de commencer

Avant de corriger un bug, nous vous recommandons de vérifier s'il existe une issue qui le décrit, car il est possible qu'il s'agisse d'un problème de documentation ou qu'il y ait un contexte qu'il serait utile de connaître.

Si vous travaillez sur une fonctionnalité, nous vous demandons d'ouvrir d'abord une demande de fonctionnalité afin de discuter avec les responsables si la fonctionnalité est souhaitée - et la conception de ces fonctionnalités. Cela permet de gagner du temps à la fois pour les _maintainers_ et les contributeurs et signifie que les fonctionnalités peuvent être livrées plus rapidement. L'issue doit être confirmée par un membre de l'équipe de développement avant de développer une fonctionnalité dans une PR.

Pour les corrections de fautes de frappe, il est recommandé de regrouper plusieurs corrections de ce type dans une seule PR afin de maintenir un historique de commits plus propre.

### Convention de commits

Nous utilisons [Conventional Commits](https://www.conventionalcommits.org/) pour les messages de commits, ce qui permet de générer automatiquement un journal des modifications en fonction des commits. Veuillez lire le guide dans son intégralité si vous ne le connaissez pas déjà.

Notez que `fix:` et `feat:` sont pour les changements de code réels (qui peuvent affecter la logique). Pour les changements de typo ou de document, utilisez plutôt `docs:` ou `chore:` :

- ~~`fix: typo`~~ -> `docs: fix typo`

Assurez-vous que vous spécifiez la portée principale de votre commit entre parenthèses. Par exemple : `feat(api): add '/user/me' endpoint`.

**IMPORTANT**: n'utilisez pas `git commit -m "msg"` mais toujours `pnpm commit`, depuis la racine du repository.

### Réaliser la pull request

Si vous ne savez pas comment envoyer une PR, nous vous recommandons de lire [ce guide](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request).

Lorsque vous envoyez une PR, assurez-vous que le titre de votre PR respecte également la [convention de commits](#convention-de-commits).

Si votre PR corrige ou résout des issues existantes, assurez-vous de les mentionner dans la description de la PR.

Vous n'avez pas besoin de _rebase_ ou de _force push_ vos changements car nous utiliserons `squash` et `merge` pour fusionner les commits en un seul commit lors du _merge_ de la PR.

Le projet comprends des `git hooks` pour s'assurer que tout le code soit formatté (Prettier) et fonctionnel (ESLint). Dans le futur, nous ajouterons probablement des actions GitHub pour vérifier automatiquement lors des PRs.

En général, assurez-vous également qu'il n'y a pas de changements non liés dans une PR. Par exemple, si votre éditeur a fait des changements d'espacement ou de formatage ailleurs dans un fichier que vous avez édité, veuillez les annuler afin qu'il soit plus évident de savoir ce que votre PR change. Évitez également d'inclure plusieurs fonctionnalités ou correctifs sans rapport dans une seule PR. S'il est possible de les séparer, il est préférable d'avoir plusieurs PRs à réviser et à fusionner séparément. En général, une PR ne doit faire qu'une seule chose.

### Une fois la pull request envoyée

Une fois que vous avez fait une PR, nous ferons de notre mieux pour l'examiner (relativement) rapidement.

Si nous l'assignons à un _maintainer_, cela signifie que cette personne prendra un soin particulier à la réviser et à implémenter les changements qui pourraient être nécessaires.

Si nous demandons des modifications sur une PR, ne le prenez pas mal ! Cela ne signifie pas que nous pensons qu'il s'agit d'une mauvaise PR, elle nécessite seulement un peu plus de travail.

Si nous marquons unePR comme _pending_ (en attente), cela signifie que nous avons probablement une autre tâche à accomplir dans l'examen de la PR - c'est une note interne à nous-même, et pas nécessairement une réflexion sur le fait que la PR est une bonne idée ou non. Nous ferons de notre mieux pour expliquer, par le biais d'un commentaire, la raison de l'état d'attente.

## Configurer son environnement de développement

### PNPM

Le projet étant un monorepo, le gestionnaire de paquets [PNPM](https://pnpm.io) est requis. Par ailleurs, le projet a été configuré pour autoriser uniquement PNPM.

### Visual Studio Code

Nous recommandons d'utiliser [Visual Studio Code](https://code.visualstudio.com/) comme IDE.

### ESLint

Nous utilisons [ESLint](https://eslint.org/) pour l'analyse du code et la détection de bugs. Il est recommandé d'installer l'[extension pour VS Code](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

De plus, une commande est disponible à la racine du projet : `pnpm lint`. Néanmoins il est recommandé d'exécuter `pnpm lint:all` à la place.

### Prettier

Nous utilisons [Prettier](https://prettier.io/) pour la mise en forme du code. Il est recommandé d'installer l'[extension pour VS Code](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).

De plus, une commande est disponible à la racine du projet : `pnpm format`. Néanmoins il est recommandé d'exécuter `pnpm lint:all` à la place.
