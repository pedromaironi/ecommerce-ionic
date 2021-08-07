import { Component, OnInit } from '@angular/core';
import { Categories } from '../core/models/categories.interface';
import { CategoriesService } from '../core/services/categories/categories.service';
import { DataService } from '../core/services/categories/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public categories = [];
  public featuredProducts = [];
  public bestSellProducts = [];
  items: Categories;

  constructor(
    private data: DataService,
    private categoriesService: CategoriesService
  ) {}

  ngOnInit()  {
    // this.categories = this.data.getCategories();
    this.categoriesService.getAllCategories().subscribe((data) => {
      // console.log((data));

      for ( const items of Object.keys(data)) {
        console.log(data[items]);
        this.categories = data[items];
      }
    });


    // console.log(    this.categories );
    this.featuredProducts = this.data.getFeaturedProducts();
    this.bestSellProducts = this.data.getBestSellProducts();
  }
}
