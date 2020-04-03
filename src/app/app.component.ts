import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tm-test';
  selections = [
    { label: 'Quotes', value: 'Quotes'},
    { label: 'Quotes2', value: 'Quotes2'},
  ];
  base = environment.SitecoreBaseAddress;
  path = environment.Sitecore_Content_Response_Models;
  children = environment.Sitecore_Children;
  models = [
    { name: 'Quotes', id: '53BA044D-8F58-4BB4-9431-F81F128D5672' },
    { name: 'Quotes2', id: '3F3DED79-7CF2-43E0-9A13-8D5F32300D2B' },
  ];
}
