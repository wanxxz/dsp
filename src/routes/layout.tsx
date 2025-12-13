import { createFileRoute, Outlet } from '@tanstack/solid-router'

function Layout() {
  return <Outlet />
}

export const Route = createFileRoute('/_layout')({
  component: Layout
})
