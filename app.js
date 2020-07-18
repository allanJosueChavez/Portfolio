
// import SweetScroll from 'sweet-scroll';

window.addEventListener('load',()=>{
    const preload = document.querySelector('.preload');
    preload.classList.add('preload-finish');
})


window.sr = ScrollReveal();
    sr.reveal('.revealnav',{
        duration:9000,
        origin: 'bottom'

});
sr.reveal('.content-center',{
    duration:6000,
    origin: 'top',
    distance: '300px'

});


// document.addEventListener('DOMContentLoaded', () => {
  
// }, false);