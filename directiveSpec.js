

beforeEach(module('testModule'));

describe('test', function(){
    var sut;
    beforeEach(inject(function($rootScope, $compile){
        sut = $compile('<test title="\'someTitle\'"></test>')($rootScope);
        $rootScope.$digest();
    }));

    it('should work', function(){
        expect(sut.html()).toBe('<h1 class="ng-binding">someTitle</h1>');
    });

});