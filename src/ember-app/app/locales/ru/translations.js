import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISILYAАнкетыLForm from './forms/i-i-s-i-l-y-a-анкеты-l';
import IISILYAПричинУвольнLForm from './forms/i-i-s-i-l-y-a-причин-увольн-l';
import IISILYAСпециалистLForm from './forms/i-i-s-i-l-y-a-специалист-l';
import IISILYAАнкетыEForm from './forms/i-i-s-i-l-y-a-анкеты-e';
import IISILYAПричинУвольнEForm from './forms/i-i-s-i-l-y-a-причин-увольн-e';
import IISILYAСпециалистEForm from './forms/i-i-s-i-l-y-a-специалист-e';
import IISILYAАнкетыModel from './models/i-i-s-i-l-y-a-анкеты';
import IISILYAОценПричУвольнModel from './models/i-i-s-i-l-y-a-оцен-прич-увольн';
import IISILYAПричинУвольнModel from './models/i-i-s-i-l-y-a-причин-увольн';
import IISILYAРекомендацModel from './models/i-i-s-i-l-y-a-рекомендац';
import IISILYAСпециалистModel from './models/i-i-s-i-l-y-a-специалист';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-i-l-y-a-анкеты': IISILYAАнкетыModel,
    'i-i-s-i-l-y-a-оцен-прич-увольн': IISILYAОценПричУвольнModel,
    'i-i-s-i-l-y-a-причин-увольн': IISILYAПричинУвольнModel,
    'i-i-s-i-l-y-a-рекомендац': IISILYAРекомендацModel,
    'i-i-s-i-l-y-a-специалист': IISILYAСпециалистModel
  },

  'application-name': 'ILYA',

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
        'application-name': 'ILYA',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'ILYA',
          title: 'ILYA'
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
        'i-l-y-a': {
          caption: 'ILYA',
          title: 'ILYA',
          'i-i-s-i-l-y-a-специалист-l': {
            caption: 'Специалист',
            title: ''
          },
          'i-i-s-i-l-y-a-анкеты-l': {
            caption: 'Анкеты',
            title: ''
          },
          'i-i-s-i-l-y-a-причин-увольн-l': {
            caption: 'Причин увольн',
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
    'i-i-s-i-l-y-a-анкеты-l': IISILYAАнкетыLForm,
    'i-i-s-i-l-y-a-причин-увольн-l': IISILYAПричинУвольнLForm,
    'i-i-s-i-l-y-a-специалист-l': IISILYAСпециалистLForm,
    'i-i-s-i-l-y-a-анкеты-e': IISILYAАнкетыEForm,
    'i-i-s-i-l-y-a-причин-увольн-e': IISILYAПричинУвольнEForm,
    'i-i-s-i-l-y-a-специалист-e': IISILYAСпециалистEForm
  },

});

export default translations;
