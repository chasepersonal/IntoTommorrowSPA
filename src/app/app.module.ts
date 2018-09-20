import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatCardModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { HttpClientModule } from '@angular/common/http';
import { AlbumComponent } from './album/album.component';
import { BlogService } from './_services/blog.service';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';


@NgModule({
   declarations: [
      AppComponent,
      MainNavComponent,
      HomeComponent,
      AboutComponent,
      BlogComponent,
      AlbumComponent,
      AlbumDetailsComponent,
      BlogDetailsComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      LayoutModule,
      MatToolbarModule,
      MatButtonModule,
      MatSidenavModule,
      MatIconModule,
      MatListModule,
      MatCardModule,
      RouterModule.forRoot(appRoutes),
      MatPaginatorModule,
      HttpClientModule
   ],
   providers: [
      BlogService
   ],
   bootstrap: [
      AppComponent
   ]
})

export class AppModule { }
