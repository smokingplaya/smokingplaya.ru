export function Header({children, subtitle}: {children?: React.ReactNode, subtitle?: string}) {
  return (
    <div className="flex space-x-2 items-center">
      <span className="text-white text-xl font-bold">{children}</span>
      {subtitle &&
        <span className="text-sm text-white/50">{subtitle}</span>}
    </div>
  )
}

export function HeaderWithContent({header, children}: {header: string, children?: React.ReactNode}) {
  return (
    <>
      <Header>{header}</Header>
      <div className="flex space-x-2 font-extrabold text-white/80" children={children}/>
    </>
  )
}