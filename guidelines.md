# Project guidelines

## Introduction

This document describes the guidelines for the project. It is a living document and will be updated as the project evolves.

## Contributing

Before contributing to the project, please read the [Contributing Guidelines](./CONTRIBUTING.md).

## Project goals

> TBD

## Project structure

op-ent is build following a modular approach. Parts that can be extracted/abstracted into separate projects will be. Therefore, the project is split into several repositories already. Some examples:

- [op-ent/api](https://github.com/op-ent/api) holds the project backend (REST/GraphQL API)
- [op-ent/dashboard](https://github.com/op-ent/dashboard) hold the project frontend (dashboard)
- [op-ent/unstyled-ui](https://github.com/op-ent/unstyled-ui) holds an headless component library, used in the dashboard

## Project scope

Depending on its parts, the project has different scopes:

- internal (op-ent focused) parts target French people (i.e the dashboard)
- external (global usage) parts target the world (i.e `unstyled-ui`)

## Language

Even if op-ent targets a French audience, by its modular nature not all parts only aims at French developers. Therefore, depending on the repository's scope, the language used for documentation & GitHub interactions (issues, pull requests and so on) won't be the same. Let's see examples:

- [op-ent/api](https://github.com/op-ent/api) is a part of software that is only meant to be used internally, so it has to be written in French. Moreover, contributors will probably be part of the Frencg school system so it makes sense.
- [op-ent/unstyled-ui](https://github.com/op-ent/unstyled-ui) is a part of software that is meant to be shared as an NPM package, so it has to be written in English.
- This repository can be read by anyone as its acts as a global guideline for the project (including all sub parts), so it has to be written in English.

In all cases, commits and code (comments, variable names, etc.) must be written in English.

## Time management and planning

Our plan is to work in epics of 10 weeks (approximately 2.5 months), divided in 5 sprints of 2 weeks. Each sprint will be followed by a retrospective and a planning session. The planning session will be used to plan the next sprint. The last sprint will be dedicated to bug fixes, experiments and defining the next epic.

Here is a draft of the roadmap:

- [ ] Initialization phase (08/08/2022 - 18/09/2022)
- [ ] First epic (18/09/2022 - 27/11/2022). Will be defined during the last week of the initialization phase.
- [ ] Second epic (27/11/2022 - 22/01/2023).

And so on...

Project management is achieved using GitHub Projects.

## Project management

> Details about GitHub projects usage. TBD

## Project governance

op-ent is lead by [Florian LEFEBVRE](https://github.com/florian-lefebvre).

## Project communication

We use Twitter, Discord, Instagram and YouTube to communicate with our audience. We also use Discord & GitHub internally.

The audience we target is French, so we will use French as the main language for communication. However, we will also use English when needed.

Our audience is made of students, teachers, parents and school administrators. We will try to communicate with them in a way that is adapted to their needs. Developers (especially students or recent former students) are also part of our audience, but to help contritubing to either the core project, or to community project held in [opent-community](https://github.com/opent-community).

## Community

op-ent has been thought to allow API consumption by other projects through documentation and API clients (i.e [opent-js](https://github.com/op-ent/opent-js)). We will try to encourage the creation of community projects by providing documentation, support and so on. To do so, we will keep them under the [opent-community](https://github.com/opent-community) organization. Doing such thing has 3 goals : register community projects (so that new contributors don't start new projects if they already exist), provide help and guidance, keep them secure to avoid abuses.

## Project documentation

The documentation is written in Markdown or ([MDX](https://mdxjs.com/) for advanced usage) and hosted on GitHub. The documentation engine (powered by [Docusaurus 2](https://docusaurus.io/)) is held in [op-ent/docs](https://github.com/op-ent/docs).

However, docs are not stored in the repository. They are stored in each repository under the `docs` folder. The documentation engine will fetch them and build the website.

## Project branding

See [op-ent/brand](https://github.com/op-ent/brand).

## Project finances

To make op-ent, we have a budget of 0€. We will set up a participatory funding (tipeee or equivalent). Access to some services is free or at reduced prices for open-source projects. Therefore, op-ent benefits from it. If the participative financing does not allow to pay the services, the project manager will pay it.

## Project legal

The project doesn't require any legal status yet. However, when it will (i.e when customers will be able to pay), we will set up a legal entity. We have to conduct researches to determine which legal status is the best for the project (association, company...). Any advice is welcome, please contact us if you have some.

## Project security

See [SECURITY.md](./SECURITY.md).
