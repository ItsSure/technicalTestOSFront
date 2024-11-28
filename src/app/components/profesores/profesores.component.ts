import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ProfesoresService } from '../../services/profesores/profesores.service';
import { RegistroProfesoresComponent } from './registro-profesores/registro-profesores.component';
import { CurrencyPipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-profesores',
  imports: [
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatTooltipModule,
    MatDialogModule,
    MatSlideToggle,
    CurrencyPipe,
    MatIconModule,
  ],
  templateUrl: './profesores.component.html',
  styleUrl: './profesores.component.css',
})
export class ProfesoresComponent {
  readonly dialog = inject(MatDialog);
  displayedColumns: string[] = [
    'id',
    'fullName',
    'phone',
    'email',
    'address',
    'gender',
    'dependency',
    'subject',
    'salary',
    'parkingPass',
    'actions',
  ];
  dataSource: any[] = [];

  constructor(private readonly profesoresService: ProfesoresService) {}

  ngOnInit(): void {
    this.loadProfesores();
  }

  loadProfesores(): void {
    this.profesoresService.getProfesores().subscribe({
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
    const dialogRef = this.dialog.open(RegistroProfesoresComponent, {
      data: { name: 'Sure' },
      width: '500px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.loadProfesores();
    });
  }

  deleteProfesor(id: number) {
    this.profesoresService.deleteProfesor(id).subscribe(() => {
      this.loadProfesores();
    });
  }
}
