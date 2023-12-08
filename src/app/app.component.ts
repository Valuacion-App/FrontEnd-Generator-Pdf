import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { NgxFileDropModule } from 'ngx-file-drop';

import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';

import { HttpClient } from '@angular/common/http';


import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon'
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { SelectionModel } from '@angular/cdk/collections';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';


interface TasationData {
  CodigoTasacion: string;
  Codigo: string;
  Viñeta: string;
  Fecha: string;
  Ubication: string;
  Article: string;
  SubGroup: string;
  Detalle: string;
  Descripcion: string;
  Vre: string;
  Vr: string;
  Ant: string;
  Vexp: string;
  EstadoDelArticulo: string;
  K2: string;
  ValorDeReposicion: string;
  K1a: string;
  Va: string;
  Fotografia: {
    url: string;
    size: number;
    width: number;
    height: number;
    filename: string;
  },
  FotografiaII: {
    url: string;
    size: number;
    width: number;
    height: number;
    filename: string;
  },
  Created: string;
  Updated: string;
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
const columns = [
  {  columnName: 'Nro', columnTag: 'Nro'},
  {  columnName: 'Codigo de Tasacion', columnTag: 'CodigoTasacion'},
  {  columnName: 'Viñeta', columnTag: 'Viñeta' },
  {  columnName: 'Ubicacion', columnTag: 'Ubication' },
  {  columnName: 'Articulo', columnTag: 'Article' },
  {  columnName: 'Sub Grupo', columnTag: 'SubGroup' },
  {  columnName: 'Detalle', columnTag: 'Detalle' },
];

const dataCsv: TasationData[] = [
  {
    CodigoTasacion: 'TAC149',
    Codigo: 'AC231',
    'Viñeta': '6699',
    Fecha: '28/11/2023 13:51',
    Ubication: 'DEPÓSITO ACCESORIOS DE VUELO',
    Article: 'MUEBLES',
    SubGroup: 'ESTANTES, ARCHIVERO Y VITRINAS',
    Detalle: 'Estante de madera ',
    Descripcion: 'Estante de madera con 3 divisiónes y 4 niveles color café,algunos niveles rotos presentan desgaste de madera',
    Vre: '',
    Vr: '',
    Ant: '',
    Vexp: '',
    EstadoDelArticulo: 'Malo 4.0; K2 = 0.2',
    K2: '0.2',
    ValorDeReposicion: '',
    K1a: '',
    Va: '',
    Fotografia: {
      url: 'https://adalo-uploads.imgix.net/69773a5ff7a423274ee3971427eadfe2850064933a63ed265b7d01840fb75f67.jpg',
      size: 96013,
      width: 1280,
      height: 590,
      filename: 'IMG_20231128_135307_131.jpg'
    },
    FotografiaII: {
      url: 'https://adalo-uploads.imgix.net/2b04fd774036474bbcdd6e5e6ab976c855c129c0226748a44285413bfcded616.jpg',
      size: 101502,
      width: 1280,
      height: 590,
      filename: 'IMG_20231128_135307_199.jpg'
    },
    Created: '28/11/2023 13:53',
    Updated: '28/11/2023 13:53'
  },
  {
    CodigoTasacion: 'TAC149',
    Codigo: 'AC231',
    'Viñeta': '6699',
    Fecha: '28/11/2023 13:51',
    Ubication: 'DEPÓSITO ACCESORIOS DE VUELO',
    Article: 'MUEBLES',
    SubGroup: 'ESTANTES, ARCHIVERO Y VITRINAS',
    Detalle: 'Estante de madera ',
    Descripcion: 'Estante de madera con 3 divisiónes y 4 niveles color café,algunos niveles rotos presentan desgaste de madera',
    Vre: '',
    Vr: '',
    Ant: '',
    Vexp: '',
    EstadoDelArticulo: 'Malo 4.0; K2 = 0.2',
    K2: '0.2',
    ValorDeReposicion: '',
    K1a: '',
    Va: '',
    Fotografia: {
      url: 'https://adalo-uploads.imgix.net/69773a5ff7a423274ee3971427eadfe2850064933a63ed265b7d01840fb75f67.jpg',
      size: 96013,
      width: 1280,
      height: 590,
      filename: 'IMG_20231128_135307_131.jpg'
    },
    FotografiaII: {
      url: 'https://adalo-uploads.imgix.net/2b04fd774036474bbcdd6e5e6ab976c855c129c0226748a44285413bfcded616.jpg',
      size: 101502,
      width: 1280,
      height: 590,
      filename: 'IMG_20231128_135307_199.jpg'
    },
    Created: '28/11/2023 13:53',
    Updated: '28/11/2023 13:53'
  },
  {
    CodigoTasacion: 'TAC149',
    Codigo: 'AC231',
    'Viñeta': '6699',
    Fecha: '28/11/2023 13:51',
    Ubication: 'DEPÓSITO ACCESORIOS DE VUELO',
    Article: 'MUEBLES',
    SubGroup: 'ESTANTES, ARCHIVERO Y VITRINAS',
    Detalle: 'Estante de madera ',
    Descripcion: 'Estante de madera con 3 divisiónes y 4 niveles color café,algunos niveles rotos presentan desgaste de madera',
    Vre: '',
    Vr: '',
    Ant: '',
    Vexp: '',
    EstadoDelArticulo: 'Malo 4.0; K2 = 0.2',
    K2: '0.2',
    ValorDeReposicion: '',
    K1a: '',
    Va: '',
    Fotografia: {
      url: 'https://adalo-uploads.imgix.net/69773a5ff7a423274ee3971427eadfe2850064933a63ed265b7d01840fb75f67.jpg',
      size: 96013,
      width: 1280,
      height: 590,
      filename: 'IMG_20231128_135307_131.jpg'
    },
    FotografiaII: {
      url: 'https://adalo-uploads.imgix.net/2b04fd774036474bbcdd6e5e6ab976c855c129c0226748a44285413bfcded616.jpg',
      size: 101502,
      width: 1280,
      height: 590,
      filename: 'IMG_20231128_135307_199.jpg'
    },
    Created: '28/11/2023 13:53',
    Updated: '28/11/2023 13:53'
  },
  {
    CodigoTasacion: 'TAC149',
    Codigo: 'AC231',
    'Viñeta': '6699',
    Fecha: '28/11/2023 13:51',
    Ubication: 'DEPÓSITO ACCESORIOS DE VUELO',
    Article: 'MUEBLES',
    SubGroup: 'ESTANTES, ARCHIVERO Y VITRINAS',
    Detalle: 'Estante de madera ',
    Descripcion: 'Estante de madera con 3 divisiónes y 4 niveles color café,algunos niveles rotos presentan desgaste de madera',
    Vre: '',
    Vr: '',
    Ant: '',
    Vexp: '',
    EstadoDelArticulo: 'Malo 4.0; K2 = 0.2',
    K2: '0.2',
    ValorDeReposicion: '',
    K1a: '',
    Va: '',
    Fotografia: {
      url: 'https://adalo-uploads.imgix.net/69773a5ff7a423274ee3971427eadfe2850064933a63ed265b7d01840fb75f67.jpg',
      size: 96013,
      width: 1280,
      height: 590,
      filename: 'IMG_20231128_135307_131.jpg'
    },
    FotografiaII: {
      url: 'https://adalo-uploads.imgix.net/2b04fd774036474bbcdd6e5e6ab976c855c129c0226748a44285413bfcded616.jpg',
      size: 101502,
      width: 1280,
      height: 590,
      filename: 'IMG_20231128_135307_199.jpg'
    },
    Created: '28/11/2023 13:53',
    Updated: '28/11/2023 13:53'
  },
  {
    CodigoTasacion: 'TAC149',
    Codigo: 'AC231',
    'Viñeta': '6699',
    Fecha: '28/11/2023 13:51',
    Ubication: 'DEPÓSITO ACCESORIOS DE VUELO',
    Article: 'MUEBLES',
    SubGroup: 'ESTANTES, ARCHIVERO Y VITRINAS',
    Detalle: 'Estante de madera ',
    Descripcion: 'Estante de madera con 3 divisiónes y 4 niveles color café,algunos niveles rotos presentan desgaste de madera',
    Vre: '',
    Vr: '',
    Ant: '',
    Vexp: '',
    EstadoDelArticulo: 'Malo 4.0; K2 = 0.2',
    K2: '0.2',
    ValorDeReposicion: '',
    K1a: '',
    Va: '',
    Fotografia: {
      url: 'https://adalo-uploads.imgix.net/69773a5ff7a423274ee3971427eadfe2850064933a63ed265b7d01840fb75f67.jpg',
      size: 96013,
      width: 1280,
      height: 590,
      filename: 'IMG_20231128_135307_131.jpg'
    },
    FotografiaII: {
      url: 'https://adalo-uploads.imgix.net/2b04fd774036474bbcdd6e5e6ab976c855c129c0226748a44285413bfcded616.jpg',
      size: 101502,
      width: 1280,
      height: 590,
      filename: 'IMG_20231128_135307_199.jpg'
    },
    Created: '28/11/2023 13:53',
    Updated: '28/11/2023 13:53'
  },
  {
    CodigoTasacion: 'TAC149',
    Codigo: 'AC231',
    'Viñeta': '6699',
    Fecha: '28/11/2023 13:51',
    Ubication: 'DEPÓSITO ACCESORIOS DE VUELO',
    Article: 'MUEBLES',
    SubGroup: 'ESTANTES, ARCHIVERO Y VITRINAS',
    Detalle: 'Estante de madera ',
    Descripcion: 'Estante de madera con 3 divisiónes y 4 niveles color café,algunos niveles rotos presentan desgaste de madera',
    Vre: '',
    Vr: '',
    Ant: '',
    Vexp: '',
    EstadoDelArticulo: 'Malo 4.0; K2 = 0.2',
    K2: '0.2',
    ValorDeReposicion: '',
    K1a: '',
    Va: '',
    Fotografia: {
      url: 'https://adalo-uploads.imgix.net/69773a5ff7a423274ee3971427eadfe2850064933a63ed265b7d01840fb75f67.jpg',
      size: 96013,
      width: 1280,
      height: 590,
      filename: 'IMG_20231128_135307_131.jpg'
    },
    FotografiaII: {
      url: 'https://adalo-uploads.imgix.net/2b04fd774036474bbcdd6e5e6ab976c855c129c0226748a44285413bfcded616.jpg',
      size: 101502,
      width: 1280,
      height: 590,
      filename: 'IMG_20231128_135307_199.jpg'
    },
    Created: '28/11/2023 13:53',
    Updated: '28/11/2023 13:53'
  },
  {
    CodigoTasacion: 'TAC149',
    Codigo: 'AC231',
    'Viñeta': '6699',
    Fecha: '28/11/2023 13:51',
    Ubication: 'DEPÓSITO ACCESORIOS DE VUELO',
    Article: 'MUEBLES',
    SubGroup: 'ESTANTES, ARCHIVERO Y VITRINAS',
    Detalle: 'Estante de madera ',
    Descripcion: 'Estante de madera con 3 divisiónes y 4 niveles color café,algunos niveles rotos presentan desgaste de madera',
    Vre: '',
    Vr: '',
    Ant: '',
    Vexp: '',
    EstadoDelArticulo: 'Malo 4.0; K2 = 0.2',
    K2: '0.2',
    ValorDeReposicion: '',
    K1a: '',
    Va: '',
    Fotografia: {
      url: 'https://adalo-uploads.imgix.net/69773a5ff7a423274ee3971427eadfe2850064933a63ed265b7d01840fb75f67.jpg',
      size: 96013,
      width: 1280,
      height: 590,
      filename: 'IMG_20231128_135307_131.jpg'
    },
    FotografiaII: {
      url: 'https://adalo-uploads.imgix.net/2b04fd774036474bbcdd6e5e6ab976c855c129c0226748a44285413bfcded616.jpg',
      size: 101502,
      width: 1280,
      height: 590,
      filename: 'IMG_20231128_135307_199.jpg'
    },
    Created: '28/11/2023 13:53',
    Updated: '28/11/2023 13:53'
  },
  {
    CodigoTasacion: 'TAC149',
    Codigo: 'AC231',
    'Viñeta': '6699',
    Fecha: '28/11/2023 13:51',
    Ubication: 'DEPÓSITO ACCESORIOS DE VUELO',
    Article: 'MUEBLES',
    SubGroup: 'ESTANTES, ARCHIVERO Y VITRINAS',
    Detalle: 'Estante de madera ',
    Descripcion: 'Estante de madera con 3 divisiónes y 4 niveles color café,algunos niveles rotos presentan desgaste de madera',
    Vre: '',
    Vr: '',
    Ant: '',
    Vexp: '',
    EstadoDelArticulo: 'Malo 4.0; K2 = 0.2',
    K2: '0.2',
    ValorDeReposicion: '',
    K1a: '',
    Va: '',
    Fotografia: {
      url: 'https://adalo-uploads.imgix.net/69773a5ff7a423274ee3971427eadfe2850064933a63ed265b7d01840fb75f67.jpg',
      size: 96013,
      width: 1280,
      height: 590,
      filename: 'IMG_20231128_135307_131.jpg'
    },
    FotografiaII: {
      url: 'https://adalo-uploads.imgix.net/2b04fd774036474bbcdd6e5e6ab976c855c129c0226748a44285413bfcded616.jpg',
      size: 101502,
      width: 1280,
      height: 590,
      filename: 'IMG_20231128_135307_199.jpg'
    },
    Created: '28/11/2023 13:53',
    Updated: '28/11/2023 13:53'
  },
  {
    CodigoTasacion: 'TAC149',
    Codigo: 'AC231',
    'Viñeta': '6699',
    Fecha: '28/11/2023 13:51',
    Ubication: 'DEPÓSITO ACCESORIOS DE VUELO',
    Article: 'MUEBLES',
    SubGroup: 'ESTANTES, ARCHIVERO Y VITRINAS',
    Detalle: 'Estante de madera ',
    Descripcion: 'Estante de madera con 3 divisiónes y 4 niveles color café,algunos niveles rotos presentan desgaste de madera',
    Vre: '',
    Vr: '',
    Ant: '',
    Vexp: '',
    EstadoDelArticulo: 'Malo 4.0; K2 = 0.2',
    K2: '0.2',
    ValorDeReposicion: '',
    K1a: '',
    Va: '',
    Fotografia: {
      url: 'https://adalo-uploads.imgix.net/69773a5ff7a423274ee3971427eadfe2850064933a63ed265b7d01840fb75f67.jpg',
      size: 96013,
      width: 1280,
      height: 590,
      filename: 'IMG_20231128_135307_131.jpg'
    },
    FotografiaII: {
      url: 'https://adalo-uploads.imgix.net/2b04fd774036474bbcdd6e5e6ab976c855c129c0226748a44285413bfcded616.jpg',
      size: 101502,
      width: 1280,
      height: 590,
      filename: 'IMG_20231128_135307_199.jpg'
    },
    Created: '28/11/2023 13:53',
    Updated: '28/11/2023 13:53'
  },
  {
    CodigoTasacion: 'TAC149',
    Codigo: 'AC231',
    'Viñeta': '6699',
    Fecha: '28/11/2023 13:51',
    Ubication: 'DEPÓSITO ACCESORIOS DE VUELO',
    Article: 'MUEBLES',
    SubGroup: 'ESTANTES, ARCHIVERO Y VITRINAS',
    Detalle: 'Estante de madera ',
    Descripcion: 'Estante de madera con 3 divisiónes y 4 niveles color café,algunos niveles rotos presentan desgaste de madera',
    Vre: '',
    Vr: '',
    Ant: '',
    Vexp: '',
    EstadoDelArticulo: 'Malo 4.0; K2 = 0.2',
    K2: '0.2',
    ValorDeReposicion: '',
    K1a: '',
    Va: '',
    Fotografia: {
      url: 'https://adalo-uploads.imgix.net/69773a5ff7a423274ee3971427eadfe2850064933a63ed265b7d01840fb75f67.jpg',
      size: 96013,
      width: 1280,
      height: 590,
      filename: 'IMG_20231128_135307_131.jpg'
    },
    FotografiaII: {
      url: 'https://adalo-uploads.imgix.net/2b04fd774036474bbcdd6e5e6ab976c855c129c0226748a44285413bfcded616.jpg',
      size: 101502,
      width: 1280,
      height: 590,
      filename: 'IMG_20231128_135307_199.jpg'
    },
    Created: '28/11/2023 13:53',
    Updated: '28/11/2023 13:53'
  },
  {
    CodigoTasacion: 'TAC149',
    Codigo: 'AC231',
    'Viñeta': '6699',
    Fecha: '28/11/2023 13:51',
    Ubication: 'DEPÓSITO ACCESORIOS DE VUELO',
    Article: 'MUEBLES',
    SubGroup: 'ESTANTES, ARCHIVERO Y VITRINAS',
    Detalle: 'Estante de madera ',
    Descripcion: 'Estante de madera con 3 divisiónes y 4 niveles color café,algunos niveles rotos presentan desgaste de madera',
    Vre: '',
    Vr: '',
    Ant: '',
    Vexp: '',
    EstadoDelArticulo: 'Malo 4.0; K2 = 0.2',
    K2: '0.2',
    ValorDeReposicion: '',
    K1a: '',
    Va: '',
    Fotografia: {
      url: 'https://adalo-uploads.imgix.net/69773a5ff7a423274ee3971427eadfe2850064933a63ed265b7d01840fb75f67.jpg',
      size: 96013,
      width: 1280,
      height: 590,
      filename: 'IMG_20231128_135307_131.jpg'
    },
    FotografiaII: {
      url: 'https://adalo-uploads.imgix.net/2b04fd774036474bbcdd6e5e6ab976c855c129c0226748a44285413bfcded616.jpg',
      size: 101502,
      width: 1280,
      height: 590,
      filename: 'IMG_20231128_135307_199.jpg'
    },
    Created: '28/11/2023 13:53',
    Updated: '28/11/2023 13:53'
  },
  {
    CodigoTasacion: 'TAC149',
    Codigo: 'AC231',
    'Viñeta': '6699',
    Fecha: '28/11/2023 13:51',
    Ubication: 'DEPÓSITO ACCESORIOS DE VUELO',
    Article: 'MUEBLES',
    SubGroup: 'ESTANTES, ARCHIVERO Y VITRINAS',
    Detalle: 'Estante de madera ',
    Descripcion: 'Estante de madera con 3 divisiónes y 4 niveles color café,algunos niveles rotos presentan desgaste de madera',
    Vre: '',
    Vr: '',
    Ant: '',
    Vexp: '',
    EstadoDelArticulo: 'Malo 4.0; K2 = 0.2',
    K2: '0.2',
    ValorDeReposicion: '',
    K1a: '',
    Va: '',
    Fotografia: {
      url: 'https://adalo-uploads.imgix.net/69773a5ff7a423274ee3971427eadfe2850064933a63ed265b7d01840fb75f67.jpg',
      size: 96013,
      width: 1280,
      height: 590,
      filename: 'IMG_20231128_135307_131.jpg'
    },
    FotografiaII: {
      url: 'https://adalo-uploads.imgix.net/2b04fd774036474bbcdd6e5e6ab976c855c129c0226748a44285413bfcded616.jpg',
      size: 101502,
      width: 1280,
      height: 590,
      filename: 'IMG_20231128_135307_199.jpg'
    },
    Created: '28/11/2023 13:53',
    Updated: '28/11/2023 13:53'
  },
  {
    CodigoTasacion: 'TAC149',
    Codigo: 'AC231',
    'Viñeta': '6699',
    Fecha: '28/11/2023 13:51',
    Ubication: 'DEPÓSITO ACCESORIOS DE VUELO',
    Article: 'MUEBLES',
    SubGroup: 'ESTANTES, ARCHIVERO Y VITRINAS',
    Detalle: 'Estante de madera ',
    Descripcion: 'Estante de madera con 3 divisiónes y 4 niveles color café,algunos niveles rotos presentan desgaste de madera',
    Vre: '',
    Vr: '',
    Ant: '',
    Vexp: '',
    EstadoDelArticulo: 'Malo 4.0; K2 = 0.2',
    K2: '0.2',
    ValorDeReposicion: '',
    K1a: '',
    Va: '',
    Fotografia: {
      url: 'https://adalo-uploads.imgix.net/69773a5ff7a423274ee3971427eadfe2850064933a63ed265b7d01840fb75f67.jpg',
      size: 96013,
      width: 1280,
      height: 590,
      filename: 'IMG_20231128_135307_131.jpg'
    },
    FotografiaII: {
      url: 'https://adalo-uploads.imgix.net/2b04fd774036474bbcdd6e5e6ab976c855c129c0226748a44285413bfcded616.jpg',
      size: 101502,
      width: 1280,
      height: 590,
      filename: 'IMG_20231128_135307_199.jpg'
    },
    Created: '28/11/2023 13:53',
    Updated: '28/11/2023 13:53'
  },
  {
    CodigoTasacion: 'TAC149',
    Codigo: 'AC231',
    'Viñeta': '6699',
    Fecha: '28/11/2023 13:51',
    Ubication: 'DEPÓSITO ACCESORIOS DE VUELO',
    Article: 'MUEBLES',
    SubGroup: 'ESTANTES, ARCHIVERO Y VITRINAS',
    Detalle: 'Estante de madera ',
    Descripcion: 'Estante de madera con 3 divisiónes y 4 niveles color café,algunos niveles rotos presentan desgaste de madera',
    Vre: '',
    Vr: '',
    Ant: '',
    Vexp: '',
    EstadoDelArticulo: 'Malo 4.0; K2 = 0.2',
    K2: '0.2',
    ValorDeReposicion: '',
    K1a: '',
    Va: '',
    Fotografia: {
      url: 'https://adalo-uploads.imgix.net/69773a5ff7a423274ee3971427eadfe2850064933a63ed265b7d01840fb75f67.jpg',
      size: 96013,
      width: 1280,
      height: 590,
      filename: 'IMG_20231128_135307_131.jpg'
    },
    FotografiaII: {
      url: 'https://adalo-uploads.imgix.net/2b04fd774036474bbcdd6e5e6ab976c855c129c0226748a44285413bfcded616.jpg',
      size: 101502,
      width: 1280,
      height: 590,
      filename: 'IMG_20231128_135307_199.jpg'
    },
    Created: '28/11/2023 13:53',
    Updated: '28/11/2023 13:53'
  },
  {
    CodigoTasacion: 'TAC149',
    Codigo: 'AC231',
    'Viñeta': '6699',
    Fecha: '28/11/2023 13:51',
    Ubication: 'DEPÓSITO ACCESORIOS DE VUELO',
    Article: 'MUEBLES',
    SubGroup: 'ESTANTES, ARCHIVERO Y VITRINAS',
    Detalle: 'Estante de madera ',
    Descripcion: 'Estante de madera con 3 divisiónes y 4 niveles color café,algunos niveles rotos presentan desgaste de madera',
    Vre: '',
    Vr: '',
    Ant: '',
    Vexp: '',
    EstadoDelArticulo: 'Malo 4.0; K2 = 0.2',
    K2: '0.2',
    ValorDeReposicion: '',
    K1a: '',
    Va: '',
    Fotografia: {
      url: 'https://adalo-uploads.imgix.net/69773a5ff7a423274ee3971427eadfe2850064933a63ed265b7d01840fb75f67.jpg',
      size: 96013,
      width: 1280,
      height: 590,
      filename: 'IMG_20231128_135307_131.jpg'
    },
    FotografiaII: {
      url: 'https://adalo-uploads.imgix.net/2b04fd774036474bbcdd6e5e6ab976c855c129c0226748a44285413bfcded616.jpg',
      size: 101502,
      width: 1280,
      height: 590,
      filename: 'IMG_20231128_135307_199.jpg'
    },
    Created: '28/11/2023 13:53',
    Updated: '28/11/2023 13:53'
  },
  {
    CodigoTasacion: 'TAC149',
    Codigo: 'AC231',
    'Viñeta': '6699',
    Fecha: '28/11/2023 13:51',
    Ubication: 'DEPÓSITO ACCESORIOS DE VUELO',
    Article: 'MUEBLES',
    SubGroup: 'ESTANTES, ARCHIVERO Y VITRINAS',
    Detalle: 'Estante de madera ',
    Descripcion: 'Estante de madera con 3 divisiónes y 4 niveles color café,algunos niveles rotos presentan desgaste de madera',
    Vre: '',
    Vr: '',
    Ant: '',
    Vexp: '',
    EstadoDelArticulo: 'Malo 4.0; K2 = 0.2',
    K2: '0.2',
    ValorDeReposicion: '',
    K1a: '',
    Va: '',
    Fotografia: {
      url: 'https://adalo-uploads.imgix.net/69773a5ff7a423274ee3971427eadfe2850064933a63ed265b7d01840fb75f67.jpg',
      size: 96013,
      width: 1280,
      height: 590,
      filename: 'IMG_20231128_135307_131.jpg'
    },
    FotografiaII: {
      url: 'https://adalo-uploads.imgix.net/2b04fd774036474bbcdd6e5e6ab976c855c129c0226748a44285413bfcded616.jpg',
      size: 101502,
      width: 1280,
      height: 590,
      filename: 'IMG_20231128_135307_199.jpg'
    },
    Created: '28/11/2023 13:53',
    Updated: '28/11/2023 13:53'
  },
  {
    CodigoTasacion: 'TAC149',
    Codigo: 'AC231',
    'Viñeta': '6699',
    Fecha: '28/11/2023 13:51',
    Ubication: 'DEPÓSITO ACCESORIOS DE VUELO',
    Article: 'MUEBLES',
    SubGroup: 'ESTANTES, ARCHIVERO Y VITRINAS',
    Detalle: 'Estante de madera ',
    Descripcion: 'Estante de madera con 3 divisiónes y 4 niveles color café,algunos niveles rotos presentan desgaste de madera',
    Vre: '',
    Vr: '',
    Ant: '',
    Vexp: '',
    EstadoDelArticulo: 'Malo 4.0; K2 = 0.2',
    K2: '0.2',
    ValorDeReposicion: '',
    K1a: '',
    Va: '',
    Fotografia: {
      url: 'https://adalo-uploads.imgix.net/69773a5ff7a423274ee3971427eadfe2850064933a63ed265b7d01840fb75f67.jpg',
      size: 96013,
      width: 1280,
      height: 590,
      filename: 'IMG_20231128_135307_131.jpg'
    },
    FotografiaII: {
      url: 'https://adalo-uploads.imgix.net/2b04fd774036474bbcdd6e5e6ab976c855c129c0226748a44285413bfcded616.jpg',
      size: 101502,
      width: 1280,
      height: 590,
      filename: 'IMG_20231128_135307_199.jpg'
    },
    Created: '28/11/2023 13:53',
    Updated: '28/11/2023 13:53'
  },
  {
    CodigoTasacion: 'TAC149',
    Codigo: 'AC231',
    'Viñeta': '6699',
    Fecha: '28/11/2023 13:51',
    Ubication: 'DEPÓSITO ACCESORIOS DE VUELO',
    Article: 'MUEBLES',
    SubGroup: 'ESTANTES, ARCHIVERO Y VITRINAS',
    Detalle: 'Estante de madera ',
    Descripcion: 'Estante de madera con 3 divisiónes y 4 niveles color café,algunos niveles rotos presentan desgaste de madera',
    Vre: '',
    Vr: '',
    Ant: '',
    Vexp: '',
    EstadoDelArticulo: 'Malo 4.0; K2 = 0.2',
    K2: '0.2',
    ValorDeReposicion: '',
    K1a: '',
    Va: '',
    Fotografia: {
      url: 'https://adalo-uploads.imgix.net/69773a5ff7a423274ee3971427eadfe2850064933a63ed265b7d01840fb75f67.jpg',
      size: 96013,
      width: 1280,
      height: 590,
      filename: 'IMG_20231128_135307_131.jpg'
    },
    FotografiaII: {
      url: 'https://adalo-uploads.imgix.net/2b04fd774036474bbcdd6e5e6ab976c855c129c0226748a44285413bfcded616.jpg',
      size: 101502,
      width: 1280,
      height: 590,
      filename: 'IMG_20231128_135307_199.jpg'
    },
    Created: '28/11/2023 13:53',
    Updated: '28/11/2023 13:53'
  },
  {
    CodigoTasacion: 'TAC23 ',
    Codigo: 'AC412',
    'Viñeta': '7788',
    Fecha: '28/11/2023 11:48',
    Ubication: 'DEPÓSITO ACCESORIOS DE VUELO',
    Article: 'MUEBLES',
    SubGroup: 'ESTANTES, ARCHIVERO Y VITRINAS',
    Detalle: 'Estante metálico ',
    Descripcion: 'Estante metálico color plomo, con 6 niveles y 7 cuerpos, cuenta con dos caras ',
    Vre: '',
    Vr: '',
    Ant: '',
    Vexp: '',
    EstadoDelArticulo: 'Regular 3.0; K2 = 0.4',
    K2: '0.4',
    ValorDeReposicion: '',
    K1a: '',
    Va: '',
    Fotografia: {
      url: 'https://adalo-uploads.imgix.net/97d0541343c538c6938fb53cacd1d28461690c3208302bd6e30f0aa4d08d9991.jpg',
      size: 1409242,
      width: 3264,
      height: 2448,
      filename: '17011869589854192963895807853792.jpg'
    },
    FotografiaII: {
      url: 'https://adalo-uploads.imgix.net/3073f2f48e81240c8ad3207182b91a59c343e1feb4d00361f32562ed8b89b003.jpg',
      size: 1468573,
      width: 3264,
      height: 2448,
      filename: '17011869972755054951754867243989.jpg'
    },
    Created: '28/11/2023 11:54',
    Updated: '28/11/2023 11:57'
  },
  {
    CodigoTasacion: 'TB1-109',
    Codigo: 'B1-0012',
    'Viñeta': '217744',
    Fecha: '1/12/2023 09:19',
    Ubication: 'TALLER TB1',
    Article: 'EQUIPO DE COMPUTACIÓN',
    SubGroup: 'MONITOR',
    Detalle: 'Monitor',
    Descripcion: 'Monitor marca Sabre, modelo 550S, codigo DP15L87L, color beige',
    Vre: '',
    Vr: '',
    Ant: '',
    Vexp: '',
    EstadoDelArticulo: 'Regular 3.0; K2 = 0.4',
    K2: '',
    ValorDeReposicion: '',
    K1a: '',
    Va: '',
    Fotografia: {
      url: 'https://adalo-uploads.imgix.net/14760aaeae9806b1f33cd898500fcae21d1c957154504e76d1608e3f21249bf7.jpg',
      size: 1660829,
      width: 4160,
      height: 1968,
      filename: '17014369568701869739018867646464.jpg'
    },
    FotografiaII: {
      url: 'https://adalo-uploads.imgix.net/cb3ee5f0dd5801024b3a8fe3e9f76feaec71da4847e8555ae791701cba2bfca6.jpg',
      size: 1601919,
      width: 4160,
      height: 1968,
      filename: '17014369823351754481933432608483.jpg'
    },
    Created: '1/12/2023 09:23',
    Updated: '1/12/2023 09:23'
  },
  {
    CodigoTasacion: 'TB1-95',
    Codigo: 'B1-25',
    'Viñeta': '18015',
    Fecha: '1/12/2023 09:17',
    Ubication: 'TALLER TB1',
    Article: 'EQUIPO DE COMPUTACIÓN',
    SubGroup: 'CPU',
    Detalle: 'CPU',
    Descripcion: 'CPU, de color crema, maraca DELL, serial 8G2FY.',
    Vre: '',
    Vr: '',
    Ant: '',
    Vexp: '',
    EstadoDelArticulo: 'Regular 3.0; K2 = 0.4',
    K2: '',
    ValorDeReposicion: '',
    K1a: '',
    Va: '',
    Fotografia: {
      url: 'https://adalo-uploads.imgix.net/32944e1d78d7d06ef38ea47c227920fc6806a83db5150bf386e2361dd8912212.jpg',
      size: 5593477,
      width: 4160,
      height: 3120,
      filename: '17014366744021552912931927560172.jpg'
    },
    FotografiaII: {
      url: 'https://adalo-uploads.imgix.net/619d1a4881ce0b2b9246ca430c8ee902fd1932dd21ded63aadc40acb8bce91d4.jpg',
      size: 5470740,
      width: 4160,
      height: 3120,
      filename: '17014367252469022870754301950025.jpg'
    },
    Created: '1/12/2023 09:21',
    Updated: '1/12/2023 09:21'
  }
]
enum articles {
  Muebles = 'MUEBLES',
  Computacion = 'EQUIPO DE COMPUTACIÓN',
  Varios = 'EQUIPOS VARIOS',
  Maquinaria = 'MAQUINARIAS Y OTROS',
  Enseres = 'ENSERES VARIOS'
}

@Component({
  selector: 'app-root',
  standalone: true,
  animations: [
    trigger('detailExpand', [
      state('collapsed,void', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
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
    MatSelectModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})



export class AppComponent implements AfterViewInit {
  title = 'Generador de Monografias';
  displayColumns: any[] = columns;
  displayedColumns: string[] = ['CodigoTasacion', 'Viñeta', 'Ubication', 'Article', 'SubGroup', 'Detalle'];
  //columnsToDisplay: string[] = this.displayedColumns.slice();
  columnsToDisplayWithExpand = [...this.displayedColumns, 'actions', 'expand'];
  data: PeriodicElement[] = ELEMENT_DATA;
  dataTasation = new MatTableDataSource<TasationData>;
  expandedElement: TasationData | null | undefined;
  selection = new SelectionModel(true, []);
  articles = Object.values(articles)
  @ViewChild(MatPaginator)paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private http: HttpClient) {
    
    this.dataTasation = new MatTableDataSource(dataCsv),
    
  }
    
  ngOnInit() {
    this.paginator._intl.itemsPerPageLabel="Test String";

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataTasation.filter = filterValue.trim().toLowerCase();

    if (this.dataTasation.paginator) {
      this.dataTasation.paginator.firstPage();
    }
  }

  ngAfterViewInit() {
    this.paginator._intl.itemsPerPageLabel = 'Articulos por pagina'
    this.dataTasation.paginator = this.paginator;
    this.dataTasation.sort = this.sort;
    console.log(this.paginator);
  }
  getDataByArticles(event: MatSelectChange) {
    const filterValue = event.value;
    this.dataTasation.filter = filterValue.trim().toLowerCase();
  }
  
  /*addColumn() {
    const randomColumn = Math.floor(Math.random() * this.displayedColumns.length);
    this.columnsToDisplay.push(this.displayedColumns[randomColumn]);
  }

  removeColumn() {
    if (this.columnsToDisplay.length) {
      this.columnsToDisplay.pop();
    }
  }

  shuffle() {
    console.log(dataCsv);
    
    let currentIndex = this.columnsToDisplay.length;
    while (0 !== currentIndex) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // Swap
      let temp = this.columnsToDisplay[currentIndex];
      this.columnsToDisplay[currentIndex] = this.columnsToDisplay[randomIndex];
      this.columnsToDisplay[randomIndex] = temp;
    }
  }*/

  


  private dataReceived: TasationData[] = []


  public files: NgxFileDropEntry[] = [];

  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    for (const droppedFile of files) {

      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {

          // Here you can access the real file
          console.log(droppedFile.relativePath, file);

          // You could upload it like this:
          const formData: FormData = new FormData()
          formData.append('csvFile', file, droppedFile.relativePath)

          console.log("formData values> ", formData);

          // Headers
          const headers = new HttpHeaders({
            'Content-Type': 'multipart/form-data'
          })

          this.http.post<TasationData[]>('http://localhost:3000/api/v1/upload-file', formData)
            .subscribe((data) => {
              // Sanitized logo returned from backend
              console.log("RETURN DATA> ", typeof data)
              this.dataReceived = data

              console.log("dataReceived ----> ", this.dataReceived[0]);
              
            },
            )

          /**
          
  
        
  
         
          **/

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
