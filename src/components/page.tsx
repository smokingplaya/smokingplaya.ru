export function Page(props: {children?: React.ReactNode}) {
  return <main className="w-screen h-screen overflow-hidden flex flex-col items-center justify-center" {...props}/>
}