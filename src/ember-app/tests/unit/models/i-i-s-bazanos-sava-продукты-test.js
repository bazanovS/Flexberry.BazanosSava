import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-bazanos-sava-продукты', 'Unit | Model | i-i-s-bazanos-sava-продукты', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
