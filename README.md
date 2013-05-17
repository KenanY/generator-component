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

## Release notes

### 1.2.0

- Test scaffolding
- Exclude `package.json` if component won't go on npm
- Update yeoman-generator to v0.11
- Generate `.travis.yml`

See previous releases [here](https://github.com/KenanY/generator-component/wiki/Changelog)