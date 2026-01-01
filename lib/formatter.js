/**
 * Formats a template name to match GitHub's gitignore naming convention
 * Capitalizes the first letter and converts kebab-case to PascalCase
 * @param {string} str - The input template name (e.g., 'node', 'word-press')
 * @returns {string} The formatted template name (e.g., 'Node', 'WordPress')
 * @example
 * format('node') // returns 'Node'
 * format('word-press') // returns 'WordPress'
 * format('visual-studio') // returns 'VisualStudio'
 */
module.exports = {
  format: (str) => {
    if (!str || typeof str !== 'string') {
      throw new Error('Template name must be a non-empty string')
    }
    
    const name = str.trim()
    if (name.length === 0) {
      throw new Error('Template name cannot be empty')
    }
    
    // Capitalize first letter and convert to PascalCase from kebab-case
    const project = name.charAt(0).toUpperCase() + name.slice(1)
    const out = project.replace(/\-(\w)/g, (_, t) => t.toUpperCase())
    return out
  },
}
