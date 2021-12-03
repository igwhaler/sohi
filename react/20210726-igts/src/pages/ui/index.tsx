import { useEffect } from 'react';
// import { Toast } from '@baidu/fe-cheetah-mobile-ui';

const getData = () => {
    return new Promise((resolve, reject) => {
        resolve({ err: 1 });
    })
}

function TestUI() {
    useEffect(() => {
        // Toast.info(123, 10);

        async function fetchData() {
            const res = await getData();
            console.log(res);
        }

        fetchData();
    });

    return (
        <div>TestUI</div>
    );
}

export default TestUI;
