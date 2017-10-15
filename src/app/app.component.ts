import { Subject } from 'rxjs/Rx';
import { Component, ViewChild } from '@angular/core';
import { MenuController, Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AppState } from './app.global';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'HomePage';
  activePage = new Subject();

  pages: Array<{ title: string, component: any, active: boolean, show: boolean, icon: string }>;
  state: any;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashscreen: SplashScreen,
    public global: AppState,
    public menuCtrl: MenuController
  ) {
    this.initializeApp();

    this.pages = [
      { title: 'Log in', component: 'LoginPage', active: false, show: true, icon: 'home' },
      { title: 'Home', component: 'HomePage', active: true, show: true, icon: 'home' },
      { title: 'Food List', component: 'FoodListPage', active: false, show: true, icon: 'map' },
      {
        title: 'Cook List',
        component: 'CookListPage', active: false, show: true, icon: 'ionic'
      },
      { title: 'Orders', component: 'OrdersPage', active: false, show: false, icon: 'body' },
      { title: 'Community List', component: 'CommunityListPage', active: false,  show: true, icon: 'bookmarks' },
      { title: 'History', component: 'HistoryPage', active: false, show: false, icon: 'book' },
      { title: 'Offers', component: 'OffersPage', active: false, show: true, icon: 'map' },
      { title: 'Settings', component: 'SettingsPage', active: false, show: false, icon: 'ionic' },
      { title: 'Logout', component: 'LogoutPage', active: false, show: false, icon: 'archive' }
    ];

    this.activePage.subscribe((selectedPage: any) => {
      this.pages.map(page => {
        page.active = page.title === selectedPage.title;
      });
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.global.set('theme', '');
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashscreen.hide();
      this.menuCtrl.enable(false, 'right');
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    this.activePage.next(page);
  }
}

