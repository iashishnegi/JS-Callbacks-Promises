/*4. Arrange in alphabetical order.
Write a program that accepts a list of objects representing books [ title, author, and year] and a callback
function. The program should use the map function to create a new list containing only the titles of the books,
and then pass this new list to the callback function. The callback function should then log the titles to the
console in alphabetical order. */

    
let books = [       
    { title: "The art of laziness", year: 2020, author: "John Smith" },
    { title: "Big Bang Theory", year: 2018, author: "Jane Doe" },
    { title: "How to be an influencer?", year: 2021, author: "Adam Johnson" }
];

function getAuthors (books , callback){
        let titles = books.map(function (book){
            return book.title
        })
        callback(titles);
    }   

function sortAuthors(titles){
    let sortedTitles = titles.sort();

    console.log(`Books arranged in alphabetical order: ${sortedTitles.join(" , ")}`);
}

getAuthors(books , sortAuthors);
