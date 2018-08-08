const Metalsmith = require('metalsmith');
const Handlebars = require('handlebars');
const path = require('path');
const fs = require('fs');

module.exports = (metadata = {}, dest = './src/pages') => {
  return new Promise((resolve, reject) => {
    const src = path.resolve(__dirname, '../templates/react-redux-page');
    const metalsmith = Metalsmith(process.cwd())
      .metadata(metadata)
      .clean(false)
      .source(src)
      .destination(`${dest}/${metadata.PageName}`);

    metalsmith.use((files, metalsmith, done) => {
        const meta = metalsmith.metadata()
        Object.keys(files).forEach(fileName => {
          const t = files[fileName].contents.toString()
          files[fileName].contents = new Buffer(Handlebars.compile(t)(meta))
        })
        done()
      }).build(err => {
        err ? reject(err) : resolve()
      })
  });
}