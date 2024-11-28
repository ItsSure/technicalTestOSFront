import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { AlumnosService } from '../../../services/alumnos/alumnos.service';

@Component({
  selector: 'app-registro-alumnos',
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './registro-alumnos.component.html',
  styleUrl: './registro-alumnos.component.css',
})
export class RegistroAlumnosComponent {
  data = inject(MAT_DIALOG_DATA);
  form: FormGroup;
  constructor(private fb: FormBuilder, private alumnosService: AlumnosService) {
    this.form = this.fb.group({
      id: ['', Validators.required],
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      gender: ['', Validators.required],
      registrationNumber: ['', Validators.required],
      program: ['', Validators.required],
      averageGrade: ['', Validators.required],
    });
  }

  onSubmit(): void {
    console.log(this.form.value);

    if (this.form.valid) {
      this.alumnosService.createAlumno(this.form.value).subscribe({
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
