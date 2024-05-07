import { Component, OnInit } from '@angular/core';
import { Order } from '../../services/maryem-services/models/order';
import { OrderControllerService } from '../../services/maryem-services/services/order-controller.service';
import { Customer } from '../../services/maryem-services/models/customer';
import { CartItem } from '../../services/maryem-services/models/cart-item';

@Component({
  selector: 'app-orders-back',
  templateUrl: './orders-back.component.html',
  styleUrls: ['./orders-back.component.css']
})
export class OrdersBackComponent implements OnInit {
  orders: Order[] = [];
  assetsImagePath = '/assets/images/';

  constructor(private orderService: OrderControllerService) { }

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders(): void {
    this.orderService.getAllOrders().subscribe(
      (orders: Order[]) => {
        this.orders = orders;
      },
      (error) => {
        console.error('Error fetching orders: ', error);
      }
    );
  }

  getCustomerFullName(customer: Customer | undefined): string {
    if (!customer) {
      return 'Unknown';
    }
    return `${customer.fullname ?? ''}`;
  }

  getTotalOrderPrice(order: Order): number {
    if (!order || !order.orderCustomer) {
      return 0;
    }

    return order.orderCustomer.reduce((total, cartItem) => {
      const itemTotal = (cartItem.price ?? 0) * (cartItem.quantity ?? 1);
      return total + itemTotal;
    }, 0);
  }

  getTotalSum(cartItems: CartItem[]): number {
    if (!cartItems) {
      return 0;
    }

    return cartItems.reduce((sum, item) => {
      const itemTotal = (item.price ?? 0) * (item.quantity ?? 1);
      return sum + itemTotal;
    }, 0);
  }
}
