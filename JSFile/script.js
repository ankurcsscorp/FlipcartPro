var Data = [];
var count = 0;
function loadDoc() {
  carousel();
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      Data = JSON.parse(this.responseText);
      for (var i = 0  ; i < Data.length; i++) {
        // alert(Data.length)
        inneContent ="Category → " +Data[i].category +" <br><br>" +"Price → " +Data[i].price +"<br><br>" +"Discount → " +Data[i].discount;
        document.getElementById("image_id" + (i+1)).src = Data[i].img_url;
        document.getElementById("inner_content" + (i+1)).innerHTML = inneContent;
      }
    }
  };
  xhttp.open("GET", "http://localhost:3000/flipcart", true);
  xhttp.send();
}
function highToLow()
{
  // alert(Data)
  Data.sort(function(a, b){return b.price - a.price});
console.log(Data)
for (var i = Data.length-1  ; i >= 0; i--) {
  let k=(((Math.floor(i/5)+1)*5)-(i%5));
  console.log(k);
  inneContent ="Category → " +Data[i].category +" <br><br>" +"Price → " +Data[i].price +"<br><br>" +"Discount → " +Data[i].discount;
  document.getElementById("image_id" + k).src = Data[i].img_url;
  document.getElementById("inner_content" + k).innerHTML = inneContent;
}
}

function lowToHigh()
{
  // alert(Data)
  Data.sort(function(a, b){return a.price - b.price});
console.log(Data)
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
  console.log(k);
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
  document.documentElement.scrollTop = 720;
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

