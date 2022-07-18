import {useEffect} from 'react';
import {BroadcastList} from '@baidu/fe-cheetah-mobile-ui';

function TestUI() {
    useEffect(() => {
        // Toast.info(123, 10);
    });

    return (
        <div>
            <BroadcastList
                activityId={1}
                titleConfig={{
                    title: '获奖信1',
                }}
                style={{
                    background: 'tan',
                }}
                mainStyle={{
                    height: '300px',
                    background: '#e36209',
                }}
                slidesPerView={8}
            />
        </div>
    );
}

export default TestUI;
