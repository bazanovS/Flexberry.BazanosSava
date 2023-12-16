import {
  defineNamespace,
  defineProjections,
  Model as ГорячиеНапиткиMixin
} from '../mixins/regenerated/models/i-i-s-bazanos-sava-горячие-напитки';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ГорячиеНапиткиMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
