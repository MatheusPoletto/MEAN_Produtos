import { ProdutosService } from './produtos.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ListComponent } from './produtos/list/list.component';
import { ProdutosModule } from './produtos/produtos.module';
import { FormComponent } from './produtos/form/form.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ProdutosModule,
  ],
  entryComponents: [
    ListComponent,
    FormComponent
  ],
  providers: [ProdutosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
