import { Component } from '@angular/core';
import { environment } from '@env/environment';

@Component({
  selector: 'app-dmv',
  templateUrl: './dmv.component.html',
  styleUrls: ['./dmv.component.scss']
})
export class DMVComponent {
  title = 'DMV';
  selections = environment.modelIds;
  base = environment.SitecoreBaseAddress;
  path = environment.Sitecore_Content_Response_Models;
  children = environment.Sitecore_Children;
  models = environment.modelIds;
}
