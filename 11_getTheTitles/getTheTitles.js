const getTheTitles = function(books) {
    let booksArray = new Array();
    books.forEach(item => {
        booksArray.push(item['title'])
    });
    return booksArray
};

// Do not edit below this line
module.exports = getTheTitles;