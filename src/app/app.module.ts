import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';


import { SharedModule } from './shared/shared.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { KeyInventoryComponent } from './pages/key-inventory/key-inventory.component';
import { FacultyComponent } from './pages/faculty/faculty.component';
import { AttendanceCheckerComponent } from './pages/attendance-checker/attendance-checker.component';
import { SemesterManagementComponent } from './pages/semester-management/semester-management.component';
import { RoomKeyManagementComponent } from './pages/room-key-management/room-key-management.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { AccountComponent } from './pages/account/account.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    KeyInventoryComponent,
    FacultyComponent,
    AttendanceCheckerComponent,
    SemesterManagementComponent,
    RoomKeyManagementComponent,
    SettingsComponent,
    AccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    SharedModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
