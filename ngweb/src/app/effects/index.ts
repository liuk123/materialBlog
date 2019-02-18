import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { QuoteEffects } from './quote.effect';
import { AuthEffects } from './auth.effect';
import { UserEffects } from './user.effect';
import { ArticleEffects } from './article.effect';
import { routerEffects } from './router.effect';
import { LabelEffects } from './label.effect';

@NgModule({
    imports: [
        EffectsModule.forRoot([
            QuoteEffects,
            AuthEffects,
            UserEffects,
            ArticleEffects,
            routerEffects,
            LabelEffects
        ])
    ]
})
export class AppEffectsModule{

}