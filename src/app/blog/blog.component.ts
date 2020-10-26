import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated,
})
export class BlogComponent implements OnInit {
  currentPost$: Observable<ScullyRoute> = this.scully.getCurrent();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private scully: ScullyRoutesService
  ) {}

  ngOnInit() {}
}
