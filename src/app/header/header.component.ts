import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';
 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isSearchActive: boolean = false;
 
  // constructor(private router: Router) {}
  constructor(private route: Router, private product: ProductService, private router: Router) {}
 
 
  toggleSearch() {
    this.isSearchActive = !this.isSearchActive;
    setTimeout(() => {
      const input = document.querySelector('.animated-search input') as HTMLInputElement;
      if (this.isSearchActive && input) {
        input.focus();
      }
    });
  }
 
  hideSearch() {
    setTimeout(() => {
      this.isSearchActive = false;
    }, 200);
  }
 
  redirectToDetails(id: number) {
    this.router.navigate(['/details', id]);
  }
 
  menuType: string = 'default';
  sellerName:string="";
  userName:string="";
  searchResult:undefined|product[];
  cartItems=0;
  // constructor(private route: Router, private product:ProductService) {}
 
  ngOnInit(): void {
    this.route.events.subscribe((val: any) => {
      if (val.url) {
        if (localStorage.getItem('seller') && val.url.includes('seller')) {
         let sellerStore=localStorage.getItem('seller');
         let sellerData =sellerStore && JSON.parse(sellerStore)[0];
         this.sellerName=sellerData.name;
          this.menuType = 'seller';
        }
        else if(localStorage.getItem('user')){
          let userStore = localStorage.getItem('user');
          let userData = userStore && JSON.parse(userStore);
          this.userName= userData.name;
          this.menuType='user';
          this.product.getCartList(userData.id);
        }
         else {
          this.menuType = 'default';
        }
      }
    });
    let cartData= localStorage.getItem('localCart');
    if(cartData){
      this.cartItems= JSON.parse(cartData).length
    }
    this.product.cartData.subscribe((items)=>{
      this.cartItems= items.length
    })
  }
  logout(){
    localStorage.removeItem('seller');
    this.route.navigate(['/'])
  }
 
  userLogout(){
    localStorage.removeItem('user');
    this.route.navigate(['/user-auth'])
    this.product.cartData.emit([])
  }
 
  searchProduct(query:KeyboardEvent){
    if(query){
      const element = query.target as HTMLInputElement;
      this.product.searchProduct(element.value).subscribe((result)=>{
       
        if(result.length>5){
          result.length=length
        }
        this.searchResult=result;
      })
    }
  }
 
}
 