

//  const taskAdd = {
//    body: newTask
//  }

const taskAdd=[];

 function newTask() {
  document.querySelector('#task').addEventListener('click',function(e){
    if (e.target.className ==="remove") {
      e.target.parentNode.remove();
    }
    if (e.target.className === "done") {
     e.target.style.textDecoration = "line-through";
    }
  })
 
  let newString = document.createElement('li');
  let newButton = document.createElement('button');
  let textArea = document.querySelector('.input');
  let newButtonDone = document.createElement('button');
 
   newButton.textContent = 'Удалить';
   newString.innerHTML = textArea.value;
   newButton.classList.add('remove');

   newButtonDone.textContent = 'Выполнено';
   newButtonDone.classList.add('done');


   if (textArea.value === '') {
     alert('Введите задание');
   } else {
    taskAdd.push(textArea.value);
    textArea.value = '';
  
  
    const local = JSON.parse(localStorage.getItem('taskAdd'))||[];
      localStorage.setItem('taskAdd',JSON.stringify(taskAdd));
  
     task.appendChild(newString);
     newString.appendChild(newButton);
     newString.appendChild(newButtonDone);
    console.log(local);
    
   }
 
   // Clean
 
 }


 document.getElementsByClassName('button')[0].onclick = newTask;