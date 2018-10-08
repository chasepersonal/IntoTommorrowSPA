import { BlogService } from './../_services/blog.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private data: BlogService) { }

  slug: any;
  post: any = {};

  ngOnInit() {
    this.getSinglePost();
  }

  getSinglePost(): any {

    /* Use paramMap to find the slug parameter from the url */
    this.route.paramMap.subscribe(params => {
      this.slug = params.get('slug');
    });

    /* Use the current slug to pull data from the appropriate service */
    this.data.getPostsBySlug(this.slug).subscribe(data =>  {
      this.post = data;
    });
  }

  returnToAllPosts(): any {
    this.router.navigate(['/blog']);
  }
}
