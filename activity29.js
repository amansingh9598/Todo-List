let inp=document.querySelector("input");
let btn=document.querySelector("button");
let ul=document.querySelector("ul");
function create(){
    console.log(inp.value);
    let item=document.createElement("li");
    item.innerText=inp.value;
    ul.appendChild(item);
    inp.value="";
    let del=document.createElement("button");
    del.innerText="Delete";
    del.classList.add("delete");
    item.append(del);
    del.addEventListener("click",function(){

    });
}
btn.addEventListener("click",function(){
   create();
})
inp.addEventListener("keypress",function(event){
    if(event.key==="Enter"){
        create();
    }
})
ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let listitem=event.target.parentElement;
       listitem.remove();
       console.log("delete");

    }
});
