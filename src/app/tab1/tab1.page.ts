import { Component } from '@angular/core';
import {JobsService} from '../jobs.service'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
 jobs:any
  constructor(public jobService:JobsService) {
    this.loadjobs()
  }


  loadjobs()
{
this.jobService.getJobs("top-headlines?country=us").subscribe(job=>{
  this.jobService=job['jobs'];
  console.log(this.jobs);
})
}
}
