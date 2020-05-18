/**
 * 1. Написать код, чтобы при нажатии на li его текст становился жирным, 
    при нажатии вне ul выделение слетает (на пустом месте страницы)
 */
let liEl = document.getElementById("first");
let liEls = document.getElementById("second");

liEl.addEventListener("click", addBold);
liEls.addEventListener("click", addBolds);

function addBold () {
   liEl.classList.add("heavy");
};
function addBolds () {
   liEls.classList.add("heavy");
};

let ulElem = document.getElementById("example");
ulElem.addEventListener("click", removeBold);
function removeBold () {
   liEls.classList.remove("heavy") || liEl.classList.remove("heavy");
};


/**
 * 2. Написать код, чтобы при нажатии на li 
 *  2.1 его текст становился жирным 
 *  2.2 его текст (!) выводился в alert 
    
    при нажатии вне ul выделение слетает (на пустом месте страницы)
 */

