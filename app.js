
const fs = require('fs');
const notes = require('./notes.js');
const yargs = require('yargs');
const _ = require('lodash');

const argv = yargs
	.command('add', 'Add a new note', {
		title: {
			describe: 'Title of note',
			demand: true,
			alias: 't'
		},
		body: {
			describe: 'Body of note',
			demand: true,
			alias: 'b'
		}
	})
	.help()
	.argv;
var command = argv._[0];


if (command === 'add') {
	let note = notes.addNote(argv.title, argv.body);
	if (note) {
		console.log('Note created.');
		notes.logNote(note);
	} else {
		console.log('Item already exists');
	}
} else if (command === 'list') {
	let allNotes = notes.getAll();
	console.log(`Printing ${allNotes.length} note${allNotes.length === 1 ? '' : 's'}`);
	allNotes.forEach(note => notes.logNote(note));
} else if (command === 'remove') {
	var noteRemoved = notes.removeNote(argv.title);
	var message = noteRemoved ? 'Note was removed' : 'Note not found';
	console.log(message);
} else if (command === 'read') {
	let note = notes.getNote(argv.title);
	if (note) {
		console.log('Note read');
		notes.logNote(note);
	} else {
		console.log("Couldn't find note");
	}
} else {
	console.log('Command not recognised');
}
