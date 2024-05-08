import { Component } from '@angular/core';
import { ElementsService } from '../../services/elements.service';
import { Element } from '../../models/element.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-element',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './element.component.html',
  styleUrl: './element.component.scss',
})
export class ElementComponent {
  secondElement: Element | undefined;

  constructor(private service: ElementsService) {}

  ngOnInit(): void {
    this.service.getElement().subscribe(
      (element: Element) => {
        if (element) {
          this.secondElement = element;
        }
      },
      (error) => {
        console.error('An error occurred:', error);
      }
    );
  }
}
