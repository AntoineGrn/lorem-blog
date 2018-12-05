import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts = [
    {
      title: 'Post #1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a ante tortor. Maecenas malesuada nunc efficitur metus ' +
        'lacinia, sed dignissim purus porttitor. Vivamus suscipit nisl sit amet augue vehicula, nec cursus tortor eleifend. Nunc ' +
        'condimentum in nibh at ornare. Pellentesque elementum bibendum ullamcorper. Aliquam placerat nisi ac consequat malesuada.',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Poste #2',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a ante tortor. Maecenas malesuada nunc efficitur metus ' +
        'lacinia, sed dignissim purus porttitor. Vivamus suscipit nisl sit amet augue vehicula, nec cursus tortor eleifend. Nunc ' +
        'condimentum in nibh at ornare. Pellentesque elementum bibendum ullamcorper. Aliquam placerat nisi ac consequat malesuada.',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Poste #3',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a ante tortor. Maecenas malesuada nunc efficitur metus ' +
        'lacinia, sed dignissim purus porttitor. Vivamus suscipit nisl sit amet augue vehicula, nec cursus tortor eleifend. Nunc ' +
        'condimentum in nibh at ornare. Pellentesque elementum bibendum ullamcorper. Aliquam placerat nisi ac consequat malesuada.',
      loveIts: 0,
      created_at: new Date()
    }
  ];
}
