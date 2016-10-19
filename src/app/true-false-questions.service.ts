import { Injectable } from '@angular/core';

@Injectable()
export class TrueFalseQuestionsService {
  public questions 
  constructor() { 
    this.questions = {
"29.08.2016": {
"questions":[
{"question": "Eine Zuordnung ist eine spezielle Art von Funktion.", "answer": false},
{"question": "Eine Funktion mit Zuordnungsvorschrift f: x ⟼ mx+t, m,t ∈ ℝ heißt “quadratische Funktion”.", "answer": false},
{"question": "Der Graph einer quadratischen Funktion heißt “Parabita”.", "answer": false},
{"question": "Quadratische Funktionen haben immer genau eine Nullstelle.", "answer": false},
{"question": "Zwei Funktionen, f und g, sind gleich, wenn die Definitions- und Wertemenge von f jeweils auch die von g ist.", "answer": false},
{"question": "Die Graphen aller linearen Funktionen sind punktsymmetrisch zum Ursprung.", "answer": false},
{"question": "Die Wertetabelle einer Funktion, deren Definitionsbereich ein Interval in den reellen Zahlen ist, lässt sich nicht vollständig aufschreiben.", "answer": true},
{"question": "Es gibt Funktionsvorschriften, die auf viele aber nicht auf jede reelle Zahl angewandt werden können.", "answer": true},
{"question": "Mittels quadratischer Ergänzung lassen sich Nullstellen einer linearen Funktion bestimmen.", "answer": false},
{"question": "Die Wertemengen einer linearen Funktion f und einer quadratischen Funktion g können höchstens zwei Elemente gemeinsam haben.", "answer": false}
]
  },
"05.09.2016": {
"questions":[
{"question": "Nicht jede quadratische Funktion ist eine Potenzfunktion.", "answer": true},
{"question": "Jede Parabel schneidet die x-Achse.", "answer": false},
{"question": "Die Wertemenge einer Funktion f ist die Menge aller Funktionswerte von f.", "answer": true},
{"question": "Hat eine quadratische Funktion zwei Nullstellen, dann ist der x-Wert ihres Scheitelpunkts genau in der Mitte zwischen den x-Werten der Nullstellen.", "answer": true},
{"question": "Die Graphen zweier linearer Funktionen mit unterschiedlichen Nullstellen, aber gleicher Steigung stehen senkrecht aufeinander.", "answer": false},
{"question": "Der Graph einer Potenzfunktion ist achsensymmetrisch zur y-Achse, wenn der Exponent eine gerade Zahl ist.", "answer": true},
{"question": "Allen Elementen aus der Definitionsmenge einer Funktion muss ein Funktionswert zugewiesen werden.", "answer": true},
{"question": "Der x-Wert einer Nullstelle ist niemals null.", "answer": false},
{"question": "Der Scheitelpunkt einer quadratischen Funktion liegt immer höher als ihre Nullstellen.", "answer": false},
{"question": "Lineare Funktionen haben keine Extremwerte.", "answer": true}
    ]
  },
"12.09.2016": {
"questions":[
{"question": "Zwei Funktionen mit unterschiedlichen Definitionsbereichen können keinen gemeinsamen Schnittpunkt haben.", "answer": true },
{"question": "Es gibt keine Funktion, die sowohl eine quadratische als auch eine Potenzfunktion ist.", "answer": false},
{"question": "Der Ursprung ist Nullstelle jeder Potenzfunktion.", "answer": true},
{"question": "Die 1 ist im Intervall (-1;1) enthalten.", "answer": false},
{"question": "Zwei Funktionen mit gleicher Funktionsvorschrift und \"überlappenden\" Definitionsbereichen haben keine Schnittpunkte.", "answer": false },
{"question": "Es gibt unendlich viele Zahlen im Interval [1,3; 4).", "answer": true},
{"question": "Eine Potenzfunktion mit geradem Exponenten ist monoton steigend.", "answer": false},
{"question": "Alle Potenzfunktionen mit negativem Exponenten haben nur positive Funktionswerte.", "answer": false},
{"question": "Jede Potenzfunktion mit punktsymmetrischem Graphen ist monoton steigend.", "answer": false},
{"question": "Ist der Graph einer Funktion f achsensymmetrisch, so gilt: f(x) = f(-x) für beliebiges x.", "answer": true}
    ]
  },
"26.09.2016": {
"questions":[
{"question": "Der Funktionsterm ganzrationaler Funktionen enthält nur ganze Zahlen.", "answer": false },
{"question": "Der Grad einer ganzrationalen Funktion ist die Zahl vor der höchsten Potenz von x.", "answer": false},
{"question": "Ganzrationale Funktionen mit ausschließlich geraden Exponenten sind achsensymmetrisch.", "answer": true},
{"question": "In der Linearfaktordarstellung einer ganzrationalen Funktion lassen sich ihre Nullstellen einfach ablesen.", "answer": true},
{"question": "Zu gegebenen Nullstellen gibt es unendlich viele ganzrationale Funktionen, die genau diese Nullstellen haben.", "answer": true },
{"question": "Eine ganzrationale Funktion n-ten Grades hat mindestens n Nullstellen.", "answer": false},
{"question": "Eine ganzrationale Funktion, die keine Potenzfunktion ist, ist niemals streng monoton steigend.", "answer": false},
{"question": "Mittels Polynomdivision kann die Linearfaktordarstellung einer ganzrationalen Funktion bestimmt werden.", "answer": true},
{"question": "Die Definitionsmenge einer ganzrationalen Funktion enthält nie die Null.", "answer": false},
{"question": "Die Koeffizienten einer ganzrationalen Funktion müssen rationale Zahlen sein.", "answer": false}
    ]
  },
  "30.09.2016": {
"questions":[
{"question": "Für ganzrationale Funktionen mit geradem Grad gilt immer: für x→-∞ gilt: f(x)→+∞.", "answer": false },
{"question": "Kennt man den Koeffizienten der höchsten x-Potenz einer ganzrationalen Funktion, weiß man alles über ihr Grenzwertverhalten.", "answer": false},
{"question": "Eine konstante Funktion kann eine ganzrationale Funktion vierten Grades in höchstens fünf Punkten schneiden.", "answer": true},
{"question": "Zwei verschiedene ganzrationale Funktionen können unendlich viele Schnittpunkte miteinander teilen.", "answer": false},
{"question": "Eine ganzrationale Funktion ist entweder eine Potenzfunktion oder die Summe mehrerer Potenzfunktionen.", "answer": true },
{"question": "Multipliziert man jeden Koeffizienten einer ganzrationalen Funktion mit der gleichen Zahl, ändert das nichts am Grad der Funktion.", "answer": true},
{"question": "Jede Potenzfunktion ist auch eine ganzrationale Funktion.", "answer": false},
{"question": "Jede quadratische Funktion ist auch eine ganzrationale Fuktion.", "answer": true},
{"question": "Jede lineare Funktion ist auch eine ganzrationale Funktion.", "answer": true},
{"question": "Die Wurzelfunktion ist auch eine ganzrationale Funktion.", "answer": false}
    ]
  } 
}
  }


}
