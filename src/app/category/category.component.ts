import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  categoryProducts: product[] = [];
  categoryName: string = '';

  constructor(private route: ActivatedRoute, private productService: ProductService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const category = params.get('category');
      if (category) {
        this.categoryName = category;
        this.productService.productList().subscribe((products) => {
          this.categoryProducts = products.filter(p => p.category.toLowerCase() === category.toLowerCase());
        });
      }
    });
  }
}
