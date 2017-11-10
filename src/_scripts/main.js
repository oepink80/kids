// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import $ from 'jquery';
//import 'parallax-js';

import General from './general';
import Header from '../_modules/header/header';
import Parallaxmodule from '../_modules/parallax/parallax'

$(() => {
  console.log('Welcome to Yeogurt!');
  new General();
  new Header();
  new Parallaxmodule();
});
