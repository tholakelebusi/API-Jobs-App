import { Component } from '@angular/core';
import {JobsService} from '../jobs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  
   
    job:any;

    constructor(private router: Router, private jobService : JobsService) { 
      this.router.getCurrentNavigation().extras.state
      this.job = history.state
      this.view();
    }
  
    ngOnInit() {
    }
  
    view(){
      this.jobService.getOne(this.job)
    }
  
    go()

    {
      this.router.navigateByUrl('/tabs/tab1');
    }
  
  }
