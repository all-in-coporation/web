import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#navbar').hide();
    window.onscroll = function() {
      const currentScrollPos = window.pageYOffset;
      if (window.innerHeight <= currentScrollPos) {
        $('#navbar').fadeIn();
      } else if (window.innerHeight >= currentScrollPos) {
        $('#navbar').fadeOut();
      }
    };
  }

  goTo(divClass) {
    $('.nav-item').removeClass('active');
    $('[go-to=' + divClass + ']').addClass('active');
    window.history.pushState(null, divClass, '/' + divClass);
    $([document.documentElement, document.body]).animate({
      scrollTop: $('.' + divClass).offset().top
    }, 2000);
  }
}
