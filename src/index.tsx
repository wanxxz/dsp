import { createRouter, RouterProvider } from '@tanstack/solid-router'
import { render } from 'solid-js/web'
import { ErrorComponent } from './components/error'
import { NotFoundComponent } from './components/not-found'
import { routeTree } from './routeTree.gen'

const router = createRouter({
  routeTree,
  scrollRestoration: true,
  defaultErrorComponent: ErrorComponent,
  defaultNotFoundComponent: () => <NotFoundComponent />
})

declare module '@tanstack/solid-router' {
  interface Register {
    router: typeof router
  }
}

const rootElement = document.getElementById('root')!

if (!rootElement.innerHTML) {
  render(() => <RouterProvider router={router} />, rootElement)
}
