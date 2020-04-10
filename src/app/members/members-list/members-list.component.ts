import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';
import { ServiceService } from 'src/app/_service/service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';

export interface UserData {
  id: string;
  image: string;
  name: string;
  memberAddedOn: string;
  department: string;
  hall: string;
}


@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.css']
})


export class MembersListComponent implements OnInit, OnDestroy {

  subscription: Subscription

  pageOptions = ['5', '10', '25', '100'];
  displayedColumns: string[] = ['id', 'name', 'memberAddedOn', 'department', 'hall', 'actions'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    private _service: ServiceService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) 
    {
      this.dataSource = new MatTableDataSource();
    }
 

  ngOnInit() {
    this.subscription = this._service.getMembers('').subscribe(
      (data)=>{
        console.log(data);
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onNameListClick(id){
    this.router.navigate(['member-details', id],{ relativeTo: this.activatedRoute });
  }
}
