Array.prototype.peek = function () {
	return this[this.length - 1];
};

class Calculator {
	constructor(expr) {
		this.expr = expr.replaceAll(/\s/g,"") + ")";
		this.numStack = [];
		this.opStack = ["("];
	}
	precedence(ch) {
		switch (ch) {
			case "+":
			case "-":
				return 1;
			case "*":
			case "/":
				return 2;
			case "^":
				return 3;
		}
		return -1;
	}

	isOperator = (ch) => this.precedence(ch) !== -1;
	applyOperation = () => {
		let y = this.numStack.pop();
		let x = this.numStack.pop();
		let operator = this.opStack.pop();
		switch (operator) {
			case "+":
				this.numStack.push(x + y);
				break;
			case "-":
				this.numStack.push(x - y);
				break;
			case "*":
				this.numStack.push(x * y);
				break;
			case "/":
				this.numStack.push(x / y);
				break;
			case "^":
				this.numStack.push(Math.pow(x, y));
				break;
		}
	};

	calculate() {
		let num = "";
		for (let i = 0; i < this.expr.length; i++) {
			
			//Debugging 
			/* console.log("Symbol Scanned : ", this.expr[i]); */
			
			if (this.expr[i] >= "0" && this.expr[i] <= "9") {
				num += this.expr[i];
				if (
					this.expr.length == i + 1 ||
					this.isOperator(this.expr[i + 1]) ||
					this.expr[i + 1] == ")"
				) {
					this.numStack.push(parseInt(num));
					num = "";
				}
			} else if (this.isOperator(this.expr[i])) {
				while (
					this.opStack.length != 0 &&
					this.precedence(this.expr[i]) <=
						this.precedence(this.opStack.peek())
				) {
					this.applyOperation();
				}
				this.opStack.push(this.expr[i]);
			} else if (this.expr[i] == "(") {
				this.opStack.push(this.expr[i]);
			} else if (this.expr[i] == ")") {
				while (this.opStack.peek() != "(" && this.opStack.length != 0) {
					this.applyOperation();
				}
				if (this.opStack.peek() == "(") {
					this.opStack.pop();
				}
			}

			//Debuggin : 
			/* 
			console.log("Operator Stack: ", this.opStack);
			console.log("Number Stack: ", this.numStack);
			console.log("");*/		
	}
		return this.numStack.pop();
	}
}
module.exports = Calculator;
