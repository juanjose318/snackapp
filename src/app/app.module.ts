import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

import { AppComponent } from './app.component';
import { MainFeedComponent } from './modules/feed/main-feed.component';
import { ToolbarComponent } from './modules/navigation/toolbar.ts.component';

import { SnacksService } from './services/snacks/snacks.service';
import { ProductCardComponent } from './modules/product/product.component';
import { LoginComponent } from './modules/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './modules/register/register.component';
import { AuthService } from './services/auth/auth.service';
import { AuthInterceptor } from './interceptors/auth-interceptor.interceptor';
import { OrderComponent } from './modules/order/order.component';
import { SummaryComponent } from './modules/summary/summary.component';

@NgModule({
  declarations: [
    AppComponent,
    MainFeedComponent,
    ToolbarComponent,
    ProductCardComponent,
    LoginComponent,
    RegisterComponent,
    OrderComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule
  ],
  providers: [
    SnacksService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
    ],
  bootstrap: [AppComponent],
})
export class AppModule {}
