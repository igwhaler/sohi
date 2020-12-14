import React, { Component } from 'react';
import invoke from '@baidu/xbox/na/invoke';
import IgDemo from './components/IgDemo';
import IgModal from './components/IgModal';
import IgRef from './components/IgRef';
import IgContext from './components/IgContext';
import IgMemo from './components/IgMemo';
import IgPortals from './components/IgPortals';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            errorInfo: null,
            visiable: false
        };
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);

        this.setState({
            error: error,
            errorInfo: errorInfo
        })
    }

    handleInvoke = () => {
        // var schema = 'baiduboxapp://common?action=easybrowse&params=%7B%22opentype%22%3A%221%22%2C%22rbtnstyle%22%3A%222%22%2C%22newbrowser%22%3A%221%22%2C%22type%22%3A%22Hybrid%22%2C%22tpl_id%22%3A%22bjh_news.html%22%2C%22sfrom%22%3A%22feed%22%2C%22context%22%3A%22%257B%2522nid%2522%253A%2522news_9283908797564511952%2522%252C%2522sourceFrom%2522%253A%2522bjh%2522%252C%2522ext%2522%253A%257B%2522stype%2522%253A%2522mdpage%2522%252C%2522spos%2522%253A8%257D%257D%22%2C%22toolbaricons%22%3A%22%7B%5C%22toolids%5C%22%3A%5B%5C%224%5C%22%2C%5C%221%5C%22%2C%5C%222%5C%22%2C%5C%223%5C%22%5D%7D%22%2C%22menumode%22%3A%222%22%2C%22ch_url%22%3A%22https%253A%252F%252Fmbd.baidu.com%252Fnewspage%252Fdata%252Flandingreact%253FpageType%253D2%2526sourceFrom%253Dmdpage%2526nid%253Dnews_9283908797564511952%22%2C%22slog%22%3A%22%7B%5C%22from%5C%22%3A%5C%22feed%5C%22%2C%5C%22nid%5C%22%3A%5C%22news_9283908797564511952%5C%22%2C%5C%22page%5C%22%3A%5C%22pic_text%5C%22%2C%5C%22ext%5C%22%3A%7B%5C%22gr_ext%5C%22%3A%5C%22%7B%5C%5C%5C%22stype%5C%5C%5C%22%3A%5C%5C%5C%22mdpage%5C%5C%5C%22%2C%5C%5C%5C%22spos%5C%5C%5C%22%3A8%7D%5C%22%2C%5C%22source%5C%22%3A%5C%22%5C%5Cu65fa%5C%5Cu67f4%5C%5Cu7231%5C%5Cu6599%5C%5Cu7406%5C%22%7D%7D%22%2C%22first_image%22%3A%22http%3A%5C%2F%5C%2Ff11.baidu.com%5C%2Fit%5C%2Fu%3D299163295%2C1166999873%26fm%3D173%26app%3D49%26f%3DJPEG%3Fw%3D640%26h%3D480%26s%3D35A648B2C00258E43DA7FCB20300C019%26access%3D215967316%22%2C%22commentInfo%22%3A%7B%22topic_id%22%3A%221039000029942677%22%2C%22opentype%22%3A2%7D%7D&minver=7.2.5.0';
        // var schema = `baiduboxapp://common?action=easybrowse&params={"opentype":"1","rbtnstyle":"2","newbrowser":"1","type":"Hybrid","tpl_id":"bjh_news.html","sfrom":"feed","context":"%7B%22nid%22%3A%22news_9584347132957274096%22%2C%22sourceFrom%22%3A%22bjh%22%2C%22ext%22%3A%7B%22stype%22%3A%22mdpage%22%2C%22spos%22%3A8%7D%7D","toolbaricons":"{\"toolids\":[\"4\",\"1\",\"2\",\"3\"]}","menumode":"2","ch_url":"https%3A%2F%2Fmbd.baidu.com%2Fnewspage%2Fdata%2Flandingreact%3FpageType%3D2%26sourceFrom%3Dmdpage%26nid%3Dnews_9584347132957274096","slog":"{\"from\":\"feed\",\"nid\":\"news_9584347132957274096\",\"page\":\"pic_text\",\"ext\":{\"gr_ext\":\"{\\\"stype\\\":\\\"mdpage\\\",\\\"spos\\\":8}\",\"source\":\"\\u65fa\\u67f4\\u7231\\u6599\\u7406\"}}"}&minver=7.2.5.0`;
        var schema = 'baiduboxapp://common?action=easybrowse&params=%7B%22opentype%22%3A%221%22%2C%22rbtnstyle%22%3A%222%22%2C%22newbrowser%22%3A%221%22%2C%22type%22%3A%22Hybrid%22%2C%22tpl_id%22%3A%22bjh_news.html%22%2C%22sfrom%22%3A%22feed%22%2C%22context%22%3A%22%257B%2522nid%2522%253A%2522news_9584347132957274096%2522%252C%2522sourceFrom%2522%253A%2522bjh%2522%252C%2522ext%2522%253A%257B%2522stype%2522%253A%2522mdpage%2522%252C%2522spos%2522%253A8%257D%257D%22%2C%22toolbaricons%22%3A%22%7B%5C%22toolids%5C%22%3A%5B%5C%224%5C%22%2C%5C%221%5C%22%2C%5C%222%5C%22%2C%5C%223%5C%22%5D%7D%22%2C%22menumode%22%3A%222%22%2C%22ch_url%22%3A%22https%253A%252F%252Fmbd.baidu.com%252Fnewspage%252Fdata%252Flandingreact%253FpageType%253D2%2526sourceFrom%253Dmdpage%2526nid%253Dnews_9584347132957274096%22%2C%22slog%22%3A%22%7B%5C%22from%5C%22%3A%5C%22feed%5C%22%2C%5C%22nid%5C%22%3A%5C%22news_9584347132957274096%5C%22%2C%5C%22page%5C%22%3A%5C%22pic_text%5C%22%2C%5C%22ext%5C%22%3A%7B%5C%22gr_ext%5C%22%3A%5C%22%7B%5C%5C%5C%22stype%5C%5C%5C%22%3A%5C%5C%5C%22mdpage%5C%5C%5C%22%2C%5C%5C%5C%22spos%5C%5C%5C%22%3A8%7D%5C%22%2C%5C%22source%5C%22%3A%5C%22%5C%5Cu65fa%5C%5Cu67f4%5C%5Cu7231%5C%5Cu6599%5C%5Cu7406%5C%22%7D%7D%22%7D&minver=7.2.5.0';
        // var schema = 'baiduboxapp://v1/easybrowse/hybrid?upgrade=1&type=hybrid&tpl_id=landing_app.html&context=%7b%22nid%22%3a%22news_9584347132957274096%22%7d&style=%7b%22toolbaricons%22%3a%7b%22toolids%22%3a%5b%221%22%2c%222%22%2c%223%22%5d%7d%2c+%22menumode%22%3a%222%22%7d&newbrowser=1&ch_url=https%3a%2f%2fmbd.baidu.com%2fnewspage%2fdata%2flandingreact%3fpageType%3d2%26nid%3dnews_9584347132957274096';
        // var schema = 'baiduboxapp://v1/easybrowse/hybrid?upgrade=1&type=hybrid&tpl_id=landing_app.html&context=%7b%22nid%22%3a%22news_9988575118303602785%22%7d&style=%7B%22toolbaricons%22%3A%7B%22toolids%22%3A%5B%221%22%2C%222%22%2C%223%22%5D%7D%2C+%22menumode%22%3A%222%22%7D&newbrowser=1&commentInfo=%7b%22topic_id%22%3a%221016000005612717%22%2c%22opentype%22%3a2%7d&slog=%7b%22from%22%3a%22feed%22%2c%22source%22%3a%22push%22%2c%22nid%22%3a%229988575118303602785%22%2c%22page%22%3a%22pic_text%22%7d&ch_url=https%3a%2f%2fmbd.baidu.com%2fnewspage%2fdata%2flandingreact%3fpageType%3d2%26nid%3dnews_9988575118303602785';


        invoke(schema);
    }

    handleChangeModal = () => {
        let {visiable} = this.state;

        this.setState({
            visiable: !visiable
        });
    }

    render() {
        return (
            this.state.errorInfo
            ? <div>
                <strong>{this.state.error.toString()}</strong>
                <br />
                <strong>{this.state.errorInfo.componentStack}</strong>
            </div>
                : <div className="App">
                <button onClick={this.handleInvoke}>点击我</button>
                <br/>
                {/* <IgDemo></IgDemo>

                <br />

                <p>
                    <a href="javascropt:;" onClick={this.handleChangeModal}>显示/隐藏</a>
                </p>
                {
                    this.state.visiable
                    ? <IgModal>
                        <span>啊哈哈哈</span>
                    </IgModal>
                    : null
                }

                <br />

                <IgRef></IgRef>

                <br />

                <IgContext></IgContext>

                <br />

                <IgMemo></IgMemo>

                <br />

                <IgPortals></IgPortals> */}
            </div>
        );
    }
}

export default App;
