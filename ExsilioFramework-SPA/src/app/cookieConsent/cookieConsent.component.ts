import { Component, OnInit } from '@angular/core';
import { Constants } from '../constants';

@Component({
  selector: 'app-cookieConsent',
  templateUrl: './cookieConsent.component.html',
  styleUrls: ['./cookieConsent.component.css'],
})
export class CookieConsentComponent implements OnInit {
  constructor() {}
  hostName: string;
  ipAddress = '198.1.1.0';

  ngOnInit() {
    this.hostName = window.location.hostname;
    this.cookieDataOnLoad();

    // https://www.osano.com/cookieconsent/documentation/javascript-api/
    // Possible values for cookie-  deny: ‘deny’, allow: ‘allow’, dismiss: ‘dismiss’
    let cc = window as any;

    let checkbox =
      '<br ><input type="checkbox" class="form-check-input" (change)="checked($event)" id="exampleCheck1">';
    let checkboxLabel =
      '<label class="form-check-label" for="exampleCheck1">Do not show again</label>';

    cc.cookieconsent.initialise({
      palette: {
        // popup, button, and highlight properties
        popup: {
          background: '#164969',
        },
        button: {
          background: '#ffe000',
          text: '#164969',
        },
      },
      theme: 'classic', // block, edgeless, or classic
      onPopupOpen: this.cookieDataOnPopupOpen,
      onPopupClose: this.cookieDataOnPopupClose,
      onInitialise: this.getCookie = () => status,
      onStatusChange: this.cookieDataOnChange,
      content: {
        message: Constants.COOKIE_MESSAGE + checkbox + checkboxLabel,
        dismiss: 'Got it!',
        link: 'Learn more',
        href:
          'https://github.com/pssok88/AngularApp/tree/master/ExsilioFramework.API', // environment.Frontend + "/dataprivacy"
      },
      position: 'bottom', // top, bottom – Banner ** top-left, top-right, bottom-left, bottom-right – Floating
    });
  }

  cookieDataOnLoad = () => {
    // get browser data on load
    // call service and pass info
    console.log(
      'on load: ' +
        this.hostName +
        ', ' +
        this.ipAddress +
        ', ' +
        this.getCookie()
    );
  }

  cookieDataOnPopupOpen = () => {
    // get browser data on pop up open
    // call service and pass info
    console.log(
      'popup open: ' +
        this.hostName +
        ', ' +
        this.ipAddress +
        ', ' +
        this.getCookie()
    );
  }

  cookieDataOnPopupClose = () => {
    // get browser data on pop up close
    // call service and pass info
    console.log(
      'popup close: ' +
        this.hostName +
        ', ' +
        this.ipAddress +
        ', ' +
        this.getCookie()
    );
  }

  cookieDataOnChange = () => {
    // get browser data on status change
    // call service and pass info
    console.log(
      'status change: ' +
        this.hostName +
        ', ' +
        this.ipAddress +
        ', ' +
        this.getCookie()
    );
  }

  getCookie(): string {
    let cookies =
      window.document.cookie != '' ? window.document.cookie : 'no cookies';
    return cookies;
  }
}
