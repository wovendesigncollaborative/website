import { AfterViewInit, Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @HostBinding('@.disabled')
  public animationsDisabled = true;

  ngAfterViewInit(): void {
    this.animationsDisabled = false;
  }

}
