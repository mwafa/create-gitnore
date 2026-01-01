const https = require("https")
const fs = require("fs")

/**
 * Downloads a .gitignore template from GitHub's gitignore repository
 * @param {string} name - The formatted name of the gitignore template (e.g., 'Node', 'Python')
 */
module.exports = {
  download: (name) => {
    const url = `https://raw.githubusercontent.com/github/gitignore/master/${name}.gitignore`
    https
      .get(url, function (response) {
        if (response.statusCode === 200) {
          const file = fs.createWriteStream(".gitignore")
          console.log(`Downloading ${name}.gitignore`)
          response.pipe(file)
          file.on("finish", () => {
            console.log(`Downloaded successfully!`)
            file.close()
          })
          file.on("error", (err) => {
            console.error(`Error writing file: ${err.message}`)
            fs.unlink(".gitignore", () => {}) // Clean up partial file
          })
        } else {
          console.error(`Template '${name}' not found!`)
          console.log(`Please check available templates at https://github.com/github/gitignore`)
        }
      })
      .on("error", function (err) {
        console.error(`Network error: ${err.message}`)
      })
  },
}
