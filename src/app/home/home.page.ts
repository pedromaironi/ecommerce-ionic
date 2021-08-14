/* eslint-disable no-underscore-dangle */
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Categories } from '../core/models/categories.interface';
import { Products } from '../core/models/product.interface';
import { CategoriesService } from '../core/services/categories/categories.service';
import { DataService } from '../core/services/categories/data.service';
import { ProductsObject } from '../core/services/products/products';
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
  product: ProductsObject;

  constructor(
    private data: DataService,
    private categoriesService: CategoriesService,
    private productsService: ProductsService,
  ) {
    this.product = new ProductsObject();
  }

  ngOnInit()  {
    this.categoriesService.getAllCategories().subscribe((data) => {
      for ( const itemsCategories of Object.keys(data)) {
        this.categories = data[itemsCategories];
      }
    });

    this.productsService.getAllProducts().subscribe((data) => {
      for ( const itemsProducts of Object.keys(data)) {
        this.featuredProducts = data[itemsProducts];
        this.bestSellProducts = data[itemsProducts];
      }
    });
  }

  goToItemsDetails(product , nameProduct: string) {
    this.product._product = product;
  }

}
