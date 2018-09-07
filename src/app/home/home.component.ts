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
    text: []
  };

  ngOnInit() {
    this.loadPage();
  }

  loadPage() {
    const title = 'Home';
    this.data.getPagebyTitle(title).subscribe(data =>  {
      this.page = data;
    });
  }
}
