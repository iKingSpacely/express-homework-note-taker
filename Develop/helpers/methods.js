const util = require('util');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const readFile = util.promisify(fs.readFile);

const writeFile = util.promisify(fs.writeFile);

class Methods { //making this class asynchronous by using async function. when it gets to await, it's going to pause and execute the readFile function, which will read the data from the db.json file and parse it into the array
    async read() {
        const data = await readFile('./db/db.json', 'utf8');
        return JSON.parse(data) || [];
    }
    //this will write the data from the user inputs into the db.json and then pause until that's done (because fo the await function)
    async write(data) {
        await writeFile("./db/db.json", JSON.stringify(data));
    }

    //getNotes function is tapping into the above read function to get the notes that are in the db.json file, but if there aren't any notes it will return an empty array
    async getNotes() {
        const data = await this.read();
        return Array.isArray(data) ? data : [];
    }

    //postNote allows the user to actually post a note to the note taker. the if statement is saying that if there's no text or no title, throw an error because there needs to be some input in order to post the note
    async postNote(note) {
        const { title, text } = note;
        if (!title || !text ) {
            throw new Error('Please enter a title and text for the note!')
        }

        //the id: uuidv4 is using the npm package to asign a unique id numnber to each post so that we can grab it in the below function and delete if we want to
        const postedNote = { title, text, id: uuidv4()};
        const notes = await this.getNotes();
        notes.push(postedNote);
        await this.write(notes);
        return postedNote;
    }

    //learned about this in class today, we essentially create another function that will work similarly to the above function, except it will delete the note based on the id it's been assigned to. 
    async deleteNote(id) {
        const notes = await this.getNotes();
        //the .filter function combs through all of the notes and will find the id correlated to the note that we want to delete. not possible to do this without the uuidv4 package or uuid file created from scratch
        const updatedNotes = notes.filter(note => note.id !== id);
        await this.write(updatedNotes);
    }
}

module.exports = new Methods();