import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-i-l-y-a-специалист', 'Unit | Model | i-i-s-i-l-y-a-специалист', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
