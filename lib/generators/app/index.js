var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');

var ComponentGenerator = module.exports = function ComponentGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function() {
    if (options['skip-install']) {
      this.installDependencies({skipInstall: true});
    } else {
      this.installDependencies({bower: false, npm: true, skipInstall: false});
    }
  });

  this.sourceRoot(path.join(__dirname, '../../templates/'));
};

util.inherits(ComponentGenerator, yeoman.generators.NamedBase);

ComponentGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  var welcome =
  '\n     _-----_' +
  '\n    |       |' +
  '\n    |' + '--(o)--'.red + '|   .--------------------------.' +
  '\n   `---------´  |    ' + 'Welcome to Yeoman,'.yellow.bold + '    |' +
  '\n    ' + '( '.yellow + '_' + '´U`'.yellow + '_' + ' )'.yellow + '   |   ' + 'ladies and gentlemen!'.yellow.bold + '  |' +
  '\n    /___A___\\   \'__________________________\'' +
  '\n     |  ~  |'.yellow +
  '\n   __' + '\'.___.\''.yellow + '__' +
  '\n ´   ' + '`  |'.red + '° ' + '´ Y'.red + ' `\n';

  console.log(welcome);

  var prompts = [{
    name: 'componentRepo',
    message: 'repo:',
    default: 'username/project'
  },
  {
    name: 'componentDescription',
    message: 'description:',
    default: 'A component.'
  },
  {
    name: 'componentHasJS',
    message: 'Does this component have JS?',
    default: 'Y/n'
  },
  {
    name: 'componentHasCSS',
    message: 'Does this component have CSS?',
    default: 'Y/n'
  },
  {
    name: 'componentHasHTML',
    message: 'Does this component have HTML?',
    default: 'Y/n'
  },
  {
    name: 'testScaffolding',
    message: 'Would you like tests?',
    default: 'Y/n'
  },
  {
    name: 'editorConfig',
    message: 'Would you like an .editorconfig file?',
    default: 'Y/n'
  },
  {
    name: 'npmPublishing',
    message: 'Would you like to publish this component to npm?',
    default: 'Y/n'
  }];

  this.prompt(prompts, function(err, props) {
    if (err) {
      return this.emit('error', err);
    }

    var repo = props.componentRepo.split('/');
    if (repo.length != 2) throw new Error('repo must be <username>/<project>');

    var name = repo[1];

    this.componentRepo = props.componentFullName;
    this.componentDescription = props.componentDescription;
    this.testScaffolding = (/y/i).test(props.testScaffolding);
    this.editorConfig = (/y/i).test(props.editorConfig);
    this.npmPublishing = (/y/i).test(props.npmPublishing);

    cb();
  }.bind(this));
};

ComponentGenerator.prototype.testFolder = function testFolder() {
  if (this.testScaffolding) {
    this.directory('test', 'test');
  }
};

ComponentGenerator.prototype.dotfiles = function dotfiles() {
  this.copy('gitignore', '.gitignore');
  this.copy('gitattributes', '.gitattributes');

  if (this.editorConfig) {
    this.copy('editorconfig', '.editorconfig');
  }
  if (this.testScaffolding) {
    this.copy('travis.yml', '.travis.yml');
  }
};

ComponentGenerator.prototype.markdownFiles = function markdownFiles() {
  this.copy('HISTORY.md', 'HISTORY.md');
  this.template('README.md', 'README.md');
};

ComponentGenerator.prototype.jsonFiles = function jsonFiles() {
  this.template('_component.json', 'component.json');

  if (this.npmPublishing || this.testScaffolding) {
    this.template('_package.json', 'package.json');
  }
};

ComponentGenerator.prototype.app = function app() {
  this.template('index.js', 'index.js');
};