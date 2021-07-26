import styles from './index.module.scss';


interface userData {
    avatar: string,
    name: string,
    desc?: string
};

interface userInfoProps {
    data: userData
}

export default function UserInfo({
    data: {avatar,  name, desc}
}: userInfoProps) {

    return (
        <div className={styles.userInfo}>
            <div className={styles.info}>
                <img
                    className={styles.avatar}
                    src={avatar}
                    alt="头像"
                />

                <div className={styles.wrap}>
                    <div className={styles.name}>{name}</div>
                    <div className={styles.desc}>{desc}</div>
                </div>
            </div>
        </div>
    );
}
