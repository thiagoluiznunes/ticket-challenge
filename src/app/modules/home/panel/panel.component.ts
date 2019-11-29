import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.sass']
})
export class PanelComponent implements OnInit {

  profile: any

  constructor(
    private route: ActivatedRoute,
  ) {
    this.route.data.subscribe(
      data => {
        this.profile = data.profile;
      }
    );
   }

  ngOnInit() {
  }

}
