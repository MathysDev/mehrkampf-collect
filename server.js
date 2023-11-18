const fs = require('fs');
const path = require('path');

const dir = "src/environments";
const file = "environment.ts";
const prodFile = "environment.prod.ts";
const cypressFile = "cypress.env.json";

const content = `${process.env.FIREBASE_DETAILS}` ;
const prodContent = `${process.env.FIREBASE_DETAILS}`;
const cypressContent = `${process.env.CYPRESS_ENV}`;

fs.access(dir,fs.constants.F_OK, (err) => {
    if (err) {
        console.log("src/environments does not exist", process.cwd()),
        fs.mkdir(dir, {recursive: true}, (err) => {
            if (err) {
                console.error(err);
            } else {
                console.log("src/environments created");
            }
        });
    }
    try {
        fs.writeFileSync(dir + "/" + file, content);
        fs.writeFileSync(dir + "/" + prodFile, prodContent);
        fs.writeFileSync(cypressFile, cypressContent);
        if (fs.existsSync(dir + "/" + file)) {
            console.log("src/environments/environment.ts created");
            const str = fs.readFileSync(dir + "/" + file).toString();
            console.log(str);
            const strprd = fs.readFileSync(dir + "/" + prodFile).toString();
            console.log(strprd);
            const strc = fs.readFileSync(cypressFile).toString();
            console.log(strc);
        }
    } catch (err) {
        console.error(err);
        process.exit(1);
    } } );   
