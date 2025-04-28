const Koa = require('koa')
const Router = require('koa-router')

const mockList = require('./mock/index')

const app = new Koa()
const router = new Router()

async function getRes(fn, ctx) {
  return new Promise(resolve => {
    setTimeout(() => {
      const res = fn(ctx)
      resolve(res)
    }, 300);
  })
}

// 注册mock路由
mockList.forEach(item => {
  const {url, method, response} = item
  router[method](url, async ctx => {
    const res = await getRes(response, ctx)
    ctx.body = res
  })
})

app.use(router.routes())
// 应用监听3001端口
app.listen(3001)