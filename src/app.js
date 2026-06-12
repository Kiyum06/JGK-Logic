import express from 'express';
import defaultRouter from './routers/default.routes.js';
import defaultRouter from './routers/default.routes.js';

//configure Express.js app
const app = express();

//view engine
app.set("view engine", "ejs");
app.set("views", "src/views");

//static directories
app.use(express.static('public'));

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// session
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitilized: false,
    cookie: {secure: false}
}));

//routers
app.use("/", defaultRouter);

export default app;