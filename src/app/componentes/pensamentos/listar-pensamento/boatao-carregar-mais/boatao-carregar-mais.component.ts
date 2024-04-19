import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-boatao-carregar-mais',
  templateUrl: './boatao-carregar-mais.component.html',
  styleUrls: ['./boatao-carregar-mais.component.css']
})
export class BoataoCarregarMaisComponent implements OnInit {

  @Input() haMaisPensamentos: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
