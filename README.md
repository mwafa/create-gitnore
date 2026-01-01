# create-gitnore

> Quickly generate .gitignore files from GitHub's official gitignore templates

A simple CLI tool that downloads .gitignore templates from the official [github/gitignore](https://github.com/github/gitignore) repository and saves them to your project directory. No need to manually copy-paste or remember which files to ignore for your project type!

## Features

- 🚀 **Fast & Simple** - One command to generate your .gitignore file
- 📦 **Zero Configuration** - Works out of the box with npx
- 🎯 **Official Templates** - Uses GitHub's curated gitignore templates
- 🔄 **Automatic Formatting** - Smart name formatting (e.g., `node` → `Node.gitignore`, `word-press` → `WordPress.gitignore`)
- ✨ **Multiple Package Managers** - Works with npm and yarn

## Installation

No installation required! Use `npx` to run it directly:

```bash
npx create-gitnore [template-name]
```

Or with yarn:

```bash
yarn create gitnore [template-name]
```

### Global Installation (Optional)

If you prefer to install it globally:

```bash
npm install -g create-gitnore
# Then use it directly
create-gitnore [template-name]
```

## Usage

### Basic Usage

```bash
npx create-gitnore [template-name]
```

Where `[template-name]` is the name of any template from the [github/gitignore](https://github.com/github/gitignore) repository.

### Examples

**Node.js Project:**

```bash
npx create-gitnore node
# or
yarn create gitnore node
```

**Python Project:**

```bash
npx create-gitnore python
```

**React Project:**

```bash
npx create-gitnore node
```

**WordPress Project:**

```bash
npx create-gitnore wordpress
# or (case-insensitive with auto-formatting)
npx create-gitnore word-press
```

**Go Project:**

```bash
npx create-gitnore go
```

**Java Project:**

```bash
npx create-gitnore java
```

**Visual Studio:**

```bash
npx create-gitnore visualstudio
```

## Available Templates

This tool uses templates from [github/gitignore](https://github.com/github/gitignore). Popular templates include:

- **Languages**: Node, Python, Java, Go, Ruby, Rust, C, C++, C#, Swift, Kotlin, etc.
- **Frameworks**: Rails, Django, Laravel, etc.
- **IDEs**: VisualStudio, VisualStudioCode, IntelliJ, Eclipse, Xcode, etc.
- **CMS**: WordPress, Joomla, Drupal, etc.
- **Other**: macOS, Windows, Linux, Archives, etc.

To see all available templates, visit [github/gitignore](https://github.com/github/gitignore).

## How It Works

1. You provide a template name (e.g., `node`)
2. The tool formats the name to match GitHub's naming convention (e.g., `Node.gitignore`)
3. Downloads the corresponding template from `https://raw.githubusercontent.com/github/gitignore/master/[TemplateName].gitignore`
4. Saves it as `.gitignore` in your current directory

## Troubleshooting

### Template Not Found

If you get a "Not Found" error:

- Check the template name at [github/gitignore](https://github.com/github/gitignore)
- Template names are case-sensitive after formatting
- Try variations: `node`, `Node`, or `nodejs`

### File Already Exists

This tool will **overwrite** your existing `.gitignore` file. Make sure to back it up if you have custom rules!

## Tips

- **Combine Multiple Templates**: Generate one template, then manually add rules from other templates as needed
- **Customize After Generation**: The generated file is a starting point - feel free to add project-specific rules
- **Version Control**: Always review the generated `.gitignore` before committing to ensure it fits your needs

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

ISC

## Links

- [GitHub Repository](https://github.com/mwafa/create-gitnore)
- [npm Package](https://www.npmjs.com/package/create-gitnore)
- [GitHub's Gitignore Templates](https://github.com/github/gitignore)

---

Made with ❤️ by [mwafa](https://github.com/mwafa)
