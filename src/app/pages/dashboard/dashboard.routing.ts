import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [{ path: '', component: DashboardComponent }];

export const DashboardRoutes = RouterModule.forChild(routes);
