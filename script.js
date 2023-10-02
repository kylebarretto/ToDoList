//assignments of iputBox and listContainer from the HTML
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


/*Function: AddTask - if the inputBox is empty, a warning will pop up; else it creates a new element,
li, and appends it to the HTML
Param: none
Return: nones
 */
function addTask(){
    if(inputBox.value === ''){
        alert("Nothing has been written");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    //Clear field
    inputBox.value ="";
    saveData();
}

//if the an element in the list is clicked it will be checked, else if the x is clicked that element will be removed from thet list
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

/*Function: saveData - saves the data, such that even if the application is closed, the list and its format is saved 
Param: none
Return: none
 */
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
/*Function: GetData - fetches the data and populates the innerHTML
Param: none
Return: none
 */
function getData(){
    listContainer.innerHTML = localStorage.getItem("data");
}
getData();