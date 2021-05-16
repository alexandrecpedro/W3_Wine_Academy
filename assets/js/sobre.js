const participantes =  document.querySelector('.read-more-container');

participantes.addEventListener('click', e =>{

    const current = e.target;

    const isReadMoreBtn = current.className.includes('read-more-btn');

    if(!isReadMoreBtn) return;

    const currentText = e.target.parentNode.querySelector('.read-more-text');

    currentText.classList.toggle('read-more-text--show');

    current.textContent = current.textContent.includes('Read More') ? "Saiba mas..." : "Saiba menos...";

})