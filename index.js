let count = 0;
let countEl = document.getElementById("paragraph-el");
let saveEl = document.getElementById("paragraph2-el");
function increment(){
    count += 1;
    countEl.textContent = count
} 
function save(){
     let saveCount = count + "  -";
     saveEl.textContent =  saveEl.textContent + saveCount;  
     document.getElementById("paragraph-el").textContent = 0; 
     count = 0;   
}