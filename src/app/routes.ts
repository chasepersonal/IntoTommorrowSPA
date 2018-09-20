import { Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { AlbumComponent } from './album/album.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';

export const appRoutes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'about', component: AboutComponent },
  {path: 'blog', component: BlogComponent },
  {path: 'blog/:slug', component: BlogDetailsComponent },
  {path: 'album', component: AlbumComponent },
  {path: 'album/:slug', component: AlbumDetailsComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
]
