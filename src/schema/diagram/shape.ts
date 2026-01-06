import { type VertexParameters } from '@maxgraph/core'
import { z } from 'zod'

export const nodeSchema = z.object({
  id: z.nanoid(),
  view: z.object({
    maxGraph: z.custom<VertexParameters>().optional()
  })
})

export type Node = z.infer<typeof nodeSchema>
