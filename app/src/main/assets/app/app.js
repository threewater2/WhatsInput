/**
 * User: willerce
 * Date: 10/30/12
 * Time: 11:44 PM
 */

"use strict";

let whatsInput = angular.module('whatsinput', ['ui']);

let keys = [
  {name: 'Home', android_code: '3', pc_code: ''},
  {name: 'Back', android_code: '4', pc_code: ''},
  {name: 'Clear', android_code: '28', pc_code: ''},
  {name: 'Tab', android_code: '61', pc_code: '9'},
  {name: 'Space', android_code: '62', pc_code: ''},
  {name: 'Enter', android_code: '66', pc_code: '13'},
  {name: 'Focus', android_code: '80', pc_code: ''},
  {name: 'Menu', android_code: '82', pc_code: ''},
  {name: 'Search', android_code: '84', pc_code: ''},
  {name: 'Move Home', android_code: '122', pc_code: ''},
  {name: 'Move End', android_code: '123', pc_code: ''},
  {name: 'Windows', android_code: '171', pc_code: ''}
];