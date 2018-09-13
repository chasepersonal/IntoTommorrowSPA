import { Component, OnInit } from '@angular/core';
import { BlogService } from '../_services/blog.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  page: any = {
    title: [],
    header: [],
    text: [],
    image: []
  }
  
  constructor(private data: BlogService) { }

  ngOnInit() {
  }

  loadPage() {
    const title = 'Album';
    this.data.getPagebyTitle(title).subscribe(data =>  {
      this.page = data;
    });
  }

}
