/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { UserControllerService } from './services/user-controller.service';
import { ForgotpasswordControllerService } from './services/forgotpassword-controller.service';
import { OrderControllerService } from './services/order-controller.service';
import { MarketplaceProductControllerService } from './services/marketplace-product-controller.service';
import { CustomerControllerService } from './services/customer-controller.service';
import { CartItemControllerService } from './services/cart-item-controller.service';
import { RoleControllerService } from './services/role-controller.service';
import { SousCategoryService } from './services/sous-category.service';
import { SignupControllerService } from './services/signup-controller.service';
import { ProjectsService } from './services/projects.service';
import { OptionsService } from './services/options.service';
import { ContestBalDeProjetService } from './services/contest-bal-de-projet.service';
import { CategoryService } from './services/category.service';
import { AuthentificationControllerService } from './services/authentification-controller.service';
import { ProductCategoryControllerService } from './services/product-category-controller.service';
import { CartControllerService } from './services/cart-controller.service';
import { MailOrderService } from './services/mail-order.service';
import { RoleTestControllerService } from './services/role-test-controller.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    UserControllerService,
    ForgotpasswordControllerService,
    OrderControllerService,
    MarketplaceProductControllerService,
    CustomerControllerService,
    CartItemControllerService,
    RoleControllerService,
    SousCategoryService,
    SignupControllerService,
    ProjectsService,
    OptionsService,
    ContestBalDeProjetService,
    CategoryService,
    AuthentificationControllerService,
    ProductCategoryControllerService,
    CartControllerService,
    MailOrderService,
    RoleTestControllerService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
