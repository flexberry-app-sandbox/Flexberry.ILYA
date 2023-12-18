import {
  defineNamespace,
  defineProjections,
  Model as ОценПричУвольнMixin
} from '../mixins/regenerated/models/i-i-s-i-l-y-a-оцен-прич-увольн';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ОценПричУвольнMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
