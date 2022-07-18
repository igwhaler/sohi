import {
    useQuery,
} from 'react-query';
import './index.scss';
import {getUserInfo} from '../../service';
import Loading from '@/components/Loading';

const AllStoresDetail = () => {
    const res = useQuery('getUserInfo', getUserInfo);
    const {isLoading, data = {}} = res;

    return (
        <Loading isLoading={isLoading}>
            <div className="user-info">
                <div className="name">名称：{data.uname}</div>
                <img src={data.avatar} alt="" />
            </div>
        </Loading>
    );
};

export default AllStoresDetail;
