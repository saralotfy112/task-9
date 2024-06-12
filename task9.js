// => 1
//  const products = {
//     name: "hp ",
//     price: "24000",
//     model: "2024",
// };
// document.getElementById("parag").innerHTML =  "the name of product is " + products.name + " and the price is " + products.price + " and  it is model  " + products.model ;
//  => 2
// const products = new Array();
// products[0] = "book 1"
// products[1] = "book 2"
// products[2] = "book 3"

// document.getElementById("parag").innerHTML= products;
// => 3
// const products = ["book1", "book2", "book3", "book4"];

// document.getElementById("parag").innerHTML= products[products.length -1]
// => 4
// const products =["book1","book2","book3","book4"] ;

//  document.getElementById("parag").innerHTML= products;

//  function pushArray(){
//     products.push("book5");
//     document.getElementById("parag").innerHTML= products;
//  }
//  => 5
// const products = ["book1", "book2", "book3", "book4"];

// let newWord = products.toString();

// document.getElementById("parag").innerHTML= newWord[0] +"<br>" + newWord[1] +"<br>" + newWord[2] + "<br>" + newWord[3] ;
// => 6
// let i =15;
// let text="";
// while (i < 30)
//     {
//     text += "<br> the number is " + i ;
//     i++;
//     }

//  document.getElementById("parag").innerHTML= text;
//  => 7
// let i = 11 ;
// let text="";

// do
// {
//     text += "<br> the number is " + i ;
//     i++;
// }
// while (i <= 20);

// document.getElementById("parag").innerHTML= text;
//  => 8
// const products =["book1","book2","book3","book4"] ;

// let text=" ";

// for(let i =0; i<5;i++)
//     {
//         text+= "the number is " + i + "<br>" ;
//     }

// document.getElementById("parag").innerHTML= text;
// => 9
// const products =["book11","book12","book13","book14","book15",] ;

// let text=" ";
// for(let x in products)
// {
//     text+= "this is " +products[x] + "<br>"
// }
// document.getElementById("parag").innerHTML= text;
// => 10
// const product =["book1","book2","book3","book4",] ;

// let texts=" ";

// product.forEach(i=> {
//     texts += i+ "<br>"
// })
// document.getElementById("parag").innerHTML= texts;
// => all string methods 

// let text = "saralotfyelsayedmohamed";
// document.getElementById("parag").innerHTML = text.length;

// let text = "HELLO WORLD";
// document.getElementById("parag").innerHTML = text.charAt(0);

// const name = "egyption council";
// let letter = name.at(5);

// document.getElementById("parag").innerHTML = letter;

// const products =["book1","book2","book3","book4"]
// const products1 =["book5","book6","book7","book8",]
// const products2 =["book9","book10","book11","book12",]

// const newArray= products.concat(products1,products2)

// document.getElementById("parag").innerHTML= newArray

// const products =["book1","book2","book3","book4"];
// products.pop();
// products.shift();
// products.unshift(" book0");


// document.getElementById("parag").innerHTML= products;
