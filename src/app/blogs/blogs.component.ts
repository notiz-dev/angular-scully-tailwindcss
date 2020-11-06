import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
})
export class BlogsComponent implements OnInit {
  available$: Observable<ScullyRoute[]>;

  constructor(private scully: ScullyRoutesService) {}

  ngOnInit(): void {
    this.available$ = this.scully.available$.pipe(
      map((r) => r.filter((route) => route.route.startsWith('/blog/'))),
      map((r) =>
        r.sort(
          (a, b) =>
            new Date(b.publishedAt).getTime() -
            new Date(a.publishedAt).getTime()
        )
      )
    );
  }
}
