import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http'; 

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  apiUrl = 'http://localhost:8080/api/auth/login'; // URL da API

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient 
  ) {
    this.loginForm = this.fb.group({
      email: ['',[Validators.required, Validators.email]], 
      senha: ['',[Validators.required]] 
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Enviando dados:', this.loginForm.value);

      this.http.post(this.apiUrl, this.loginForm.value, { responseType: 'text' })
        .subscribe({
          next: (resposta) => {
            
            console.log('Resposta da API:', resposta);
            alert('Login realizado com sucesso!');
            this.router.navigate(['/user']);
          },
          error: (erro) => {
            console.error('Erro no login:', erro);
            alert('Email ou senha inválidos.');
          }
        });

    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
