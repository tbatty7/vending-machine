const expect = require('chai').expect;

describe('Vending Machine Coding Kata', ()=>{
	it('should have a valid module', ()=>{
		const vendingMachine = require('./vendingMachine');

		describe('Vending Machine Display Tests', ()=>{
			it('should display "INSERT COIN" as the default setting', ()=>{
				expect(vendingMachine.display).to.equal('INSERT COIN');
			});

			it('should reset display to "INSERT COIN" when resetDisplay() is called', ()=>{
				vendingMachine.coinVerifier(5, 0.835);
				vendingMachine.resetDisplay();
				expect(vendingMachine.display).to.equal('INSERT COIN');
			})

		});

		describe('coinIdentifier() Functionality Tests', ()=>{
			it('should return the value of nickels, dimes and quarters', ()=>{
				expect(vendingMachine.coinIdentifier(5, 0.835)).to.equal(5);
				expect(vendingMachine.coinIdentifier(2.268, 0.705)).to.equal(10);
				expect(vendingMachine.coinIdentifier(5.67, 0.955)).to.equal(25);
			});

			it('should return undefined when pennies or any other coin is inserted', ()=>{
				expect(vendingMachine.coinIdentifier(2.5, 0.75)).to.be.undefined;
				expect(vendingMachine.coinIdentifier(5, 0.22)).to.be.undefined;
				expect(vendingMachine.coinIdentifier("Roger", true)).to.be.undefined;
			});
		});

		describe('coinVerifier() Functionality Tests', ()=>{
			it('should update display with new value based on amount of each coin', ()=>{
				vendingMachine.resetDisplay();
				vendingMachine.coinVerifier(5, 0.835);
				expect(vendingMachine.display).to.equal(5);
			});
			
			it('should update display with new total based on amount of each consecutive coin', ()=>{
				vendingMachine.resetDisplay();
				vendingMachine.coinVerifier(5, 0.835);
				expect(vendingMachine.display).to.equal(5);
				vendingMachine.coinVerifier(2.268, 0.705);
				expect(vendingMachine.display).to.equal(15);
				vendingMachine.coinVerifier(5.67, 0.955);
				expect(vendingMachine.display).to.equal(40);
			});

			it('should return "send coin to coin return" when coin is invalid', ()=>{
				expect(vendingMachine.coinVerifier(2.5, 0.75)).to.equal('send coin to coin return');
				expect(vendingMachine.coinVerifier("Roger", true)).to.equal('send coin to coin return');

			});
		});
	});
});