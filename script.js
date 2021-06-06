var userName = "Dina Muasher";

document.write("<p> I wish you were excited in my website " + "Dina Muasher </p>");

alert("Welcome ");



var FavBook = prompt("What's your Favorite Book?")


function FavBook1() {
  while (FavBook != "Fiction" && FavBook != "Historical" && FavBook != "Adventure") {
    FavBook = prompt("Please enter on of these: Historical, Adventure, Fiction");
  }


}

FavBook1();





var y = prompt("how many times do you want to see books")

var Books;
var Books = function () {
  

  for (var i = 0; i < 4; i++) {

    document.write( "<img src= 'https://static.vecteezy.com/ti/vecteur-libre/t2/263066-icone-de-livre-vectoriel.jpg' />")
    console.log(i)

  }
  return Books;
}
Books();