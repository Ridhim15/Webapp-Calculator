const modeswitch = document.querySelector(".mode-switch");
const theme = document.querySelector(".theme");
modeswitch.addEventListener("click", () => {
	console.log("mode switch clicked");
	theme.classList.toggle("light");
	theme.classList.toggle("dark");
});

const darkCanvas = document.querySelector("div.dark");

for (let i = 0; i < 150; ++i) {
	const div = document.createElement("div");
	div.classList.add("star");

	const sizeFactor = Math.random();
	div.style.width = `${10 * sizeFactor}px`;
	div.style.height = `${10 * sizeFactor}px`;

	div.style.top = `${100 * Math.random()}%`;
	div.style.right = `${100 * Math.random()}%`;

	darkCanvas.appendChild(div);
}
