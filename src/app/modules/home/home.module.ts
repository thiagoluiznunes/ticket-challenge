import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatFormFieldModule, MatInputModule } from "@angular/material";
import { HomeRoutingModule } from './home.routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PanelComponent } from './panel/panel.component';
import { PanelDetailResolver } from 'src/app/core/guards/panel-detail.resolver';




@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    PanelComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  entryComponents: [LoginComponent],
  providers: [PanelDetailResolver]
})
export class HomeModule { }
