function loginViewModel() {
    var self = this;

    self.users = ko.observableArray([
        { username: 'admin', password: 'admin' },
        { username: 'user1', password: 'user1' },
        { username: 'user2', password: 'user2' },
        { username: 'u', password: 'u' },
        { username: 'p', password: 'p' },
        { username: 'raihan', password: 'mehran' },
        { username: 'patrik', password: 'patrik' },
        { username: 'u1', password: 'u1' },
        { username: 'u2', password: 'u2' }
    ]);
    self.username = ko.observable();
    self.password = ko.observable();

    self.logIn = function() {
        for (let i = 0; i < self.users.length; i++) {
            if (self.users[i].username === self.username() && self.users[i].password === self.password()) {
                console.log("hi")
                window.location.replace("list.html");
            }
            console.log("not matched!")
        }
        alert("Invalid username or password!");
        self.username("");
        self.password("");
    }

    self.signUp = () => {
        window.location.replace("user.html");
    }
};

const login = document.querySelector("#login-details");
ko.applyBindings(new loginViewModel(), login);