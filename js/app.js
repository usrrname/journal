//search form submit button

function Journal(){
	this.entries = [];

	this.addEntry = function(entry){
		this.entries.push(entry);
		this.saveEntries();
	}

	this.saveEntries = function(){
		
		localStorage.entries = JSON.stringify(this.entries);
	}

	this.init = function(){
		if (localStorage.entries != undefined && JSON.parse(typeof(localStorage.entries) == 'object')){
			this.entries = JSON.parse(localStorage.entries);
		}
	}
};

function Entry(author, title, time, content){
	this.author = author;
	this.title = title;
	this.time = time;
	this.content = content;
};

//search by string
Journal.prototype.search = function(){
var searchText = $('#serch').val();
var found = [];
var foundAuthor = this.entries[i].author;
var foundTime = this.entries[i].time;
var foundTitle = this.entries[i].title;  
var foundContent = this.entries[i].content;
	
	for (var i=0; i<c; i++){
		var c = this.entries.length;
		
		if (searchText.indexOf(Journal.entries[i].content) != -1){
			var result = found.push(Journal.entries[i]);
			console.log(result);

		$('#display').append(
			"<h3 id = '" + foundAuthor + "'>" + foundAuthor + "</h3>"
			+ "<h2 id = '" + foundTitle + "'>" + foundTitle + "</h2>"
			+ "<h4 id = '" + foundTime + "'>" + foundTime + "</h2>"
			+ "<p id = '" + foundContent + "'>" + foundContent + "</p>");

		}else{
			console.log("nothing found");
			$('#display').append("<h3 id = '" + "No Matching Keywords Found" + "'>" + "</h3>");
		}	
	}
};

$('#subSearch').click(function(e){
	e.preventDefault();
	Journal.prototype.search();
});