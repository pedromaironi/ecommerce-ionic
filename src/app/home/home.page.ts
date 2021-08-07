import { Component, OnInit } from '@angular/core';
import { Categories } from '../core/models/categories.interface';
import { Products } from '../core/models/product.interface';
import { CategoriesService } from '../core/services/categories/categories.service';
import { DataService } from '../core/services/categories/data.service';
import { ProductsService } from '../core/services/products/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public categories = [];
  public featuredProducts = [];
  public bestSellProducts = [];
  itemsCategories: Categories;
  itemsProducts: Products;


  constructor(
    private data: DataService,
    private categoriesService: CategoriesService,
    private productsService: ProductsService,
  ) {}

  ngOnInit()  {
    // this.categories = this.data.getCategories();
    this.categoriesService.getAllCategories().subscribe((data) => {
      // console.log((data));

      for ( const itemsCategories of Object.keys(data)) {
        console.log(data[itemsCategories]);
        this.categories = data[itemsCategories];
      }
    });

    this.productsService.getAllProducts().subscribe((data) => {
      // console.log((data));

      for ( const itemsProducts of Object.keys(data)) {
        console.log(data[itemsProducts]);
        this.featuredProducts = data[itemsProducts];
      }
    });


    // console.log(    this.categories );
    // this.featuredProducts = this.data.getFeaturedProducts();
    this.bestSellProducts = this.data.getBestSellProducts();
  }
}
