import { Component, OnInit, ViewChild, Input, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'lib-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit {
  @Input() selectedColumns: any[];
  @Input() allColumnNames: any[];
  @Input() data: any[];
  @Input() model: string;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<any[]>;
  dataSource: MatTableDataSource<any[]>;

  constructor() {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any[]>(this.data);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  applyFilter(value: string) {
    this.dataSource.filter = value;
    this.dataSource.filterPredicate = (data, filter) => {
      return JSON.stringify(Object.values(data))
        .toLowerCase()
        .includes(filter.toLowerCase());
    };
  }
}
