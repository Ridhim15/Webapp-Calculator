const LIGHT_BG_COLOR = "rgb(0, 0, 0)";
const DARK_BG_COLOR = "rgb(92,84,164)";

const mySky = klouds.create({
	selector: "#myCanvas",
	speed: 10,
});
mySky.setBgColor(DARK_BG_COLOR);

const modeswitch = document.querySelector(".mode-switch");
const theme = document.querySelector(".theme");

modeswitch.addEventListener("click", () => {
	console.log("mode switch clicked");
	theme.classList.toggle("light");
	theme.classList.toggle("dark");

	if (theme.classList.contains("light")) mySky.setBgColor(LIGHT_BG_COLOR);
	else mySky.setBgColor(DARK_BG_COLOR);
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
