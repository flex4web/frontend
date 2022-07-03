import { Component, OnInit } from '@angular/core';
import { LeaderService } from '../../services/leader.service';
import { Leader } from '../../shared/leader';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  leaders?: Leader;
  constructor(private LeaderService: LeaderService) {}

  ngOnInit(): void {
    this.leaders = this.LeaderService.getFeaturedLeader();
    console.log(this.leaders);
  }
}
