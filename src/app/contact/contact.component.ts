import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public name: string;
  public surname: string;
  public phone: string;
  public mail: string;
  public message: string;
  public disableSubmit: Boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  sendMail(): void {
    const self = this;
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };
    this.disableSubmit = true;
    this.http.post('mailer.allinnigthapp.com/send-mail', {
      emailFrom: this.mail,
      name: this.name,
      subject: 'El sujeto con mail ' + this.mail + ' se contacto desde la web de allinnight',
      message: this.name + ' ' + this.surname + ' busca contactarse y los datos de contacto son: tel ' +
      this.phone + ' mail ' + this.mail + ' message ' + this.message
    }, httpOptions).subscribe((result: any) => {
      this.disableSubmit = false;
      self.name = '';
      self.surname = '';
      self.mail = '';
      self.phone = '';
      self.message = '';
      swal('Felicidades!', 'El mensaje ha sido enviado con éxito', 'success');
    }, e => {
      this.disableSubmit = false;
      swal('Error!', 'No hemos podido enviar el mensaje. Por favor intente nuevamente mas tarde.', 'error');
    });
  }
}
