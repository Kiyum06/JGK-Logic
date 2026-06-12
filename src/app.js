import express from 'express';
import session from 'express-session';
import defaultRouter from './routers/default.routes.js';
import authRouter from './routers/auth.routes.js'

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
    saveUninitialized: false,
    cookie: {secure: false}
}));

//routers
app.use("/", authRouter);
app.use("/", defaultRouter);
export default app;