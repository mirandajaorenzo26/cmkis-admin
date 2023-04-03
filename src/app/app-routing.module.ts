import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { KeyInventoryComponent } from './pages/key-inventory/key-inventory.component';
import { FacultyComponent } from './pages/faculty/faculty.component';
import { AttendanceCheckerComponent } from './pages/attendance-checker/attendance-checker.component';
import { SemesterManagementComponent } from './pages/semester-management/semester-management.component';
import { RoomKeyManagementComponent } from './pages/room-key-management/room-key-management.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { AccountComponent } from './pages/account/account.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
