import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { BlogComponent } from './components/blog/blog.component';
import {BlogItemDetailsComponent} from './components/blog-item-details/blog-item-details.component';
import {BlogHomeComponent} from './components/blog-home/blog-home.component';
import {AddPostComponent} from './components/add-post/add-post.component';
import {AuthGuard} from './services/auth.guard';
import {LoginComponent} from './components/login/login.component';
import {SignupComponent} from './components/signup/signup.component';
import {DataService} from './services/data.service';
import {AuthenticationService} from './services/authentication.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {HttpIntercepterBasicAuthService} from './services/interceptor-auth.service';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'blog',
    component: BlogHomeComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'blog/detail/1/:id',
    component: BlogItemDetailsComponent
  },
  {
    path: 'add-post',
    component: AddPostComponent,

  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    DataService,
    AuthenticationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpIntercepterBasicAuthService,
      multi: true
    },
  ],

})
export class AppRoutingModule {}
