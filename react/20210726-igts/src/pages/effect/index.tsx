import { useState, useEffect } from "react";

interface ItemType {
    id: number
    name: string
}

const listA = [
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
    const [list, setList] = useState<Array<ItemType>>([]);

    const handleChangeList = (list: Array<ItemType>) => {

        return () => {
            setList(list);
        }
    };

    useEffect(() => {
        setInterval(() => {
            console.log(list);
        }, 1000);
        return () => {}
    }, [list]);

    return (
        <>
            <div>
                <button onClick={handleChangeList(listA)}>A</button>
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
