let modalBtn = document.getElementById("modal-btn")
let modal = document.querySelector(".modal")
let closeBtn = document.querySelector(".close-btn")
modalBtn.onclick = function(){
  modal.style.display = "block"
}
closeBtn.onclick = function(){
  modal.style.display = "none"
}
window.onclick = function(e){
  if(e.target == modal){
    modal.style.display = "none"
  }
}

/*
        OR USE an anonymous function TOGETHER WITH THE addEventListener method
        const openBox = () => {
    modal.style.display = "block";
}

const closeBox = () => {
    modal.style.display = "none";
}

modalBtn.addEventListener("click", openBox);
closeBtn.addEventListener("click", closeBox);
*/
