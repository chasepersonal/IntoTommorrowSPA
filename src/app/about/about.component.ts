import { Component, OnInit } from '@angular/core';
import { BlogService } from '../_services/blog.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private data: BlogService) { }

  page: any = {
    title: [],
    header: [],
    text: []
  };

  ngOnInit() {
    this.loadPage();
  }

  loadPage() {
    const title = 'About';
    this.data.getPagebyTitle(title).subscribe(data =>  {
      this.page = data;
    });
  }

}
