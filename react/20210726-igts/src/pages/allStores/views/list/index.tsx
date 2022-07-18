import {useParams} from 'react-router-dom';
import {useQuery, useQueryClient, useMutation} from 'react-query';
import Loading from '@/components/Loading';
import ImgItem from '../../components/ImgItem';
import './index.scss';
import {getMgetList, postDeleteImg} from '../../service';

const AllStoresList = () => {
    const queryClient = useQueryClient();
    const {id}: { id: string } = useParams();

    const res = useQuery(['getMgetList', {id}], getMgetList);
    const {isLoading, data = []} = res;

    // 删除图片
    const mutation = useMutation(postDeleteImg, {
        onSuccess: () => {
            queryClient.invalidateQueries(['getMgetList', {id}]);
        },
        onError: (error) => {
            console.log(error);
        }
    });

    const onDeletImg = (data: any) => {
        mutation.mutate({ids: data.id});
    };

    return (
        <Loading
            isLoading={isLoading}
            render={() => (
                <>
                    <div>数量：{data.count}</div>
                    <div className="img-list">
                        {
                            data.items.map((item: any) => {
                                return (
                                    <ImgItem
                                        key={item.id}
                                        data={item}
                                        onDeletImg={onDeletImg}
                                    />
                                );
                            })
                        }
                    </div>
                </>
            )}
        />
    );
};

export default AllStoresList;
