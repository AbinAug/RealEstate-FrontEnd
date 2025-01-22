import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, // Specify that this is a standalone component
  imports: [RouterOutlet], // Import RouterModule here
  template: `
    <router-outlet></router-outlet> <!-- Router outlet -->
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Real Estate Property Listing Platform';
}
