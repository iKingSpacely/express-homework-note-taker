const util = require('util');
const fs = require('fs');
const uuid = require('uuid');

const readFile = util.promisify(fs.readFile);

const writeFile = util.promisify(fs.writeFile);

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