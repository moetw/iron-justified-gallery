# iron-justified-gallery
Polymer element that shows a pretty formatted gallery (using the Flickr justified-layout library)

## Install

~~~~
npm install iron-justified-gallery --save
~~~~

## Usage



The element works with an array of objects.

```javascript

const array = [{
  "width": 500,
  "url": "{{URL}}"
}];
```

Supported options:

| Option            | Description                                             |
| ----------------- | ------------------------------------------------------- |
| **pictures**      | Source of pictures that will be rendered in the gallery |
| **galleryWidth**  | Width that the gallery will take                        |
| **rowHeight**     | Height of a single row in the gallery                   |
