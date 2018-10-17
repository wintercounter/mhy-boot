const path = require('path')
const fse = require('fs-extra')

module.exports = (name = 'default', srcPath = 'src') => {
    console.log('name', name)
    console.log('srcPath', srcPath)
    const source = path.resolve(__dirname, `templates/${name}`)
    const destination = path.resolve(process.cwd(), srcPath)

    fse.copy(source, destination, function (err) {
        if (err) {
            return console.error('@mhy/boot', 'An error occured while copying the source to the destination.', err)
        }
        console.log('Boot completed!')
    })
}