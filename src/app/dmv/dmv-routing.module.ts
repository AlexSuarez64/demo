import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { DMVComponent } from './dmv.component';
import { Shell } from '@app/shell/shell.service';

const routes: Routes = [
  // Module is lazy loaded, see app-routing.module.ts
  Shell.childRoutes([{ path: 'dmv', component: DMVComponent, data: { title: extract('Dynamic Model View') } }])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class DMVRoutingModule {}
