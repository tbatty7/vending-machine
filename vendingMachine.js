var VendingMachine = function(){
	this.display = 'INSERT COIN';
	this.products = {
		"cola": 100,
		"chips": 50,
		"candy": 65
	};

};

VendingMachine.prototype.resetDisplay = function(){
	this.display = "INSERT COIN";
};

VendingMachine.prototype.coinIdentifier = function(weight, diameter){
	if ((weight > 4.95 && weight < 5.05) && (diameter > 0.78 && diameter < 0.88)) {
		return 5;
	} else if ((weight > 2.21 && weight < 2.31) && (diameter > 0.65 && diameter < 0.75)){  
		return 10;
	} else if ((weight > 5.62 && weight < 5.72) && (diameter > 0.9 && diameter < 1)){
		return 25;
	} 
};

VendingMachine.prototype.coinVerifier = function(weight, diameter){
	var coinValue = this.coinIdentifier(weight, diameter);
	if (coinValue && (this.display === 'INSERT COIN')){ // I need to change it so there is a this.total property for the math that then is converted to a decimal when displayed.
		this.display = coinValue;
	} else if (coinValue && (typeof this.display === 'number')){
		this.display += coinValue;
		// this.display = parseFloat(this.display.toFixed(2));
	} else {
		return 'send coin to coin return';
	}
};

VendingMachine.prototype.getProductCost = function(product){
	return this.products[product];
};


module.exports = new VendingMachine();