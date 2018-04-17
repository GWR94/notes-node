console.log(`Starting notes.js`);

const fs = require('fs');

var addNote = (title, body) => {
	var notes = [];
	var note = {
		title,
		body,
	};

	try {
		var notesString = fs.readFileSync('notes-data.json');
		notes = JSON.parse(notesString);
	} catch (e) {}

	var duplicateNotes = notes.filter(note => note.title === title);
	if (duplicateNotes.length === 0) {
		notes.push(note);
		fs.writeFileSync('notes-data.json', JSON.stringify(notes));
	}
};

var getAll = () => {
	console.log('Listing all notes');
};

var removeNote = title => {
	console.log('Removing note named ', title);
};

var readNote = title => {
	console.log('Reading note named ', title);
};

module.exports = {
	addNote,
	getAll,
	removeNote,
	readNote,
};
