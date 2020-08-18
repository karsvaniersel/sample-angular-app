import { Component, OnInit } from '@angular/core';

interface Product {
  imagesrc?: string;

  imagealt?: string;

  productname?: string;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[];

  constructor() { }

  ngOnInit(): void {
    this.products = [
      {
        productname: 'Tea',
        imagesrc: 'https://images.unsplash.com/photo-1547825407-2d060104b7f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
        imagealt: 'Tea'
      },
      {
        productname: 'Pizza',
        imagesrc: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
        imagealt: 'Pizza'
      },
      {
        productname: 'Coffee',
        imagesrc: 'https://images.unsplash.com/photo-1497515114629-f71d768fd07c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80',
        imagealt: 'Coffee'
      }
    ]
  }

}
