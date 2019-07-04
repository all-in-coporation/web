import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  goTo(divClass) {
    $('.nav-item').removeClass('active');
    $('[go-to=' + divClass + ']').addClass('active');
    $([document.documentElement, document.body]).animate({
      scrollTop: $('.' + divClass).offset().top
    }, 2000);
    $([document.documentElement, document.body]).animate({
      scrollTop: $('.' + divClass).offset().top
    }, 2000);
    if ($('.menu-popover').hasClass('d-block')) {
      $('body').removeClass('stop-scrolling');
      $('.menu-popover').removeClass('d-block');
      $('.menu-popover').addClass('d-none');
    }
  }

  close() {
    $('body').removeClass('stop-scrolling');
    $('.menu-popover').removeClass('d-block');
    $('.menu-popover').addClass('d-none');
  }

  showMenu() {
    $('.menu-popover').removeClass('d-none');
    $('.menu-popover').addClass('d-block');
    $('body').addClass('stop-scrolling');
  }
}
