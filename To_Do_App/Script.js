const item=document.querySelector("#item");
const todobox=document.querySelector("#to-do-box");
item.addEventListener("keyup",function(event){
    if(event.key=="Enter")
    {
addToDo(this.value);
item.value="";
    }
});
const addToDo=(item)=>{
const listItem=document.createElement("li");

listItem.innerHTML=`

${item}
<i class="fas fa-times"></i>`
todobox.appendChild(listItem);
listItem.addEventListener("click",function(){
    this.classList.toggle("done");
})
listItem.querySelector("i").addEventListener("click",function(){
    listItem.remove();
    
})
}