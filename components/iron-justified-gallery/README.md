# iron-justified-gallery [![Build Status](https://travis-ci.org/Collaborne/iron-justified-gallery.svg?branch=master)](https://travis-ci.org/Collaborne/iron-justified-gallery)
Polymer element that shows a pretty formatted gallery (using the Flickr justified-layout library)

## Install

~~~~
npm install iron-justified-gallery --save
~~~~

## Usage

Supported options:

| Option            | Description                                             |
| ----------------- | ------------------------------------------------------- |
| **images**        | Source of images that will be rendered in the gallery   |
| **galleryWidth**  | Width that the gallery will take                        |
| **rowHeight**     | Height of a single row in the gallery                   |

The images need to be a JavaScript array with absolute URLs:

```javascript
const array = [
  { url: "http://www.server.com/image1.png", width: 500 },
  { url: "http://www.server.com/image2.png", width: 500 },
  { url: "http://www.server.com/image3.png", width: 500 }
];
```

## Example

To use the element in HTML:

```html
<iron-justified-gallery
  images="[[images]]"
  gallery-width="500"
  row-height="150">
</iron-justified-gallery>
```
