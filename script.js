window.addEventListener("load", () => {
	const sound = document.querySelectorAll(".sound");
	const panels = document.querySelectorAll(".panels div");
	const visuals = document.querySelector(".visuals");
	const color = [
		"violet",
		"darkorange",
		"skyblue",
		"brown",
		"lightgreen",
		"maroon"
	];

	panels.forEach((panel, index) => {
		panel.addEventListener("click", function() {
			sound[index].currentTime = 0;
			sound[index].play();
			createBubbles(index);
		})
	});


	const createBubbles = (index) => {
		const bubble = document.createElement("div");
		visuals.appendChild(bubble);
		bubble.style.backgroundColor = color[index];
		bubble.style.animation = "jump 1s ease";
		bubble.addEventListener("animationend", () => {
			visuals.removeChild(bubble);
		})
	}

});


