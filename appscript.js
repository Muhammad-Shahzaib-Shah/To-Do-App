const inputField = document.querySelector(".src");
const tod = document.querySelector(".tod")
let buttons = document.querySelector(".btn");
const getStorage =()=>{
    return JSON.parse(localStorage.getItem("Todo"));
}
let Ar =getStorage()|| [];
const storage =()=>{
    let search =inputField.value;
    Ar.push(search);
    Ar = [...new Set(Ar)];
    const local = localStorage.setItem("Todo" , JSON.stringify(Ar));
}
const showLocal = (curElem)=>{
    const divElement = document.createElement("div");
    divElement.classList.add(`divi`)
    divElement.innerHTML = `<li><h3>${curElem}</h3><button class="botn">Delete</button></li>`;
    tod.append(divElement)
    // console.log(curElem);
}

Ar.forEach((curElem) => {
    showLocal(curElem);
    
});
const addtodo = ()=>{
    let search =inputField.value.trim();
    if(search != "" && !Ar.includes(search)){
    showLocal(search)
    storage()
    inputField.value="";
    }
}
buttons.addEventListener("click" ,()=>{addtodo()});