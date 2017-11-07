const expect = require('chai').expect;

describe('Vending Machine Coding Kata', ()=>{
	it('should have a valid module', ()=>{
		const vendingMachine = require('./vendingMachine');

		describe('Vending Machine Display Tests', ()=>{
			it('should display "Insert Coin" as the default setting', ()=>{
				expect(vendingMachine.display()).to.equal('Insert Coin');
			});
		});

		describe('Insert Coin Functionality Tests', ()=>{
			it('should recognize pennies by weight (between 2.5 and 3.11 grams) and diameter (0.75 inches)', ()=>{
				expect(vendingMachine.coinIdentifier(2.5, 0.75)).to.equal('penny')
			});
		});
	});
});