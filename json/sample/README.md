# Generated usage sample

Created by this [script](https://github.com/ibarapascal/data-epicenter-jp/blob/master/src/csv2json.js)

Sample:  

```json
{
  "data": [
    {
      "depth": "388",
      "magnitude_a": "7",
      "timestamp": "441795821",
      "latitude": "33.6233",
      "longitude": "136.8383"
    },
    ...
  ]
}
```

## Attributes

**depth**: epicenter depth in km. - No limits

**magnitude_a**: [JMA magnitude](https://www.data.jma.go.jp/svd/eqev/data/bulletin/catalog/notes_e.html). - Range: >= `1.0`, `3.0`, `5.0`

**timestamp**: timestamp known as [unix time](https://en.wikipedia.org/wiki/Unix_time). - Range: date from `1983`, `2011`

**latitude**: decimal degrees latitude `[ + | - ] DDD.dddd` - Range: >= 20, <= 50

**longitude**: decimal degrees longitude `[ + | - ] DDD.dddd` - Range: >= 120, <= 150

## Usage

The basic important epicenter data restricted in JP.

## Application

### React

- tsconfig.json

```json
"compilerOptions": {
  "resolveJsonModule": true,
  ...
}
```

- App.js

```js
import * as jsonData from "./DT_JP_BaseAttrs_M5.json";

const dataList = jsonData.data;
```
