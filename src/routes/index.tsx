import { createFileRoute } from '@tanstack/solid-router'

function Index() {
  return <div></div>
}

export const Route = createFileRoute('/_layout/')({
  component: Index
})
