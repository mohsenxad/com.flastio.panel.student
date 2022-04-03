import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'share-profile-upgrade-require',
  templateUrl: './share-profile-upgrade-require.component.html',
  styleUrls: ['./share-profile-upgrade-require.component.scss']
})
export class ShareProfileUpgradeRequireComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  navigateToPricing(){
    this.router.navigateByUrl('student/upgrade');
  }

}
