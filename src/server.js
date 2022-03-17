import express from 'express';
import bodyParser from 'body-Parser';
import configViewEngine from './config/viewEngine';
import initWebRoute from './Routes/web';
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;
// app config

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

configViewEngine(app);
initWebRoute(app);

app.listen(port, () => {
    console.log(`Sever connected port: ${port}`);
});