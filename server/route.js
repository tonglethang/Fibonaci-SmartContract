import express from 'express';

const router = express.Router();
import path from 'path'

const route = app => {
    router.get('/', (req, res) => {
        return res.sendFile(path.join( __dirname,'../index.html'));
    })
    return app.use('/', router)
}
// router.get('/', function(req, res){
//     return res.sendFile('../../index.html');
// })


export default route;