import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ElementComponent } from './components/element/element.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ElementComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'zadanie';
}
