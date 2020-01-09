function fun1(){
var p1= document.getElementById('pwd').value;
var p2= document.getElementById('pwd1').value;
var p3= document.getElementById('usr').value;
  if(p1 == '' && p2 == '' && p3 == '' || p2 == '' && p3 == '') {
  }
else if(p1 == p2) 
  {
  	alert("login success")
    console.log('login success')
  	location.replace("task-loop.html")
    return false;
  }
  else
  {
  	alert("Incorrect Password")
  	console.log('else')
    return false;
   }

}
