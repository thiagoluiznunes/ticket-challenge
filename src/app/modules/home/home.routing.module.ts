import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { PanelComponent } from './panel/panel.component';
import { PanelDetailResolver } from 'src/app/core/guards/panel-detail.resolver';

const homeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'main' },
      {
        path: 'panel',
        resolve: { profile: PanelDetailResolver },
        component: PanelComponent
       },
      { path: '**', pathMatch: 'full', redirectTo: 'main' },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
