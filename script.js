// Load saved quotes OR start with an empty array
let quotes = JSON.parse(localStorage.getItem("quotes")) || [];

const input = document.getElementById("quoteInput");
const saveBtn = document.getElementById("saveBtn");
const quoteList = document.getElementById("quoteList");

function renderQuotes() {
    quoteList.innerHTML = "";

    quotes.forEach(function(quote, index){
        const div = document.createElement("div");
        div.className = "quoteItem";

        div.innerHTML = `
            <p>${quote}</p>
            <button onclick="deleteQuote(${index})">Delete</button>
        `;

        quoteList.appendChild(div);
    });
}

saveBtn.addEventListener("click",function(){
    const text = input.value.trim();
    if (text === "") return;

    quotes.push(text);
    localStorage.setItem("quotes", JSON.stringify(quotes));

    input.value = "";
    renderQuotes();
});

function deleteQuote(index) {
    quotes.splice(index, 1);
    localStorage.setItem("quotes", JSON.stringify(quotes));
    renderQuotes();
}

// Render immediately on page load
renderQuotes();