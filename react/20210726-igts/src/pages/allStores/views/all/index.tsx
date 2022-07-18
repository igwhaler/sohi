import {useQuery, useQueryClient} from 'react-query';
import {Pagination} from 'antd';
import _ from 'lodash';
import Loading from '@/components/Loading';
import ImgItem from '../../components/ImgItem';
import {getAllMgetList} from '../../service';
import {useCallback, useState} from 'react';

const StoresAll = () => {
    const queryClient = useQueryClient();
    const cacheData = queryClient.getQueriesData('getAllMgetList');
    const selfPage = _.get(cacheData, `${[cacheData.length - 1]}[0][1]`, 1);

    const [page, setPage] = useState(selfPage);

    const {isLoading, data} = useQuery(
        ['getAllMgetList', page],
        () => getAllMgetList(page)
    );

    const handlePageChange = useCallback(page => {
        setPage(page);
    }, []);

    return (
        <Loading
            isLoading={isLoading}
            render={() => {
                return (
                    <>
                        <div>数量：{data.count}</div>

                        <div className="img-list">
                            {
                                data.items.map((item: any) => {
                                    return (
                                        <ImgItem
                                            key={item.id}
                                            data={item}
                                        />
                                    );
                                })
                            }
                        </div>

                        <Pagination
                            current={page}
                            pageSize={9}
                            total={data.count}
                            onChange={handlePageChange}
                        />
                    </>
                );
            }}
        />
    );
};

export default StoresAll;
