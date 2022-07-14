import { useParams } from 'react-router-dom';
import { useQuery, useQueryClient, useMutation } from 'react-query';
import Loading from '@/components/Loading';
import './index.scss';
import { getMgetList, postDeleteImg } from '../service';

const AllStoresList = () => {
    const queryClient = useQueryClient();
    const { id }: { id: string } = useParams();

    const res = useQuery(['getMgetList', {id}], getMgetList);
    const { isLoading, data = [] } = res;

    // 删除图片
    const mutation = useMutation(postDeleteImg, {
        onSuccess: () => {
            queryClient.invalidateQueries(['getMgetList', { id }])
        },
        onError: (error) => {
            console.log(error)
        }
    });

    const onDeletImg = (data: any) => {
        mutation.mutate({ ids: data.id });
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
                                    <div className="img-wrap" key={item.url}>
                                        <img src={item.url} alt="" />
                                        <div
                                            className="btn-delete"
                                            onClick={onDeletImg.bind(null, item)}
                                        >删除</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </>
            )}
        />
    );
}

export default AllStoresList;
