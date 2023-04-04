import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { KeyInventoryComponent } from './components/key-inventory/key-inventory.component';
import { FacultyComponent } from './components/faculty/faculty.component';
import { AttendanceCheckerComponent } from './components/attendance-checker/attendance-checker.component';
import { SemesterManagementComponent } from './components/semester-management/semester-management.component';
import { RoomKeyManagementComponent } from './components/room-key-management/room-key-management.component';
import { SettingsComponent } from './components/settings/settings.component';
import { AccountComponent } from './components/account/account.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import {MatTabsModule} from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
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
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTabsModule,
    FormsModule
  ],

})
export class FeatureModule { }
