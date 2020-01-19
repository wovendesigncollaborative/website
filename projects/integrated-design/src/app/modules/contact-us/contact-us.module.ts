import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FlipCardComponent } from './components/flip-card/flip-card.component';
import { ContactUsComponent } from './contact-us.component';

@NgModule({
  declarations: [ContactUsComponent, FlipCardComponent],
  imports: [CommonModule, FlexLayoutModule],
})
export class ContactUsModule {}
