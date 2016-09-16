"use strict";

$('.icon-pencil').click(function(){
	console.log('clicked pencil');
	$('#entries').hide();
	$('#search').hide();
	$('#form').fadeIn(1000);
});

$('.icon-archive').click(function(){
	console.log('clicked archive');
	$('#form').hide();
	showAllEntries();
});

$('.icon-search').click(function(){
	console.log('clicked search');
	$('#form').hide();
	$('.garbo').hide();
	$('#entries').hide();
	$('#search').fadeIn();
});

$('#entries').on('click','#delete',function(){
	
	var findEntry = journal.entries.indexOf();
	console.log("position in the array =" + findEntry);

	var snip = journal.entries.splice(findEntry,1);
	console.log("removed = "+snip);
	showEntry();
});

function Entry(author, title, time, content){
	this.author = author;
	this.title = title;
	this.time = time;
	this.content = content;
};

function createEntry(){
	var author = $("#authorIn").val();
	var title = $("#titleIn").val(); 
	var time = new Date().toUTCString();
	var content = $("textarea").val();
	var entry = new Entry(author,title,time,content);
	journal.addEntry(entry);
	showEntry();
}	
	
function showEntry(){
	$('#form').hide();
	$('#garbo').hide();

	var n = journal.entries.length;

	var emptyEntry = '';
	
	$('.entries').html('');//clear html before printing again

	for(var i = 0; i < n; i++){	
		var author = journal.entries[i].author;
		var title = journal.entries[i].title;
		var time = journal.entries[i].time;
		var content = journal.entries[i].content;

	$('.main').prepend("<div class='entries'>" 
		+ "<h3 id = '" + author + "'>" + author + "</h3>"
		+ "<h2 id = '" + title + "'>" + title + "</h2>"
		+ "<h4 id = '" + time + "'>" + time + "</h2>"
		+ "<p id = '" + content + "'>" + content + "</p>"
		+ "<button id='delete' class = 'ghost-btn' value = 'submit'>Delete</button>"
		+ "</div>"
		);

		$('#entries').fadeIn(1500);
	}	
}

function showAllEntries(){
	$('#garbo').hide();
	$('.main').show(journal.entries);
	$('#entries').fadeIn(2500);
}

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

var journal = new Journal(); 

//submit button on journal entry form
$('#submit').click(function(e){
	e.preventDefault();
	createEntry();
	console.log("total entries=" + journal.entries);
});

//for Journal
	//search by entries//
	//search by tag: js function for separate strings according to space