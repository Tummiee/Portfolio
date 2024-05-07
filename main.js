
/* top scroll button with progrssive bar */
let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress")
    let progressValue = document.getElementById("progress-value")
    let pos = document.documentElement.scrollTop
    let calcHeight = document.documentElement.scrollHeight -
                     document.documentElement.clientHeight
    let scrollValue = Math.round((pos * 100) / calcHeight)
    if(pos>100){
        scrollProgress.style.display = "grid"
    }
    else{
        scrollProgress.style.display = "none"
    }
    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0
    })
    scrollProgress.style.background = `conic-gradient(#3cc1e2 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`
}

window.onscroll = calcScrollValue
window.onload = calcScrollValue

/* Typing effect */
const typed = new Typed('.text', {
    strings: ['Bakare Tunmise Elisha', 'EliDev', 'Frontend Engineer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
   loop: true
});

/* section selector to display style animation */
let sections = document.querySelectorAll('#animation');

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = scrollY;
        let offset = sec.offsetTop - 200;
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            sec.classList.add('show-animate')
        }
    })
}

/* Preloader gif anime */
var loader = document.getElementById("preloader");

window.addEventListener("load", function(){
    loader.style.display = "none"
})


/* contact form submission */
  const scriptURL = 'https://script.google.com/macros/s/AKfycbzeOw8k3dIVgF9K8O1JdNHfkfKRmW7tahypsjcXz_SHWgOb06X_8j0iClnCOVlkt3ak/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById('msg')

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = 'message sent successfully'
        setTimeout(function(){
            msg.innerHTML = ""
        }, 5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
