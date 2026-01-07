import { z } from 'zod'

export const shapeSchema = z.object({
  id: z.nanoid()
})

export type Shape = z.infer<typeof shapeSchema>
