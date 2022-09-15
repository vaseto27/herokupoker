import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  btntitle = 'herokupoker';

  hello() {
    this.btntitle = "JULI E MRUSNA KURVAA"
  }



}
