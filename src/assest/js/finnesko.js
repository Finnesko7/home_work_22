const renderUsers = users => {
    let app = document.getElementById('users');
    console.log(app);
    users.forEach(user => {
        let div = document.createElement('div');
        div.innerText = user.login;
        div.setAttribute('class', 'user');
        app.append(div);
    });
};

module.exports = {
    renderUsers: renderUsers
};

