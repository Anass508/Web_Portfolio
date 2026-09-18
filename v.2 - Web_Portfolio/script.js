lucide.createIcons(); /* Pour ma bibliothèque Icon */

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

