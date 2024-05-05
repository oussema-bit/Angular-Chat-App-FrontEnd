import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/services/maryem-services/models/cart-item';
import { CartItemControllerService } from '../../services/maryem-services/services/cart-item-controller.service';
import { DeleteItem$Params } from 'src/app/services/maryem-services/fn/cart-item-controller/delete-item';
import { Customer } from 'src/app/services/maryem-services/models/customer';
import { CustomerControllerService } from 'src/app/services/maryem-services/services/customer-controller.service';
import { CreateCustomer$Params } from 'src/app/services/maryem-services/fn/customer-controller/create-customer';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  customer: Customer = {};
  assetsImagePath = '/assets/images/';

  constructor(
    private cartItemService: CartItemControllerService,
    private customerService: CustomerControllerService,
    private router: Router,
    private jwtHelper: JwtHelperService,

  ) { }

  ngOnInit(): void {
    this.loadCartItems();
    this.extractUserInfoFromToken();
  }

  getImageUrl(imageUrl: string): string {
    return `assets/images/${imageUrl}`;
  }

  loadCartItems() {
    this.cartItemService.getAllItems().subscribe(
      (items: CartItem[]) => {
        this.cartItems = items;
      },
      (error) => {
        console.error('Error fetching cart items: ', error);
      }
    );
  }

  getTotalSum(): number {
    if (!this.cartItems) {
      return 0;
    }

    return this.cartItems.reduce((sum, item) => {
      const itemPrice = item.price ?? 0;
      return sum + itemPrice;
    }, 0);
  }

  orderNoww(): void {
    // Prepare the parameters for createCustomer function
    const params: CreateCustomer$Params = {
      body: this.customer
    };

    // Call createCustomer function to create a new customer
    this.customerService.createCustomer(params).subscribe(
      (response) => {
        console.log('Customer created:', response);
        // Redirect to "/order2" upon successful customer creation
        this.router.navigate(['/order2'], { state: { cartItems: this.cartItems, customer: response } });
      },
      (error) => {
        console.error('Error creating customer:', error);
        // Handle error
      }
    );
  }

  deleteItem(item: CartItem): void {
    if (!item.id) {
      console.error('Item ID is undefined.');
      return;
    }

    const params: DeleteItem$Params = { id: item.id };

    this.cartItemService.deleteItem(params).subscribe(
      () => {
        // Remove the item from the cartItems array
        this.cartItems = this.cartItems.filter(cartItem => cartItem !== item);
      },
      (error) => {
        console.error('Error deleting item: ', error);
      }
    );
  }

  private extractUserInfoFromToken(): void {
    const token = sessionStorage.getItem('userToken');
    console.log('Token:', token);
    if (token) {
      const decodedToken = this.jwtHelper.decodeToken(token);
      console.log('Decoded Token:', decodedToken);
      this.customer.email = decodedToken.sub;
      this.customer.fullname = decodedToken.name;
      this.customer.phone = decodedToken.phone;
      console.log('Customer Email:', this.customer.email);
    } else {
      console.log('Token not found');
    }
  }
}