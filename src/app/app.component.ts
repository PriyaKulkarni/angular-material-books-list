import { Component, OnInit } from '@angular/core';
import { MediaChange, MediaObserver } from "@angular/flex-layout";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-material-books-list';
  isExpanded = true;
  showSubmenu = false;
  mode: String;

  constructor(private mediaObserver: MediaObserver) {}

  ngOnInit() {
    this.mediaObserver.asObservable().subscribe((change: MediaChange[]) => {
      const isMobileView = change[0].mqAlias === 'xs' || change[0].mqAlias === 'sm';
      this.mode = isMobileView ? 'over' : 'side';
    });
  }
}
