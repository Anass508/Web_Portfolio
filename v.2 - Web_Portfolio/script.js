lucide.createIcons(); /* Pour ma bibliothèque Icon */

/*---------------------- Animation Curseur  -----------------------*/

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

/* Repère une seule fois, au chargement, tous les éléments qui ont
   réellement cursor:pointer dans le CSS (avant qu'on les neutralise),
   puis force leur curseur natif à "none" en inline (donc plus besoin
   de !important global, qui empêchait toute détection ensuite). */
function markPointerElements() {
	document.querySelectorAll("*").forEach((el) => {
		if (getComputedStyle(el).cursor === "pointer") {
			el.dataset.customCursor = "pointer";
			el.style.cursor = "none";
		}
	});
}
markPointerElements();

document.addEventListener("mouseover", (e) => {
	if (e.target.closest('[data-custom-cursor="pointer"]')) {
		ringEl.style.width = "50px";
		ringEl.style.height = "50px";
	}
});

document.addEventListener("mouseout", (e) => {
	if (e.target.closest('[data-custom-cursor="pointer"]')) {
		ringEl.style.width = "26px";
		ringEl.style.height = "26px";
	}
});


/*---------------------- fonction grid_2_  -----------------------*/

let btn_grid_2 = document.getElementsByClassName("btn_grid2")[0].querySelectorAll("div") ; 


for (let i=0;i<btn_grid_2.length;i++) {

    btn_grid_2[i].addEventListener('click', function (){
   
        let btn_svg = btn_grid_2[i].querySelectorAll("svg"); 

        for (let z=0; z<btn_svg.length ;z++) {
            
            if (btn_svg[z].classList.contains("btn_option_desactive") ) {
                btn_svg[z].classList.remove("btn_option_desactive");
                btn_svg[z].classList.add("btn_option_active");
            }
            else {
                btn_svg[z].classList.remove("btn_option_active");
                btn_svg[z].classList.add("btn_option_desactive");
            }
        }
    });

}



/*---------------------- fonction burger_menu  -----------------------*/

/* Animation du burger-menu */

let btn=document.querySelector('.btn-menu');

btn.addEventListener('click', function (){
    btn.classList.toggle('active'); /* toggle sert  a ajouter ou enlever la class active lorque que l'on clique dessus */
});

/* Options du burger-menu */

let btn_opt = document.getElementsByClassName("btn-menu")[0] ; 
let opt=document.getElementsByClassName("btn_option")[0];

btn_opt.addEventListener('click', function (){

    if ( btn_opt.style.top != "10%"){
        btn_opt.style.top="10%";
        btn_opt.style.transition="0.5s";
    }
    else{
        btn_opt.style.top="40%";
        btn_opt.style.transition="0.5s";
    }
    
    if (opt.classList.contains("btn_option_desactive") ) {
        opt.classList.remove("btn_option_desactive");
        opt.classList.add("btn_option_active");
    }
    else if ( opt.classList.contains("btn_option_active") ) {
        opt.classList.remove("btn_option_active");
        opt.classList.add("btn_option_desactive");
    }
    
});




/*----------------------   -----------------------*/

/* [0] car getElementsByClassName renvoie pas un élément mais une liste. */
let tab_links = document.getElementsByClassName('tab-titles')[0].querySelectorAll('p') ;


for ( let i=0 ; i < tab_links.length ; i++ ) {

   tab_links[i].addEventListener('click' , function () {

        if ( tab_links[i].classList.contains("active-link") === false ) {

            let tab_active = document.getElementsByClassName('active-link')[0];
            let tab_contents = tab_active.getAttribute('data-tab'); /* getAttribute pour data-tab au lieu de prend le textContent qui peux changer */
            
            document.getElementById(tab_contents).classList.remove("active-tab"); /* enleve les menu actives */
            tab_active.classList.remove("active-link");

            tab_links[i].classList.add("active-link"); 

            let n_tab_contents = tab_links[i].getAttribute('data-tab');
            document.getElementById(n_tab_contents).classList.add("active-tab");
        }
   }); 

}

/*---------------------- Animation pour les carte Mes Projets  -----------------------*/


document.addEventListener('DOMContentLoaded', () => {
  const cardWraps = document.querySelectorAll('.carte-wrap');

  cardWraps.forEach((cardWrap) => {
    const card = cardWrap.querySelector('.carte');
    const cardBg = cardWrap.querySelector('.carte-bg'); 
    
    
    const imageUrl = cardWrap.getAttribute('data-image');
    if (imageUrl) {
      cardBg.style.backgroundImage = `url(${imageUrl})`;
    }

    let mouseLeaveTimeout;

    cardWrap.addEventListener('mousemove', (e) => {
      const width = cardWrap.offsetWidth;
      const height = cardWrap.offsetHeight;
      
      
      const rect = cardWrap.getBoundingClientRect();
      const mouseX = e.clientX - rect.left - width / 2;
      const mouseY = e.clientY - rect.top - height / 2;

      const mousePX = mouseX / width;
      const mousePY = mouseY / height;

      
      const rX = mousePX * 30;
      const rY = mousePY * -30;
      card.style.transform = `rotateY(${rX}deg) rotateX(${rY}deg)`;
      
      
      const tX = mousePX * -40;
      const tY = mousePY * -40;
      cardBg.style.transform = `translateX(${tX}px) translateY(${tY}px)`;
    });

    cardWrap.addEventListener('mouseenter', () => {
      clearTimeout(mouseLeaveTimeout);
    });

    cardWrap.addEventListener('mouseleave', () => {
      mouseLeaveTimeout = setTimeout(() => {
        card.style.transform = 'rotateY(0deg) rotateX(0deg)';
        cardBg.style.transform = 'translateX(0px) translateY(0px)';
      }, 1000);
    });
  });
});
