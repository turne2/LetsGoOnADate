function randomImg() {
    var quotes = [
      {
        text: "Lets go to Florida! Edward Scissorhands and Publix Sub",
        img:  "https://m.media-amazon.com/images/I/81ZZQ0f71WL._AC_SY679_.jpg"
        
      },
      {
        text: "Lets go to Alabama! Sweet Home Alabama and Fried Green Tomatoes",
        img:  "https://m.media-amazon.com/images/I/41CQsmSjURL._AC_.jpg",
      },
      {
        text: "Lets go to California! Back to the future and In-N-Out",
        img:  "https://m.media-amazon.com/images/I/719lZjHSb7L._AC_SY879_.jpg",
      },
      {
        text: "Lets go to Georgia! Pitch perfect and Lowcountry Boil ",
        img:  "https://m.media-amazon.com/images/M/MV5BMTcyMTMzNzE5N15BMl5BanBnXkFtZTcwNzg5NjM5Nw@@._V1_.jpg",
      },
      {
        text: "Lets go to Hawaii! 50 First Dates and Laulau",
        img:  "https://m.media-amazon.com/images/I/51dAMienE+L._AC_SY450_.jpg",
      },
    ];
    var quote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quote").innerHTML =
      '<p>' + quote.text + '</p>' +
      '<img src="' + quote.img + '">';
  }