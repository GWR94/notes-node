const fs = require('fs');

const fetchNotes = () => {
	try {
		var notesString = fs.readFileSync('notes-data.json');
		return JSON.parse(notesString);
	} catch (e) {
		return [];
	}
};

const saveNotes = notes => {
	fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
	var notes = fetchNotes();
	var note = {
		title,
		body,
	};
	var duplicateNotes = notes.filter(note => note.title === title);

	if (duplicateNotes.length === 0) {
		notes.push(note);
		saveNotes(notes);
		return note;
	}
};

var getNote = title => {
	const note = fetchNotes().filter(note => note.title === title);
	return note[0];
};

var getAll = () => {
	return fetchNotes();
};

var removeNote = title => {
	const notes = fetchNotes();
	const filteredNotes = notes.filter(note => note.title !== title);
	saveNotes(filteredNotes);

	return notes.length !== filteredNotes.length;
};

var logNote = note => {
	debugger;
	console.log('----');
	console.log(`Title: ${note.title}`);
	console.log(`Body: ${note.body}`);
};

module.exports = {
	addNote,
	getAll,
	getNote,
	removeNote,
	logNote,
};
