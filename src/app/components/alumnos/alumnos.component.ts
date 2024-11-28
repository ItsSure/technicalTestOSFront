import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AlumnosService } from '../../services/alumnos/alumnos.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RegistroAlumnosComponent } from './registro-alumnos/registro-alumnos.component';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-alumnos',
  imports: [
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatTooltipModule,
    MatDialogModule,
    MatSlideToggle,
    MatIconModule,
  ],
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.css',
})
export class AlumnosComponent implements OnInit {
  readonly dialog = inject(MatDialog);
  displayedColumns: string[] = [
    'id',
    'fullName',
    'phone',
    'email',
    'address',
    'gender',
    'registrationNumber',
    'program',
    'averageGrade',
    'parkingPass',
    'actions',
  ];
  dataSource: any[] = [];

  constructor(private readonly alumnosService: AlumnosService) {}

  ngOnInit(): void {
    this.loadAlumnos();
  }

  loadAlumnos(): void {
    this.alumnosService.getAlumnos().subscribe({
      next: (data) => {
        this.dataSource = data;
        console.log(data);
      },
      error: (err) => {
        console.error('Error al cargar posts:', err);
      },
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(RegistroAlumnosComponent, {
      data: { name: 'Sure' },
      width: '500px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.loadAlumnos();
    });
  }

  deleteAlumno(id: number) {
    this.alumnosService.deleteAlumno(id).subscribe(() => {
      this.loadAlumnos();
    });
  }
}
