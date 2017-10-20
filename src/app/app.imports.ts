// Global state (used for theming)
import { AppConstants } from './app.constants';
import { AppConfig } from './app.config';
import { AppState } from './app.global';

// Providers
import { ToastService } from '../providers/util/toast.service';
import { AlertService } from '../providers/util/alert.service';
import { CameraProvider } from '../providers/util/camera.provider';
import { NativeGoogleMapsProvider } from '../providers/native-google-maps/native-google-maps';

// Ionic native providers
import { Camera } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GoogleMaps } from '@ionic-native/google-maps';

// Directives


// Components


// Pipes
import { MomentPipe } from '../pipes/moment.pipe';
import { TemperaturePipe } from '../pipes/temperature.pipe';
import { OrderByPipe } from '../pipes/orderby.pipe';
import { ShortenStringPipe } from '../pipes/shorten.pipe';
import { CapitalizePipe } from '../pipes/capitalize.pipe';

// Modules
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

export const MODULES = [
  BrowserModule,
  HttpModule,
];

export const PIPES = [
  TemperaturePipe,
  MomentPipe,
  OrderByPipe,
  CapitalizePipe,
  ShortenStringPipe
];

export const PROVIDERS = [
  AlertService,
  ToastService,
  AppState,
  AppConfig,
  AppConstants,
  CameraProvider,
  NativeGoogleMapsProvider,

  // Ionic native specific providers
  Camera,
  Geolocation,
  StatusBar,
  SplashScreen,
  GoogleMaps,
];

export const COMPONENTS = [
];

export const DIRECTIVES = [
];
