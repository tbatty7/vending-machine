const expect = require('chai').expect;

describe('Vending Machine Coding Kata', ()=>{
	it('should have a valid module', ()=>{
		const vendingMachine = require('./vendingMachine');

		describe('Vending Machine Display Tests', ()=>{
			it('should display "Insert Coin" as the default setting', ()=>{
				expect(vendingMachine.display()).to.equal('Insert Coin');
			});
		});
	});
});