import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css'],
})
export class ValueComponent implements OnInit {
  values: any;
  private readonly notifier: NotifierService;
  url = 'https://github.com/pssok88/AngularApp/tree/master/ExsilioFramework.API';
  @ViewChild('customNotification', { static: true }) customNotificationTmpl;

  /**
   *
   */
  constructor(private http: HttpClient, notifierService: NotifierService) {
    this.notifier = notifierService;

  }

  ngOnInit() {
    this.getValues();
    // this.show();
  }

  showNotification() {
    this.notifier.show({
        message: 'Hi there!',
        type: 'info',
        template: this.customNotificationTmpl
    });
}
  show(){
    this.notifier.notify(
      'success',
      'You are awesome! I mean it! ' + this.url,
      'notify',
      );
  }


  getValues() {
    // when an obserable is being returned, you need to subscribe to observable
    this.http.get('http://localhost:5000/api/values').subscribe((response) => {
      this.values = response;
    }, error => {
      console.log(error);
    });
  }
}
