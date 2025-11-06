import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http'; 

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  cadastroForm: FormGroup;
  apiUrl = 'http://localhost:8080/api/auth/register'; 
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient 
  ) {
    this.cadastroForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', [Validators.required]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      confirmarSenha: ['', [Validators.required]],
      estado: ['', [Validators.required]],
      regiao: ['', [Validators.required]],
      cultivo: ['', [Validators.required]]
    }, { validators: this.senhasCoincidem });
  }

  senhasCoincidem(form: FormGroup) {
    const senha = form.get('senha')?.value;
    const confirmarSenha = form.get('confirmarSenha')?.value;
    return senha === confirmarSenha ? null : { senhasNaoCoincidem: true };
  }

  onSubmit() {
    if (this.cadastroForm.valid) {
      console.log('Enviando dados:', this.cadastroForm.value);

      this.http.post(this.apiUrl, this.cadastroForm.value).subscribe({
        next: (resposta) => {
          console.log('Resposta da API:', resposta);
          alert('Cadastro realizado com sucesso!');
          this.router.navigate(['/login']);
        },
        error: (erro) => {
          console.error('Erro no cadastro:', erro);
          const msg = erro.error.message || 'Erro ao tentar cadastrar.';
          alert(msg);
        }
      });

    } else {
      alert('Por favor, preencha todos os campos corretamente.');
      this.cadastroForm.markAllAsTouched(); 
    }
  }
}
