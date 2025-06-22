import {LiveAnnouncer} from '@angular/cdk/a11y';
import {AfterViewInit, Component, ViewChild, inject} from '@angular/core';
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

export interface Route {
  'uuid': string;
  'address': string;
  'mask': string;
  'gateway': string;
  'interface': string;
}

const ELEMENT_DATA: Route[] = [
  {
    uuid: "a7c2b067-5374-4963-93b1-b56a03c4605a",
    address: "0.0.0.0/0",
    mask: "255.255.255.0",
    gateway: "193.0.174.1",
    interface: "Подключение Ethernet"
  },
  {
    uuid: "a8c2b065-5334-6963-93b1-b76a03c4605a",
    address: "10.1.30.0/24",
    mask: "255.255.255.0",
    gateway: "0.0.0.0",
    interface: "Гостевая сеть"
  },
  {
    uuid: "a6c2b167-5374-4273-93b1-b58a03c4609a",
    address: "192.168.1.0/24",
    mask: "255.255.255.0",
    gateway: "0.0.0.0",
    interface: "Домашняя сеть"
  },
  {
    uuid: "a7c1b067-5378-4363-93b1-b55a03c9605a",
    address: "193.0.174.0/24",
    mask: "255.255.255.0",
    gateway: "0.0.0.0",
    interface: "Подключение Ethernet"
  },
  {
    uuid: "a7c2b077-0354-4943-93b2-b50a06c4305a",
    address: "193.0.175.0/25",
    mask: "255.255.255.0",
    gateway: "193.0.174.10",
    interface: "Подключение Ethernet"
  },
  {
    uuid: "a1c2b087-5304-4903-91b1-b59a03c3605a",
    address: "193.0.175.22/32",
    mask: "255.255.255.0",
    gateway: "193.0.174.1",
    interface: "Подключение Ethernet"
  },
  {
    uuid: "a4c2b077-5574-8963-98b1-b59a03c1605a",
    address: "193.0.174.20/22",
    mask: "255.255.255.0",
    gateway: "193.0.174.1",
    interface: "Домашняя сеть"
  },
  {
    uuid: "a9c2b367-7394-4963-93b4-b96a06c4605a",
    address: "193.0.174.0/22",
    mask: "255.255.255.0",
    gateway: "193.0.174.10",
    interface: "Гостевая сеть"
  }
];

@Component({
  selector: 'app-root',
  styleUrl: 'app.component.scss',
  templateUrl: 'app.component.html',
  imports: [MatTableModule, MatSortModule],
})

export class AppComponent implements AfterViewInit {
  private _liveAnnouncer: LiveAnnouncer = inject(LiveAnnouncer);

  displayedColumns: string[] = ['address', 'gateway', 'interface'];
  dataSource: MatTableDataSource<Route> = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort!: MatSort;


  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }


  announceSortChange(sortState: Sort): void {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
