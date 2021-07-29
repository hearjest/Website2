const themeToggleBtn=document.querySelector(".themeToggle");

themeToggleBtn.addEventListener("click",function(){
    document.querySelector('#MainContainer').classList.toggle('darkTheme');
});