import { injectGlobal } from '@emotion/css'
import { QueryClient, QueryClientProvider } from '@tanstack/solid-query'
import { createRootRoute, Outlet, useRouter } from '@tanstack/solid-router'
import { onMount } from 'solid-js'
import { getMessages, resolveLocale } from '../locale'

const queryClient = new QueryClient()

async function initLocale() {
  const locale = await resolveLocale()
  const messages = await getMessages(locale)
  const timeZone = 'UTC'

  return { locale, messages, timeZone }
}

function Root() {
  const { locale, messages, timeZone } = Route.useLoaderData()
  const router = useRouter()

  onMount(() => {
    injectGlobal({
      body: {
        fontFamily: 'sans-serif',
        margin: 0
      }
    })
  })

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  )
}

function head() {
  return {
    meta: [
      {
        charSet: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        title: ''
      }
    ]
  }
}

async function loader() {
  return await initLocale()
}

export const Route = createRootRoute({
  head: head,
  loader: loader,
  component: Root
})
