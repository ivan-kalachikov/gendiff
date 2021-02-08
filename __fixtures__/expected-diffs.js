const stylishDiffs = `{
    common: {
      + follow: false
        setting1: Value 1
      - setting2: 200
      - setting3: true
      + setting3: null
      + setting4: blah blah
      + setting5: {
            key5: value5
        }
        setting6: {
            doge: {
              - wow: 
              + wow: so much
            }
            key: value
          + ops: vops
        }
    }
    group1: {
      - baz: bas
      + baz: bars
        foo: bar
      - nest: {
            key: value
        }
      + nest: str
    }
  - group2: {
        abc: 12345
        deep: {
            id: 45
        }
    }
  + group3: {
        fee: 100500
        deep: {
            id: {
                number: 45
            }
        }
    }
}`;

const plainDiffs = `Property 'common.follow' was added with value: false
Property 'common.setting2' was removed
Property 'common.setting3' was updated. From true to null
Property 'common.setting4' was added with value: 'blah blah'
Property 'common.setting5' was added with value: [complex value]
Property 'common.setting6.doge.wow' was updated. From '' to 'so much'
Property 'common.setting6.ops' was added with value: 'vops'
Property 'group1.baz' was updated. From 'bas' to 'bars'
Property 'group1.nest' was updated. From [complex value] to 'str'
Property 'group2' was removed
Property 'group3' was added with value: [complex value]`;

const JSONDiffs = '[{"key":"common","status":"changed","children":[{"key":"follow","status":"added","newValue":false},{"key":"setting1","status":"unchanged","oldValue":"Value 1"},{"key":"setting2","status":"removed","oldValue":200},{"key":"setting3","status":"changed","oldValue":true,"newValue":null},{"key":"setting4","status":"added","newValue":"blah blah"},{"key":"setting5","status":"added","newValue":{"key5":"value5"}},{"key":"setting6","status":"changed","children":[{"key":"doge","status":"changed","children":[{"key":"wow","status":"changed","oldValue":"","newValue":"so much"}]},{"key":"key","status":"unchanged","oldValue":"value"},{"key":"ops","status":"added","newValue":"vops"}]}]},{"key":"group1","status":"changed","children":[{"key":"baz","status":"changed","oldValue":"bas","newValue":"bars"},{"key":"foo","status":"unchanged","oldValue":"bar"},{"key":"nest","status":"changed","oldValue":{"key":"value"},"newValue":"str"}]},{"key":"group2","status":"removed","oldValue":{"abc":12345,"deep":{"id":45}}},{"key":"group3","status":"added","newValue":{"fee":100500,"deep":{"id":{"number":45}}}}]';

export { stylishDiffs, plainDiffs, JSONDiffs };
