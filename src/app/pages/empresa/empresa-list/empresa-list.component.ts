import { Component, OnInit } from '@angular/core';
import { EmpresaService } from '../empresa.service';
import { Empresa } from '../../../shared-models/empresa';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empresa-list',
  templateUrl: './empresa-list.component.html',
  styleUrls: ['./empresa-list.component.css'],
  preserveWhitespaces: true
})
export class EmpresaListComponent implements OnInit {

  empresas: Empresa[];

  constructor(
    private empresaService: EmpresaService,
    private router: Router
  ) { }

  ngOnInit() {
    this.empresaService.getAll().subscribe(
      dados => this.empresas = dados
    );
  }

  edit(empresa: Empresa) {
    this.router.navigate(['/empresas/empresa', empresa]);
  }

  excluir(cnpj) {
    const confirmado = confirm('Tem certeza que deseja excluir?');
    if (confirmado) {
      this.empresaService.excluir(cnpj).subscribe(
        dados => console.log(dados),
        (error) => { alert('Falha ao excluir, usuário vinculado'); }
      );
    }
  }

}
