import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { ReactNode, Suspense } from "react";

const backgroundUrl = "https://cdna.artstation.com/p/assets/images/images/033/692/100/4k/pasquale-scionti-village11.jpg?1610327414";

export function Page(
  {children}: {children?: ReactNode}
) {
  return <div className="w-auto h-auto bg-stone-800 rounded-2xl flex" children={children}/>
}

export function PageBackground() {
  return (
    <div className="w-full h-full">
      <img className="absolute inset-0 w-full h-screen object-cover -z-10" src={backgroundUrl} />
      <div className="absolute inset-0 backdrop-blur-sm -z-10" />
    </div>
  )
}

function RenderModel() {
  const { scene } = useGLTF('/treemodel/scene.gltf');
  return <primitive object={scene} />;
}

export function PageModel() {
  return (
    <div className="hidden md:w-96 md:flex flex-col">
      <Canvas
        camera={{position: [4, 0, -4.5], fov: 40 }}
        className="w-full h-full">
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
  return <div className="w-full h-full p-8 flex flex-col justify-between" children={children}/>
}

export function PageContentTitle(
  {children, textUnderline}: {children?: ReactNode, textUnderline?: boolean}
) {
  return <h1 className={"text-stone-300 font-bold text-2xl md:text-4xl mb-4 " + (textUnderline ? " underline decoration-wavy decoration-2 underline-offset-6 decoration-violet-400" : "")}>{children}</h1>
}

export function PageContentSubtitle(
  {children}: {children?: ReactNode}
) {
  return <h1 className="text-stone-300 font-bold mt-2 text-md md:text-xl" children={children}/>
}

export function PageContentText(
  {children}: {children?: ReactNode}
) {
  return <p className="text-stone-400 font-medium text-md md:text-xl" children={children}/>
}

export function PageLink(
  {children, href, className}: {children?: ReactNode, href: string, className?: string}
) {
  return <a target="_blank" className={"text-md md:text-xl font-bold inline-flex transition items-center hover:text-violet-400 " + (className || "text-stone-500")} href={href}>{children}</a>
}

/// Skills

export function PageSkills(
  {children}: {children?: ReactNode}
) {
  return <ul className="list-inside list-disc" children={children}/>
}

export function PageSkill(
  {children}: {children?: ReactNode}
) {
  return <li className="text-violet-400 font-bold text-m" children={children}/>
}

/// Footer

export function PageFooter(
  {children}: {children?: ReactNode}
) {
  return <div className="mt-auto" children={children}/>
}

export function PageFooterLink(
  {children, href}: {children?: ReactNode, href: string}
) {
  return <PageLink href={href} children={children}/>
}

export function PageFooterLinks(
  {children}: {children?: ReactNode}
) {
  return <div className="flex gap-x-2" children={children}/>
}

export function PageSpaceBetween() {
  return <div className="mt-4 md:mt-8"/>
}