import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Bazanos sava',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Bazanos sava',
          title: 'Bazanos sava'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
