import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { environment } from '../environments/environment';
import { Subscription, Subject } from 'rxjs';
import { ModelService, TableService } from './services';
import { takeUntil } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss']
})
export class SelectionComponent implements OnInit, OnDestroy {
  title = 'tm-test';
  selections = [
    { label: 'Quotes', value: 'Quotes' },
    { label: 'Quotes2', value: 'Quotes2' },
  ];
  base = environment.SitecoreBaseAddress;
  path = environment.Sitecore_Content_Response_Models;
  children = environment.Sitecore_Children;
  showSelection = true;
  model = '';
  modelId = '';
  columns: any[];
  data: any[];
  allColumnNames: any[];
  selectedColumns: any[];
  dataSub: Subscription;
  modelSub: Subscription;
  modelIdSub: Subscription;
  private destroy$ = new Subject();
  dataSource: MatTableDataSource<any[]>;

  constructor(
    private modelService: ModelService,
    private tableService: TableService,
  ) { }

  ngOnInit() {
    this.showSelection = true;
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadModel(selectedModel: any) {
    this.model = selectedModel.source.viewValue;
    const i = environment.modelIds.filter(m => m.name === this.model);
    this.modelId = i[0].id;
    this.modelIdSub = this.modelService.getModel(this.modelId, this.base, this.children)
      .pipe(takeUntil(this.destroy$))
      .subscribe(model => {
        this.columns = model;

        this.selectedColumns = [];
        for (const c of this.columns) {
          if (c.selected === '1') {
            this.selectedColumns.push(c);
          }
        }

        this.allColumnNames = this.selectedColumns.map(c => c.name);
        // tslint:disable-next-line: no-unused-expression
        this.selectedColumns = this.selectedColumns
          .map(({ ItemID, ItemName, ItemPath, ParentID, TemplateID, TemplateName, CloneSource, ItemLanguage,
            ItemVersion, DisplayName, HasChildren, ItemIcon, ItemMedialUrl, ItemUrl, selected, id, ...c
          }) => c);

        this.dataSub = this.tableService.getData(this.model, this.base, this.path)
          .pipe(takeUntil(this.destroy$))
          .subscribe(data => {
            this.data = data as any[];
            this.showSelection = false;
          });
      });
  }
}
