// const Book = function (title, pages, done) {
//   this.title = title;
//   this.pages = pages;
//   this.done = done;
//   this.finish = function () {
//     //   this.done === false ? (str = "읽는 중") : (str = "완독");
//     //   return str;
//     // };
//   };
// };

// Book.prototype.finish = function () {
//   this.done = false ? (str = "읽는 중") : str((str = "완독"));
//   return str;
// };

// const book1 = new Book("자바스크립트", "648", false);
// console.log(book1.finish());

class BookC {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }

  buy() {
    console.log(`${this.title}을(를) ${this.price}원에 구매하였습니다.`);
  }
}

const book1 = new BookC("자바스크립트", 15000);

class TextbookC extends BookC {
  constructor(title, price, major) {
    super(title, price);
    this.major = major;
  }

  buyTextbook() {
    console.log(`${this.major} 전공서적, ${this.title}을 구매했습니다.`);
  }
}

const book2 = new TextbookC("AI인공지능", 50000, "컴퓨터공학");
book2.buyTextbook();
book2.buy();
