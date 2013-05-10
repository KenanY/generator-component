var path    = require('path');
var assert  = require('assert');
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

  it('can be imported', function() {
    var importApp = require('../app');
    assert(importApp !== undefined);
  });

  it('creates basic files', function(done) {
    var expected = [
      '.gitattributes',
      '.gitignore',
      'HISTORY.md',
      ['component.json', /"name": "temp"/],
      'index.js',
      ['package.json', /"name": "temp"/],
      'README.md'
    ];

    helpers.mockPrompt(this.app, {
      'editorConfig': 'N'
    });

    this.app.options['skip-install'] = true;
    this.app.run({}, function() {
      helpers.assertFiles(expected);
      done();
    });
  });

  it('creates extra files', function(done) {
    var expected = [
      '.editorconfig',
      '.gitattributes',
      '.gitignore',
      'HISTORY.md',
      ['component.json', /"name": "temp"/],
      'index.js',
      ['package.json', /"name": "temp"/],
      'README.md'
    ];

    helpers.mockPrompt(this.app, {
      'editorConfig': 'Y'
    });

    this.app.options['skip-install'] = true;
    this.app.run({}, function() {
      helpers.assertFiles(expected);
      done();
    });
  });
});