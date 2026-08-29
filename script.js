console.log("hello console");


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