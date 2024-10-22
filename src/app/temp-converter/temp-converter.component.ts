import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-temp-converter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './temp-converter.component.html',
  styleUrl: './temp-converter.component.css'
})
export class TempConverterComponent {

  cer:any;
  result :any;
  c:any
  far:any;
  f:any;
  changeC(){
    this.cer = document.getElementById("cel");
    console.log("celc alue", this.cer, this.cer.value), this.cer.innerHTML, this.cer.innerHTML.value;
    this.c = this.cer.value;
    this.cer.value  ="";
    // console.log("celc alue", this.cer);
    this.result = ((this.c*9)/5+32)+"*F";
  }

  changeF(){
    this.far = document.getElementById("far");
    this.f = this.far.value;
    this.far.value  ="";
    // console.log("far alue", this.far);
    this.result = ((this.f-32)*5/9)+"*C";
  }
}
