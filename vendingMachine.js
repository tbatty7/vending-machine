var VendingMachine = function(){
	this.display = 'INSERT COIN';
	this.products = [
	{"product": "cola", "price": 100},
	{"product": "chips", "price": 50},
	{"product": "candy", "price": 65}
	];
};

VendingMachine.prototype.resetDisplay = function(){
	this.display = "INSERT COIN";
};

VendingMachine.prototype.coinIdentifier = function(weight, diameter){
	if (weight === 5 && diameter === 0.835) {
		return 0.05;
	} else if (weight === 2.268 && diameter === 0.705){
		return 0.10;
	} else if (weight === 5.67 && diameter === 0.955){
		return 0.25;
	} 
};

VendingMachine.prototype.coinVerifier = function(weight, diameter){
	var coinValue = this.coinIdentifier(weight, diameter);
	if (coinValue && (typeof this.display === 'string')){
		this.display = coinValue;
	} else if (coinValue && (typeof this.display === 'number')){
		this.display += coinValue;
		this.display = parseFloat(this.display.toFixed(2));
	} else {
		return 'send coin to coin return';
	}
};


module.exports = new VendingMachine();