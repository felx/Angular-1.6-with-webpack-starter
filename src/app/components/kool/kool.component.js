import template from './kool.html';
import controller from './kool.controller';
import './kool.scss';

let koolComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'koolvm'
};

export default koolComponent;
