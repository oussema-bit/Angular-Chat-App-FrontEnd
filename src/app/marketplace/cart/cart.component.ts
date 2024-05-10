import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/services/maryem-services/models/cart-item';
import { CartItemControllerService } from '../../services/maryem-services/services/cart-item-controller.service';
import { DeleteItem$Params } from 'src/app/services/maryem-services/fn/cart-item-controller/delete-item';
import { Customer } from 'src/app/services/maryem-services/models/customer';
import { CustomerControllerService } from 'src/app/services/maryem-services/services/customer-controller.service';
import { CreateCustomer$Params } from 'src/app/services/maryem-services/fn/customer-controller/create-customer';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { OrderControllerService } from '../../../app/services/maryem-services/services/order-controller.service';
import { CreateOrder$Params } from 'src/app/services/maryem-services/fn/order-controller/create-order';
import { Order } from 'src/app/services/maryem-services/models';

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
    private orderService: OrderControllerService,
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
        console.log('All items:', items); // Log all items received
        
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
      const itemPrice = item.price ?? 0; // Get the price of the item
      return sum + itemPrice; // Add the price to the sum
    }, 0);
  }

  orderNoww(): void {
    // Prepare the parameters for createOrder function
    const order: Order = {
      orderStatus: 'PENDING', // Ensure it matches one of the values defined in the model
      paymentMethod: 'ONLINE', // Ensure it matches one of the values defined in the model
      customer: this.customer,
      orderCustomer: this.cartItems.map(item => ({
        quantity: item.quantity,
        price: item.price,
        product: item.product
      }))
    };
  
    // Log the JSON payload
    console.log('Order payload:', order);
  
    // Prepare the parameters for createOrder function
    const params: CreateOrder$Params = { body: order };
  
    // Call createOrder function to create a new order
    this.orderService.createOrder(params).subscribe(
      (response) => {
        console.log('Order created:', response);
        // Redirect to "/order2" upon successful order creation
        this.router.navigate(['/order2'], { state: { order: response } });
  
       
      },
      (error) => {
        console.error('Error creating order:', error);
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
      this.customer.id = decodedToken.userId; // Change this line
      console.log('Customer Email:', this.customer.email);
    } else {
      console.log('Token not found');
    }
  }
  
}