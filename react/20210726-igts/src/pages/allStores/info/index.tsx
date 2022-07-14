import {
    useQuery,
} from 'react-query';
import './index.scss';
import { getUserInfo } from '../service';

const AllStoresDetail = () => {
    const res = useQuery('getUserInfo', getUserInfo);
    const { isLoading, data } = res;

    return isLoading ? (<div>loading...</div>) :(
        <div className="user-info">
            <div className="name">名称：{data.uname}</div>
            <img src={data.avatar} alt="" />
        </div>
    );
}

export default AllStoresDetail;
