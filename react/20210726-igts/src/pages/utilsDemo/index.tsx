import {useEffect, useState} from 'react';
import {showErr, getUserData, Student} from '../../utils/index';

export default function UtilsDemo() {
    const [info, setInfoState] = useState('loading');

    useEffect(() => {
        showErr('异常了哟');

        setInfoState(getUserData({name: '鸣人', age: 21}));

        const st1 = new Student('呵呵', 123);
        console.log(Student, st1.getInfo());

    }, []);

    return <div>{info}</div>;
};
