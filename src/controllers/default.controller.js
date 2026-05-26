//place controller functions here...
export const getHome = (req, res) => {
    res.render("default", {
        title: "JGK Fitness",
        subtitle: "Professional gymnastics equipment for athletes, gyms, and training centers."
    });
};

export const getLogin = (req, res) => {
    res.render("login", {
        title: "Login"
    });
};

export const getRegister = (req, res) => {
    res.render("register", {
        title: "Register"
    });
};

export const getProducts = (req, res) => {
    res.render("products", {
        title: "Products"
    });
};