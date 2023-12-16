import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-bazanos-sava-заказ-l');
  this.route('i-i-s-bazanos-sava-заказ-e',
  { path: 'i-i-s-bazanos-sava-заказ-e/:id' });
  this.route('i-i-s-bazanos-sava-заказ-e.new',
  { path: 'i-i-s-bazanos-sava-заказ-e/new' });
  this.route('i-i-s-bazanos-sava-напитки-l');
  this.route('i-i-s-bazanos-sava-напитки-e',
  { path: 'i-i-s-bazanos-sava-напитки-e/:id' });
  this.route('i-i-s-bazanos-sava-напитки-e.new',
  { path: 'i-i-s-bazanos-sava-напитки-e/new' });
  this.route('i-i-s-bazanos-sava-продукты-l');
  this.route('i-i-s-bazanos-sava-продукты-e',
  { path: 'i-i-s-bazanos-sava-продукты-e/:id' });
  this.route('i-i-s-bazanos-sava-продукты-e.new',
  { path: 'i-i-s-bazanos-sava-продукты-e/new' });
});

export default Router;
