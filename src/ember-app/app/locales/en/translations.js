import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISBazanosSavaЗаказLForm from './forms/i-i-s-bazanos-sava-заказ-l';
import IISBazanosSavaНапиткиLForm from './forms/i-i-s-bazanos-sava-напитки-l';
import IISBazanosSavaПродуктыLForm from './forms/i-i-s-bazanos-sava-продукты-l';
import IISBazanosSavaЗаказEForm from './forms/i-i-s-bazanos-sava-заказ-e';
import IISBazanosSavaНапиткиEForm from './forms/i-i-s-bazanos-sava-напитки-e';
import IISBazanosSavaПродуктыEForm from './forms/i-i-s-bazanos-sava-продукты-e';
import IISBazanosSavaГорячиеНапиткиModel from './models/i-i-s-bazanos-sava-горячие-напитки';
import IISBazanosSavaЕдаModel from './models/i-i-s-bazanos-sava-еда';
import IISBazanosSavaЗаказModel from './models/i-i-s-bazanos-sava-заказ';
import IISBazanosSavaНапиткиModel from './models/i-i-s-bazanos-sava-напитки';
import IISBazanosSavaПродуктыModel from './models/i-i-s-bazanos-sava-продукты';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-bazanos-sava-горячие-напитки': IISBazanosSavaГорячиеНапиткиModel,
    'i-i-s-bazanos-sava-еда': IISBazanosSavaЕдаModel,
    'i-i-s-bazanos-sava-заказ': IISBazanosSavaЗаказModel,
    'i-i-s-bazanos-sava-напитки': IISBazanosSavaНапиткиModel,
    'i-i-s-bazanos-sava-продукты': IISBazanosSavaПродуктыModel
  },

  'application-name': 'Bazanos sava',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Bazanos sava',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Bazanos sava',
          title: 'Bazanos sava'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        клиентам: {
          caption: 'Клиентам',
          title: 'Клиентам',
          'i-i-s-bazanos-sava-заказ-l': {
            caption: 'Заказ',
            title: ''
          }
        },
        сотрудникам: {
          caption: 'Сотрудникам',
          title: 'Сотрудникам',
          'i-i-s-bazanos-sava-напитки-l': {
            caption: 'Напитки',
            title: ''
          },
          'i-i-s-bazanos-sava-продукты-l': {
            caption: 'Продукты',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-bazanos-sava-заказ-l': IISBazanosSavaЗаказLForm,
    'i-i-s-bazanos-sava-напитки-l': IISBazanosSavaНапиткиLForm,
    'i-i-s-bazanos-sava-продукты-l': IISBazanosSavaПродуктыLForm,
    'i-i-s-bazanos-sava-заказ-e': IISBazanosSavaЗаказEForm,
    'i-i-s-bazanos-sava-напитки-e': IISBazanosSavaНапиткиEForm,
    'i-i-s-bazanos-sava-продукты-e': IISBazanosSavaПродуктыEForm
  },

});

export default translations;
