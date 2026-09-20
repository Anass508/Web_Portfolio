const dotEl = document.getElementById("dot"),
	ringEl = document.getElementById("ring");
let csx = 0, csy = 0, crx = 0, cry = 0;

document.addEventListener("mousemove", (e) => {
	csx = e.clientX;
	csy = e.clientY;
	dotEl.style.left = e.clientX + "px";
	dotEl.style.top = e.clientY + "px";
});

(function animateCursor() {
	crx += (csx - crx) * 0.11;
	cry += (csy - cry) * 0.11;
	ringEl.style.left = crx + "px";
	ringEl.style.top = cry + "px";
	requestAnimationFrame(animateCursor);
})();

/* Détecte tout élément avec cursor:pointer et agrandit l'anneau
   au lieu de laisser le navigateur afficher le curseur pointer par défaut */
document.addEventListener("mouseover", (e) => {
	const target = e.target;
	if (getComputedStyle(target).cursor === "pointer") {
		ringEl.style.width = "50px";
		ringEl.style.height = "50px";
	}
});

document.addEventListener("mouseout", (e) => {
	const target = e.target;
	if (getComputedStyle(target).cursor === "pointer") {
		ringEl.style.width = "26px";
		ringEl.style.height = "26px";
	}
});
