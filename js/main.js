let taskInput = document.getElementById('taskInput');
let taskAddBtn = document.getElementById('taskAddBtn');
let noTask = document.getElementById('noTask');
let allTasks = document.getElementById('allTasks');
let invalidMessage =document.getElementById('invalidMessage')
let closeInvalidMessage=document.getElementById('closeInvalidMessage')

closeInvalidMessagefunc=()=>{
    invalidMessage.classList.add('none')
}
closeInvalidMessage.addEventListener('click' ,closeInvalidMessagefunc)
   
let addTask = ()=>{


taskData = taskInput.value
if(taskData.trim ()=='' ||taskInput.value.length <3) {
    invalidMessage.classList.remove('none')
}else{
    noTask.classList.add('none')    
  allTasks.innerHTML +=`
  <div class="alert alert-info">
  ${taskData }
  <button class="btn btn-danger delet float-right">Remove</button>
  </div>
  `;
  taskInput.value="";
}


}
document.addEventListener('click',function(e){
    if(e.target.classList.contains('delet')){
        e.target.parentElement.remove();
        if(allTasks.children.length==0){
            noTask.classList.remove('none')
        }
    }
})
taskAddBtn.addEventListener( 'click' , addTask )