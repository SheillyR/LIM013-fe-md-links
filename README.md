# < SheillyR >/md-links

## Índice

* [1. Markdown Links](#1-markdown-links)
* [2. Flowchart](#2-flowchart)
* [3. Backlog](#3-backlog)
* [4. Installation](#4-installation)
* [5. Usage](#5-usage)
* [6. Project Link](#6-project-link)

***

## 1. Markdown Links
Module includes executable and an interface that we can import with require to use it programmatically.

## 2. Flowchart
<center>
<a href="https://ibb.co/tBx3jtc"><img src="https://i.ibb.co/DGgNWM2/md-links-flowchart.png" alt="md-links-flowchart" border="0"></a>
</center>

## 3. Backlog

## 4. Installation

####CLI:  `npm install <SheillyR>/md-links`

## 5. Usage

### API

#### `mdLinks(path, options)`

##### Argumentos

* `path`: Absolute or relative path to the file or directory.
* `options`: An object with the following properties:
  - `validate`: Boolean that determines if you want to validate the links found.

##### Return value

The function must return a promise (`Promise`) that resolves to an array of objects, where each object represents a link and contains
the following properties:

* `href`: URL found.
* `text`: Text that appeared inside the link (` <a> `).
* `file`: Path of the file where the link was found.

#### Example

```js
const mdLinks = require("md-links");

mdLinks("./some/dir")
  .then(links => {
    // => [{ href, text, file }]
  })
  .catch(console.error);
mdLinks("./some/example.md")
  .then(links => {
    // => [{ href, text, file }]
  })
  .catch(console.error);

mdLinks("./some/example.md", { validate: true })
  .then(links => {
    // => [{ href, text, file, status, message }]
  })
  .catch(console.error);
```

### CLI (Command Line Interface)

The executable of our application must be able to run as follows
way through terminal:

`md-links <path-to-file> [options]`

For example:

<center>
<a href="https://ibb.co/b19gCY5"><img src="https://i.ibb.co/tBrMvnp/md-Links-cli.png" alt="md-Links-cli" border="0"></a>
</center>

#### Options

##### `-v or --validate`

If we pass the `--validate` option, the module must make an HTTP request to find out if the link works or not. If the link results in a redirect to a URL that responds ok, then we will treat the link as ok.

For example:

<center>
<a href="https://ibb.co/b50g7Bb"><img src="https://i.ibb.co/TTF4J6v/md-Links-v.png" alt="md-Links-v" border="0"></a>
</center>

##### `-s or --stats`

If we pass the `--stats` option, the output will be a text with basic statistics about the links.
<center>
<a href="https://ibb.co/HGD716j"><img src="https://i.ibb.co/zSDzs1H/md-Links-s.png" alt="md-Links-s" border="0"></a>
</center>

We can also combine `--stats` and` --validate` to get statistics that
need the results of the validation.

<center>
<a href="https://ibb.co/fCnxmSp"><img src="https://i.ibb.co/mrstz5Y/mdlinks-s-v.png" alt="mdlinks-s-v" border="0"></a>
</center>

## 6. Project Link