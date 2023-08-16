
var storedList=[]
var handle;
handle = document.getElementById("tasklist");
addItem("test")

// repop()


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
    var contextOption3=document.createElement("div")

    // to add the inner text

    contextOption1.innerText="TestText"
    contextOption2.innerText="TestText"
    contextOption3.innerText="TestText"

    // storing contextoptions into the context menu

    contextMenu.appendChild(contextOption1)
    contextMenu.appendChild(contextOption2)
    contextMenu.appendChild(contextOption3)

    // to add css

    contextMenu.classList.add("contextMenu")
    contextOption1.classList.add("option")
    contextOption2.classList.add("option")
    contextOption3.classList.add("option")

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

    taskButton_done.onclick = ()=>{
        var index = storedList.indexOf(Text)
        storedList.splice(index, 1);
        localStorage.setItem("storedList",JSON.stringify(storedList))
        repop()
    }
    taskButton_options.onclick=()=>{
        contextMenu.classList.toggle("context-show")
    }
}




