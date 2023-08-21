export type ListProps = {
    array: React.ReactNode[];
    style?: React.CSSProperties;
}

export type ItemProps = {
    content?: React.ReactNode;
    index?: number;
    listRef: React.MutableRefObject<HTMLDivElement | null>;
    root?: Element | null;
    rootMargin?: string;
    threshold?: number | number[];
    showIndex?: boolean;
    style?: React.CSSProperties;
}
