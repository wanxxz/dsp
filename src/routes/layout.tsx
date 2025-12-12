import { createFileRoute, Outlet } from '@tanstack/solid-router'

function component() {
  return <Outlet />
}

export const Route = createFileRoute('/_layout')({
  component
})
