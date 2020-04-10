import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ServiceService } from 'src/app/_service/service.service';

@Component({
  selector: 'app-members-details',
  templateUrl: './members-details.component.html',
  styleUrls: ['./members-details.component.css']
})
export class MembersDetailsComponent implements OnInit {

  constructor( private activatedRoute: ActivatedRoute,
    private _serice: ServiceService
    ) { }

  ngOnInit(): void {
    const id = this.getMemberId();
    this.getMemberDetails(id);
  }
  getMemberId() {
    this.activatedRoute.params.subscribe(
      (data:Params)=>{
        console.log('params test-->'+ data.id);
      }
    );
  }
  getMemberDetails(id) {
   this._serice.getSingleMemberDetails(id).subscribe(
     (memberDetails)=>{
       console.log(memberDetails);
     }
   );
  }
}
