import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './comments/comments.component';
import { CommentComponent } from './comment/comment.component';
import { CustomNgTemplateModule } from '../custom-ng-template/custom-ng-template.module';
import { HighlightUserDirective } from './highlight-user.directive';
import { BuiltinDirectivesImplementationModule } from '../builtin-directives-implementation/builtin-directives-implementation.module';



@NgModule({
  declarations: [
    CommentsComponent,
    CommentComponent,
    HighlightUserDirective,
  ],
  imports: [
    CommonModule,
    CustomNgTemplateModule,BuiltinDirectivesImplementationModule
  ],
  exports:[CommentsComponent]
})
export class NgForPracticeModule { }
