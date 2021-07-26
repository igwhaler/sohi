import UserInfo from './modules/userInfo';

export default function User() {
    return (
        <>

            <UserInfo
                data={{
                    avatar: 'https://pic.rmb.bdstatic.com/bjh/user/f42ff916d9883d42f1395625fb958058.jpeg',
                    name: '呵呵',
                    desc: '去年今日此门中，人面桃花相映红。'
                }}
            />
        </>
    );
};
