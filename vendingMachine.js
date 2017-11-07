var VendingMachine = function(){};

VendingMachine.prototype.display = function(){
	return "Insert Coin";
};

VendingMachine.prototype.coinIdentifier = function(weight, diameter){
	if ((weight >= 2.5 && weight <= 3.11) && (diameter === 0.75)) {
	return "penny";
	} else if (weight === 5 && diameter === 0.835) {
		return "nickel";
	} else if (weight === 2.268 && diameter === 0.705){
		return "dime";
	} else if (weight === 5.67 && diameter === 0.955){
		return "quarter";
	}
};

module.exports = new VendingMachine();