var Data = [];
var count = 0;
function loadDoc() {
  carousel();

  var xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    // Begin accessing JSON data here
   Data = JSON.parse(this.response)
    Data = Data.flipcart;
    // console.log(Data)
    if (xhttp.status >= 200 && xhttp.status < 400) {
      for (var i = 0  ; i < Data.length; i++) {
        inneContent ="Category → " +Data[i].category +" <br><br>" +"Price → " +Data[i].price +"<br><br>" +"Discount → " +Data[i].discount;
        document.getElementById("image_id" + (i+1)).src = Data[i].img_url;
        document.getElementById("inner_content" + (i+1)).innerHTML = inneContent;
      }
    } else {
      console.log(Data)
    }
  }
  xhttp.open("GET", 'https://flipkart.free.beeceptor.com' ,true);
  xhttp.send();
}
function highToLow()
{
  // alert(Data)
  Data.sort(function(a, b){return b.price - a.price});
console.log(Data)
for (var i = Data.length-1  ; i >= 0; i--) {
  let k=(((Math.floor(i/5)+1)*5)-(i%5));
  // console.log(k);
  inneContent ="Category → " +Data[i].category +" <br><br>" +"Price → " +Data[i].price +"<br><br>" +"Discount → " +Data[i].discount;
  document.getElementById("image_id" + k).src = Data[i].img_url;
  document.getElementById("inner_content" + k).innerHTML = inneContent;
}
}

function lowToHigh()
{
  // alert(Data)
  Data.sort(function(a, b){return a.price - b.price});
// console.log(Data)
for (var i = Data.length-1  ; i >= 0; i--) {
  let k=(((Math.floor(i/5)+1)*5)-(i%5));
  console.log(k);
  inneContent ="Category → " +Data[i].category +" <br><br>" +"Price → " +Data[i].price +"<br><br>" +"Discount → " +Data[i].discount;
  document.getElementById("image_id" + k).src = Data[i].img_url;
  document.getElementById("inner_content" + k).innerHTML = inneContent;
}
}
function Discounts()
{
  // alert(Data)
  
  Data.sort(function(a, b){return b.discount - a.discount});
console.log(Data)
for (var i = Data.length-1  ; i >= 0; i--) {
  let k=(((Math.floor(i/5)+1)*5)-(i%5));
  // console.log(k);
  inneContent ="Category → " +Data[i].category +" <br><br>" +"Price → " +Data[i].price +"<br><br>" +"Discount → " +Data[i].discount;
  document.getElementById("image_id" + k).src = Data[i].img_url;
  document.getElementById("inner_content" + k).innerHTML = inneContent;
}
}
var counter=0;
function getValue() {
  document.getElementById("cart_no").style.display="block";
  document.getElementById("cart_no").innerHTML = ++counter;
}
function BottomFunction() {
  //document.body.scrollTop = 720;
  document.documentElement.scrollTop = 2000;
}
function sliderChange(val) {
  if(val==0)
  {
    lowToHigh();
    
  }
  else if(val==2)
  {
    highToLow();
  }
  else
  {
    Discounts();
  }
  }

window.onload = loadDoc;