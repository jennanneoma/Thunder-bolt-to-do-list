
var storedList=[]
var handle;
handle = document.getElementById("tasklist");


repop()


function add(){
    var taskInput=document.getElementById('taskInput')
    //addItem()
    storedList.push(taskInput.value)
    localStorage.setItem("storedList",JSON.stringify(storedList))
    repop()
}



function repop(){
    
    var data=localStorage.getItem('storedList');
    storedList=JSON.parse(data)
    if(storedList==null){
        storedList = []
        return;
    }
    handle.innerHTML=""
    var callBack= (e)=>{
        addItem(e)
    }

    storedList.forEach(callBack)
}

function clean(){
    
    var c = confirm("Are You Sure?")

    if(c){
        handle.innerHTML=""
        localStorage.clear()
    }
    // storedList.pop(storedList.length-1)
    // localStorage.setItem("storedList",JSON.stringify(storedList))
    // repop()
}




function addItem(Text){
    

    //creating an element
    var taskItem = document.createElement("div");
    var taskText = document.createElement("div")
    var taskButtons = document.createElement("span")
    var taskButton_done = document.createElement("button")
    var taskButton_options = document.createElement("button")

    // contextMenu
    var OptionsHandle=document.createElement("span")
    var contextMenu=document.createElement("div")
    var contextOption1=document.createElement("div")
    var contextOption2=document.createElement("div")
    // var contextOption3=document.createElement("div")

    // to add the inner text

    contextOption1.innerText="Edit"
    contextOption2.innerText="Delete"

    // storing contextoptions into the context menu

    contextMenu.appendChild(contextOption1)
    contextMenu.appendChild(contextOption2)

    // to add css

    contextMenu.classList.add("contextMenu")
    contextOption1.classList.add("option")
    contextOption2.classList.add("option")
    // contextOption3.classList.add("option")

    // to put the two buttons in the task buttons

    taskButtons.appendChild(taskButton_done)
    OptionsHandle.appendChild(taskButton_options)
    OptionsHandle.appendChild(contextMenu)
    taskButtons.appendChild(OptionsHandle)


    //put The two buttons into the Task Buttons
    taskButtons.appendChild(taskButton_done);
    //taskButtons.appendChild(taskButton_options);
    //Add our Text And buttons to Task item
    taskItem.appendChild(taskText)
    taskItem.appendChild(taskButtons)
    //Add Text
    taskText.innerText =Text
    //Css button Class
    taskButton_done.classList.add("btnNormal")
    taskButton_options.classList.add("btnNormal")
    //Text Btn
    taskButton_done.innerText="Done"
    taskButton_options.innerText="Options"
    taskItem.classList.add("utilHandle","taskItem")
    handle.appendChild(taskItem)

    var action = ()=>{
        var index = storedList.indexOf(Text)
        storedList.splice(index, 1);
        localStorage.setItem("storedList",JSON.stringify(storedList))
        repop()
    }
    taskButton_options.onclick=()=>{
        contextMenu.classList.toggle("context-show")
    }
    taskButton_done.onclick =  action
    contextOption2.onclick=action

    var edit=()=>{
        var newText= prompt("Edit your task",Text)
        taskText.innerText=newText
        var index = storedList.indexOf(Text)
        storedList[index]=newText

        
        localStorage.setItem("storedList",JSON.stringify(storedList))
        repop()
        


    }
    contextOption1.onclick=edit


    
}




