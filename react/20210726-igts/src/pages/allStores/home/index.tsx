import { Link } from 'react-router-dom';
import { useQuery, useQueryClient } from 'react-query';
import './index.scss';
import { getMaterialGroupList, getUserInfo } from '../service';

const AllStoresHome = () => {
    const queryClient = useQueryClient();
    const res = useQuery('getMaterialGroupList', getMaterialGroupList);
    const { isLoading, data } = res;

    queryClient.prefetchQuery('getUserInfo', getUserInfo);

    return (
        isLoading ? (<div>loading...</div>) : (
            <div className="material-group">
                {
                    data.map((item: any) => {
                        return (
                            <Link
                                key={item.id}
                                className="group-item"
                                to={`/allStores/list/${item.id}`}
                            >
                                <span>集合：{item.name} </span>
                                <span>(数量：{item.count})</span>
                            </Link>
                        );
                    })
                }
            </div>
        )
    );
}

export default AllStoresHome;
