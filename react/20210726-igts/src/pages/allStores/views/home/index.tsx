import {Link} from 'react-router-dom';
import {useQuery, useQueryClient} from 'react-query';
import Loading from '@/components/Loading';
import './index.scss';
import {getMaterialGroupList, getUserInfo, getMgetList} from '../../service';

const AllStoresHome = () => {
    const queryClient = useQueryClient();
    const res = useQuery('getMaterialGroupList', getMaterialGroupList);
    const {isLoading, data} = res;

    queryClient.prefetchQuery('getUserInfo', getUserInfo);

    if (data && data.length) {
        queryClient.prefetchQuery(['getMgetList', {id: data[0]['id']}], getMgetList);
    }

    return (
        <Loading
            isLoading={isLoading}
            render={() => (
                <div className="material-group">
                    {
                        data.map((item: any) => {
                            return (
                                <Link
                                    key={item.id}
                                    className="group-item"
                                    to={`/allStores/list/${item.id}`}
                                >
                                    <span>{item.name} </span>
                                    <span>({item.count})</span>
                                </Link>
                            );
                        })
                    }
                </div>
            )}
        />
    );
};

export default AllStoresHome;
