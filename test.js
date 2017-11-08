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

			it('should evaluate the value of nickels, dimes and quarters', ()=>{
				expect(vendingMachine.coinIdentifier(5, 0.835)).to.equal(5);
				expect(vendingMachine.coinIdentifier(2.268, 0.705)).to.equal(10);
				expect(vendingMachine.coinIdentifier(5.67, 0.955)).to.equal(25);
			});

			

		});
	});
});