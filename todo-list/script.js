const timeContainer = document.createElement("div")
const date = new Date()
const days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"]
const day = days[date.getDay()]

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const month = months[date.getMonth()]

const calendar_day = date.getDate();
const year = date.getFullYear();

const data = document.createTextNode(`${day} ${month} ${calendar_day} ${year}`)

timeContainer.style.color = "#ff9a9e"
timeContainer.style.fontSize = "18px"
timeContainer.style.marginTop = "15px"

timeContainer.appendChild(data) 
const underline = document.getElementById("Underline")
const container = document.getElementById("Container")
container.insertBefore(timeContainer, underline)

const add = document.getElementById("plus")


const createNewBox = (todo) => {
    task.value = ""
    console.log(todo);
    const input = document.getElementById("input")
    const todoNode = document.createTextNode(todo)
    container.insertBefore(todoNode, input)

    const newBox = document.createElement("div")
    newBox.style.border = "1px solid grey"
    newBox.style.width = "340px"
    newBox.style.height = "30px" 
    newBox.style.textAlign = "left"
    newBox.style.marginTop = "5px"
    newBox.style.marginBottom = "5px"
    newBox.style.borderRadius = "5px"

    const check = document.createElement("input")
    check.setAttribute("type", "checkbox")
    check.style.marginRight = "20px"
    check.style.marginLeft = "10px"
    check.style.marginTop = "7px"
    newBox.appendChild(check)
    newBox.appendChild(todoNode)
    
    const outerContainer = document.getElementById("outerContainer")
    outerContainer.appendChild(newBox)

    // check.onchange = () => {
    //     outerContainer.removeChild(newBox)
    // }

    check.addEventListener("change", () => {
        outerContainer.removeChild(newBox)

        const memory = JSON.parse(sessionStorage.getItem("memory"));
        console.log(todo)
        const memory1 = memory.filter(e => e !== todo)
        sessionStorage.setItem("memory", JSON.stringify(memory1))
    })    
}

add.onclick = () => {
    const todo = document.getElementById("task").value;
    createNewBox(todo);
    const memory = JSON.parse(sessionStorage.getItem("memory"))
    memory.push(todo)
    sessionStorage.setItem("memory", JSON.stringify(memory))
};




window.onload = () => {
    const memory = JSON.parse(sessionStorage.getItem("memory"));
    if (!memory) {
        sessionStorage.setItem("memory", JSON.stringify([]));
    } else {
        memory.map((element) => {
          createNewBox(element);
        });
    }
    
}


