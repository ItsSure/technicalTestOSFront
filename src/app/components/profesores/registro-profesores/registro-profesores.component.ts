import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProfesoresService } from '../../../services/profesores/profesores.service';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-registro-profesores',
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './registro-profesores.component.html',
  styleUrl: './registro-profesores.component.css',
})
export class RegistroProfesoresComponent {
  form: FormGroup;
  constructor(
    private readonly fb: FormBuilder,
    private readonly profesoresService: ProfesoresService
  ) {
    this.form = this.fb.group({
      id: ['', Validators.required],
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      gender: ['', Validators.required],
      dependency: ['', Validators.required],
      subject: ['', Validators.required],
      salary: ['', Validators.required],
    });
  }

  onSubmit(): void {
    console.log(this.form.value);

    if (this.form.valid) {
      this.profesoresService.createProfesor(this.form.value).subscribe({
        next: (response) => {
          console.log('Alumno creado exitosamente:', response);
        },
        error: (err) => {
          console.error('Error al crear el post:', err);
        },
      });
    }
  }
}
