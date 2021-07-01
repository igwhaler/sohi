const phantom = require('phantom');
const path = require('path');

module.exports = function () {
    return async (ctx, next) => {
        const instance = await phantom.create();
        const page = await instance.createPage();

        // setContent
        const expectedContent = `
            <html>
                <style>
                    * {
                        margin: 0;
                        padding: 0;
                    }

                    html,
                    body {
                        width: 100%;
                        height: 100%;
                    }

                    .container {
                        position: relative;
                        width: 100%;
                        height: 100%;
                    }

                    .container .bg {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        z-index: 1;
                    }

                    .user-avatar {
                        position: absolute;
                        top: 445px;
                        left: 50%;
                        margin-left: -123px;
                        width: 247px;
                        height: 268px;
                        z-index: 2;
                    }
                    .user-avatar-basic {
                        position: absolute;
                        width: 210px;
                        height: 210px;
                        left: 20px;
                        top: 18px;
                        z-index: 1;
                    }
                    .user-avatar-top {
                        position: absolute;
                        width: 247px;
                        height: auto;
                        z-index: 2;
                    }

                    .article-section {
                        position: absolute;
                        top: 782px;
                        width: 100%;
                        height: 384px;
                        display: -webkit-flex;
                        -webkit-justify-content: center;
                        -webkit-align-items: center;
                        z-index: 2;
                    }
                    .article-name {
                        font-family: PingFangSC-Semibold;
                        font-size: 70px;
                        font-weight: bold;
                        color: #4d3500;
                        letter-spacing: 0;
                        text-align: justify;
                        line-height: 100px;
                        max-width: 820px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 3;
                        -webkit-box-orient: vertical;
                    }

                    .reading {
                        position: absolute;
                        top: 1258px;
                        left: 50%;
                        -webkit-transform: translateX(-50%);
                        font-family: DINAlternate-Bold;
                        font-size: 190px;
                        color: #d24247;
                        letter-spacing: 0;
                        text-align: justify;
                        line-height: 200px;
                        z-index: 2;
                    }

                </style>

                <body>
                    <div class="container">
                        <img
                            class="bg"
                            src="https://pic.rmb.bdstatic.com/be18fbf03dcc03cf71b71d2846d30a42.png"
                        />

                        <div class="user-avatar">
                            <img
                                class="user-avatar-basic"
                                src="https://pic.rmb.bdstatic.com/9f28725e8e42dda676c6efef27d5c6d4.png"
                            />

                            <img
                                class="user-avatar-top"
                                src="https://pic.rmb.bdstatic.com/e323fadf0fd471d07447af403b597756.png"
                            />
                        </div>

                        <section class="article-section">
                            <div class="article-name">《为生命而骄傲》</div>

                        </section>

                        <div class="reading">959,595</div>
                    </div>
                </body>
            </html>
        `;

        page.property('viewportSize', {
            width: 1080,
            height: 1920
        })

        await page.setContent(expectedContent, '');

        // render
        // const status = await page.open('https://www.baidu.com/');
        // console.log(stauts);

        page.on('onLoadFinished', async function (status) {
            console.log('onLoadFinished:', status);

            const filename = path.join(__dirname, '1.jpeg');

            await page.render(filename, {
                format: 'jpeg',
                quality: '100'
            });

            instance.exit();
            next();
        });

        ctx.body = expectedContent;
    }
};
