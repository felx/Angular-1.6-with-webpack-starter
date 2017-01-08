export default class UsersService {
    constructor($http) {
        'ngInject';

        this.$http = $http;
    }

    // Retrieve a user's data
    get() {
        return this.$http({
            url: 'http://jsonplaceholder.typicode.com/users',
            method: 'GET'
        })
        .then((res) => res.data)
        .catch((res) => 'Http Service Request Failed!');    
    }

}
