export default class StylistsController {
    constructor(randomNames) {
        this.test = 'Hello from StylistsController';
        this.random = randomNames;
        this.name = 'World';
    }

    changeName() {
        this.name = 'angular-tips';
    }

    randomName() {
        this.name = this.random.getName();
    }
}

StylistsController.$inject = ['randomNames'];
