var fs = require('fs');
var test = require('tap').test;

test('Valid JSON', function(t) {
  fs.readFile(
    '../data/radars.geojson',
    'utf8',
    function(err, data) {
      t.notOk(err);
      t.ok(JSON.parse(data));
      t.end();
    });
});
