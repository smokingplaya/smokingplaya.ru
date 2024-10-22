export function Version({version}: {version: string}) {
  return (
    <div className="w-screen h-screen fixed p-6 flex flex-col justify-between">
      <div></div> {/* небольшой костыль чтобы текст был снизу */}
      <span className="text-white/50">website version {version}</span>
    </div>
  )
}