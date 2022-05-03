const colorInput = document.getElementById('color-input')
const selectEl = document.getElementById('select')
const divAPI = document.getElementById('load-api')
const buttonEl = document.getElementById('get-scheme')
const formEl = document.getElementById('form')

let selectValue = ""

let hexArray = []
let html = ""





function render(){
    hexArray.map((hex) =>{
       html += `<div class="hex-bar"  style="background-color:${hex.hex.value}; width:20%; height:100%;"></div>`   
       return html 
    })    
  
    divAPI.innerHTML = html
    html = ""
}

buttonEl.addEventListener('click', function (event){
    let colors = colorInput.value.replace("#","")
    event.preventDefault()
    fetch(`https://www.thecolorapi.com/scheme?hex=${colors}&mode=${selectEl.value}&count=5`)
    .then(Response => Response.json())
    .then(data => {
        hexArray = data.colors
        render()
    })
})

