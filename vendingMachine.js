var VendingMachine = function(){
	this.display = 'INSERT COIN';
	this.total = 0;
	this.products = {
		"cola": 100,
		"chips": 50,
		"candy": 65
	};

};

VendingMachine.prototype.reset = function(){
	this.display = "INSERT COIN";
	this.total = 0;
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

	if (coinValue){
		this.total += coinValue;
		this.updateDisplay();
	} else {
		return 'send coin to coin return';
	}
};

VendingMachine.prototype.updateDisplay = function(){
		this.display = this.total; // convert to look like money
};

VendingMachine.prototype.getProductCost = function(product){
	return this.products[product];
};


module.exports = new VendingMachine();