import { ErrorComponent, type ErrorComponentProps } from '@tanstack/solid-router'
import consola from 'consola'

function CustomErrorComponent(props: ErrorComponentProps) {
  consola.error(props.error)

  return <ErrorComponent error={props.error} />
}

export { CustomErrorComponent as ErrorComponent }
