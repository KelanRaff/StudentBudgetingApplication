class LoginService {
    

    logins = [
        { "email": "kelanrafferty@gmail.com", "password": "12345"},
        { "email": "admin@gmail.com", "password": "54321"}
    ];

    validateLogin = (email, password) => {
        const userLogin = this.logins.find(login => login.email === email);
        if(userLogin !== undefined && userLogin.password === password) {
            return true;
        }
        return false;
    };

    addUser = (email, password) => {
        if(email && password) {
            const newLogin = { "email": email, "password": password };
            this.logins.push(newLogin);
            return true;
        }
        return false;
    };
}

const loginServiceSingleton = new LoginService();
export default loginServiceSingleton;