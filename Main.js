const myFunction = () =>{

    let filter = document.getElementById('myInput').value.toUpperCase();//value we get and convert to upper case
  
    let ul = document.getElementById('myUL');
    let li = ul.getElementsByTagName('li');
  
    for(var i=0; i<li.length; i++){
    
      let a = li[i]//.getElementsByTagName('a')[0];     //take a in [i](li)
  
      let textValue = a.textContent || a.innerHTML;
  
        if(textValue.toUpperCase().indexOf(filter) > -1){
          li[i].style.display = '' ;
        }else{
          li[i].style.display = 'none';
        }
    }
  
  } 
  