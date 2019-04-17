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
  MatChipsModule,
  MatSnackBarModule,
  MatTabsModule,
  MatSliderModule

} from "@angular/material";
import { ImageListSelectComponent } from './image-list-select/image-list-select.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { CkeditorComponent } from './ckeditor/ckeditor.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ReplayDialogComponent } from './replay-dialog/replay-dialog.component';
import { AdDirective } from './ad/ad.directive';
import { AdBannerComponent } from './ad/ad-banner.component';
import { adListComponent } from './ad/b-1.component';
import { adCardComponent } from './ad/b-2.component';
import { VideoComponent } from './video/video.component';
import { advideoComponent } from './ad/b-3.component';


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
    MatChipsModule,
    MatSnackBarModule,
    MatTabsModule,
    MatSliderModule,

    CKEditorModule

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
    MatChipsModule,
    MatSnackBarModule,
    MatTabsModule,
    MatSliderModule,

    ImageListSelectComponent,
    CkeditorComponent,
    AdBannerComponent,
    VideoComponent,
    advideoComponent
  ],
  declarations: [
    ImageListSelectComponent,
    ConfirmDialogComponent,
    CkeditorComponent,
    ReplayDialogComponent,
    AdDirective,
    AdBannerComponent,
    adListComponent,
    adCardComponent,
    VideoComponent,
    advideoComponent
  ],
  entryComponents:[
    ConfirmDialogComponent,
    ReplayDialogComponent,
    adListComponent,
    adCardComponent,
    advideoComponent,
    VideoComponent,
  ]
})
export class SharedModule { }
