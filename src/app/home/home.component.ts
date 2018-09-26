import { Component, OnInit } from '@angular/core';
import { BlogService } from '../_services/blog.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private data: BlogService) { }

  page: any = {
    title: [],
    header: [],
    text: [],
    slug: []
  };

  ngOnInit() {
    this.loadPage();
  }

  loadPage() {
    const slug = 'home';
    this.data.getPagebySlug(slug).subscribe(data =>  {
      this.page = data;
    });
  }
}
