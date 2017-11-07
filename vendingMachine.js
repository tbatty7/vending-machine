var vendingMachine = function(){};

vendingMachine.prototype.display = function(){
	return "Insert Coin";
};

module.exports = new vendingMachine();