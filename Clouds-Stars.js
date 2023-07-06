/* Generating Stars */
const darkCanvas = document.querySelector("div.dark");

for (let i = 0; i < 300; ++i) {
	const div = document.createElement("div");
	div.classList.add("star");

	const sizeFactor = Math.random() * 1.5;
	div.style.width = `${5 * sizeFactor}px`;
	div.style.height = `${5 * sizeFactor}px`;

	div.style.top = `${100 * Math.random()}%`;
	div.style.right = `${100 * Math.random()}%`;

	darkCanvas.appendChild(div);
}


/* For Clouds */
const body = document.querySelector('body');
const LIGHT_BG_COLOR = "rgb(217 37 73)";
const DARK_BG_COLOR = "rgb(13 57 129)";

const mySky = klouds.create({
	selector: "#myCanvas",
	speed: 10,
});
mySky.setBgColor(DARK_BG_COLOR);

/* Switching Themes */
const modeswitch = document.querySelector(".mode-switch");
const theme = document.querySelector(".theme");

modeswitch.addEventListener("click", () => {
	console.log("dark-themed-body");
	body.classList.toggle("dark_theme");
	theme.classList.toggle("light");
	theme.classList.toggle("dark");
	if (theme.classList.contains("light")) mySky.setBgColor(LIGHT_BG_COLOR);
	else mySky.setBgColor(DARK_BG_COLOR);
});