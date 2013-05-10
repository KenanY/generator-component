# generator-component

[![Build Status](https://secure.travis-ci.org/KenanY/generator-component.png?branch=master)](https://travis-ci.org/KenanY/generator-component)
[![Dependency Status](https://gemnasium.com/KenanY/generator-component.png)](https://gemnasium.com/KenanY/generator-component)

An opinionated Yeoman generator for [components](https://github.com/component).

## Getting started

``` bash
$ npm install yo -g
$ npm install generator-component
$ yo component
```

## Options

<table>
  <tr>
    <th>Flag</th>
    <th>Effect</th>
  </tr>
  <tr>
    <td><code>--skip-install</code></td>
    <td>Skips the automatic execution of <code>npm install</code> after scaffolding has finished.</td>
  </tr>
</table>

## Scaffold

<table>
  <tr>
    <th>File</th>
    <th>Purpose</th>
    <th>Optional?</th>
  </tr>
  <tr>
    <td><code>.editorconfig</code></td>
    <td>Define and maintain consistent coding styles between editors.</td>
    <td>✔</td>
  </tr>
  <tr>
    <td><code>.gitattributes</code></td>
    <td>Automatic end-of-line normalization by git.</td>
    <td>✘</td>
  </tr>
  <tr>
    <td><code>.gitignore</code></td>
    <td>List of files that git should ignore.</td>
    <td>✘</td>
  </tr>
  <tr>
    <td><code>component.json</code></td>
    <td>Absolutely necessary.</td>
    <td>✘</td>
  </tr>
  <tr>
    <td><code>HISTORY.md</code></td>
    <td>Your changelog.</td>
    <td>✘</td>
  </tr>
  <tr>
    <td><code>index.js</code></td>
    <td>Your component's JavaScript source code.</td>
    <td>✘</td>
  </tr>
  <tr>
    <td><code>package.json</code></td>
    <td>Only required if you are going to publish your component to npm or if you want to use, say, mocha for testing.</td>
    <td>✔</td>
  </tr>
  <tr>
    <td><code>README.md</code></td>
    <td>Absolutely necessary.</td>
    <td>✘</td>
  </tr>
</table>

## Release notes

### 1.1.0

- `name` fields in `package.json` and `component.json` are now automatically filled in
- Prevent Yeoman's default behavior of executing `bower install`
- Scaffold `README.md`
- Quotes now surround node versions in `.travis.yml`
- `--skip-install` flag

See previous releases [here](https://github.com/KenanY/generator-component/wiki/Changelog)