interface SquareProps {
    value: string;
}

export default function Square({ value }:SquareProps) {
    return <button className="square">{value}</button>;
}
