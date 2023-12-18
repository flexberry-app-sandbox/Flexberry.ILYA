import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.i-l-y-a.caption'),
          title: i18n.t('forms.application.sitemap.i-l-y-a.title'),
          children: [{
            link: 'i-i-s-i-l-y-a-специалист-l',
            caption: i18n.t('forms.application.sitemap.i-l-y-a.i-i-s-i-l-y-a-специалист-l.caption'),
            title: i18n.t('forms.application.sitemap.i-l-y-a.i-i-s-i-l-y-a-специалист-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-i-l-y-a-анкеты-l',
            caption: i18n.t('forms.application.sitemap.i-l-y-a.i-i-s-i-l-y-a-анкеты-l.caption'),
            title: i18n.t('forms.application.sitemap.i-l-y-a.i-i-s-i-l-y-a-анкеты-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-i-l-y-a-причин-увольн-l',
            caption: i18n.t('forms.application.sitemap.i-l-y-a.i-i-s-i-l-y-a-причин-увольн-l.caption'),
            title: i18n.t('forms.application.sitemap.i-l-y-a.i-i-s-i-l-y-a-причин-увольн-l.title'),
            children: null
          }]
        }
      ]
    };
  }),
})