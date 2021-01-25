import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class JobsService {
selected:any
  constructor(public httpClient:HttpClient) {}

  getJobs(){
   
    return this.httpClient.get(`https://us-central1-mlab-challenge.cloudfunctions.net/jobs`)
 }

 

 getOne(id){

  return this.httpClient.get(`https://us-central1-mlab-challenge.cloudfunctions.net/job?id=${id}`)


}
 
}
