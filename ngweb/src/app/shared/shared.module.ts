import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { 
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatSidenavModule,
  MatListModule,
  MatSlideToggleModule,
  MatGridListModule,
  MatDialogModule,
  MatAutocompleteModule,
  MatMenuModule,
  MatCheckboxModule,
  MatTooltipModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
  MatButtonToggleModule,
  MatBadgeModule,
  MatPaginatorModule,

} from "@angular/material";
import { ImageListSelectComponent } from './image-list-select/image-list-select.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { CkeditorComponent } from './ckeditor/ckeditor.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ReplayDialogComponent } from './replay-dialog/replay-dialog.component';
import { CardComponent } from './card/card.component';
import { AppRoutingModule } from '../core/app-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSidenavModule,
    MatListModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatPaginatorModule,

    CKEditorModule,
    AppRoutingModule

  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSidenavModule,
    MatListModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatPaginatorModule,

    ImageListSelectComponent,
    CKEditorModule,
    CkeditorComponent,
    CardComponent
  ],
  declarations: [
    ImageListSelectComponent,
    ConfirmDialogComponent,
    CkeditorComponent,
    ReplayDialogComponent,
    CardComponent,
  ],
  entryComponents:[
    ConfirmDialogComponent,
    ReplayDialogComponent
  ]
})
export class SharedModule { }
