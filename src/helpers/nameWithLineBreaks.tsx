interface INameProps {
  name: string
}

export function NameWithLineBreaks({ name }: INameProps) {
  const parts = name.split(' ')

  return (
    <>
      {parts[0]}
      <br />
      {parts.slice(1).join(' ')}
    </>
  )
}
