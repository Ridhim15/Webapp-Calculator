const body=document.querySelectorAll('body');
    sidebar = document.querySelector(".sidebar");
    Rightsidebar = document.querySelector(".Rightsidebar");
    toggleLeft = document.querySelector(".ltoggle");
    toggleRight = document.querySelector(".rtoggle");

      toggleLeft.addEventListener("click",() =>{
        console.log("toggleLeft")
        sidebar.classList.toggle("close");
      });
      
      toggleRight.addEventListener("click",() =>{
        console.log("toggleRight")
        Rightsidebar.classList.toggle("close");
      });







function updateDisplay(value) {
	document.getElementById("display").value += value;
}
function del() {
	var str = document.getElementById("display").value.toString().slice(0, -1);
	document.getElementById("display").value = str;
}
function CalculateVal() {
	var displayValue = document.getElementById("display").value;
	var result = new Calculator(displayValue).calculate();
	document.getElementById("display").value = result;
}

// Creating a Hashmap from the array of DOM objects
// with key as presskey value of html button and button itself as value
const clickDataset = Object.fromEntries(
	[...document.querySelectorAll(".calculator [type=button]")].map((el) => {
		return [el.getAttribute("presskey") || el.value, el];
	})
);

console.log(clickDataset);

document.addEventListener("keydown", function (event) {
	// If the user presses the "Enter" key on the keyboard
	if (event.key in clickDataset) {
		// Cancel the default action, if needed
		event.preventDefault();
		// Trigger the button element with a click
		clickDataset[event.key].click();
	} else if (
		(event.shiftKey || event.getModifierState("CapsLock")) &&
		event.key.toLowerCase() in clickDataset
	) {
		event.preventDefault();
		// Trigger the button element with a click
		clickDataset[event.key.toLowerCase()].click();
	}
});
