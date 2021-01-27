import { Component } from '@angular/core';
import {JobsService} from '../jobs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
 jobs:any
  constructor(public jobService:JobsService,private router: Router) {
    this.loadjobs(),this.viewJobInfo
  }


  loadjobs()
{
this.jobService.getJobs().subscribe(job=>{
  this.jobs=job;
  console.log(this.jobs);
})
}

selected:any
viewJobInfo(id){
  this.jobService.getOne(id);
//  console.log(this.jobService.getOne(id));
  console.log(id);
  this.router.navigate(['/tabs/tab2', id], { state: id});
  

}

  



}
