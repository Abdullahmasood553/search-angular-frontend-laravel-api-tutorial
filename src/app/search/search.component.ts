import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  data: any;
  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void { }

  getProductsSearch(name: any) {
    const keyword = name.target.value;
      const search = this.dataService.getFilterProductName(keyword)
        .then(response => {
          this.data = response;
       });
  }


  getDetailPage(result:any) {
    console.log(result);
    const navigationExtras: NavigationExtras = {
      queryParams: {
        result: JSON.stringify(result)
      }
    };
    this.router.navigate(['search-detail'], navigationExtras);
  }

}
