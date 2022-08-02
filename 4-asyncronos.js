const { readFile, writeFile } = require("fs");
readFile(
  "./docs/node-express-course/01-node-tutorial/content/first.txt",
  "utf-8",
  (err, result) => {
    if (err) {
      console.log(err);
    } // bech nhotha f wost file
    const first = result;
    readFile(
      "./docs/node-express-course/01-node-tutorial/content/second.txt",
      "utf-8",
      (err, result) => {
        if (err) {
          console.log(err);
        } // bech nhotha f wost file
        const second = result;
        writeFile(
          "./docs/node-express-course/01-node-tutorial/content/result-async.txt",
          `${first} ${second}`,
          { flag: "a" },
          (err, result) => {
            if (err) {
              console.log(err);
              return;
            }
            console.log(result);
          }
        );
      }
    );
  }
);
