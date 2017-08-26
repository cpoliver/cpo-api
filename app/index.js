const Koa = require('koa');
const app = new Koa();

const PORT = 4291;

app.use(ctx => {
  ctx.body = 'Hello World';
});

// eslint-disable-next-line no-console
console.log(`server listening on port ${PORT}`);

app.listen(PORT);
