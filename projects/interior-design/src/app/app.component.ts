import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  isApplicationLoaded = false;
  ngAfterViewInit(): void {
    this.isApplicationLoaded = true;
  }

}
