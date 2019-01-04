import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { QuoteEffects } from './quote.effect';
import { AuthEffects } from './auth.effect';
import { UserEffects } from './user.effect';
import { ArticleEffects } from './article.effect';

@NgModule({
    imports: [
        EffectsModule.forRoot([
            QuoteEffects,
            AuthEffects,
            UserEffects,
            ArticleEffects
        ])
    ]
})
export class AppEffectsModule{

}