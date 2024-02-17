function toggleMode () {
    const html = document.documentElement
        html.classList.toggle('light')

        //pegar a tag img
        const img = document.querySelector("#profile img")

        //subistituir a imgagem 
   if (html.classList.contains('light')) {
        //se tiver light mode, adiconar imagen light
        img.setAttribute('src', './assets/light mode pic.png')
   } else {
        //se tiver sem light mode, mater imagem normal
        img.setAttribute('src', './assets/image dark mode.png')
}

   

    


    
    
    
}