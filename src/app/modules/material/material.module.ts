import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatListModule, MatMenuModule, MatSidenavModule, MatTabsModule } from '@angular/material';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatTabsModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
  ],
  exports: [
    MatTabsModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
  ],
})
export class MaterialModule { }
