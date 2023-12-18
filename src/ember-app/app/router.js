import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-i-l-y-a-анкеты-l');
  this.route('i-i-s-i-l-y-a-анкеты-e',
  { path: 'i-i-s-i-l-y-a-анкеты-e/:id' });
  this.route('i-i-s-i-l-y-a-анкеты-e.new',
  { path: 'i-i-s-i-l-y-a-анкеты-e/new' });
  this.route('i-i-s-i-l-y-a-причин-увольн-l');
  this.route('i-i-s-i-l-y-a-причин-увольн-e',
  { path: 'i-i-s-i-l-y-a-причин-увольн-e/:id' });
  this.route('i-i-s-i-l-y-a-причин-увольн-e.new',
  { path: 'i-i-s-i-l-y-a-причин-увольн-e/new' });
  this.route('i-i-s-i-l-y-a-специалист-l');
  this.route('i-i-s-i-l-y-a-специалист-e',
  { path: 'i-i-s-i-l-y-a-специалист-e/:id' });
  this.route('i-i-s-i-l-y-a-специалист-e.new',
  { path: 'i-i-s-i-l-y-a-специалист-e/new' });
});

export default Router;
