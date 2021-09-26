import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileGeneratorComponent } from './file-generator/file-generator.component';

const routes: Routes = [
  { path: 'file-generator', component: FileGeneratorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
