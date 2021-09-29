import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CelebritesListComponent } from './celebrites-list/celebrites-list.component';
import { CompanyComponent } from './company/company.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { TrainningComponent } from './trainning/trainning.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'company', component: CompanyComponent },
  { path: 'celebrities-list', component: CelebritesListComponent },
  { path: 'trainning', component: TrainningComponent },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }