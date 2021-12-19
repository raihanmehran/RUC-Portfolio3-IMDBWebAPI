function userViewModel() {
    var self = this;

    self.users = ko.observableArray([
        { username: 'admin', password: 'admin' }
    ]);
    self.selectedVIew = 0;

    self.insertUser = function (us, pa) {
        console.log(us, pa);

        //$.ajax({
        //    type: 'POST',
        //    url: '/api/Users/register/',
        //    contentType: 'application/json;charset=UTF-8',
        //    dataType: 'json',
        //    data: {
        //        username: us,
        //        password: pa
        //    },
        //    error: function (xmlHttpRequest, textStatus, errorThrown) {
        //        console.log(textStatus)
        //    }

        //});

        self.users.push({ username: us, password: pa });

    }

    self.gotoList = function() {
        window.location.replace("list.html");
    }


};

ko.components.register("user-list", {
    template: [
        '<div class="col-6">                                                               ',
        '    <div class="card">                                                            ',
        '        <header>                                                                  ',
        '            <div class="row">                                                     ',
        '                <div class="col-6">                                               ',
        '                    <h2 class="text-primary">Users List</h2>                      ',
        '                </div>                                                            ',
        '                <div class="col-6 text-right">                                    ',
        '                    <a class="btn btn-primary float-end">Create New User</a>      ',
        '                </div>                                                            ',
        '            </div>                                                                ',
        '        </header>                                                                 ',
        '        <div class="card-section">                                                ',
        '            <table class="table table-hover table-striped table-responsive">      ',
        '                <thead>                                                           ',
        '                    <tr>                                                          ',
        '                        <th>Hi</th>                                               ',
        '                        <th>Hi</th>                                               ',
        '                    </tr>                                                         ',
        '                </thead>                                                          ',
        '                <tbody>                                                           ',
        '                    <tr>                                                          ',
        '                        <td>Hi</td>                                               ',
        '                        <th>Hi</th>                                               ',
        '                    </tr>                                                         ',
        '                </tbody>                                                          ',
        '            </table>                                                              ',
        '        </div>                                                                    ',
        '        <footer>                                                                  ',
        '        </footer>                                                                 ',
        '    </div>                                                                        ',
        '</div>                                                                            '
    ].join('')
});

ko.components.register("create-user", {
    template: [
        '<div class="col-6">                                                                                                                    ',
        '    <div class="card">                                                                                                                 ',
        '        <header>                                                                                                                       ',
        '            <div class="row">                                                                                                          ',
        '                <div class="col-6">                                                                                                    ',
        '                    <h2 class="text-primary">Create New User</h2>                                                                      ',
        '                </div>                                                                                                                 ',
        '                <div class="col-6 text-right">                                                                                         ',
         '                </div>                                                                                                                 ',
        '            </div>                                                                                                                     ',
        '        </header>                                                                                                                      ',
        '        <div class="card-section">                                                                                                     ',
        '            <form class="row g-3">                                                                                                     ',
        '                <div class="col-md-6">                                                                                                 ',
        '                    <label for="txtUsername" class="form-label">Username <span class="text-danger">*</span></label>                    ',
        '                    <div class="input-group">                                                                                          ',
        '                        <span class="input-group-text" id="inputGroupPrepend2">@</span>                                                ',
        '                        <input type="text" data-bind="value: username" class="form-control" id="txtUsername" required>       ',
        '                        </div>                                                                                                         ',
        '                    </div>                                                                                                             ',
        '                    <div class="col-md-6">                                                                                             ',
        '                        <label for="txtPassword" class="form-label">Password <span class="text-danger">*</span></label>                ',
        '                        <input type="password" data-bind="value: password" class="form-control" id="txtPassword" required>                                         ',
        '                    </div>                                                                                                             ',
        '                        <div class="col-12">                                                                                           ',
        '                            <button data-bind="click: onClick" class="btn btn-primary" >Save</button>                                                ',
        '                        </div>                                                                                                         ',
        '                </form>                                                                                                                ',
        '                </div>                                                                                                                 ',
        '                <footer>                                                                                                               ',
        '                </footer>                                                                                                              ',
        '    </div>                                                                                                                             ',
        '</div>                                                                                                                                 '
    ].join(''),
    viewModel: function (params) {
        var self = this;
        self.username = ko.observable("");
        self.password = ko.observable("");

        self.onClick = function () {
            params.action(self.username(), self.password());
        }
    }
});

const userDetails = document.querySelector("#user-details");
ko.applyBindings(new userViewModel(), userDetails);