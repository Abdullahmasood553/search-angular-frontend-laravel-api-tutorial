import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css']
})
export class ServiceDetailComponent implements OnInit {
  itemDetail: any = [];
  constructor(private dataService: DataService, private route: ActivatedRoute) {
    this.route.queryParams.subscribe((response) => {
      const paramsData = JSON.parse(response.result);
      this.itemDetail = paramsData;
      console.log(paramsData);
      
    });
  }

  ngOnInit(): void {
  }

}
