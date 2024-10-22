import React, { useState, useRef, useEffect } from "react";
import { Header } from "./text";
import { cn } from "../utils/cn";

export function Skills({ children }: { children: React.ReactNode }) {
  const [currentChildren, setCurrentChildren] = useState<React.ReactNode | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [parentWidth, setParentWidth] = useState<number | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      setParentWidth(containerRef.current.offsetWidth);
    }
  }, [currentChildren]);

  const handleBadgeClick = (children: React.ReactNode | null) => {
    setCurrentChildren((prev) => (prev === children ? null : children));
  };

  return (
    <div>
      <Header subtitle="(Нажми на один из них)">Скиллы</Header>
      <div ref={containerRef} className="flex flex-wrap gap-2 py-2">
        {React.Children.map(children, (child) =>
          React.cloneElement(child as React.ReactElement, { onClick: handleBadgeClick })
        )}
      </div>
      {currentChildren && (
        <div className="h-auto pt-2" style={{ width: parentWidth ? `${parentWidth}px` : 'auto' }}>
          <div className="flex flex-wrap gap-2">
            {currentChildren}
          </div>
        </div>
      )}
    </div>
  );
}

export function Badge({
  name,
  icon,
  children,
  href,
  onClick
}: {
  name: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  href?: string;
  onClick?: (children: React.ReactNode | null) => void;
}) {
  const handleClick = () => {
    if (onClick && children) {
      onClick(children);
    } else if (href) {
      window.open(href, "_blank");
    }
  };

  return (
    <button
      onClick={handleClick}
      className={cn("py-2 text-white/50 px-3 transition hover:bg-neutral-800 flex gap-x-2  focus:outline-none focus:ring-2 focus:ring-neutral-200", children ? "bg-neutral-800/65" : "bg-neutral-800/30")}>
      <div className="w-6 h-6">
        <div className="size-full flex justify-center items-center bg-radial-light">
          {icon}
        </div>
      </div>

      {name}
    </button>
  );
}
