console.log("ok");


/* Animation du burger-menu */

let btn=document.querySelector('.btn-menu');

btn.addEventListener('click', function (){
    btn.classList.toggle('active'); /* toggle sert  a ajouter ou enlever la class active lorque que l'on clique dessus */
});
