//boton menu nav

var activeBtn = document.querySelector('.bars_btn');
activeBtn.addEventListener('click',function(){
    activeBtn.classList.toggle('active');
})

//typing del titulo

var typingEffect = new Typed(".multiText",{
strings : ["Tomás","analista","desarrollador","programador"],
loop : true,
typeSpeed : 100,
backSpeed : 80,
backDelay : 1500
})
