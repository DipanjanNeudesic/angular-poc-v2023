import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';   
import { AppConfigService } from './appconfig/appconfig.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CustominterceptorInterceptor } from './shared/interceptors/custominterceptor.interceptor';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RepositoryStateReducer } from './store/reducers/RepositoryStateReducer';
import { EffectsModule } from '@ngrx/effects';
import { RepositoryEffects } from './store/effects/RepositoryEffects';
import { RepositoryReducer } from './store/reducers/RepositoriesReducer';
import {MatButtonModule} from '@angular/material/button';
import {MatSortModule} from '@angular/material/sort';
import {MatCardModule} from '@angular/material/card';
import { BasecomponentComponent } from './shared/components/basecomponent/basecomponent.component';


export function initializeApp(appConfig: AppConfigService) {
  return () => appConfig.load();
}

@NgModule({
  declarations: [AppComponent, BasecomponentComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    StoreModule.forRoot({repositorystate: RepositoryStateReducer, repositories: RepositoryReducer}),
    EffectsModule.forRoot([RepositoryEffects]),
    StoreDevtoolsModule.instrument({
      autoPause:true
    }),
    MatButtonModule,
    MatSortModule,
    MatCardModule
  ],
  providers: [
    {
      provide:APP_INITIALIZER,
      useFactory:initializeApp,
      deps: [AppConfigService],
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustominterceptorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
