import { Injectable } from '@angular/core';

@Injectable()
export class SetFunctionsService {
  public functions = [
                {
                    tex: 'x(x+2)(x-2)',
                    fnc: (x)=>x*(x+2)*(x-2),
                    text: 'Eine punktsymmetrische ganzrationale Funktion mit Nullstelle bei 2.'
                },
                {
                    tex: '-{{1}\\over{4}} x^5-2,5x^3+2,25x',
                    fnc: (x)=>-0.25*x*(x+1)*(x-1)*(x-3)*(x+3),
                    text: 'Eine punktsymmetrische ganzrationale Funktion mit negativem Koeffizienten vor der höchsten x-Potenz.'
                },
                {
                    tex: '{{3}\\over{100}}x^2 (x-3)(x+6)',
                    fnc: (x)=>0.03*x*x*(x-3)*(x+6),
                    text: 'Eine ganzrationale Funktion 4. Grades, deren Graph den Ursprung berührt.'
                },
                {
                    tex: '4,48x^4 -1.4x^2+0.07',
                    fnc: (x)=>0.07*(x-2)*(x+2)*(x+4)*(x-4),
                    text: 'Eine achsensymmetrische ganzrationale Funktion mit positivem Koeffizienten vor der höchsten x-Potenz.'
                },
                {
                    tex: '(x+2)(x-1)^2',
                    fnc: (x)=>(x+2)*(x-1)*(x-1),
                    text: 'Eine ganzrationale Funktion 3. Grades mit doppelter Nullstelle bei 1.'
                },



                {
                    tex: 'x',
                    fnc: (x)=>x,
                    text: 'Der Graph dieser Funktion ist eine Ursprungsgerade mit 100% Steigung .'
                },
                {
                    tex: '{{1}\\over{2}} x-2',
                    fnc: (x)=>.5*x-2,
                    text: 'Eine lineare Funktion mit Steigungsfaktor 0,5 und Nullstelle (4|0)'
                },
                {
                    tex: '\\frac{1}{2}x',
                    fnc: (x)=>.5*x,
                    text: 'Eine lineare Funktion, mit Nullstelle bei Null und Steigungsfaktor 0,5.'
                },
                {
                    tex: '4x',
                    fnc: (x)=>4*x,
                    text: 'Eine lineare Funktion, deren Graph die Normalparabel in ihrem Scheitelpunkt und bei (4|16) schneidet.'
                },

                {
                    tex: 'x^2+1',
                    fnc: (x)=>Math.pow(x,2)+1,
                    text: 'Die Normalparabel um eins nach oben verschoben.'
                },
                {
                    tex: 'x^2',
                    fnc: (x)=>Math.pow(x,2),
                    text: 'Eine Normalparabel.'
                },
                {
                    tex: '(x-4)^2',
                    fnc: (x)=>Math.pow(x-4,2),
                    text: 'Eine um vier nach rechts verschobene Normalparabel.'
                },
                {
                    tex: '(x+4)^2',
                    fnc: (x)=>Math.pow(x+4,2),
                    text: 'Eine um vier nach links verschobene Normalparabel.'
                },
                {
                    tex: 'x^2-x',
                    fnc: (x)=>Math.pow(x,2)-x,
                    text: 'Eine quadratische Funktion mit Nullstellen (0|0) und (1|0).'
                },
                {
                    tex: 'x^2-4',
                    fnc: (x)=>Math.pow(x,2)-4,
                    text: 'Eine Funktion mit Nullstellen bei 2 und -2 und sonst nirgends.'
                },
                {
                    tex: 'x^2+2',
                    fnc: (x)=>Math.pow(x,2)+2,
                    text: 'Eine quadratische Funktion, deren Wertemenge nur Elemente größer gleich 2 enthält, und achsensymmetrisch zur y-Achse ist.'
                },


                {
                    tex: 'x^{\\frac{1}{2}}',
                    fnc: (x)=>Math.sqrt(x),
                    text: 'Eine Potenzfunktion, deren Graph durch (4|2) verläuft.',
                    def: 'ℝ⁺'
                },
                {
                    tex: 'x^{-1}',
                    fnc: (x)=>1/x,
                    text: 'Eine Potenzfunktion, deren Graph keine Achse berührt und durch den Punkt (10|0,1) verläuft.',
                    def: 'ℝ\\{0}',
                    defExceptions: [0]
                },                

                {
                    tex: '|x|',
                    fnc: (x)=>Math.abs(x),
                    text: 'Die Betragsfunktion.',
                },                     

                {
                    tex: '0',
                    fnc: (x)=>0,
                    text: 'Eine konstante Funktion mit unendlich vielen Nullstellen.',
                },         
            ]

}
