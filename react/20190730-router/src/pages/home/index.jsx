import React, { Component } from 'react';
import html2canvas from 'html2canvas';
import './index.scss';
import shitPic from '../../assets/images/1.jpg';

const selfAvatar = 'https://pic.rmb.bdstatic.com/51f80ab377c710cc8d44ee58d84882e6.jpeg';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            picUrl: '',
            avatar: ''
        };
    }

    componentDidMount() {
        this.getImgBase64(selfAvatar);
    }

    handleCreatePic = () => {
        html2canvas(this.refPic, {
            scale: 2
        }).then((canvas) => {
            this.setState({
                picUrl: canvas.toDataURL('img/jpeg')
            });
        });
    }

    getImgBase64 = (url) => {
        let canvas = document.createElement("canvas");
        let oImg = new Image();
        let ctx = canvas.getContext("2d");


        oImg.crossOrigin = 'anonymous';
        oImg.src = url;

        oImg.onload = () => {
            canvas.width = oImg.width;
            canvas.height = oImg.height;
            ctx.drawImage(oImg, 0, 0, oImg.width, oImg.height);

            this.setState({
                avatar: canvas.toDataURL()
            });
        }
    }

    downloadImg = (url) => {
        const oBody = document.body;
        const oIframe = document.createElement("iframe");

        oIframe.src = url;
        oIframe.name = 'iframeReportImg'
        oIframe.crossOrigin = 'anonymous';

        oBody.appendChild(oIframe);

        oIframe.onload = () => {
            // oIframe.document.execCommand("SaveAs");
            window.frames["iframeReportImg"].document.execCommand("SaveAs");
        }
    }

    render() {
        let { picUrl, avatar } = this.state;

        return (
            <div>
                <p>
                    <button onClick={this.handleCreatePic}>生成图片</button>

                    {
                        picUrl && <a href={picUrl} download="百家号">保存canvas图片</a>
                    }

                    <span>《|》</span>

                    {
                        avatar && <a href={avatar} download="百家号">下载同域名图片</a>
                    }
                </p>

                <div style={{ display: 'flex', justifyContent: 'center' }}>

                    <div
                        className="wrap-pic"
                        ref={dom => this.refPic = dom}
                    >
                        <h2>厉害了我的哥</h2>
                        <img
                            className="shit-pic"
                            src={shitPic}
                            alt="哈哈"
                        />
                        <div>哈哈哈哈</div>
                    </div>

                    <div style={{display: 'inline-block', marginLeft: '50px'}}>
                        {picUrl && <img src={picUrl} alt=""/>}
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
