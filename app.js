console.log('Starting app');

const fs = require('fs');
const notes = require('./notes.js');
const yargs = require('yargs');

const _ = require('lodash');

const argv = yargs.argv;
var command = argv._[0];
console.log('Command: ', command);
console.log('Yargs: ', argv);

if(command === 'add') {
	notes.addNote(argv.title, argv.body);
} else if(command === 'list') {
	notes.getAll();
} else if(command === 'remove') {
	notes.removeNote(argv.title);
} else if(command === 'read') {
	notes.readNote(argv.title);
} else {
	console.log('Command not recognised');
}
