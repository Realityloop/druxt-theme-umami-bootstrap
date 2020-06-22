# Druxt Umami Bootstrap component library.

[![CircleCI](https://circleci.com/gh/Realityloop/druxt-umami-bootstrap.svg?style=svg)](https://circleci.com/gh/Realityloop/druxt-umami-bootstrap)
[![Known Vulnerabilities](https://snyk.io/test/github/Realityloop/druxt-umami-bootstrap/badge.svg?targetFile=package.json)](https://snyk.io/test/github/Realityloop/druxt-umami-bootstrap?targetFile=package.json)
[![codecov](https://codecov.io/gh/Realityloop/druxt-umami-bootstrap/branch/develop/graph/badge.svg)](https://codecov.io/gh/Realityloop/druxt-umami-bootstrap)

Umami Bootstrap theme for Druxt

## Install

`$ npm install druxt-umami-bootstrap`

## Usage

Add module to `nuxt.config.js`

```js
module.exports = {
  modules: [
    ...
    'druxt-entity',
    'druxt-umami-bootstrap',
    'druxt-router'
  ],

  druxt: {
    baseUrl: 'https://example.com'
  }
}
```
