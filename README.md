# Nx Monorepo

This project was generated using [Nx](https://nx.dev).

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/nx-logo.png" width="450"></p>

🔎 **Nx is a set of Extensible Dev Tools for Monorepos.**

---

## Google Cloud Functions + Firebase Hosting + Electron support

### Installation

```bash
npm run setup
```

### Usage

#### Working with Angular

```bash
npm run serve:admin-app                             # developer server on port 4201
npm run serve:client-app                            # developer server on port 4202
npm run serve:all
```

```bash
npm run build:admin-app                             # build dist/apps/admin/
npm run build:client-app                            # build dist/apps/client/
npm run build:all
```

```bash
ng test admin-app                                   # Jest unit tests
ng test client-app                                  # Jest unit tests
ng test                                             # test all

ng e2e admin-e2e-app                                # Cypress e2e tests
ng e2e client-e2e-app                               # Cypress e2e tests
ng e2e                                              # 2e2 tests all
```

```bash
ng lint admin-app
ng lint client-app
ng lint                                             # lint all
```

<!--
#### Working with Angular Electron

```bash
# Build Electron/Windows admin
npm run build.electron.admin.windows

# or

# Build Electron/Mac admin
npm run build.electron.admin.mac
```

```bash
# Start Electron admin app
npm run start.electron.admin
```
-->

#### Working with Firebase Functions

```bash
npm run build:functions                     # build dist/apps/functions/
npm run firebase:serve                      # developer server on port 5000
npm run firebase:shell                      # firebase shell
```

#### Working with Dependency graph

```bash
# dependency graph:
nx dep-graph
```

#### Working with Affected

```bash
# scripts for affected apps
nx affected:dep-graph
nx affected:apps
nx affected:libs
nx affected:build
nx affected:e2e
nx affected:test
nx affected:lint
```

---

<!--
### Project configuration

Project configuration steps. Using Nx file architecture.

#### Applications

##### Configure Nx workspace

```bash
# Create an empty Nx workspace with angular-cli
npx create-nx-workspace@latest little-dragon
> empty
> angular-cli
```

```bash
cd little-dragon
```

##### Configure Angular

```bash
# Add Angular capabilities to the workspace with Jest and Cypress as testing frameworks
ng add @nrwl/angular --unit-test-runner=jest --e2e-test-runner=cypress
```

```bash
# Create Angular applications
ng g @nrwl/angular:app admin  --prefix=admin --routing=true --style=scss --unit-test-runner=jest --e2e-test-runner=cypress

# Create Angular applications
ng g @nrwl/angular:app client  --prefix=client --routing=true --style=scss --unit-test-runner=jest --e2e-test-runner=cypress
```

##### Configure Electron

```bash
# Add support for Electron Angular
npm i -D @nstudio/xplat @nstudio/web-angular
```

```bash
# Create an Electron application from "admin" in default apps location
nx generate @nstudio/xplat:app --name=admin --prefix=admin --platforms=electron --framework=angular --useXplat=false --target=admin

# In which directory should the app be generated?
# > [press enter for default location "apps/"]


# nx generate @nstudio/xplat:app
# > admin                                     # What name would you like for this app?
# > electron                                  # What type of app would like to create?
# > angular                                   # Which frontend framework should it use?
# > n                                         # Use xplat supporting architecture? This project will use Nx architecture.

# > admin                                     # What's the name of the web app in your workspace you'd like to use inside Electron?
# > [press enter for default (apps) dir]      # In which directory should the app be generated?
```

##### Configure Firebase Functions && Firebase Hosting

Reference article: [Nx Nrwl Firebase Functions](https://medium.com/mean-fire/nx-nrwl-firebase-functions-98f96f514055)

Reference article: [Express Application on Firebase Hosting](https://medium.com/mean-fire/express-application-on-firebase-hosting-5baa8914835f)

```bash
# Add Node capabilities
npm i -D @nrwl/node concurrently

# Add Firebase capabilities
npm i -S firebase firebase-admin firebase-functions
```

```bash
# Create node app as container for Functions
nx generate @nrwl/node:application functions --unit-test-runner=jest --directory

# In which directory should the app be generated?
# > [press enter for default location "apps/"]
```

##### Firebase setup

```bash
npm i -g firebase-tools
firebase login

# If you created your project in the firebase website account, during firebase deployment we need to select
# that firebase project for hosting. Also if you created more than one project in the firebase account,
# we need to select one project for the deployment process. For that you need to run the below command.

firebase use --add

# It will list multiple project and you can choose one from that option. Then run firebase deploy.

firebase deploy
```

---

-->

#### Shared libraries

The goal of a code-sharing strategy is to support the architecture where a single codebase can be utilized by multiple applications.

1. **Organize libraries into shallow folder structure**

2. **Code sharing rules:**

   - Ask the question: Can this code be shared between apps?
   - To boost productivity utilize **Angular Console** (VSCode addon).

---

##### Code scaffolding examples

##### Generate components

```bash
# Generate Angular component
ng generate @nrwl/angular:component --help
ng generate @nrwl/angular:component example --project=admin-app --export --dryRun
```

```bash
# Generate Angular library
ng g @nrwl/angular:library users --unit-test-runner=jest --directory=navigation --routing --lazy --parent-module=apps/admin/src/app/app.module.ts --style=none --prefix=common --dryRun
```

```bash
# Typescript library
ng g @nrwl/workspace:library models --unit-test-runner=none --directory=shared-data-access --dryRun
```

```bash
# Generate shareable library
ng generate @nrwl/workspace:library --name=services --no-interactive --dryRun

# Generate Angular service
ng generate @nrwl/angular:service --name=children --project=services --dryRun
```

Explore more examples in "**/tools/scaffolding/**" directory.

---

### Recommendation

Use [Angular Console](https://angularconsole.com/) for Visual Studio Code as code scaffolding tool.

---

#### Fixes History

- **serialize-javascript**
  Problem with dependency resolution. Use this temporary solution prior to installing dependencies.

  - [x] solved

  https://github.com/angular/angular-cli/issues/16414

- **firebase deploy functions failure**

  - [x] solved

  Package.json field "engines": 10

- **ng test failure**

  - [x] solved

  Downgraded "jest-preset-angular": "^8.0.0" > "jest-preset-angular": "^7.1.1".

- **tsconfig path resolution**

  - [x] solved

  https://stackoverflow.com/questions/52092618/how-to-find-the-reason-of-cannot-find-module-for-nrwl-modules
