import { Component } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent {
  name?: string;
  fonts = ['Arial', 'Times', 'Verdana'];
  font: string = this.fonts[0];
  fontsize: number = 12;
  alignments = ['left', 'center', 'right'];
  alignment: string = this.alignments[0];
  sizes: string = "font-size: " + this.fontsize + "px";
}
