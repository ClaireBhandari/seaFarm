
let squares = document.querySelectorAll(".square");
let box = document.querySelectorAll ("#box");
let menu = document.querySelector("#menu");
let basket = document.querySelector("#basket");
let red = document.querySelector("#red");
let green = document.querySelector("#green");
let uls = menu.children[0];
let lis = uls.children;
let ropecount1 = document.querySelector("#ropecount");
let plantcount1 = document.querySelector("#plantcountr");
let plantcount2 = document.querySelector("#plantcountg");
let current;

let money = document.querySelector("#money");
let sell = document.querySelector("#sell");
let sellkids = sell.children[0];
let products = sellkids.children;
//for selling items
let itemlist =  document.querySelector("#vertlist2");
let items = itemlist.children;
//for buying items
let buy = document.querySelector("#vertlist1");
let products2 = buy.children;
let itemlist2 =  document.querySelector("#vertlist3");
let items2 = itemlist2.children;



lis[0].char = "-----";

lis[1].char= "V v";
lis[1].colour = "red";
lis[2].char= "v V";
lis[2].colour ="green";
lis[3].char = "C";

lis[4].char = "X";

let redcount = 0;
let greencount = 0;
let ropecount = 18;
let plantcountr = 6;
let plantcountg = 12;



for (let i=0; i<lis.length;i++){
    lis[i].addEventListener("click", function () {
   current = this
    lis[0].style.backgroundColor="rgb(214, 214, 147)";
     lis[1].style.backgroundColor="rgb(214, 214, 147)";
    lis[2].style.backgroundColor="rgb(214, 214, 147)";
    lis[3].style.backgroundColor="rgb(214, 214, 147)";
    lis[4].style.backgroundColor="rgb(214, 214, 147)";
    this.style.backgroundColor="purple";
    return current
   
    }
)
    }


for (let i=0; i<squares.length;i++){
    squares[i].addEventListener("click", function () {
     let wither = this;
     this.timeoutID = undefined;
     function bleach () {wither.style.color = "white";}
    if (!this.innerText && current.char == "-----")  {this.innerText= current.char;  if (ropecount > 0 ) {ropecount = ropecount - 1; ropecount1.innerText = ropecount} else {ropecount = 0; this.innerText = " "}} 
    //place rope

     if (this.innerText == "-----" && current.char == "v V") {
      if (plantcountg > 0) { this.innerText = current.char; this.style.color = current.colour; plantcountg = plantcountg -1; plantcount2.innerText = plantcountg;
        let grow = this;
        setTimeout(function () { grow.innerText = "S S"
       
        }, 10000) 
    
        
      this.setTimeoutID = setTimeout(bleach, 20000); 

      } else {}
    }
  
   if (this.innerText == "-----" && current.char == "V v") {
    if (plantcountr > 0) { this.innerText = current.char; this.style.color = current.colour; plantcountr = plantcountr -1; plantcount1.innerText = plantcountr;
      let grow = this;
      setTimeout(function () { grow.innerText = "S S"
     
      }, 10000) 
  
      
    this.setTimeoutID = setTimeout(bleach, 20000); 
  } 
     
     else {}
    
    } 
      


 
   
    else if (this.innerText == "S S" && current.char == "C" && this.style.color == "red") { clearTimeout(this.setTimeoutID); this.innerText = "-----"; redcount = redcount + 1; red.innerText= redcount; this.style.color = "black"} 

    else if (this.innerText == "S S" && current.char == "C" && this.style.color == "green") {clearTimeout(this.setTimeoutID); this.innerText = "-----"; greencount = greencount + 1; green.innerText= greencount; this.style.color = "black"}

 
    else if (current.char == "X") {alert("remove this?"); this.innerText = " "}

}
)
}

for (let i = 0; i < items.length; i ++) {
items [i].addEventListener ("click", function () {
if (greencount > 0 && products[i].innerText == "green seaweed") {let total = parseInt(money.innerText) + (parseInt (this.innerText)); money.innerText = total; greencount = greencount -1; green.innerText= greencount;}
else if (redcount > 0 && products[i].innerText == "red seaweed") {let total = parseInt(money.innerText) + (parseInt (this.innerText)); money.innerText = total; redcount = redcount -1; red.innerText= redcount;}
else {alert ("nothing to sell!")}

 })

}

for (let i = 0; i < items2.length; i ++) {
  items2 [i].addEventListener ("click", function () {
  if (money.innerText - this.innerText >= 0 && products2[i].innerText == "red seaweed spore") { let total = money.innerText - this.innerText; money.innerText = total; plantcountr = plantcountr  + 1; plantcount1.innerText = plantcountr;
 
   }
   else if (money.innerText - this.innerText >= 0 && products2[i].innerText == "green seaweed spore") { let total = money.innerText - this.innerText; money.innerText = total; plantcountg = plantcountg  + 1; plantcount2.innerText = plantcountg;
  
   }
  else {alert ("not enough money!")}
   })
  
  }