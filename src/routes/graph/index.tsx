import { css } from '@emotion/css'
import { createFileRoute } from '@tanstack/solid-router'
import { onMount } from 'solid-js'

function GraphComponent() {
  let ref: HTMLDivElement | undefined

  onMount(() => {
    // TODO
  })

  return <div class={css({ position: 'absolute', width: '100%', height: '100%' })} ref={ref}></div>
}

export const Route = createFileRoute('/_layout/graph')({
  component: GraphComponent
})
