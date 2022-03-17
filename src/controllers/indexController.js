const getIndexPage = (req, res) => {
    return res.render('index/indexPage.ejs');
}

const HomeSearch = (req, res) => {
    return res.render('home/index.ejs');
}

const LoginPage = (req, res) => {
    // var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress
    return res.render('login/index.ejs');
}

const MemberPage = (req, res) => {
    return res.render('member/index.ejs');
}

const ParityPage = (req, res) => {
    return res.render('parity/index.ejs');
}

module.exports = {
    getIndexPage: getIndexPage,
    HomeSearch: HomeSearch,
    LoginPage: LoginPage,
    MemberPage: MemberPage,
    ParityPage: ParityPage
}