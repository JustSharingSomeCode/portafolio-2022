import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portafolio-2022';

  updateSelection(id : string)
  {
    console.log(document.getElementById(id));
  }
}
