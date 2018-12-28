import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeaturesModule } from './features/features.module';

const routes: Routes = [
  { path: 'features', loadChildren: () => FeaturesModule},
  { path: '', redirectTo: '/features', pathMatch: 'full' },
  { path: '**', redirectTo: '/features' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
