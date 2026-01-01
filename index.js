#!/usr/bin/env node
const { download } = require("./lib/dl")
const { format } = require("./lib/formatter")
const { version } = require("./package.json")

// Parse command line arguments
const args = process.argv.slice(2)

// Helper function to show help
function showHelp() {
  console.log(`
Usage: create-gitnore <name>

Download a .gitignore template from GitHub's official gitignore repository

Positionals:
  name  The template name (e.g., node, python, java)            [string]

Options:
  -h, --help     Show help                                      [boolean]
  -v, --version  Show version number                            [boolean]

Examples:
  create-gitnore node        Create a .gitignore for Node.js projects
  create-gitnore python      Create a .gitignore for Python projects
  create-gitnore word-press  Create a .gitignore for WordPress projects
`)
}

// Helper function to show version
function showVersion() {
  console.log(version)
}

// Check for help flag
if (args.includes("-h") || args.includes("--help")) {
  showHelp()
  process.exit(0)
}

// Check for version flag
if (args.includes("-v") || args.includes("--version")) {
  showVersion()
  process.exit(0)
}

// Get the template name (first non-flag argument)
const name = args.find(arg => !arg.startsWith("-"))

// Validate that a template name was provided
if (!name) {
  console.error("Error: Please specify a template name")
  console.log("\nRun 'create-gitnore --help' for usage information")
  process.exit(1)
}

// Download the template
try {
  const formattedName = format(name)
  download(formattedName)
} catch (error) {
  console.error(`Error: ${error.message}`)
  process.exit(1)
}
