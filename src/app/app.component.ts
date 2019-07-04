import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // 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
  ngOnInit() {
    const divClass =  window.location.pathname.substr(1);
    $('.nav-item').removeClass('active');
    $('[go-to=' + divClass + ']').addClass('active');
    $([document.documentElement, document.body]).animate({
      scrollTop: $('.' + divClass).offset().top
    }, 2000);
  }
}
