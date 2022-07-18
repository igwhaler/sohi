import {ChangeEvent, useState, memo, useCallback} from 'react';

interface selfInputTypes {
    onChange: (e: ChangeEvent<HTMLInputElement>) => any
}

interface result {
    name: string,
    value: string
}

//
const SelfInput = memo((
    {
        onChange
    }: selfInputTypes
) => {
    console.log('render input');

    return <input type="text" onChange={onChange} />;
});

//
const WrapInput = memo((
    {
        name,
        onChange
    }: {
        name: string
        onChange: (params: result) => void
    }
) => {
    const [value, setValue] = useState<string>('');

    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const value = name + e.target.value;

        setValue(value);

        onChange({
            name,
            value
        });
    }, [name, onChange]);

    console.log('reader wrap', name);

    return (
        <>
            <p>{value}</p>
            <SelfInput onChange={handleChange} />
        </>
    );
});

function TestUI() {
    const data = ['hehe', 'yaya'];

    const handleChange = useCallback(({name, value}) => {
        console.log(name, value);
    }, []);

    return (
        <>
            {
                data.map(name => {
                    return <WrapInput key={name} name={name} onChange={handleChange} />;
                })
            }
        </>
    );
}

export default memo(TestUI);
