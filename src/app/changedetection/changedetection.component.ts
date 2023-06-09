import { Component } from '@angular/core';

@Component({
  selector: 'app-changedetection',
  templateUrl: './changedetection.component.html',
  styleUrls: ['./changedetection.component.scss']
})
export class ChangedetectionComponent {
  title = 'onpush';
  importantItems:string[]=[];
  unImportantItems:string[]=[];

  ngOnInit(){
    this.importantItems = ['Superman', 'Batman'];
    this.unImportantItems=['Arrow', 'Flash', 'Supergirl'];
  }

  refresh(){
    this.importantItems.push('Aquaman');
    this.unImportantItems.push('Batgirl');
  }

}
