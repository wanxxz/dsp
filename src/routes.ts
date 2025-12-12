import { index, layout, rootRoute, route } from '@tanstack/virtual-file-routes'

export const routes = rootRoute('root.tsx', [
  layout('layout.tsx', [
    index('index.tsx'),
    route('graph', 'graph/index.tsx', []),
    route('sheet', 'sheet/index.tsx', [])
  ])
])
