import practice from './index';

describe('Controller: Practice', function() {
    let $controller;

    beforeEach(angular.mock.module(practice));

    beforeEach(angular.mock.inject(function(_$controller_) {
        $controller = _$controller_;
    }));

    it('test is initialized to Hello from PracticeController', function() {
        let ctrl = $controller('PracticeController');
        expect(ctrl.test).toBe('Hello from PracticeController');
    });
});
