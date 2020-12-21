import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClimaComponent } from './clima.component';
import { RouterModule } from '@angular/router';

import { ClimaAgoraComponent } from './components/clima-agora/clima-agora.component';
import { ClimaService } from './services/clima.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    ClimaComponent,
    ClimaAgoraComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatListModule
  ],
  exports: [
    ClimaComponent
  ],
  providers: [ClimaService]
})
export class ClimaModule { }
