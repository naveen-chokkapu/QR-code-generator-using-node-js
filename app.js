import inquirer from 'inquirer'
import fs from 'fs'
import qr from 'qr-image'

inquirer
  .prompt([{
    "message": "Enter URL: ",
    "name": "URL"
  }])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url = answers.URL;
    const png = qr.image(url);
    png.pipe(fs.createWriteStream('image.png'));
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });