# Generated usage sample

Created by this [script](https://github.com/ibarapascal/data-epicenter-jp/blob/master/src/raw2usercase.js)

Sample:  

<table class="js-csv-data csv-data js-file-line-container">
  <thead>
    <tr id="LC1" class="js-file-line">
      <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
      <th>depth</th>
      <th>magnitude_a</th>
      <th>timestamp</th>
      <th>latitude</th>
      <th>longitude</th>
    </tr>
  </thead>
  <tbody>
    <tr id="LC5861" class="js-file-line">
      <td
        id="L5861"
        class="blob-num js-line-number"
        data-line-number="5861"
      ></td>
      <td>39.67</td>
      <td>5.1</td>
      <td>1482513902</td>
      <td>36.7282</td>
      <td>141.8532</td>
    </tr>
  </tbody>
</table>

## Attributes

**depth**: epicenter depth in km. - No limits

**magnitude_a**: [JMA magnitude](https://www.data.jma.go.jp/svd/eqev/data/bulletin/catalog/notes_e.html). - Range: >= `1.0`, `3.0`, `5.0`

**timestamp**: timestamp known as [unix time](https://en.wikipedia.org/wiki/Unix_time). - Range: date from `1983` to `2018/08`

**latitude**: decimal degrees latitude `[ + | - ] DDD.dddd` - Range: >= 20, <= 50

**longitude**: decimal degrees longitude `[ + | - ] DDD.dddd` - Range: >= 120, <= 150

## Usage

The basic important epicenter data restricted in JP.
