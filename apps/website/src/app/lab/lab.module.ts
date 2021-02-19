import { ClipboardModule } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { MatDatepickerModule } from '@matheo/datepicker';
import { ThemeComponent } from '../shared/layout/theme/theme.component';
import { SharedModule } from '../shared/shared.module';
import { BirthmoonComponent } from './components/birthmoon/birthmoon.component';
import { IndexComponent } from './components/index/index.component';

const routes: Routes = [
  {
    path: '',
    component: ThemeComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: IndexComponent,
      },
      {
        path: 'birthmoon',
        component: BirthmoonComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    ClipboardModule,
    CommonModule,
    FlexLayoutModule,
    RouterModule.forChild(routes),
    MatDatepickerModule,
    SharedModule,
  ],
  declarations: [IndexComponent, BirthmoonComponent],
})
export class LabModule {}
