const main = document.querySelector('main')
const root = document.querySelector(':root')
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]
const result = document.getElementById('result')

result.addEventListener("keydown", function (ev) {
    ev.preventDefault()
    if (allowedKeys.includes(ev.key)) {
      result.value += ev.key
      return
    }
    if (ev.key === "Backspace") {
      result.value = result.value.slice(0, -1)
    }
    if (ev.key == "Enter") {
      calc()
    }
})
  
function insert(num){
    const result = document.getElementById('result')
    result.value += num

}

function calc(){
    
    let result = document.getElementById('result').value

    
    let calcular = eval(result)

    if(calcular){
        document.getElementById('result').value = calcular
        document.getElementById('resultCopy').value = calcular

    }   
}

function clean(){
    document.getElementById('result').value = ""    
}


document.getElementById('copy').addEventListener('click',function(){

    let copied = document.getElementById('resultCopy').value
    navigator.clipboard.writeText(copied)

    const btnClicked = document.getElementById('copy')

    btnClicked.style.color = '#50bd79'
    btnClicked.style.borderColor = '#50bd79'
    btnClicked.innerText = 'Copied'

})

document.getElementById('themeColorSwitch').addEventListener('click', function(){

    if (main.dataset.theme === "dark") {
        
        root.style.setProperty("--bg-color", "#fff")
        root.style.setProperty("--keys-color", "#2f7a6a")
        root.style.setProperty("--white-color", "#121516")
        root.style.setProperty("--btn-color", "#121516")
        root.style.setProperty("--btn-hoverColor", "#cdd9e4")

        main.dataset.theme = "light"
      } 
      else {
        
        root.style.setProperty("--bg-color", "#121516")
        root.style.setProperty("--keys-color", "#4dffd8")
        root.style.setProperty("--white-color", "#fff")
        root.style.setProperty("--btn-color", "#1d2224")
        root.style.setProperty("--btn-hoverColor", "#1d2224")

        main.dataset.theme = "dark"
      }

})

