import { SharedModule } from './shared.module';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Pro } from '@ionic/pro';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { MyApp } from './app.component';
import { MODULES, PROVIDERS } from './app.imports';
import { Firebase_Config } from './app.firebase.config';

const IonicPro = Pro.init('b9399440', {
  appVersion: "0.0.1"
});

export class MyErrorHandler implements ErrorHandler {
  handleError(err: any): void {
    IonicPro.monitoring.handleNewError(err);
  }
}
@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    MODULES,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(Firebase_Config),
    AngularFireAuthModule,
    SharedModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    PROVIDERS,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
