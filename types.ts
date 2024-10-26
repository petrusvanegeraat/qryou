export type Field = {
  id: string
  placeholder: string
  value: string
  enabled: boolean
}

export type Fields = Record<string, Field>
