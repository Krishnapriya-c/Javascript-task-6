function fun1(){
var myVar = document.getElementById("in1").value;
var myString = "";
var i=1;
    document.getElementById("result1").innerHTML = ''

while(i<=10)
   {
	var k = i*myVar;
	console.log(k)
    var myString = i + " x " + myVar + " = " + k + "<br>";   
    document.getElementById("result1").innerHTML += myString;
    i++;
  }
}
function fun2()	{
	var myVar = document.getElementById("in2").value;
	// var last = "";
	var total = 1;
	document.getElementById("result2").innerHTML = ''
    for(i = myVar; i > 1; i--) 
     {
    	
      document.getElementById("result2").innerHTML= total*=i;
       
     }
}

function fun3(){
var num1 = document.getElementById("in3").value;
var num2 = document.getElementById("in4").value;
var tot="";
var tot = num1;
 do
 {
document.getElementById("result3").innerHTML += tot + "<br>";
tot++;
 }
 while(tot <= num2)
 
}
function fun4() 
{
   var a = document.getElementById("in5").value
   var num = [a];
  num.forEach(function(a){
     
     document.getElementById("result4").innerHTML = "Welcome"+" " +a +"<br>";

    });
}   
 
function fun5()
{
 var obj ={name: "", age: ""}; 
 obj.name = document.getElementById("in6").value;
 obj.age = document.getElementById("in7").value;
 var itr;
 var txt= "";
for (itr in obj)  
    { 
       txt += obj[itr] + " ";
        document.getElementById("result5").innerHTML= "Your fullname is" + " " +txt;
    } 
}

	
function getout(){
  location.replace("index.html")
}