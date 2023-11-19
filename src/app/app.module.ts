import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // For data binding

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PostItemComponent } from './post-item/post-item.component';
import { FormComponent } from './form/form.component';
import { DirectiveComponent } from './directive/directive.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { TaskComponent } from './task/task.component';
import { PipeComponent } from './pipe/pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostItemComponent,
    FormComponent,
    DirectiveComponent,
    DataBindingComponent,
    NgStyleComponent,
    TaskComponent,
    PipeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
