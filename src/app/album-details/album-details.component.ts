import { Component, OnInit } from '@angular/core';
import { BlogService } from '../_services/blog.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private data: BlogService) { }

  slug: any;
  album: any = {};

  ngOnInit() {
    this.getSingleAlbum();
  }

  getSingleAlbum(): any {

    /* Use paramMap to find the slug parameter from the url */
    this.route.paramMap.subscribe(params => {
      this.slug = params.get('slug');
    });

    /* Use the current slug to pull data from the appropriate service */
    this.data.getAlbumBySlug(this.slug).subscribe(data =>  {
      this.album = data;
    });
  }

  returnToAlbums(): any {
    this.router.navigate(['/album']);
  }
}
