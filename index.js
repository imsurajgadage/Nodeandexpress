var rect = require('./rectangle');

function solveRect(l,b){
  console.log("solving for l="+ l +" and b="+ b);
  rect(l,b,(err,rectangle)=>{
    if(err){
      console.log("Error",err.message);
    }
    else{
      console.log("solving for Area "+rectangle.area());
      console.log("solving for Perimeter "+rectangle.perimeter());
    }
  });
  console.log("This statement is after the callback")
}

solveRect(2,3);
solveRect(4,5);
solveRect(-1,3);
solveRect(0,6);
