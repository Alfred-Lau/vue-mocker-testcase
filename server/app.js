const Koa = require('koa');
const KoaRouter = require('koa-router');
const app = new Koa();
const route = new KoaRouter();

route.prefix('/api');
route.get('/blog/detail', async (ctx) => {
  ctx.body = {
    successwww: true,
    data: {
      content:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam eveniet iure atque molestias incidunt numquam cum ducimus debitis aspernatur. Quia, voluptatum rem! Tenetur, quas et? Minima debitis tempore sit maxime?',
    },
    statusCode: 0,
    statusText: '成功',
  };
});

app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', '*');
  next();
});

app.use(route.routes());

app.listen(3000);
