var a = {
  request: {
    method: 'GET',
    url: '/favicon.ico',
    header: {
      host: '127.0.0.1:3000',
      connection: 'keep-alive',
      pragma: 'no-cache',
      'cache-control': 'no-cache',
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36',
      accept: 'image/webp,image/apng,image/*,*/*;q=0.8',
      referer: 'http://127.0.0.1:3000/',
      'accept-encoding': 'gzip, deflate, br',
      'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
      cookie: 'csrfToken=c8Jy5wOvhbS7DKA4IHq9czuJ'
    }
  },
  response: { status: 404, message: 'Not Found', header: {} },
  app: { subdomainOffset: 2, proxy: false, env: 'development' },
  originalUrl: '/favicon.ico',
  req: '<original node req>',
  res: '<original node res>',
  socket: '<original node socket>'
}