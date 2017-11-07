var VendingMachine = function(){};

VendingMachine.prototype.display = function(){
	return "Insert Coin";
};

VendingMachine.prototype.coinIdentifier = function(weight, diameter){
	if ((weight >= 2.5 && weight <= 3.11) && (diameter === 0.75)) {
	return "penny";
	}
};

module.exports = new VendingMachine();