# nuxt-csrf
Module CSRF for NUXT

## Installation

Install the module

```sh
# NPM
npm install --save @privyid/nuxt-csrf

# Yarn
yarn add @privyid/nuxt-csrf
```

include in `nuxt.config.js`

```js
// nuxt.config.js
{
  modules: [
    // Simple usage
    '@privyid/nuxt-csrf',

    // With options
    ['@privyid/nuxt-csrf', { /* module options */ }]
  ]
}
```

## Usage

### Get Token

#### via Component
```js
const token = this.$csrfToken()
```

#### via Context

```js
const token = context.app.$csrfToken()
```

### Integrating with Axios
If you using [@nuxtjs/axios][nuxt-axios], this module must be registered before [@nuxtjs/axios][nuxt-axios] axios module.

```js
// nuxt.config.js
{
  modules: [
    '@privyid/nuxt-csrf', // <-- must be placed before @nuxtjs/axios
    '@nuxtjs/axios',
  ]
}
```
### Autosend CSRF Token

If you want axios automatically send CSRF Token in every request, you can add this into your axios's interceptors. If you not familiar with it before, goto [this][nuxt-axios-extend].
```js
// ~/plugins/axios.js
export default function ({ $axios, app, redirect }) {
  $axios.onRequest(config => {
    const token = app.$csrfToken()

    if (!config.headers['X-CSRF-Token'] && token)
      config.headers['X-CSRF-Token'] = token

    return config
  })
}
```

## License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.

[nuxt-axios]: https://axios.nuxtjs.org/
[nuxt-axios-extend]: https://axios.nuxtjs.org/extend
