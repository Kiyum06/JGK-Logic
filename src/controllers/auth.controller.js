import { registerUser } from "../services/auth.service.js";

export const getRegister = (req,res) => {
    res.render('register', {title: 'Register', subtitle: '', error: null});
};

export const postRegister = async (req,res) => {
    const {username, email, password } = req.body;
    try {
        await registerUser(username, email, password);
        res.redirect('/login');
    } catch (err) {
        res.render('register', {title: 'Register', subtitle: '', error: err.message});
    }
};