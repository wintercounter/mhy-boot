const path = require('path')
const fse = require('fs-extra')

module.exports = name => {
    const source = path.resolve(__dirname, name)
    const destination = path.resolve(process.cwd(), `src`)

    fse.copy(source, destination, function (err) {
        if (err){
            return console.error('@mhy/boot', 'An error occured while copying the source to the destination.', err)
        }
        console.log('Boot completed!')
    })
}