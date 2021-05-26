const participantes =  document.querySelector('.read-more-container');

participantes.addEventListener('click', e =>{

    const current = e.target;

    const isReadMoreBtn = current.className.includes('mostrar');

    if(!isReadMoreBtn) return;

    const currentText = e.target.parentNode.querySelector('.mostrar-mas');

    currentText.classList.toggle('mostrar-mas--show');

    current.textContent = current.textContent.includes('Mostrar mais') ? "Mostrar menos..." : "Mostrar mais";

})


/*
const participantes =  document.querySelector('.read-more-container');
const content = document.getElementById("content")
const show = document.getElementById("mostrar")

show.onclick = function(){
    if (content.className == "open"){
        content.className ="";
        show.innerHTML = "Mostrar mas"
    } else {
        content.className = "open";
        show.innerHTML ="Mostrar menos"
    }
}
*/

