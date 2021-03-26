#!/usr/bin/env node
const app = require("yargs")
const { download } = require("./lib/dl")
const { format } = require("./lib/formatter")
app
  .scriptName("create-gitnore")
  .command(
    "$0 <name>",
    "Get .gitignore template by name",
    () => {},
    ({ name }) => {
      if (name) {
        const project = format(name)
        download(project)
      }
    }
  )
  .help().argv
