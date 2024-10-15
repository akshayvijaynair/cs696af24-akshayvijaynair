import {useState} from "react";

interface SquareProps {
    value: string;
}

export default function Square() {
    const [value, setValue] = useState("");

    const handleClick = () => {
        setValue('X');
    }


    return (
        <button
            className="square"
            onClick={handleClick}
        >
            {value}
        </button>
    );
}
