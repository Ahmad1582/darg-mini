const boxItems = document.querySelectorAll(".box-item");
const boxWrapper = document.querySelectorAll(".box-wrapper");

boxItems.forEach((event) => {
  event.addEventListener("dragstart", () => {
    event.classList.add("draggable");
  });
  event.addEventListener("dragend", () => {
    event.classList.remove("draggable");
  });
});
 
boxWrapper.forEach((event)=>{
    event.addEventListener("dragover",()=>{
        const draggable=document.querySelector(".draggable")
        event.append(draggable)
    })
})