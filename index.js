#!/usr/bin/env node
const app = require("yargs")
const { download } = require("./lib/dl")
const { format } = require("./lib/formatter")

app
  .scriptName("create-gitnore")
  .usage("Usage: $0 <name>")
  .command(
    "$0 <name>",
    "Download a .gitignore template from GitHub's official gitignore repository",
    (yargs) => {
      yargs.positional("name", {
        describe: "The template name (e.g., node, python, java)",
        type: "string",
      })
    },
    (argv) => {
      try {
        const { name } = argv
        if (!name) {
          console.error("Error: Template name is required")
          process.exit(1)
        }
        
        const formattedName = format(name)
        download(formattedName)
      } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
      }
    }
  )
  .example("$0 node", "Create a .gitignore for Node.js projects")
  .example("$0 python", "Create a .gitignore for Python projects")
  .example("$0 word-press", "Create a .gitignore for WordPress projects")
  .demandCommand(1, "Please specify a template name")
  .help()
  .alias("h", "help")
  .version()
  .alias("v", "version")
  .argv
