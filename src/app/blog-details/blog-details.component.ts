import { BlogService } from './../_services/blog.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private data: BlogService) { }

  slugger: any;
  post: any = {};

  ngOnInit() {
    this.getSinglePost();
  }

  getSinglePost(): any {

    /* Use paramMap to find the slug parameter from the url */
    this.route.paramMap.subscribe(params => {
      this.slugger = params.get('slug');
    });

    /* Use the current slug to pull data from the appropriate service */
    this.data.getPostsBySlug(this.slugger).subscribe(data =>  {
      this.post = data;
    });
  }
}
