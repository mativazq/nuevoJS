//Función que crea y busca los pokemon consumiendo la api
let buton=document.getElementById('button')

buton.addEventListener('click',()=>{
    let caja=document.getElementById('caja').value
    let img=document.getElementById('img')
    let p=document.getElementById('info')
    let xhttp=new XMLHttpRequest()
    xhttp.open("GET",`https://pokeapi.co/api/v2/pokemon/${caja}`)
    xhttp.send()

    xhttp.onreadystatechange=function () {
        if(this.readyState==4 && this.status==200)
        {
        let datoPokemon=JSON.parse( this.responseText)
        console.log(datoPokemon)
        img.setAttribute("src",datoPokemon.sprites.front_default)
        p.textContent=datoPokemon.name
        }
    }

})
