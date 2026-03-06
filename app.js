function  check(){
    let input = document.getElementById("num").value; 
    let message = document.getElementById("message");
    let num =parseInt(input);
    let computernumber =Math.floor(Math.random()* 10) +1;
    console.log(computernumber); 
if(!num || num < 1 || num > 10){
    message.textContent = "Please enter a number between 1 and 10 💕";
    
}  
else if(num === computernumber){
    message.textContent = "🎉 Yes! You got it! Amazing! 🎀";
      message.className = "success";
}
else if(num <  computernumber){
    message.textContent = "Too low... try a bigger number ♡";
    message.className = "";
} 
else if(num > computernumber) 
  {
  message.textContent = "Too high... try a smaller number ♡";
  message.className = "";
}
document.getElementById("num").value= "";
}

