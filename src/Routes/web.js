import express from 'express';
import IndexController from '../Controllers/indexController';
const Router = express.Router();

const initWebRoute = (app) => {
    Router.get('/', (req, res) => {
        res.send("<script>window.location.href = '/index'</script>");
    });
    Router.get('/index', IndexController.getIndexPage);
    Router.get('/home/search', IndexController.HomeSearch);
    Router.get('/account/login', IndexController.LoginPage);
    Router.get('/member/index', IndexController.MemberPage);
    Router.get('/parity/tran', IndexController.ParityPage);
    return app.use("/", Router);
}

module.exports = initWebRoute;