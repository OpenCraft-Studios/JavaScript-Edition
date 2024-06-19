/*
 * This file is part of the project OpenCraft JavaScript
 * Project Link: <https://github.com/OpenCraft-Studios/JavaScript-Edition>
 * If you distribute this file, please, don't quit this copyright notes.
 * Thank you for watching my code!
 */

const title = "Minecraft Javascript Edition";
var padding = { measurement: "px" };
var splashes = [
	"Since 2021!",
	"My old account was CiroDOS",
	"GitHub CiroZDP!",
	"Now with reddit included!",
	`I can read your mind, you're on ${new Date().getFullYear()}!`,
	btoa("Can you buy me a coffee?"),
	"You can always get help from OpenCraft Feedback",
	"Bedrock style implemented!",
	"These splashes are going to be informative!",
	"EaglerCraft removed!"
];

var range_padding_button;

changeTitle = (docTitle) =>
	document.querySelector("title").innerText = docTitle;

function topBarSettingsPaddingChanger() {
	console.group("Changing top bar size...");

	let topbar = document.getElementById("settings-topbar");
	let parsed_json = JSON.parse(topbar.getAttribute("data"));

	console.log(`Getted padding data: ${JSON.stringify(parsed_json)}`);
	let padding = `${Math.calcPercentage(window.range_padding_button.value, parsed_json.padding.quantity).toString()}${parsed_json.padding.measurement}`;
	console.log(`Padding: ${padding}`);

	topbar.style.padding = padding;

	console.log("Done!");
	console.groupEnd();
}

class WebAspect {
	static load() {
		console.group("Working on graphics...");
		window.range_padding_button = window.document.getElementById("btn_range_padding");
		range_padding_button.addEventListener(
			"change", topBarSettingsPaddingChanger, false
		);

		window.showSplashes();
		topBarSettingsPaddingChanger();
		window.moveSplashes();
		console.log("Done!");
		console.groupEnd();
	}
}



function moveSplashes() {

	let phases = [
		{
			quantity: 1.6,
			measurement: "rem"
		},
		{
			quantity: 1.61,
			measurement: "rem"
		},
		{
			quantity: 1.62,
			measurement: "rem"
		},
		{
			quantity: 1.63,
			measurement: "rem"
		},
		{
			quantity: 1.64,
			measurement: "rem"
		},
		{
			quantity: 1.65,
			measurement: "rem"
		},
		{
			quantity: 1.66,
			measurement: "rem"
		},
		{
			quantity: 1.67,
			measurement: "rem"
		},
		{
			quantity: 1.68,
			measurement: "rem"
		},
		{
			quantity: 1.69,
			measurement: "rem"
		},
		{
			quantity: 1.7,
			measurement: "rem"
		},
		{
			quantity: 1.69,
			measurement: "rem"
		},
		{
			quantity: 1.68,
			measurement: "rem"
		},
		{
			quantity: 1.67,
			measurement: "rem"
		},
		{
			quantity: 1.66,
			measurement: "rem"
		},
		{
			quantity: 1.65,
			measurement: "rem"
		},
		{
			quantity: 1.64,
			measurement: "rem"
		},
		{
			quantity: 1.63,
			measurement: "rem"
		},
		{
			quantity: 1.62,
			measurement: "rem"
		},
		{
			quantity: 1.61,
			measurement: "rem"
		},
		{
			quantity: 1.6,
			measurement: "rem"
		}
	]

	let s_index = 0;
	let m_index = phases.length - 1;

	var splash_txt = document.getElementById("splash-text");

	setInterval(function () {
		splash_txt.style.fontSize = `${phases[s_index].quantity}${phases[s_index].measurement}`;
		if (s_index == m_index) {
			s_index = 0;
		} else {
			s_index++;
		}
	}, 100);

}

function showSplashes() {
	let splash;

	// ROUND MATH.RANDOM() FUNCTION
	let num1 = Math.randoming(splashes.length, 0);

	if (splashes.length < 1) {
		splashes[0] = "Missingno."; // Reference to pokemon
	} else
		splash = splashes[num1];

	document.getElementById("splash-text").innerText = splash;
}

function mainAnimations() {
	console.group("Menu animations");
	let getCSSProperty = (property) => `url(${property})`;

	let properties = { 'minecraft:assets/textures/gui/wallpaper.movement': 'assets/minecraft/textures/gui/gifWallpaper.gif', 'minecraft:assets/textures/gui/wallpaper.static': 'assets/minecraft/textures/gui/staticWallpaper.png' };
	let Animation = { ENABLED: getCSSProperty(properties['minecraft:assets/textures/gui/wallpaper.movement']), DISABLED: getCSSProperty(properties['minecraft:assets/textures/gui/wallpaper.static']) };
	let Animation_Time = 1.5;

	console.log("Charged animations");

	// Set default image to an png image
	(windows['minecraft:window/main_menu'].htmlobj).style.backgroundImage = Animation.ENABLED;
	console.log("Changed background with: [minecraft.animation.movement]");

	// Timerize
	setTimeout(function () {
		// Change image to static/png image
		console.group("Animations done");

		console.log("Change resource: [minecraft:window/main_menu] styles with minecraft:animation('none')");
		(windows['minecraft:window/main_menu'].htmlobj).style.backgroundImage = Animation.DISABLED;
		console.log("Successfully changed styles!");

		console.groupEnd();
	}, Animation_Time * 1000)

	console.groupEnd();
}