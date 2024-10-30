import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-temp-converter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './temp-converter.component.html',
  styleUrl: './temp-converter.component.css'
})
export class TempConverterComponent {

  cer:any;
  result :any;
  c:any
  far:any;
  f:any;
  emptyError:boolean= false;

  changeC(){
    this.emptyError = false;
    this.cer = document.getElementById("cel");
    this.c = this.cer.value;
    if(this.c != "" && this.c != null)
    {
      this.cer.value  ="";
    this.result = ((this.c*9)/5+32)+"*F";
    }
   else{
    this.emptyError = true;
   }
  }

  inputFunction(){
    this.emptyError = false;

  }

  changeF(){
    this.emptyError = false;
    this.far = document.getElementById("far");
    this.f = this.far.value;
    
    if(this.f != "" && this.f != null)
      {
        this.far.value  ="";
        this.result = ((this.f-32)*5/9)+"*C";

      }
     else{
      this.emptyError = true;
     }
  }
}
