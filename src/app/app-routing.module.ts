import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VeganstudioComponent } from './veganstudio/veganstudio.component';

const routes: Routes = [
  { path: '', redirectTo: '/customer-recipe', pathMatch: 'full' },
  { path: 'customer-recipe', component: VeganstudioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
