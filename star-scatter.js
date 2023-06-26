const modeswitch = document.querySelector(".mode-switch");

modeswitch.addEventListener("Click", () =>{
    console.log("mode switch clicked");
    const mode = document.querySelector(".modes").toggle(".dark");
});
const darkCanvas = document.querySelector("div.dark");

for (let i = 0; i < 100; ++i) {
	const div = document.createElement("div");
	div.classList.add("star");

	const sizeFactor = Math.random();
	div.style.width = `${10 * sizeFactor}px`;
	div.style.height = `${10 * sizeFactor}px`;

	div.style.top = `${100 * Math.random()}%`;
	div.style.right = `${100 * Math.random()}%`;

	darkCanvas.appendChild(div);
}
