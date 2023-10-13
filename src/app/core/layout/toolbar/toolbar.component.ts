import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
    logoPrincipal = 'assets/images/logo.png'

    public navStyle = {
        'background-color': '#673ab7',
        'height': '10vh'
    }
}
