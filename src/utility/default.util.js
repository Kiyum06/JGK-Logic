// middleware to protect server side rendered pages - redirects to login if not authenticated
export const requireAuth = (req, res, next) => {
    if(!req.session.user) {
        return res.redirect('/login');
    }

    next();
};

// middleware to protect api endpoints
export const requireAuthApi = (req, res, next) => {
    if(!req.session.user) {
        return res.status(401).json({error: "Unauthorized"});
    }
    next();
}