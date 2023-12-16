import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаЗаказа: DS.attr('date', { defaultValue() { return new Date(); } }),
  типОплаты: DS.attr('i-i-s-bazanos-sava-оплата'),
  еда: DS.hasMany('i-i-s-bazanos-sava-еда', { inverse: 'заказ', async: false }),
  горячиеНапитки: DS.hasMany('i-i-s-bazanos-sava-горячие-напитки', { inverse: 'заказ', async: false })
});

export let ValidationRules = {
  датаЗаказа: {
    descriptionKey: 'models.i-i-s-bazanos-sava-заказ.validations.датаЗаказа.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  типОплаты: {
    descriptionKey: 'models.i-i-s-bazanos-sava-заказ.validations.типОплаты.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  еда: {
    descriptionKey: 'models.i-i-s-bazanos-sava-заказ.validations.еда.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
  горячиеНапитки: {
    descriptionKey: 'models.i-i-s-bazanos-sava-заказ.validations.горячиеНапитки.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаказE', 'i-i-s-bazanos-sava-заказ', {
    датаЗаказа: attr('Дата заказа', { index: 0 }),
    типОплаты: attr('Тип оплаты', { index: 1 }),
    еда: hasMany('i-i-s-bazanos-sava-еда', 'Еда', {
      продукты: belongsTo('i-i-s-bazanos-sava-продукты', 'Продукты', {
        наименование: attr('Наименование', { index: 1, hidden: true }),
        цена: attr('Цена', { index: 2 })
      }, { index: 0, displayMemberPath: 'наименование' })
    }),
    горячиеНапитки: hasMany('i-i-s-bazanos-sava-горячие-напитки', 'Горячие напитки', {
      напитки: belongsTo('i-i-s-bazanos-sava-напитки', 'Напитки', {
        наименование: attr('Наименование', { index: 1, hidden: true }),
        цена: attr('Цена', { index: 2 })
      }, { index: 0, displayMemberPath: 'наименование' }),
      сахар: attr('Сахар', { index: 3 })
    })
  });

  modelClass.defineProjection('ЗаказL', 'i-i-s-bazanos-sava-заказ', {
    датаЗаказа: attr('Дата заказа', { index: 0 }),
    типОплаты: attr('Тип оплаты', { index: 1 })
  });
};
