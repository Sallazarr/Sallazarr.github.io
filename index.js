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
const guideText1 = document.getElementById('guideText1')

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
        guideText1.innerHTML = 'Programming student seeking new opportunities in the IT field, with great enthusiasm for learning and growing. Currently, I am deepening my knowledge at QI Faculdades & Escola Técnica, as well as specializing in programming through the online course from OneBitCode.<br><br>I had the opportunity to work as an intern at the Court of Justice of the State of Rio Grande do Sul, where I developed practical skills in process organization and teamwork, in addition to enhancing my interpersonal communication in a professional environment.<br><br>I am looking for new opportunities to apply my web development knowledge, gain more hands-on experience, and grow in the field to become a more competent developer.'
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
        aboutMe.innerHTML = "Sobre Mim"
        guideText1.innerHTML = 'Estudante de Programação em busca de novas oportunidades na área de TI, com grande disposição para aprender e evoluir. Atualmente, estou aprofundando meus conhecimentos na QI Faculdades & Escola Técnica, além de me especializar em programação por meio do curso online da OneBitCode.<br><br>Tive a oportunidade de atuar como estagiário no Tribunal de Justiça do Estado do Rio Grande do Sul, onde desenvolvi habilidades práticas em organização de processos e trabalho em equipe, além de aprimorar minha comunicação interpessoal em um ambiente profissional.<br><br>Estou em busca de novas oportunidades para aplicar meus conhecimentos em desenvolvimento web, adquirir mais experiência prática e crescer na área para me tornar um desenvolvedor mais competente.'
        html.dataset.lang = 'ptbr'
    }
})