import { NgModule }      from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import {HttpModule} from "@angular/http";
import { RepositorySearch } from './repository-search/repository-search'
import { ApiRequest } from './helpers/api-requests'

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule ],
  declarations: [ RepositorySearch ],
  bootstrap:    [ RepositorySearch ],
  providers:    [ ApiRequest ]
})
export class AppModule { }
