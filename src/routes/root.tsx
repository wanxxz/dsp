import { QueryClient, QueryClientProvider } from '@tanstack/solid-query'
import { createRootRoute, Outlet, useRouter } from '@tanstack/solid-router'
import { getMessages, resolveLocale } from '../locale'

const queryClient = new QueryClient()

async function initLocale() {
  const locale = await resolveLocale()
  const messages = await getMessages(locale)
  const timeZone = 'UTC'

  return { locale, messages, timeZone }
}

function component() {
  const { locale, messages, timeZone } = Route.useLoaderData()
  const router = useRouter()

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
  head,
  loader,
  component
})
