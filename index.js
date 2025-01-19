const main = document.querySelector('main');
const root = document.querySelector(':root');
const html = document.querySelector('html')
const theme = document.getElementById('switchTheme')
const lang = document.getElementById('language')
const title = document.querySelector('h1')
const topText = document.querySelector('.text')
const guideLink1 = document.getElementById('guideLink1')
const guideLink2 = document.getElementById('guideLink2')
const guideLink3 = document.getElementById('guideLink3')
const guideLink4 = document.getElementById('guideLink4')
const aboutMe = document.querySelector('.myself')

    document.getElementById('switchTheme').addEventListener('click', function(){
    if(main.dataset.theme === 'dark'){
        root.style.setProperty('--color-background', '#fff')
        root.style.setProperty('--color-white', '#030207')
        root.style.setProperty('--color-blue', '#10649C')
        root.style.setProperty('--color-hover', '#3e293a')
        main.dataset.theme = 'light'
    } else {
        root.style.setProperty('--color-background', '#030207')
        root.style.setProperty('--color-white', '#fff')
        root.style.setProperty('--color-blue', '#1474b4')
        root.style.setProperty('--color-hover', '#3e293a')
        main.dataset.theme = 'dark'   
    }
})

document.getElementById('language').addEventListener('click', function(){
    if(html.dataset.lang === 'ptbr'){
        theme.innerHTML = 'Change theme light/dark'
        title.innerHTML = "Dev Portfolio"
        lang.innerHTML = 'Change Language'
        topText.innerHTML = "Hello, my name is Henrique Salazar da Silva <br> I am a programming student and a technology enthusiast."
        guideLink1.innerHTML = "About Me"
        guideLink2.innerHTML = "Academic Background"
        guideLink3.innerHTML = "Technologies"
        guideLink4.innerHTML = "Experience"
        aboutMe.innerHTML = "About Me"
        html.dataset.lang = 'en'
    } else {
        theme.innerHTML = 'Trocar tema claro/escuro'
        title.innerHTML = "Portfólio Dev"
        lang.innerHTML = 'Trocar Língua'
        topText.innerHTML = 'Olá, meu nome é Henrique Salazar da Silva <br> Sou estudante de programação e amante da tecnologia'
        guideLink1.innerHTML = "Sobre Mim"
        guideLink2.innerHTML = "Formação Acadêmica"
        guideLink3.innerHTML = "Tecnologias"
        guideLink4.innerHTML = "Experiência"
        html.dataset.lang = 'ptbr'
    }
})