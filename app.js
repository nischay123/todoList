///book
function book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;

}

displaymessege = (type) => {
    var messege = ` <div class="alert alert-${type}" role="alert">
                         Failed in adding book 
                    </div>`;
    document.getElementById('messege').innerHTML = messege;
    setTimeout(()=>{
        document.getElementById('messege').innerHTML= '';
    } ,3000)
}

///display 
function display() { }

display.prototype.validate = function (book) {

    if (book.name.length < 3 || book.author.length < 3) {
        return false;
    } else {
        return true;  
    }
}

display.prototype.addbook = function (book) {
    console.log(book);
    let table = document.getElementById('table');
   
    var singleBook = `
        <tr>
            <td>${book.name}</td>
            <td>${book.author}</td>
            <td>${book.type}</td>
            <td> <button type="button" class="close" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button></td>
        </tr>
`;
    displaymessege('success');
    table.innerHTML += singleBook;

}

display.prototype.clear = function () {

    console.log('claerbook');
    document.getElementById('book').value = '';
    document.getElementById('author').value = '';

}

let addBtn = document.getElementById('add');
let table = document.getElementById('table');
function laodListner() {
    addBtn.addEventListener('click', handleAdd);
    table.addEventListener('click' , handledelete)
}

function handledelete(e){
    
    console.log(e.target.parentElement.classList.contains('close'));
    if(e.target.parentElement.classList.contains('close')){
        e.target.parentElement.parentElement.parentElement.remove();
    }
    e.preventDefault();

}
function handleAdd(e) {
    console.log('handleadd');
    let name = document.getElementById('book').value;
    let author = document.getElementById('author').value;
    let fiction = document.getElementById('fiction')
    let drama = document.getElementById('drama')
    let comedy = document.getElementById('comedy')
    let type;
   

    if (fiction.checked) {
        type = 'fiction';
    } else if (drama.checked) {
        type = 'drama';
    } else if (comedy.checked) {
        type = 'COmedy';
    };
    let Book = new book(name, author, type);
    let disp = new display();

    if (disp.validate(Book)) {
        disp.addbook(Book);
        disp.clear();
    } else {
        displaymessege('danger');
    }
    e.preventDefault();
}

laodListner()