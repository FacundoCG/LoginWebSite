let mail = 'facu@gmail.com'
let password = 'facu123'

function iniciar(){
    let miMail = document.getElementById('correo').value;
    let miPassword = document.getElementById('password').value;
    if (miMail == mail && miPassword == password){
        let bloque = document.getElementById('cuadro')
        let bloqueGrande = document.querySelector('section')
        bloque.style.display = 'none';

        const titulo = document.createElement('h1')
        const parrafo = document.createElement('p')
        const subparrafo = document.createElement('p')
        const boton = document.createElement('button')
        const linea = document.createElement('br')

        titulo.textContent='Breve biografía de Facundo Coronel'
        parrafo.textContent = 'Estudiante de Ciencias de la Computación de la UBA. Programador joven que busca aprender y mejorar. Entusiasta de la matemática teórica.'
        subparrafo.textContent = '17 años, argentino.'
        boton.textContent = 'Mostrar foto'

        boton.addEventListener('click',mostrar)

        titulo.className = 'titulo'
        parrafo.className = 'parrafo'
        subparrafo.className = 'parrafo'
        boton.className = 'boton'

        bloqueGrande.appendChild(titulo)
        bloqueGrande.appendChild(linea)
        bloqueGrande.appendChild(linea)
        bloqueGrande.appendChild(parrafo)
        bloqueGrande.appendChild(subparrafo)
        bloqueGrande.appendChild(linea)
        bloqueGrande.appendChild(boton)

        bloqueGrande.style.display = 'block'
        }
    else{
       document.getElementById('error').innerHTML = 'Mail o contraseña incorrecto. Intente de nuevo.'
       document.getElementById('error').style.color = '#f7ad68'
    }
}

let mostrar = ()=>{
    let bloqueGrande = document.querySelector('section')
    bloqueGrande.innerHTML += '<br>' + '<img src="https://significadodenombres.wiki/wp-content/uploads/2017/01/facundo.png">'
}


