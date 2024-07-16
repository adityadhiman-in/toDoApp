const inputBox = document.getElementById("inputBox");
const listContainer = document.getElementById("listContainer");
const btn = document.getElementById("button");

btn.addEventListener("click", () => {
    const inputValue = inputBox.value.trim();
    if (inputValue !== "") {
        let li = document.createElement("li");
        li.textContent = inputValue;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        inputBox.value = "";
        saveData();

    } else {
        alert("Please enter a value"); 
    }
});


listContainer.addEventListener("click", (event)=>{
    if(event.target.tagName === "LI"){
        event.target.classList.toggle("checked");
        saveData();

    }
    else if(event.target.tagName === "SPAN"){
        event.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();