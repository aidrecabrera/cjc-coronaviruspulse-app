# COVID-19 Pulse

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin).

## Utilized COVID-19 API
<br>
[TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin).

https://documenter.getpostman.com/view/10808728/SzS8rjbc#b07f97ba-24f4-4ebe-ad71-97fa35f3b683

[MongoDB COVID-19 Open Data](https://github.com/mongodb-developer/open-data-covid-19)

<br>
COVID-19 [https://webhooks.mongodb-stitch.com/api/client/v2.0/app/covid-19-qppza/service/REST-API/incoming\_webhook/global?country=Philippines&hide\_fields=\_id, country, country\_code, country\_iso2, country\_iso3, loc, state, uid](https://webhooks.mongodb-stitch.com/api/client/v2.0/app/covid-19-qppza/service/REST-API/incoming_webhook/global?country=Philippines&hide_fields=_id,%20country,%20country_code,%20country_iso2,%20country_iso3,%20loc,%20state,%20uid)

## Project Setup

``` sh
npm install
```

### Compile and Hot-Reload for Development

``` sh
npm run dev
```

### Compile and Minify for Production

``` sh
npm run build
```

### Run Unit Tests with [Cypress Component Testing](https://docs.cypress.io/guides/component-testing/introduction)

``` sh
npm run test:unit # or `npm run test:unit:ci` for headless testing
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

``` sh
npm run build
npm run test:e2e # or `npm run test:e2e:ci` for headless testing
```