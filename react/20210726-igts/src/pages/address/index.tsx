import { useEffect, useRef } from "react";
import { Modal, Button } from "antd";

const SelfAddress = () => {
    const domIframe = useRef<HTMLIFrameElement>(null);

    useEffect(() => {
        if (domIframe.current) {
            console.log(domIframe.current.contentWindow?.history);
            console.log(window.history);

            window.addEventListener('popstate', (event) => {
                // console.log(domIframe.current.contentWindow?.history);
                console.log(window.history);
            });
        }


    }, []);

    return (
        <div>
            <Button>123</Button>
            <Modal
                width={450}
                visible={true}
            >
                <div>地址管理</div>
                <iframe
                    ref={domIframe}
                    height="450"
                    width="100%"
                    title="地址管理"
                    src="https://wappass.baidu.com/v6/shippingAddress?tpl=bjh&select=1&clientfrom=h5"
                    frameBorder="0"
                />
            </Modal>
        </div>
    );
}

export default SelfAddress;
