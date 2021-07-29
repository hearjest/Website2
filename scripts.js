const themeToggleBtn=document.querySelector(".themeToggle");

themeToggleBtn.addEventListener("click",function(){
    document.body.classList.toggle('darkTheme');
});