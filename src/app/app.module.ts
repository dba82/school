import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule }   from '@angular/router';
import { AppRoutingModule} from './app-routing-module/app-routing-module.module'
import 'lodash';

import { AppComponent } from './app.component';
import { DummyComponent } from './dummy/dummy.component';
import { ApplicationFrameComponent } from './application-frame/application-frame.component';
import { FunctionSetGameComponent } from './function-set-game/function-set-game.component';
import { FunctionPlotComponent } from './function-plot/function-plot.component';
import { FunctionSetCardComponent } from './function-set-card/function-set-card.component';
import { FunctionValueTableComponent } from './function-value-table/function-value-table.component';
import { FunctionDescriptionComponent } from './function-description/function-description.component';
import { KhanTexSpanComponent } from './khan-tex-span/khan-tex-span.component';
import { TrueFalseQuestionsComponent } from './true-false-questions/true-false-questions.component';
import { NumberlineComponent } from './numberline/numberline.component';
import { ConfigurationPanelComponent } from './configuration-panel/configuration-panel.component';
import { NumberlineExerciseComponent } from './numberline-exercise/numberline-exercise.component';
import { NumeralsPipe } from './numerals.pipe';
import { MovableDirective } from './movable/movable.directive';
import { FormattedTextInputComponent } from './formatted-text-input/formatted-text-input.component';
import { TextFileDownloaderComponent } from './text-file-downloader/text-file-downloader.component';


@NgModule({
  declarations: [
    AppComponent,
    DummyComponent,
    ApplicationFrameComponent,
    FunctionSetGameComponent,
    FunctionPlotComponent,
    FunctionSetCardComponent,
    FunctionValueTableComponent,
    FunctionDescriptionComponent,
    KhanTexSpanComponent,
    NumberlineComponent,
    TrueFalseQuestionsComponent,
    ConfigurationPanelComponent,
    NumberlineExerciseComponent,
    NumeralsPipe,
    MovableDirective,
    FormattedTextInputComponent,
    TextFileDownloaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AppRoutingModule,
    RouterModule
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
