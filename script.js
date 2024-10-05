var input = document.querySelector("#input");
var btn = document.querySelector("#btn");
var text = document.querySelector(".text");


btn.addEventListener("click", () => {
  if(input.value!=0){
  var tasktxt = document.createElement("h4");
  tasktxt.innerHTML = `${input.value} <i class="ri-close-fill"></i>`;
  text.appendChild(tasktxt);
  input.value = " ";

  var delet = tasktxt.querySelector(".ri-close-fill");
  delet.addEventListener("click", () => {
   tasktxt.remove();
    });
    var count = 0
    tasktxt.addEventListener("click", () => {
        if(count == 0){
        tasktxt.style.textDecoration = "line-through";
        tasktxt.style.backgroundColor = "#233576"
        count = 1;
       }
       else{
        tasktxt.style.textDecoration = "none";
        tasktxt.style.backgroundColor = "#4F75FF"
        
        count = 0;
       }
    })
  }
  else{
    alert("fill the input tag");
  };
});

