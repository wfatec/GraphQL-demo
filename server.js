import Koa from 'koa'
import KoaStatic from 'koa-static'
import Router from 'koa-router'
import bodyParser from 'koa-bodyparser'

import { database } from './mongodb'
import { saveInfo, fetchInfo } from './controllers/info'
import { saveStudent, fetchStudent, fetchStudentDetail } from './controllers/student'

database()

const app = new Koa();
const router = new Router();

app.use(bodyParser());
app.use(KoaStatic(__dirname + '/public'));

router.get('/test', (ctx, next) => {
    ctx.body = "test page";
})

router.post('/saveStudent', saveStudent)
router.get('./student', fetchStudent)
router.get('/studentDetail', fetchStudentDetail)

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(4000);

console.log('GraphQL server listen port: ',  4000);