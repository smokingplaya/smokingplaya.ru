import { cn } from "../utils/cn";

export function Container(props: {children?: React.ReactNode, className?: string}) {
  return <div className={cn("z-0 w-[75vw] py-6 h-full flex flex-col", props.className)} children={props.children}/>
}