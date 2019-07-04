import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import swal from 'sweetalert2';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss']
})
export class MobileComponent implements OnInit {

  public mail: string;

  constructor(private http: HttpClient) {}

  ngOnInit() {
  }

  addMail(): void {
    const self = this;
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };
    this.http.post('mailer.allinnigthapp.com/add-mail', {
      mail: this.mail
    }, httpOptions).subscribe((result: any) => {
      self.mail = '';
      swal('Felicidades!', 'Tu email fue agregado a la base de datos con éxito. Pronto recibirás nuestras novedades.', 'success');
    }, e => {
      swal('Error!', 'No hemos podido enviar el mensaje. Por favor intente nuevamente mas tarde.', 'error');
    });
  }
}
