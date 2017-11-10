'use strict';
import Parallax from 'parallax-js'

export default class Parallaxmodule {
  constructor() {
    this.name = 'Parallax';
    console.log('%s module', this.name.toLowerCase());
    
    var scene = document.getElementById('scene');
    var parallax = new Parallax(scene);
  }
}
