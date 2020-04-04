import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { environment } from '../environments/environment';
import { Subscription, Subject } from 'rxjs';
import { ModelService, TableService } from './services';
import { takeUntil } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';

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
  models = [
    { name: 'Quotes', id: '53BA044D-8F58-4BB4-9431-F81F128D5672' },
    { name: 'Quotes2', id: '3F3DED79-7CF2-43E0-9A13-8D5F32300D2B' },
  ];
  showSelection = true;
  model = '';
  modelId = '';
  columns: any[];
  data: any[];
  allColumns: any[];
  selectedColumns: any[];
  dataSub: Subscription;
  modelSub: Subscription;
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
    this.models.forEach(m => {
      if (m.name === this.model) {
        this.modelId = m.id;
      }
    });

    this.modelSub = this.modelService.getModel(this.modelId, this.base, this.children)
      .pipe(takeUntil(this.destroy$))
      .subscribe(model => {
        this.columns = model;

        this.selectedColumns = [];
        for (const c of this.columns) {
          if (c.selected === '1') {
            this.selectedColumns.push(c);
          }
        }

        this.allColumns = this.selectedColumns.map(c => c.name);
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
