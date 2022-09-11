# Project guidelines

## Introduction

This document describes the guidelines for the project. It is a living document and will be updated as the project evolves.

## Contributing

TBD

## Project goals

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

## Project governance

## Project communication

## Project documentation

## Project branding

## Project finances

## Project legal

## Project security

## Community
