import { Component, OnInit } from '@angular/core';
import { GetRequestService } from '../service/get-request.service';

@Component({
  selector: 'app-rickandmorty',
  templateUrl: './rickandmorty.component.html',
  styleUrls: ['./rickandmorty.component.css']
})
export class RickandmortyComponent implements OnInit {

  allData: any[] = [];

  constructor(private http: GetRequestService) { }

  ngOnInit(): void {
    this.readData()
  }

  readData() {
    this.http.getData().subscribe(res => {
      this.allData = res.results;
      console.log(this.allData)
    })
  }

}
