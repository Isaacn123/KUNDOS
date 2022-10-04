import { Component } from '@angular/core';
import {InAppBrowser,InAppBrowserOptions} from '@awesome-cordova-plugins/in-app-browser/ngx';
import { SpinnerDialog } from '@awesome-cordova-plugins/spinner-dialog/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private iap: InAppBrowser, private spin: SpinnerDialog) {
    const url  = 'https://kunde.4-raum.de/3d/';
    this.mywebpage(url);
  }


  mywebpage(url){
    const options: InAppBrowserOptions = {
      hidden: 'no',
      location: 'no',
      zoom: 'yes',
      hideurlbar: 'yes',
    };
    // this.spin.show();
    const browser = this.iap.create(url,'_blank', options);
      // browser.subscribe(() =>{
      //   browser.insertCSS({ code: "body{color: red;" });
      // })
      browser.show();
      // browser.on('loadstart').subscribe(() => {
      //   this.spin.show();
      //   }, err => {
      //     this.spin.hide();
      //   });


      // browser.close();
  }

}
