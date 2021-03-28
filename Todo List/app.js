const input = document.getElementById('input');
const btn = document.getElementById('btn');
const list= document.getElementById('list');
const lst = document.getElementsByTagName("ul");

btn.onclick=function(e){
   const todoText = input.value;
   
   const li= document.createElement('li');
//    const button = document.createElement('button');
//    button.innerText="Delete";
//    ]
    
    
    //input----------------------------------
    
   li.innerText = todoText;
     if (todoText === '') {
    alert("You must write something!");
     }
    else{
    list.append(li);
    }
    input.value="";
   
    
    
    //Delete---------------------------------
    
    
   const Delete = document.createElement("Delete");
   const txt = document.createTextNode("Delete");
   Delete.className = "Delete";
   Delete.appendChild(txt);
   li.appendChild(Delete);
  
    
    
   var close = document.getElementsByClassName("Delete");
   var i;
   for (i = 0; i < close.length; i++) {
   close[i].onclick = function() {
   var listitam = this.parentElement;
   listitam.style.display = "none";
  }
   }
    
    
    
   //Edit---------------------------------------
    
    
    
    
   
   const Edit = document.createElement("Edit");
   const text = document.createTextNode("Edit");
   Edit.className = "edit";
   Edit.appendChild(text);
   li.appendChild(Edit)    
    
       
    
    
}





