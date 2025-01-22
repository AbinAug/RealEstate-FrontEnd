import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet , RouterLink,RouterLinkActive, Router} from '@angular/router';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit {
  username: string = '';
  router = inject(Router);
  
  constructor(private userService: UserService) {}
  ngOnInit() {
    this.userService.currentUsername.subscribe(
      (username) => (this.username = username)
    );
  }

  onLoginasSellerClick(){
    this.router.navigateByUrl('login')
  }
}
