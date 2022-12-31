import { Component } from '@angular/core';
declare var window:any;
@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {
formModal:any;

ngOnInit(): void{
this.formModal = new window.bootstrap.Modal(
document.getElementById("exampleModal"));
}

openModal(){
  this.formModal.show();
}

doSomething(){
  this.formModal.hide();
}









}