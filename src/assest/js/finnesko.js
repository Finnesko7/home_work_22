var test = function () {
    console.log("Finnesko 2 test 123");
};

const renderUsers  = users => {
    let app = document.getElementById('users');
    console.log(app);
    users.forEach(function (user) {
        let div = document.createElement('div');
        div.innerText = user.login;
        div.setAttribute('class', 'user');
        app.append(div);
    });
};

module.exports = {
    test: test,
    renderUsers: renderUsers
};

