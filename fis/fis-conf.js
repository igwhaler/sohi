fis.require('smarty')(fis);

// 目前 fis3-smarty 要求至少设置个 namespace
fis.set('namespace', 'ig');

// default media is `dev`，
fis.media('dev').match('*', {
    useHash: false,
    optimizer: null
});
