const BOOKS = [
    {
        id: 1,
        title: "خواجه تاجدار",
        author: "ژان گور",
        published_date: 2007,
        language: "persian",
        genre: "تاریخ",
        imgSrc: "1.jpg"
    },
    {
        id: 2,
        title: "ضیافت",
        author: "افلاطون",
        published_date: 385,
        language: "greek",
        genre: "فلسفه",
        imgSrc: "2.jpg"
    },
    {
        id: 3,
        title: "منطق الطیر",
        author: "عطار",
        published_date: 1177,
        language: "persian",
        genre: "شعر",
        imgSrc: "3.jpg"
    },
    {
        id: 4,
        title: "مثنوی معنوی",
        author: "مولوی",
        published_date: 1258,
        language: "persian",
        genre: "شعر",
        imgSrc: "4.jpg"
    },
    {
        id: 5,
        title: "دیوان حافظ",
        author: "حافظ",
        published_date: 1200,
        language: "persian",
        genre: "شعر",
        imgSrc: "5.jpg"
    },
    {
        id: 6,
        title: "رومیو و جولیت",
        author: "ویلیام شکسپیر",
        published_date: 1595,
        language: "english",
        genre: "عاشقانه",
        imgSrc: "6.jpg"
    },
    {
        id: 7,
        title: "ویس و رامین",
        author: "فخرالدین اسعد گرگانی",
        published_date: 1054,
        language: "persian",
        genre: "عاشقانه",
        imgSrc: "7.jpg"
    },
    {
        id: 8,
        title: "گلستان",
        author: "سعدی",
        published_date: 1258,
        language: "persian",
        genre: "شعر",
        imgSrc: "8.jpg"
    },
    {
        id: 9,
        title: "بوستان",
        author: "سعدی",
        published_date: 1257,
        language: "persian",
        genre: "شعر",
        imgSrc: "9.jpg"
    },
    {
        id: 10,
        title: "گلشن راز",
        author: "شیخ محمود شبستری",
        published_date: 1311,
        language: "persian",
        genre: "شعر",
        imgSrc: "10.jpg"
    },
    {
        id: 11,
        title: "لیلی و مجنون",
        author: "نظامی",
        published_date: 1188,
        language: "persian",
        genre: "عاشقانه",
        imgSrc: "11.jpg"
    },
    {
        id: 12,
        title: "شاهنامه",
        author: "فردوسی",
        published_date: 1010,
        language: "persian",
        genre: "شعر",
        imgSrc: "12.jpg"
    },
    {
        id: 13,
        title: "ایلیاد",
        author: "هومر",
        published_date: 762,
        language: "greek",
        genre: "شعر",
        imgSrc: "13.jpg"
    },
    {
        id: 14,
        title: "اودیسه",
        author: "هومر",
        published_date: 725,
        language: "greek",
        genre: "شعر",
        imgSrc: "14.jpg"
    },
    {
        id: 15,
        title: "هملت",
        author: "ویلیام شکسپیر",
        published_date: 1609,
        language: "greek",
        genre: "درام",
        imgSrc: "15.jpg"
    },
    {
        id: 16,
        title: "دن کیشوت",
        author: "میگل دسروانتس",
        published_date: 1605,
        language: "spanish",
        genre: "درام",
        imgSrc: "16.jpg"
    }
]



function Library(filterName, filterKind) {
    let list;
    for (let book of books) {
        switch (filterName) {
            case "author":
                list = book.author;
                break;
            case "published_date":
                list = book.published_date;
                break;
            case "language":
                list = book.language;
                break;
            case "genre":
                list = book.genre;
                break;
        }
        if (list == filterKind) {
            const template =
             `<div>
                    <img src="./image/${book.imgSrc}">
                    <p>${book.title}</p>
                    </div>
            `
            document.querySelector("section").innerHTML += template;
        }
    }
}

Library();




document.getElementsByTagName("button")[0].onclick = function () {
    document.querySelector("section").innerHTML = "";
    Library("genre", "شعر");
}

document.getElementsByTagName("button")[1].onclick = function () {
    document.querySelector("section").innerHTML = "";
    Library("genre", "عاشقانه");
}

document.getElementsByTagName("button")[2].onclick = function () {
    document.querySelector("section").innerHTML = "";
    Library("genre", "درام");
}

document.getElementsByTagName("button")[3].onclick = function () {
    document.querySelector("section").innerHTML = "";
    Library("genre", "فلسفه");
}

document.getElementsByTagName("button")[4].onclick = function () {
    document.querySelector("section").innerHTML = "";
    Library("genre", "تاریخ");
}

document.getElementsByTagName("button")[5].onclick = function () {
    document.querySelector("section").innerHTML = "";
    for (let book of books) {
        let list = book.language;
        if (list != "persian") {
            let template = `
                    <div>
                        <img src="./image/${book.imgSrc}">
                        <p>${book.title}</p>
                    </div>
            `
            document.querySelector("section").innerHTML += template;
        }
    }
}

document.getElementsByTagName("button")[6].onclick = function () {
    document.querySelector("section").innerHTML = "";
    Library("language", "persian");
}



document.getElementsByTagName("button")[7].onclick = function () {
    document.querySelector("section").innerHTML = "";
    Library();
}






// document.getElementsByTagName("button")[6].onclick = function () {
//     document.querySelector("section").innerHTML = "";
//     Books("author", "هومر");
// }