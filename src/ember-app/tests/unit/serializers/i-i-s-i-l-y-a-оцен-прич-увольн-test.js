import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-i-l-y-a-оцен-прич-увольн', 'Unit | Serializer | i-i-s-i-l-y-a-оцен-прич-увольн', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-i-l-y-a-оцен-прич-увольн',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-i-l-y-a-возраст',
    'transform:i-i-s-i-l-y-a-катег-сотруд',
    'transform:i-i-s-i-l-y-a-стаж',
    'transform:i-i-s-i-l-y-a-факторы',

    'model:i-i-s-i-l-y-a-анкеты',
    'model:i-i-s-i-l-y-a-оцен-прич-увольн',
    'model:i-i-s-i-l-y-a-причин-увольн',
    'model:i-i-s-i-l-y-a-рекомендац',
    'model:i-i-s-i-l-y-a-специалист',
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
