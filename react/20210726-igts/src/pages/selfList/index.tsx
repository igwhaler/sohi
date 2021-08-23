import { useState } from "react";

interface ItemType {
    id: number
    name: string
}

const listA = [
    {
        id: 1,
        name: 'a'
    },
    {
        id: 2,
        name: 'b'
    },
    {
        id: 3,
        name: 'c'
    },
    {
        id: 2,
        name: 'd'
    },
    {
        id: 2,
        name: 'e'
    },
    {
        id: 4,
        name: 'f'
    },
];

const listB = [
    {
        id: 11,
        name: '11'
    },
    {
        id: 22,
        name: '22'
    },
    {
        id: 33,
        name: '33'
    },
    {
        id: 44,
        name: '44'
    },
];

function SelfList() {
    const [list, setList] = useState(listA);

    const handleChangeList = (list: Array<ItemType>) => {

        return () => {
            setList(list);
        }
    };

    return (
        <>
            <div>
                <button onClick={handleChangeList(listA)}>A</button>
                <button onClick={handleChangeList(listB)}>B</button>
            </div>
            <ol>
                {
                    list.map(item => {
                        return <li key={item.id}>{item.name}</li>;
                    })
                }
            </ol>
        </>
    );
}

export default SelfList;
