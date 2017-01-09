# iron-justified-gallery
Polymer element that shows a pretty formatted gallery (using the Flickr justified-layout library)

## Install

~~~~
npm install iron-justified-gallery --save
~~~~

## Usage

Supported options:

| Option            | Description                                             |
| ----------------- | ------------------------------------------------------- |
| **pictures**      | Source of pictures that will be rendered in the gallery

```javascript

const array = [{
  "width": 500,
  "url": "{{URL}}"
}];
```
|
| **galleryWidth**  | Width that the gallery will take                        |
| **rowHeight**     | Height of a single row in the gallery                   |

## Example

To use the element in HTML:

```html
<iron-justified-gallery
  pictures="[[pictures]]"
  gallery-width="500"
  row-height="150">
</iron-justified-gallery>
```
