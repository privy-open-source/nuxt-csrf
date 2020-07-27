export default function nuxtCsrf (context, inject) {
  inject('csrfToken', () => {
    if (process.server)
      return context.req.csrfToken()

    return context.nuxtState.csrfToken
  })

  if (process.server) {
    context.beforeNuxtRender(({ nuxtState }) => {
      nuxtState.csrfToken = context.req.csrfToken()
    })
  }
}
