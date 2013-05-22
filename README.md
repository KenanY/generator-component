# generator-component

[![Build Status](https://secure.travis-ci.org/KenanY/generator-component.png?branch=master)](https://travis-ci.org/KenanY/generator-component)
[![Dependency Status](https://gemnasium.com/KenanY/generator-component.png)](https://gemnasium.com/KenanY/generator-component)

An opinionated Yeoman generator for [components](https://github.com/component).

## Getting started

``` bash
$ npm install yo generator-component -g
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

## Release Notes

### 1.3.0

- Do not slugify every instance of the component's name
- Ask for repo (`KenanY/gcd`) instead of just a name (`gcd`)
- Initial support for HTML and CSS generation

See previous releases [here](https://github.com/KenanY/generator-component/wiki/Changelog)