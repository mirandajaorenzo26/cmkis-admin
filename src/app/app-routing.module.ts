import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './feature/components/dashboard/dashboard.component';
import { KeyInventoryComponent } from './feature/components/key-inventory/key-inventory.component';
import { FacultyComponent } from './feature/components/faculty/faculty.component';
import { AttendanceCheckerComponent } from './feature/components/attendance-checker/attendance-checker.component';
import { SemesterManagementComponent } from './feature/components/semester-management/semester-management.component';
import { RoomKeyManagementComponent } from './feature/components/room-key-management/room-key-management.component';
import { SettingsComponent } from './feature/components/settings/settings.component';
import { AccountComponent } from './feature/components/account/account.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'key-inventory', component: KeyInventoryComponent},
  {path: 'faculty', component: FacultyComponent},
  {path: 'attendance-checker', component: AttendanceCheckerComponent},
  {path: 'semester-management', component: SemesterManagementComponent},
  {path: 'room-key-management', component: RoomKeyManagementComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'account', component: AccountComponent},
  {path: '**', component: DashboardComponent } // Need new component for 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
