import { useRef } from "react";
import { Item } from "../Item/Item";
import "./List.style.css";
import { ListProps } from "../../../types";

export const List = ({ array, style }: ListProps) => {
  const listRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="container" ref={listRef}>
      {array.map((element, index) => {
        return (
          <Item
            content={element}
            index={index + 1}
            listRef={listRef}
            style={style}
            showIndex
          />
        );
      })}
    </div>
  );
};
