import { useEffect, useRef, useState } from "react";
import './Item.style.css';
import { ItemProps } from "../../../types";


export const Item = ({ content, index, listRef, root, rootMargin, threshold, showIndex, style }: ItemProps) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const itemRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    isIntersecting ? itemRef.current?.classList.add("slide-in") : itemRef.current?.classList.remove("slide-in");

    const options = {
      root: root ?? null,
      rootMargin: rootMargin ?? '0px',
      threshold: threshold ?? 0.1
    }

    const handleIntersect = ([entry]: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      setIsIntersecting(entry.isIntersecting);
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    observer.observe(itemRef.current as HTMLDivElement);

    console.log(index + ": " + isIntersecting);

    return () => observer.disconnect();
  }, [isIntersecting, content, listRef, root, rootMargin, threshold, index]);

  return (
    <div className='contentContainer' ref={itemRef} style={style}>
      {showIndex && (index + "-")}
      {content && content}
    </div>
  );
}
