var VendingMachine = function(){
	this.display = 'INSERT COIN';
};

VendingMachine.prototype.resetDisplay = function(){
	this.display = "INSERT COIN";
};

VendingMachine.prototype.coinIdentifier = function(weight, diameter){
	if (weight === 5 && diameter === 0.835) {
		return 5;
	} else if (weight === 2.268 && diameter === 0.705){
		return 10;
	} else if (weight === 5.67 && diameter === 0.955){
		return 25;
	} 
};

VendingMachine.prototype.coinHandler = function(weight, diameter){
	var coinValue = this.coinIdentifier(weight, diameter);
	if (coinValue && (typeof this.display === 'string')){
		this.display = coinValue;
	} else if (coinValue && (typeof this.display === 'number')){
		this.display += coinValue;
	}
};


module.exports = new VendingMachine();