module.exports = {
  format: (str) => {
    const name = str.toString()
    const project = name.charAt(0).toUpperCase() + name.slice(1)
    const out = project.replace(/\-(\w)/g, (_, t) => t.toUpperCase())
    return out
  },
}
