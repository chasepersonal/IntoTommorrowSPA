import { Component, OnInit } from '@angular/core';
import { BlogService } from '../_services/blog.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  album$: Object;
  
  constructor(private data: BlogService) { }

  ngOnInit() {
    this.loadAlbum();
  }

  loadAlbum() {
    this.data.getAlbum().subscribe(data =>  {
      this.album$ = data;
    });
  }

}
