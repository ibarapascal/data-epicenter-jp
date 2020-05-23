module.exports = {
  segments: (rowData, options) => {
    const len = options.length;
    return options
      .map((x, i, arr) => {
        const str = i === len - 1
          ? rowData.slice(x.no - 1)
          : rowData.slice(x.no - 1, arr[i + 1].no - 1);
        const value = x.decimal
          ? Number(str
              .split('')
              .map(x => x.replace(' ', '0'))
              .join('')
            ) / Math.pow(10, x.decimal)
          : str;
        return {
          value: value,
          attr: x.attr
        }}
      ).reduce((obj, y) => (
        obj[y.attr] = y.value, obj
      ), {});
  },
  defaultOptions: [
    { no: 01, attr: 'tag' },
    { no: 02, attr: 'year' },
    { no: 06, attr: 'month' },
    { no: 08, attr: 'day' },
    { no: 10, attr: 'hour' },
    { no: 12, attr: 'minute' },
    { no: 14, attr: 'second', decimal: 2 },
    { no: 18, attr: 'time_se', decimal: 2 },
    { no: 22, attr: 'latitude' },
    { no: 25, attr: 'latitude_m' },
    { no: 29, attr: 'latitude_se' },
    { no: 33, attr: 'longitude' },
    { no: 37, attr: 'longitude_m' },
    { no: 41, attr: 'longitude_se' },
    { no: 45, attr: 'depth', decimal: 2 },
    { no: 50, attr: 'depth_se', decimal: 2 },
    { no: 53, attr: 'magnitude_a', decimal: 1 },
    { no: 55, attr: 'magnitude_a_type' },
    { no: 56, attr: 'magnitude_b', decimal: 1 },
    { no: 58, attr: 'magnitude_b_type' },
    { no: 59, attr: 'time_table' },
    { no: 60, attr: 'evaluation' },
    { no: 61, attr: 'info_assistance' },
    { no: 62, attr: 'max_seismic' },
    { no: 63, attr: 'damate_scale' },
    { no: 64, attr: 'tsunami_scale' },
    { no: 65, attr: 'area_large' },
    { no: 66, attr: 'area_small' },
    { no: 69, attr: 'region' },
    { no: 93, attr: 'observation_points' },
    { no: 96, attr: 'flag' }
  ]
};
