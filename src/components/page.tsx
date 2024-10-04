import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { ReactNode, Suspense } from "react";

const backgroundUrl = "https://cdna.artstation.com/p/assets/images/images/033/692/100/4k/pasquale-scionti-village11.jpg?1610327414";

export function Page(
  {children}: {children?: ReactNode}
) {
  return (
    <div className="w-auto h-auto bg-stone-800 rounded-2xl flex" children={children}/>
  )
}

export function PageBackground() {
  return (
    <div className="w-full h-full">
      <img className="absolute inset-0 w-full h-full object-cover -z-10" src={backgroundUrl} />
      <div className="absolute inset-0 backdrop-blur-sm -z-10" />
    </div>
  )
}

function RenderModel() {
  const { scene } = useGLTF('/model.gltf');
  return <primitive object={scene} />;
}

export function PageModel() {
  return (
    <div className="flex flex-col w-full h-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }} className="w-full h-full">
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <RenderModel />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  )
}

export function PageContent(
  {children}: {children?: ReactNode}
) {
  return (
    <div className="w-full h-full p-8 flex flex-col justify-between" children={children}/>
  )
}

export function PageContentTitle(
  {children, textUnderline}: {children?: ReactNode, textUnderline?: boolean}
) {
  return (
    <h1 className={"text-stone-300 font-bold text-4xl mb-4 " + (textUnderline ? " underline decoration-wavy decoration-2 underline-offset-6 decoration-violet-400" : "")}>{children}</h1>
  )
}

export function PageContentText(
  {children}: {children?: ReactNode}
) {
  return (
    <p className="text-stone-400 font-medium text-xl">{children}</p>
  )
}

export function PageContentSubtitle(
  {children}: {children?: ReactNode}
) {
  return (
    <h1 className="text-stone-300 font-bold mt-2 text-xl">{children}</h1>
  )
}

export function PageLink(
  {children, href, className}: {children?: ReactNode, href: string, className?: string}
) {
  return (
    <a className={"font-bold inline-flex transition items-center hover:text-violet-400 " + (className || "text-stone-500")} href={href}>{children}</a>
  )
}

/// Skills

export function PageSkills(
  {children}: {children?: ReactNode}
) {
  return (
    <div>{children}</div>
  )
}

export function PageSkill(
  {children}: {children?: ReactNode}
) {
  return (
    <div className="text-violet-200 font-bold text-m">{children}</div>
  )
}

/// Footer

export function PageFooter(
  {children}: {children?: ReactNode}
) {
  return (
    <div className="mt-auto">
      {children}
    </div>
  )
}

export function PageFooterLink(
  {children, href}: {children?: ReactNode, href: string}
) {
  return (
    <PageLink href={href}>{children}</PageLink>
  )
}

export function PageFooterLinks(
  {children}: {children?: ReactNode}
) {
  return (
    <div className="flex gap-x-4">
      {children}
    </div>
  )
}

export function PageSpaceBetween() {
  return (
    <div className="mt-16"/>
  )
}