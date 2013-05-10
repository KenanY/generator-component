var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');

var ComponentGenerator = module.exports = function ComponentGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function() {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
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
    name: 'editorConfig',
    message: 'Would you like an .editorconfig file?',
    default: 'Y/n',
    warning: 'Yes: An .editorconfig will will be created.'
  }];

  this.prompt(prompts, function(err, props) {
    if (err) {
      return this.emit('error', err);
    }

    this.editorConfig = (/y/i).test(props.editorConfig);

    cb();
  }.bind(this));
};

ComponentGenerator.prototype.test = function test() {
  this.mkdir('test');
};

ComponentGenerator.prototype.editorConfig = function editorConfig() {
  if (this.editorConfig) {
    this.copy('editorconfig', '.editorconfig');
  }
};

ComponentGenerator.prototype.git = function git() {
  this.copy('gitignore', '.gitignore');
  this.copy('gitattributes', '.gitattributes');
};

ComponentGenerator.prototype.history = function history() {
  this.copy('HISTORY.md', 'HISTORY.md');
};

ComponentGenerator.prototype.packageJSON = function packageJSON() {
  this.template('_package.json', 'package.json');
};

ComponentGenerator.prototype.componentJSON = function componentJSON() {
  this.template('_component.json', 'component.json');
};

ComponentGenerator.prototype.app = function app() {
  this.template('index.js', 'index.js');
};