import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css'],
})
export class ListarPensamentoComponent implements OnInit {
  listaPensamentos = [
    {
      conteudo: 'comunicando',
      autoria: 'eu mesmo',
      modelo: 'modelo2',
    },

    {
      conteudo: 'comunicando',
      autoria: 'eu mesmo',
      modelo: 'modelo2',
    },
    {
      conteudo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis leo nibh. Nullam imperdiet in nibh ut sagittis. Suspendisse et volutpat felis. Cras eget sodales nibh. Integer ut lectus ipsum. Duis a imperdiet massa. Aenean nec sagittis nisl. Nulla convallis velit sed massa elementum, nec porttitor risus bibendum. ",
      autoria: 'eu a',
      modelo: 'modelo2',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
