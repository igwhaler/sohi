const {Controller} = require('egg')

class HomeController extends Controller {
  async index () {
    // const result = await this.app.mysql.get('myDB').query('select * from arts')
    this.ctx.body = 'Hello world'
  }
}

module.exports = HomeController
