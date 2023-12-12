import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { NgxFileDropModule } from 'ngx-file-drop';
import { ApiService } from './services/api.service';

import {
  NgxFileDropEntry,
  FileSystemFileEntry,
  FileSystemDirectoryEntry,
} from 'ngx-file-drop';
import { HttpClient } from '@angular/common/http';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SelectionModel } from '@angular/cdk/collections';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { ITasation } from './interfaces/tasation.interface';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
const columns = [
  { columnName: 'Nro', columnTag: 'Nro' },
  { columnName: 'Codigo de Tasacion', columnTag: 'CodigoTasacion' },
  { columnName: 'Viñeta', columnTag: 'Viñeta' },
  { columnName: 'Ubicacion', columnTag: 'Ubication' },
  { columnName: 'Articulo', columnTag: 'Article' },
  { columnName: 'Sub Grupo', columnTag: 'SubGroup' },
  { columnName: 'Detalle', columnTag: 'Detalle' },
];

enum articles {
  Muebles = 'MUEBLES',
  Computacion = 'EQUIPO DE COMPUTACIÓN',
  Varios = 'EQUIPOS VARIOS',
  Maquinaria = 'MAQUINARIAS Y OTROS',
  Enseres = 'ENSERES VARIOS',
}

@Component({
  selector: 'app-root',
  standalone: true,
  animations: [
    trigger('detailExpand', [
      state('collapsed,void', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
  imports: [
    MatFormFieldModule,
    MatInputModule,

    FormsModule,
    HttpClientModule,
    NgxFileDropModule,

    CommonModule,
    RouterOutlet,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
    MatSelectModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterViewInit {
  title = 'Generador de Monografias';
  displayColumns: any[] = columns;
  assignedTo = new FormControl('', [Validators.required]);
  displayedColumns: string[] = [
    'CodigoTasacion',
    'Viñeta',
    'Ubication',
    'Article',
    'SubGroup',
    'Detalle',
  ];
  //columnsToDisplay: string[] = this.displayedColumns.slice();
  columnsToDisplayWithExpand = [...this.displayedColumns, 'actions', 'expand'];
  data: PeriodicElement[] = ELEMENT_DATA;
  dataTasation = new MatTableDataSource<ITasation>();
  expandedElement: ITasation | null | undefined;
  selection = new SelectionModel(true, []);
  articles = Object.values(articles);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  private dataCsv: ITasation[] = [];

  private _apiService = inject(ApiService);
  constructor(private http: HttpClient, private _snackBar: MatSnackBar) {}
  
  ngAfterViewInit() {
    this.paginator._intl.itemsPerPageLabel = 'Articulos por pagina';
    this.dataTasation.paginator = this.paginator;
    this.dataTasation.sort = this.sort;
  }

  // Table Paginator Section
  openSnackBar() {
    this._snackBar.open(
      'Debe ingresar a la persona a la que esta asignada el articulo',
      'cerrar',
      {
        duration: 3000,
        panelClass: [],
      }
    );
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataTasation.filter = filterValue.trim().toLowerCase();

    if (this.dataTasation.paginator) {
      this.dataTasation.paginator.firstPage();
    }
  }
  show(element: ITasation) {
    if (this.assignedTo.value) {
      element.AssignedTo = this.assignedTo.value!;
    } else {
      this.openSnackBar();
    }
  }
  getDataByArticles(event: MatSelectChange) {
    const filterValue = event.value;
    this.dataTasation.filter = filterValue.trim().toLowerCase();
  }

  // File Section
  public files: NgxFileDropEntry[] = [];

  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    for (const droppedFile of files) {
      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          const formData: FormData = new FormData();
          formData.append('csvFile', file, droppedFile.relativePath);

          this._apiService.transformFileCSV(formData).subscribe((data) => {
            this.dataCsv = data;
            this.dataTasation = new MatTableDataSource(this.dataCsv);
            this.ngAfterViewInit();
          });
        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }

  public fileOver(event: any) {
    console.log(event);
  }

  public fileLeave(event: any) {
    console.log(event);
  }
}
