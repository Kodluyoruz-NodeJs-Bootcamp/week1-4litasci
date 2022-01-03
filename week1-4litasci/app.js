function allowDrop(ev) {
    ev.preventDefault();
    //console.log("dragging1",ev.target.id)
    //console.log("dragging2",ev)
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    console.log("dragstart",ev)
    ev.dataTransfer.effectAllowed = "move";
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    console.log(ev.target.childNodes)
    console.log(ev.target)
    if(ev.target.childNodes.length > 0){
      ev.target.appendChild(document.getElementById(data));
    }else{
      console.log("same drop zone!")
    }
  }