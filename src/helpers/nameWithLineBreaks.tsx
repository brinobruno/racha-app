interface INameProps {
  name: string
}

export function NameWithLineBreaks({ name }: INameProps) {
  const parts = name.split(' ')

  return (
    <>
      <span>{parts[0]}</span>
      <br />
      {parts.slice(1).join(' ')}
    </>
  )
}
