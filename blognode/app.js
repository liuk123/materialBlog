'use strict'
const Koa = require('koa')
const app = new Koa()
const session = require('koa-session')
const logger = require('koa-logger')
const koaBody = require('koa-body')
const convert = require('koa-convert')
// const onerror = require('koa-onerror');
const db = require('./app/models/db')
const { backendRouter, frontendRouter } = require('./app/index')

// onerror(app);

//session
const CONFIG = {
    key: 'koa2',
    maxAge: 604800000,
    overwrite: true, 
    signed: true, 
};
app.keys = ['koa2:secret']


app.use(convert(logger()))
   .use(convert(session(CONFIG,app)))
   .use(require('koa-static')(__dirname + '/public/ngweb'));

app.use(koaBody({
    formLimit: 1048576,  // 最大1M
    textLimit: 1048576,
    formidable:{
        keepExtensions: true, // 带拓展名上传，否则上传的会是二进制文件而不是图片文件
        onFileBegin(name,file){
        file.path = __dirname+'/public/images/'+file.name; // 重命名上传文件
        },
        uploadDir: __dirname+'/public/images'},  // 输出到images文件夹
    multipart:true,
}))

app.use(async (ctx, next) => {
    const start = new Date();
    await next();
    const ms = new Date() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// router
app.use(require('./app/middlewares/response'));
// app.use(require('./rest/middlewares/filter'));
app
    .use(backendRouter.routes())
    // .use(backendRouter.allowedMethods())
    .use(frontendRouter.routes())
    .use(frontendRouter.allowedMethods())

module.exports = app

