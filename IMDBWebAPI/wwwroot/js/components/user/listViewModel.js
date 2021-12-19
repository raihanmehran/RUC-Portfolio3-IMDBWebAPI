function listViewModel(){
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

    self.createNewUser = function() {
        window.location.replace("user.html");
    }
};

const list = document.querySelector("#list-details");
ko.applyBindings(new listViewModel(), list);