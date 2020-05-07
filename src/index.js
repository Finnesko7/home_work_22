const finnesko = require('./assest/js/finnesko');
const axios = require('axios');
import './assest/css/main.css';


const api = axios.create({
    baseURL: 'http://localhost:3000', // на экспресе поставил cors чтобы разрешил делать запрос
    timeout: 1000
});

(async () => {
    let number = Math.floor(Math.random() * 20);
    let user = {
        login: `login ${number}`,
        name: `name ${number}`
    };

    api.post('/favorites', user).then(() => {
        var users = api.get('/favorites')
            .then(response => response)
            .catch(error => {
                console.log(error);
            });

        return users;
    }).then(data => {
        finnesko.renderUsers(data.data);
        console.log('data:', data);
    });
})();
