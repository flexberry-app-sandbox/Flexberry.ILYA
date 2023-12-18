import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

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
        'application-name': 'ILYA',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'ILYA',
          title: 'ILYA'
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
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
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
