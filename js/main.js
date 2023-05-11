window.addEventListener("load", (e)=>{
    var loader = document.querySelector('.load-back')
    loader.classList.toggle('close')
})



const toggleBtn = document.querySelector('.toggle-btn')
const toggleBtnIcon = document.querySelector('.toggle-btn i')
const CollapseMenu = document.querySelector('.collapse-menu')

toggleBtn.onclick = function(){
    CollapseMenu.classList.toggle('open')
    /*
    const isOpen = CollapseMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
    ?'bi bi-x-lg'
    :'bi bi-list'
    */
}

var link = document.querySelectorAll('.topbar nav .nav-link')
var menu = document.querySelector('.content')

for(var i = 0; i < link.length; i++){
    link[i].addEventListener('click', function(e){
        var div = this.parentNode.parentNode.parentNode
        if(this.classList.contains('actived')){
            return false
        }
        document.querySelector('.nav-link.actived').classList.remove('actived')
        
        this.classList.add('actived')
        div.querySelector('.content.actived').classList.remove('actived')

        div.querySelector(this.getAttribute('href')).classList.add('actived')
      /*  if(div.querySelector('.content').classList.contains('actived')){
            div.querySelector('.content').classList.remove('actived')
        } */

    })
}

var col_link = document.querySelectorAll('.collapse_link')

for(var i = 0; i < col_link.length; i++){
    col_link[i].addEventListener('click', function(e){
        var div = this.parentNode.parentNode.parentNode.parentNode
        if(this.classList.contains('actived')){
            return false
        }
        /*document.querySelector('.collapse_link.actived').classList.remove('actived')

        this.classList.toggle('actived')*/

        div.querySelector('.content.actived').classList.remove('actived')

        div.querySelector(this.getAttribute('href')).classList.toggle('actived')

        document.querySelector('.collapse-menu').classList.remove('open')

        /*toggleBtnIcon.classList.remove('bi bi-x-lg')
        toggleBtnIcon.classList.add('bi bi-list')*/
        
    })
}

const mouse = document.querySelector("#mouse");
const mouse_dot = document.querySelector("#mouse_dot");
const loadpage = document.querySelector('.load_page')
window.addEventListener("mousemove", (e) => {
    mouse.style.top = e.pageY + "px";
    mouse.style.left = e.pageX + "px";
    mouse_dot.style.top = e.pageY + "px";
    mouse_dot.style.left = e.pageX + "px";
});

const today_time = Date.now()

console.log(today_time)