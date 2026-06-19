import { registerUser, loginUser } from "../services/auth.service.js";
// renders the form
export const getRegister = (req,res) => {
    res.render('register', {title: 'Register', subtitle: '', error: null});
};

// handles registeration form submission
export const postRegister = async (req,res) => {
    const {username, email, password } = req.body;
    try {
        await registerUser(username, email, password);
        res.redirect('/login');
    } catch (err) {
        res.render('register', {title: 'Register', subtitle: '', error: err.message});
    }
};

// renders the login form
export const getLogin = (req, res) => {
    res.render('login', { title: 'Login', subtitle: '', error: null });
};

// Handles login form submission
export const postLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await loginUser(email, password);
        //req.session.user = user;
        req.session.userId = user.id;
        req.session.username = user.username;
        
        res.redirect('/products');
    } catch (err) {
        res.render('login', { title: 'Login', subtitle: '', error: err.message });
    }
};

// Handles logout
export const postLogout = (req, res) => {
    req.session.destroy(() => {
        res.redirect('/login');
    });
};