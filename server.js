import Koa from 'koa'
import KoaStatic from 'koa-static'
import Router from 'koa-router'
import bodyParser from 'koa-bodyparser'

import { database } from './mongodb'
import { saveInfo, fetchInfo } from './controllers/info'

database()

const GraphqlRouter = require('./router')

const app = new Koa();
const router = new Router();

const port = 4000;

app.use(bodyParser());
app.use(KoaStatic(__dirname + '/public'));

router.get('/test', (ctx, next) => {
    ctx.body = "test page";
})

router.use('',GraphqlRouter.routes())

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(port);

console.log('GraphQL server listen port: ',  port);