import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule }   from '@angular/router';
import { AppRoutingModule} from './app-routing-module/app-routing-module.module'
import 'lodash';

import { AppComponent } from './app.component';
import { NumberlineComponent } from './numberline/numberline.component';
import { ApplicationFrameComponent } from './application-frame/application-frame.component';
import { FunctionSetGameComponent } from './function-set-game/function-set-game.component';
import { CardsTableComponent } from './cards-table/cards-table.component';
import { ScoreBoardComponent } from './score-board/score-board.component';
import { FunctionPlotComponent } from './function-plot/function-plot.component';
import { FunctionSetCardComponent } from './function-set-card/function-set-card.component';
import { FunctionValueTableComponent } from './function-value-table/function-value-table.component';
import { FunctionDescriptionComponent } from './function-description/function-description.component';
import { KhanTexSpanComponent } from './khan-tex-span/khan-tex-span.component';
import { NumberLineMarkComponent } from './number-line-mark/number-line-mark.component';

@NgModule({
  declarations: [
    AppComponent,
    NumberlineComponent,
    ApplicationFrameComponent,
    FunctionSetGameComponent,
    CardsTableComponent,
    ScoreBoardComponent,
    FunctionPlotComponent,
    FunctionSetCardComponent,
    FunctionValueTableComponent,
    FunctionDescriptionComponent,
    KhanTexSpanComponent,
    NumberLineMarkComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
