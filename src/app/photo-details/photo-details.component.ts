import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../_services/blog.service';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.css']
})
export class PhotoDetailsComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private data: BlogService) { }

  slug: any;
  id: any;
  photo: any = {};

  ngOnInit() {
    this.getSinglePhoto();
  }

  getSinglePhoto(): any {

    /* Use paramMap to find the slug an id parameter from the url */
    this.route.paramMap.subscribe(params => {
      this.slug = params.get('slug');
      this.id = params.get('id');
    });

    /* Use the slug and id to pull data from the appropriate service */
    this.data.getPhotoByIdAndAlbumSlug(this.slug, this.id).subscribe(data =>  {
      this.photo = data;
    });
  }

  returnToAlbum(): any {
    this.route.paramMap.subscribe(params => {
      this.slug = params.get('slug');
    });

    this.router.navigate(['/album', this.slug]);
  }
}
