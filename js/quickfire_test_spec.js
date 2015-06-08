var expect = chai.expect;
var should = chai.should();

describe('Quickfire Challenge', function () {
	var quickfire;

	it('Should have a function called quickfire', function () {
		Quickfire.should.be.a('function');
	});

	it('should take a number variable in it\'s parameter',function(){
		Quickfire.length.should.equal(1);
	});

	it('should only take in a number, and throw an error for any other invalid input', function(){
		expect(Quickfire.bind(quickfire,'str')).to.throw('Error.  Input must be a number');
	});

	it('should return a number', function(){
		Quickfire(3).should.be.an('number');
	});
	
});