import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetRequestService } from 'src/app/service/get-request.service';

@Component({
  selector: 'app-rick-alternative',
  templateUrl: './rick-alternative.component.html',
  styleUrls: ['./rick-alternative.component.css']
})
export class RickAlternativeComponent implements OnInit {

  currentPerson: any;

  constructor(private http: GetRequestService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      var name = params['name'];
      this.http.getPersonByName(name).subscribe(res => {
        this.currentPerson = res.results;
        console.log(this.currentPerson)
      })
    })
  }

}
