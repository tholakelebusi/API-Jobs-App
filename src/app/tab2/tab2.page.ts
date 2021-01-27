import { Component } from '@angular/core';
import {JobsService} from '../jobs.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  
   id:string;
    job:object;
    display:boolean;

    constructor(private router: Router, private jobService : JobsService,private route:ActivatedRoute) { 
      // this.router.getCurrentNavigation().extras.state
      // this.job = history.state
     this.display=false;


    }
  
    ngOnInit() {
this.route.params.subscribe(data=>{
  console.log(data);
  this.id=data.id;
  this.view();
})
    }
  
    view(){
      this.jobService.getOne(this.id).subscribe(data=>{
        console.log(data);
        this.job=data;
      })
    }
  
    go()

    {
      this.router.navigateByUrl('/tabs/tab1');
    }
  
  }
