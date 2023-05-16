// Sample XML string
const xmlString = `
  <books >
    <book>
      <title>NAME: Muhammad ismail ID: 17794</title>
      <author> SUBJECT: web engineering </author>
      <name>ASSIGNMENT : javascript assignment</name>
    </book>

  </books>
`;

// Parse the XML string into a DOM object
const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlString, "application/xml");

// Extract information from the XML DOM object
const books = xmlDoc.getElementsByTagName("book");
const bookInfo = [];

for (let i = 0; i < books.length; i++) {
  const title = books[i].getElementsByTagName("title")[0].textContent;
  const author = books[i].getElementsByTagName("author")[0].textContent;
  const name = books[i].getElementsByTagName("name")[0].textContent;
  bookInfo.push({ title, author,name });
}

// Display the extracted information on the web page
const bookContainer = document.getElementById("book-container");

bookInfo.forEach(book => {
  const bookElement = document.createElement("div");
  bookElement.innerHTML = ` <h3>${book.title}</h3><p>Author: ${book.author}</p> ${book.name}`;
  bookContainer.appendChild(bookElement);
});
