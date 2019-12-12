var Data = [];
var count = 0;
function loadDoc() {
  // carousel();
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      Data = JSON.parse(this.responseText);
      for (var i = 0  ; i < Data.length; i++) {
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
  Data.sort(function(a, b){return a.price - b.price});
console.log(Data)
for (var i = 0  ; i < Data.length; i++) {
  inneContent ="Category → " +Data[i].category +" <br><br>" +"Price → " +Data[i].price +"<br><br>" +"Discount → " +Data[i].discount;
  document.getElementById("image_id" + (i+1)).src = Data[i].img_url;
  document.getElementById("inner_content" + (i+1)).innerHTML = inneContent;
}
}

function lowToHigh()
{
  // alert(Data)
  Data.sort(function(a, b){return b.price - a.price});
console.log(Data)
for (var i = 0  ; i < Data.length; i++) {
  inneContent ="Category → " +Data[i].category +" <br><br>" +"Price → " +Data[i].price +"<br><br>" +"Discount → " +Data[i].discount;
  document.getElementById("image_id" + (i+1)).src = Data[i].img_url;
  document.getElementById("inner_content" + (i+1)).innerHTML = inneContent;
}
}
function Discounts()
{
  // alert(Data)
  Data.sort(function(a, b){return a.discount - b.discount});
console.log(Data)
for (var i = 0  ; i < Data.length; i++) {
  inneContent ="Category → " +Data[i].category +" <br><br>" +"Price → " +Data[i].price +"<br><br>" +"Discount → " +Data[i].discount;
  document.getElementById("image_id" + (i+1)).src = Data[i].img_url;
  document.getElementById("inner_content" + (i+1)).innerHTML = inneContent;
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


window.onload = loadDoc;

