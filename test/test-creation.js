var path    = require('path');
var helpers = require('yeoman-generator').test;

describe('generator-component', function() {
  beforeEach(function(done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function(err) {
      if (err) {
        return done(err);
      }

      this.app = helpers.createGenerator('component:app', [
        '../../app'
      ]);
      done();
    }.bind(this));
  });

  it('creates basic files', function(done) {
    var expected = [
      '.gitignore',
      '.gitattributes',
      'component.json',
      'index.js',
      'package.json'
    ];

    helpers.mockPrompt(this.app, {
      'editorConfig': 'N'
    });

    this.app.run({}, function() {
      helpers.assertFiles(expected);
      done();
    });
  });
});
