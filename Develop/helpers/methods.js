const util = require('util');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const readFile = util.promisify(fs.readFile);

const writeFile = util.promisify(fs.writeFile);

class Methods { //making this class asynchronous by using async function. when it gets to await, it's going to pause and execute the readFile function, which will read the data from the db.json file and parse it into the array
    async read() {
        const data = await readFile('.db/db.json', 'utf8');
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
    }
}



class Methods {
    read() {
        return readFile('./Develop/db/db.json', 'utf8');
    }
    write(data) {
        return writeFile('./Develop/db/db.json', JSON.stringify(data))
    }
    //getNotes method is going run the read method, then (async) iterate through each individul note 
    getNotes() {
        return this.read().then(
            //insde the then method are the assigned to the new temporary variable tempNotes
            data => {
                let tempNotes;
                // If notes isn't an array or can't be turned into one, send back a new empty array
                try {
                //the tempNotes is going to push all of data into an array that can be read in JSON
                    tempNotes = [].concat(JSON.parse(data))
                } 
                catch (error) {
                    tempNotes = []
                }
                //the final product of getNotes is going to be an array of notes
               return tempNotes;
            }
        )
    }
}

module.exports = new Methods();