/**
 * 
 */
var books=[]
var input=prompt("Which operation You want to perform[add|delete|list|exit]:")
while(input!="exit"){
	if(input=="add"){
		addBook();
	}
	else if(input=="list"){
		listBooks();
	}
	else if(input=="delete"){
		deleteBook();
	}
	else{
		console.log("Enter valid option");
	}
	input=prompt("What operation You Want to Perform[add|delete|list|exit]: ")}
function addBooks(){
	

		var newBook=prompt("Enter Name of the Book:")
		books.push(newBook);
		
	}
function listBooks(){
	console.log("List of Available Books:");
	for(book of books){
		console.log(book);
	}
}
function deleteBook(){
	var name=prompt("Enter Book Name to delete:")
	var index=books.indexOf(name)
	if(index==-1){
		console.log("specified book is not available");
		
	}
	else{
		books.splice(index,1)
		console.log("Specified Book Deleted");
		
	}
}



