import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-bazanos-sava-горячие-напитки', 'Unit | Serializer | i-i-s-bazanos-sava-горячие-напитки', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-bazanos-sava-горячие-напитки',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-bazanos-sava-колво-сахара',
    'transform:i-i-s-bazanos-sava-оплата',

    'model:i-i-s-bazanos-sava-горячие-напитки',
    'model:i-i-s-bazanos-sava-еда',
    'model:i-i-s-bazanos-sava-заказ',
    'model:i-i-s-bazanos-sava-напитки',
    'model:i-i-s-bazanos-sava-продукты',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
