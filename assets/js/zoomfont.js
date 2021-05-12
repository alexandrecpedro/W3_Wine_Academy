const incrementoDecremento = 2;
document.getElementById("aumentar-fonte").addEventListener("click", () => {
    document.querySelectorAll("h1, h2, h3, h4, h5, h6, p").forEach(function (el) {

        let fonteOriginal = parseInt(window.getComputedStyle(el).getPropertyValue("font-size"));
        let novaFonte = fonteOriginal + incrementoDecremento;
        el.setAttribute("style", "font-size: " + novaFonte + "px");
        console.log("a fonte foi " + fonteOriginal + ", e aumentada ficou " + novaFonte);
    });


});

document.getElementById("diminuir-fonte").addEventListener("click", () => {
    document.querySelectorAll("h1, h2, h3, h4, h5, h6, p").forEach((el) => {

        let fonteOriginal = parseInt(window.getComputedStyle(el).getPropertyValue("font-size"));
        let novaFonte = fonteOriginal - incrementoDecremento;
        el.setAttribute("style", "font-size: " + novaFonte + "px");
        console.log("a fonte foi " + fonteOriginal + ", e diminuida ficou " + novaFonte);
    });


});