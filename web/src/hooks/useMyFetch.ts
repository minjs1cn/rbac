import { createFetch } from "@vueuse/core";

export const useMyFetch = createFetch({
  baseUrl: '/api',
  options: {
    beforeFetch({ options }) {
      const myToken = 'token'
      const headers: Record<string, any> = options.headers || {}
      headers.Authorization = `Bearer ${myToken}`
      options.headers = headers;
      return { options }
    },
    afterFetch(ctx) {
      return ctx.data
    },
  }
})