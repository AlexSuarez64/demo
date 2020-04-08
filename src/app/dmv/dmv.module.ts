import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { MaterialModule } from '@app/material.module';
import { DMVRoutingModule } from './dmv-routing.module';
import { HeaderModule } from 'header';
import { TableModule } from 'table';
import { DMVComponent } from './dmv.component';
import { SelectionComponent } from './selection.component';

import { services } from './services';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FlexLayoutModule,
    MaterialModule,
    CoreModule,
    SharedModule,
    DMVRoutingModule,
    HeaderModule,
    TableModule
  ],
  declarations: [DMVComponent, SelectionComponent],
  providers: [...services],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DMVModule {}
