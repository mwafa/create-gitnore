const http = require("https")
const fs = require("fs")

module.exports = {
  download: (name) => {
    const url = `https://raw.githubusercontent.com/github/gitignore/master/${name}.gitignore`
    http
      .get(url, function (response) {
        if (response.statusCode == 200) {
          const file = fs.createWriteStream(".gitignore")
          console.log(`Downloading ${name}.gitignore`)
          response.pipe(file)
          file.on("finish", () => {
            console.log(`Downloaded`)
            file.close()
          })
        } else {
          console.log(name, "Not Found!")
        }
      })
      .on("error", function (err) {
        if (cb) cb(err.message)
      })
  },
}
