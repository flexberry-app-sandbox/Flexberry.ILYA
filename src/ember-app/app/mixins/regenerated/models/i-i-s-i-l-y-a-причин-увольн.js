import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаЗаполн: DS.attr('date', { defaultValue() { return new Date(); } }),
  оценПричУвольн: DS.belongsTo('i-i-s-i-l-y-a-оцен-прич-увольн', { inverse: null, async: false }),
  специалист: DS.belongsTo('i-i-s-i-l-y-a-специалист', { inverse: null, async: false }),
  рекомендации: DS.hasMany('i-i-s-i-l-y-a-рекомендац', { inverse: 'причинУвольн', async: false })
});

export let ValidationRules = {
  датаЗаполн: {
    descriptionKey: 'models.i-i-s-i-l-y-a-причин-увольн.validations.датаЗаполн.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  оценПричУвольн: {
    descriptionKey: 'models.i-i-s-i-l-y-a-причин-увольн.validations.оценПричУвольн.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  специалист: {
    descriptionKey: 'models.i-i-s-i-l-y-a-причин-увольн.validations.специалист.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  рекомендации: {
    descriptionKey: 'models.i-i-s-i-l-y-a-причин-увольн.validations.рекомендации.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПричинУвольнE', 'i-i-s-i-l-y-a-причин-увольн', {
    датаЗаполн: attr('Дата заполнения', { index: 0 }),
    рекомендации: hasMany('i-i-s-i-l-y-a-рекомендац', 'Рекомендации', {
      специалисты: attr('Специалисты', { index: 0 }),
      руководители: attr('Руководители', { index: 1 }),
      рабочие: attr('Рабочие', { index: 2 })
    })
  });

  modelClass.defineProjection('ПричинУвольнL', 'i-i-s-i-l-y-a-причин-увольн', {
    датаЗаполн: attr('Дата заполн', { index: 0 })
  });
};
