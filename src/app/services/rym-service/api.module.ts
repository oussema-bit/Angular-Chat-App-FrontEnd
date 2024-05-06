/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { UserControllerService } from './services/user-controller.service';
import { ForgotpasswordControllerService } from './services/forgotpassword-controller.service';
import { ForumControllerService } from './services/forum-controller.service';
import { TopicControllerService } from './services/topic-controller.service';
import { PostControllerService } from './services/post-controller.service';
import { CommentControllerService } from './services/comment-controller.service';
import { SignupControllerService } from './services/signup-controller.service';
import { AuthentificationControllerService } from './services/authentification-controller.service';
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
    ForumControllerService,
    TopicControllerService,
    PostControllerService,
    CommentControllerService,
    SignupControllerService,
    AuthentificationControllerService,
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
