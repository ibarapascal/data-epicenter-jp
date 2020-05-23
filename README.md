# Data of earthquake epicenter in Japan

## 1. Look what we've got here

- Formated Japan epicenter data in csv, json.  

- Some JS Scripts to do it and other customized usage.

## 2. Data

### 2.1. The base csv

[Raw data (~330MB)](https://github.com/ibarapascal/data-epicenter-jp/tree/master/raw) from [official source](#6-source) => formated [csv data (~430MB)](https://github.com/ibarapascal/data-epicenter-jp/tree/master/csv/base) which can be used easier.

Time Range: 1983 - 201808

formated (base):  

<table class="js-csv-data csv-data js-file-line-container">
  <thead>
    <tr id="LC1" class="js-file-line">
      <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
      <th>tag</th>
      <th>year</th>
      <th>month</th>
      <th>day</th>
      <th>hour</th>
      <th>minute</th>
      <th>second</th>
      <th>time_se</th>
      <th>latitude</th>
      <th>latitude_m</th>
      <th>latitude_se</th>
      <th>longitude</th>
      <th>longitude_m</th>
      <th>longitude_se</th>
      <th>depth</th>
      <th>depth_se</th>
      <th>magnitude_a</th>
      <th>magnitude_a_type</th>
      <th>magnitude_b</th>
      <th>magnitude_b_type</th>
      <th>time_table</th>
      <th>evaluation</th>
      <th>info_assistance</th>
      <th>max_seismic</th>
      <th>damate_scale</th>
      <th>tsunami_scale</th>
      <th>area_large</th>
      <th>area_small</th>
      <th>region</th>
      <th>observation_points</th>
      <th>flag</th>
    </tr>
  </thead>
  <tbody>
    <tr id="LC2" class="js-file-line">
      <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
      <td>J</td>
      <td>2018</td>
      <td>01</td>
      <td>01</td>
      <td>00</td>
      <td>02</td>
      <td>52.91</td>
      <td>0.07</td>
      <td>37</td>
      <td>1306</td>
      <td>020</td>
      <td>138</td>
      <td>4804</td>
      <td>029</td>
      <td>12.64</td>
      <td>1.03</td>
      <td>1.5</td>
      <td>V</td>
      <td>0</td>
      <td></td>
      <td>5</td>
      <td>1</td>
      <td>1</td>
      <td></td>
      <td></td>
      <td></td>
      <td>4</td>
      <td>132</td>
      <td>MID NIIGATA PREF</td>
      <td>32</td>
      <td>A</td>
    </tr>
    <tr id="LC3" class="js-file-line">
      <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
      <td>J</td>
      <td>2018</td>
      <td>01</td>
      <td>01</td>
      <td>00</td>
      <td>05</td>
      <td>10.38</td>
      <td>0.07</td>
      <td>37</td>
      <td>0474</td>
      <td>014</td>
      <td>136</td>
      <td>4629</td>
      <td>035</td>
      <td>10.19</td>
      <td>0.71</td>
      <td>1</td>
      <td>V</td>
      <td>0</td>
      <td></td>
      <td>5</td>
      <td>1</td>
      <td>1</td>
      <td></td>
      <td></td>
      <td></td>
      <td>4</td>
      <td>135</td>
      <td>NOTO PENINSULA REGION</td>
      <td>10</td>
      <td>k</td>
    </tr>
  </tbody>
</table>

before (raw):  

<table
  class="highlight tab-size js-file-line-container"
  data-tab-size="8"
  data-paste-markdown-skip=""
>
  <tbody>
    <tr>
      <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
      <td id="LC1" class="blob-code blob-code-inner js-file-line">
        J2018010100025291 007 371306 020 1384804 029 126410315V 511 4132MID
        NIIGATA PREF 32A
      </td>
    </tr>
    <tr>
      <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
      <td id="LC2" class="blob-code blob-code-inner js-file-line">
        J2018010100051038 007 370474 014 1364629 035 101907110V 511 4135NOTO
        PENINSULA REGION 10k
      </td>
    </tr>
  </tbody>
</table>

### 2.2 Generated usage sample

Smaller, usable [sample data](https://github.com/ibarapascal/data-epicenter-jp/tree/master/csv/sample) created by the [script](#3-scripts)

- reduced attributes.
- limited range of latitude and longitude to JP.  
- limited the magnitude to M1, M3, M5.  

<table class="js-csv-data csv-data js-file-line-container">
  <thead>
    <tr id="LC1" class="js-file-line">
      <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <th>depth</th>
        <th>magnitude_a</th>
        <th>time</th>
        <th>latitude</th>
        <th>longitude</th>
    </tr>
  </thead>
  <tbody>
      <tr id="LC2" class="js-file-line">
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
          <td>388</td>
          <td>7</td>
          <td>19840101180341</td>
          <td> 33374 </td>
          <td> 136503 </td>
      </tr>
      <tr id="LC3" class="js-file-line">
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
          <td>43</td>
          <td>5.6</td>
          <td>19840117201340.6</td>
          <td> 36271 </td>
          <td> 141146 </td>
      </tr>
      <tr id="LC4" class="js-file-line">
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
          <td>43</td>
          <td>5.9</td>
          <td>19840118003156.3</td>
          <td> 36269 </td>
          <td> 141158 </td>
      </tr>
      <tr id="LC5" class="js-file-line">
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
          <td>87</td>
          <td>5.6</td>
          <td>19840123163456.2</td>
          <td> 29085 </td>
          <td> 130392 </td>
      </tr>
      <tr id="LC6" class="js-file-line">
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
          <td>70</td>
          <td>5.1</td>
          <td>1984012518355.8</td>
          <td> 42144 </td>
          <td> 143098 </td>
      </tr>
  </tbody>
</table>

[DT_JP_BaseAttrs_M5.csv](https://github.com/ibarapascal/data-epicenter-jp/blob/master/csv/sample/DT_JP_BaseAttrs_M5.csv): 5.8k records, 0.2MB  
[DT_JP_BaseAttrs_M3.csv](https://github.com/ibarapascal/data-epicenter-jp/blob/master/csv/sample/DT_JP_BaseAttrs_M3.csv): 206k records, 8.5MB  
[DT_JP_BaseAttrs_M1.csv](https://github.com/ibarapascal/data-epicenter-jp/blob/master/csv/sample/DT_JP_BaseAttrs_M1.csv): 1.8M records, 79.7MB

_Notice that github allows max 100MB for a single file, so we are still safe for another couple of years. :)_  
_[Github: Working with large files](https://help.github.com/en/github/managing-large-files/working-with-large-files)_

JSON: TODO

## 3. Scripts

### [raw2csv.js](https://github.com/ibarapascal/data-epicenter-jp/blob/master/src/raw2csv.js)

>Generate the formated base csv.

Basically keep untouched.

### [raw2usercase.js](https://github.com/ibarapascal/data-epicenter-jp/blob/master/src/raw2usercase.js)

>Generate the data you can use in your project. See the [sample data](https://github.com/ibarapascal/data-epicenter-jp/tree/master/csv/sample)

Feel free to customize this to make the data happy for your use case.

## 4. Develop

### 4.1. Quick Start

a). Clone the repo (no need for large dir `/csv`, `/raw`)

```
npm install
```

b). Open vscode, uncomment the js you want to play with inside the [vscode launcher settings](https://github.com/ibarapascal/data-epicenter-jp/blob/master/.vscode/launch.json)

c). Press **F5**.

### 4.2. npm scripts, CLI, CI

TODO

## 5. Applications

Optionaly use [plotly.js](https://plotly.com/javascript/) or [ArcGIS.js](https://developers.arcgis.com/javascript/latest/sample-code/visualization-vv-opacity-animate/index.html) to show it!

TODO

---

## 6. Source

[国土交通省気象庁 Japan Meteorological Agency](https://www.data.jma.go.jp/svd/eqev/data/bulletin/hypo.html)

Related link:

- [気象庁の地震カタログの解説 Catalog explanation](https://www.data.jma.go.jp/svd/eqev/data/bulletin/data/hypo/relocate.html)

- [震源レコードフォーマット Epicenter record format](https://www.data.jma.go.jp/svd/eqev/data/bulletin/data/format/hypfmt_j.html)

<table class="data2">
  <tbody>
    <tr>
      <th>欄</th>
      <th>型</th>
      <th>項目名</th>
      <th>内容</th>
    </tr>
    <tr>
      <td><tt>01</tt></td>
      <td><tt>A1</tt></td>
      <td>レコード種別ヘッダ</td>
      <td>
        J: 気象庁による震源<br />
        U: USGSが決定した震源<br />
        I: その他の国際機関(ISC,IASPEIなど)による震源
      </td>
    </tr>
    <tr>
      <td><tt>02-05</tt></td>
      <td><tt>I4</tt></td>
      <td>西暦</td>
      <td>オリジンタイムの西暦</td>
    </tr>
    <tr>
      <td><tt>06-07</tt></td>
      <td><tt>I2</tt></td>
      <td>月</td>
      <td>オリジンタイムの月</td>
    </tr>
    <tr>
      <td><tt>08-09</tt></td>
      <td><tt>l2</tt></td>
      <td>日</td>
      <td>オリジンタイムの日</td>
    </tr>
    <tr>
      <td><tt>10-11</tt></td>
      <td><tt>I2</tt></td>
      <td>時</td>
      <td>オリジンタイムの時</td>
    </tr>
    <tr>
      <td><tt>12-13</tt></td>
      <td><tt>I2</tt></td>
      <td>分</td>
      <td>オリジンタイムの分</td>
    </tr>
    <tr>
      <td><tt>14-17</tt></td>
      <td><tt>F4.2</tt></td>
      <td>秒</td>
      <td>オリジンタイムの秒<br />震源固定の場合は小数点以下空白</td>
    </tr>
    <tr>
      <td><tt>18-21</tt></td>
      <td><tt>F4.2</tt></td>
      <td>標準誤差(秒)</td>
      <td>
        オリジンタイムの標準誤差(秒)<br />震源固定の場合、または、Matched
        Filter法においてテンプレートの震源の情報を採用した場合は空白
      </td>
    </tr>
    <tr>
      <td><tt>22-24</tt></td>
      <td><tt>I3</tt></td>
      <td>緯度(度)</td>
      <td>震央の緯度(度)</td>
    </tr>
    <tr>
      <td><tt>25-28</tt></td>
      <td><tt>F4.2</tt></td>
      <td>緯度(分)</td>
      <td>震央の緯度(分)<br />震源固定の場合は小数点以下空白</td>
    </tr>
    <tr>
      <td><tt>29-32</tt></td>
      <td><tt>F4.2</tt></td>
      <td>標準誤差(分)</td>
      <td>
        震央の緯度の標準誤差(分)<br />震源固定の場合、または、Matched
        Filter法においてテンプレートの震源の情報を採用した場合は空白
      </td>
    </tr>
    <tr>
      <td><tt>33-36</tt></td>
      <td><tt>I4</tt></td>
      <td>経度(度)</td>
      <td>震央の経度(度)</td>
    </tr>
    <tr>
      <td><tt>37-40</tt></td>
      <td><tt>F4.2</tt></td>
      <td>経度(分)</td>
      <td>震央の経度(分)<br />震源固定の場合は小数点以下空白</td>
    </tr>
    <tr>
      <td><tt>41-44</tt></td>
      <td><tt>F4.2</tt></td>
      <td>標準誤差(分)</td>
      <td>
        震央の経度の標準誤差(分)<br />震源固定の場合、または、Matched
        Filter法においてテンプレートの震源の情報を採用した場合は空白
      </td>
    </tr>
    <tr>
      <td rowspan="2"><tt>45-49</tt></td>
      <td><tt>F5.2</tt></td>
      <td rowspan="2">深さ(km)</td>
      <td>深さフリーの条件で計算した時の震源の深さ(km)</td>
    </tr>
    <tr>
      <td><tt>I3, 2X</tt></td>
      <td>
        深さ固定または下記の刻みの条件で計算した時の震源の深さ(km)<br />
        10km(1926年～1960年，1967年～1982年)<br />
        20km(1961年～1966年)<br />
        1km(1983年～)<br />
        1982年以前の地震については適宜再調査され、深さフリーまたは1km刻みの震源に置き換えられる
      </td>
    </tr>
    <tr>
      <td><tt>50-52</tt></td>
      <td><tt>F3.2</tt></td>
      <td>標準誤差(km)</td>
      <td>
        震源の深さの標準誤差(km)<br />
        深さフリー以外の条件で計算した場合、または、Matched
        Filter法においてテンプレートの震源の情報を採用した場合は空白
      </td>
    </tr>
    <tr>
      <td><tt>53-54</tt></td>
      <td><tt>F2.1</tt></td>
      <td>マグニチュード1</td>
      <td>
        気象庁マグニチュード、気象庁ＣＭＴのモーメントマグニチュードまたはUSGS等が計算したマグニチュード<br />
        0未満の場合は以下のように表記する<br />
        -0.1: -1&nbsp;&nbsp; -0.9: -9&nbsp;&nbsp; -1.0: A0<br />
        -1.9: A9&nbsp;&nbsp; -2.0: B0&nbsp;&nbsp; -3.0: C0<br />
        マグニチュード1が求まらなかった場合は空白（半角スペース×２）
      </td>
    </tr>
    <tr>
      <td rowspan="4"><tt>55</tt></td>
      <td rowspan="4"><tt>A1</tt></td>
      <td rowspan="4">マグニチュード1種別</td>
      <td>
        &lt;気象庁マグニチュード&gt;<br />
        J: 旧観測網における坪井変位マグニチュード<br />
        (検知網展開以降は気象官署の震度計を2回積分して機械式地震計フィルターを適用した変位振幅に坪井変位マグニチュードを適用)<br />
        D: 坪井変位マグニチュードに準拠した変位マグニチュード<br />
        d: Dに同じ、ただし観測点数2点で決定<br />
        V: Dに準拠した速度マグニチュード<br />
        v: Vに同じ、ただし観測点数2または3点で決定
      </td>
    </tr>
    <tr>
      <td>
        &lt;モーメントマグニチュード&gt;<br />
        W:
        レコード種別がJの場合は気象庁ＣＭＴによるモーメントマグニチュード。レコード種別がJ以外の場合はUSGS等が計算したモーメントマグニチュードまたは気象庁ＣＭＴによるモーメントマグニチュード。
      </td>
    </tr>
    <tr>
      <td>
        &lt;他機関マグニチュード&gt;<br />
        B: USGS等が計算した実体波マグニチュード<br />
        S: USGS等が計算した表面波マグニチュード
      </td>
    </tr>
    <tr>
      <td>マグニチュード1が求まらなかった場合は空白（半角スペース×１）</td>
    </tr>
    <tr>
      <td><tt>56-57</tt></td>
      <td><tt>F2.1</tt></td>
      <td>マグニチュード2</td>
      <td>
        気象庁マグニチュード、気象庁ＣＭＴのモーメントマグニチュードまたはUSGS等が計算したマグニチュード<br />
        マグニチュード2が求まらなかった場合は空白（半角スペース×２）
      </td>
    </tr>
    <tr>
      <td><tt>58</tt></td>
      <td><tt>A1</tt></td>
      <td>マグニチュード2種別</td>
      <td>マグニチュード1種別と同様</td>
    </tr>
    <tr>
      <td><tt>59</tt></td>
      <td><tt>A1</tt></td>
      <td>使用走時表</td>
      <td>
        気象庁が震源を決定するために使った走時表の種類<br />
        他機関の場合空白<br />
        1: 標準走時表(83Aなど)<br />
        2: 三陸沖用走時表<br />
        3: 北海道東方沖用走時表<br />
        4: 千島列島付近用走時表(1を併用)<br />
        5: 標準走時表(JMA2001)<br />
        6: 千島列島付近用走時表(5を併用)
      </td>
    </tr>
    <tr>
      <td><tt>60</tt></td>
      <td><tt>A1</tt></td>
      <td>震源評価</td>
      <td>
        震源を決定するにあたっての初期条件等<br />
        不明の場合空白<br />
        1: 深さフリー<br />
        2: 深さ刻み条件(深さを一定の幅で変化させて計算)で最適解を求めた<br />
        3: 深さ固定等、人の判断による<br />
        4: Depth Phase を用いた<br />
        5: S-Pを用いた<br />
        7: 参考（2016年3月まで）<br />
        8: 決定不能または不採用<br />
        9: 震源固定(最も早い相を検測した観測点の緯度、経度)<br />
        M: Matched Filter法を用いた
      </td>
    </tr>
    <tr>
      <td><tt>61</tt></td>
      <td><tt>A1</tt></td>
      <td>震源補助情報</td>
      <td>
        気象庁の震源に対する情報<br />
        他機関の場合空白<br />
        1: 通常地震<br />
        2: 他機関依存<br />
        3: 人工地震<br />
        4: 噴火に伴う地震動等<br />
        5: 低周波イベント
      </td>
    </tr>
    <tr>
      <td><tt>62</tt></td>
      <td><tt>A1</tt></td>
      <td>最大震度</td>
      <td>
        1: 震度1<br />
        2: 震度2<br />
        3: 震度3<br />
        4: 震度4<br />
        5: 震度5(1996年9月まで)<br />
        6: 震度6(1996年9月まで)<br />
        7: 震度7<br />
        A: 震度5弱<br />
        B: 震度5強<br />
        C: 震度6弱<br />
        D: 震度6強<br />
        L: 局発地震(最大有感距離が100km未満) (1977年まで)<br />
        S: 小局発地震(最大有感距離が100km以上200km未満) (1977年まで)<br />
        M: やや顕著地震(最大有感距離が200km以上300km未満) (1977年まで)<br />
        R: 顕著地震(最大有感距離が300km以上) (1977年まで)<br />
        F: 有感地震(1984年まで) <br />
        X: 付近有感(1996年9月まで)
      </td>
    </tr>
    <tr>
      <td><tt>63</tt></td>
      <td><tt>A1</tt></td>
      <td>被害規模</td>
      <td>
        宇津が定めたところによる被害規模<br />
        1:
        壁や地面に亀裂が生じる程度の微小被害(火山などの特殊な場所の地割れなどは除く)<br />
        2: 家屋の破損、道路の損壊などが生じる程度の小被害<br />
        3: 複数の死者または複数の全壊家屋が生じる程度(ただし4には達しない)<br />
        4: 死者20人以上または家屋全壊1千戸以上(ただし5には達しない)<br />
        5: 死者200人以上または家屋全壊1万戸以上(ただし6には達しない)<br />
        6: 死者2千人以上または家屋全壊10万戸以上(ただし7には達しない)<br />
        7: 死者2万人以上または家屋全壊100万戸以上<br />
        X:
        被害あったが程度がわからないもの、または被害があったとみられるもの(1988年まで)<br />
        Y:
        同じ地域に直前または直後に起こった地震の被害と一緒になり、この地震の被害のみを取り出してその程度を与えることが難しいもので、直前または直後の地震の被害に含まれている(1988年まで)
      </td>
    </tr>
    <tr>
      <td rowspan="2"><tt>64</tt></td>
      <td rowspan="2"><tt>A1</tt></td>
      <td rowspan="2">津波規模</td>
      <td>
        1926年～1988年 宇津が定めたところによる津波規模<br />
        1: 検潮器では津波が観測されたが被害なし<br />
        T: 津波あり
      </td>
    </tr>
    <tr>
      <td>
        1989年～ 今村・飯田(1958)による津波規模<br />
        1: 波高50cm以下<br />
        2: 波高1m前後<br />
        3: 波高2m前後<br />
        4: 波高4～6m<br />
        5: 波高10～20m<br />
        6: 波高30m以上
      </td>
    </tr>
    <tr>
      <td><tt>65</tt></td>
      <td><tt>I1</tt></td>
      <td>大地域区分番号</td>
      <td>震央地名ファイルによるところの大地域区分番号</td>
    </tr>
    <tr>
      <td><tt>66-68</tt></td>
      <td><tt>I3</tt></td>
      <td>小地域区分番号</td>
      <td>震央地名ファイルによるところの小地域区分番号</td>
    </tr>
    <tr>
      <td><tt>69-92</tt></td>
      <td><tt>A24</tt></td>
      <td>震央地名</td>
      <td>震央地名</td>
    </tr>
    <tr>
      <td><tt>93-95</tt></td>
      <td><tt>I3</tt></td>
      <td>観測点数</td>
      <td>震源決定に使用した観測点の数</td>
    </tr>
    <tr>
      <td rowspan="2"><tt>96</tt></td>
      <td rowspan="2"><tt>A1</tt></td>
      <td rowspan="2">震源決定フラグ</td>
      <td rowspan="2">
        K: 気象庁震源<br />
        S: 参考震源<br />
        k: 簡易気象庁震源<br />
        s: 簡易参考震源<br />
        A: 自動気象庁震源<br />
        a: 自動参考震源<br />
        N: 震源固定・震源不定・未計算<br />
        F: 遠地<br />
        Kは決定精度が良いもの、k、Aは決定精度がやや良いもので、防災機関へは原則としてこれのみを表示した分布図を提供しており、S、s、aは決定精度が良くないもので、必要に応じて参考にするためのもの。Nは地震が発生したことを表すためのもの。<br />
        A、aは自動検測による震源、k、sはK、Sよりも簡易な手順の検測による震源
      </td>
    </tr>
    <tr></tr>
  </tbody>
</table>
