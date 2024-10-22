interface BackgroundProps {
  src: string;
}

export function Background(props: BackgroundProps) {
  return (
    <div className="absolute w-screen h-screen overflow-hidden">
      <div className="fixed w-screen h-screen backdrop-blur-sm"/>
      <img src={props.src} className="h-full w-full object-cover"/>
    </div>
  );
}