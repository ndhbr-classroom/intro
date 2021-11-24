# Aufgabe 1: Intro
In dieser Aufgabe wirst du dein erstes JavaScript-Programm programmieren und ausführen.

## Schritt 1: Der Dateien-Jungle
Du bist bestimmt durch die ganzen Dateien erst einmal verwirrt und überfordert. Aber es ist alles einfacher als du denkst.

Im Laufe dieses Kurses wirst du den Sinn der jeweiligen Dateien noch früh genug kennenlernen. Doch in dieser Aufgabe musst du dich erstmal nur mit der Datei **name.js** beschäftigen.

## Schritt 3: Initialisierung
Um das Projekt bei dir zu initialisieren, benötigst du weitere Pakete. Welche Pakete du genau brauchst, sind bereits in der Datei **package.json**.

Mit dem Befehl
```bash
> npm install 
```
werden alle in der Datei **package.json** aufgelisteten Abhängigkeiten nachinstalliert.

Wenn alles funktioniert hat, solltest du nun einen neuen Ordner **node_modules/** haben.

## Schritt 2: Ausführung
So, fertig. Nun geht's an die Ausführung. Wie bereits vorher erwähnt, existieren bereits einige Dateien, die dir den Einstieg erleichtern. Diese bilden die Grundstruktur des Programms.

Das Ziel des Programms ist es, dass das Programm dich nach deinem Namen frägt und es diesen in folgender Form wieder ausgibt.

```javascript
> Wie ist dein Name? Andreas
Hallo, mein Name ist Andreas!
```

Um das Programm auszuführen, solltest du in der Shell folgenden Befehl ausführen:
```bash
> node index.js
```

Lass mich raten, du wirst bereits nach deinem Namen gefragt, aber nach Drücken der Enter-Taste beendet sich das Programm einfach?

Richtig, das ist deine Aufgabe!

## Schritt 3: Aufgabe
Das Programm frägt dich bereits nach deinem Namen. Nun ist es deine Aufgabe, dass das Programm den vorher erwähnten Satz wieder ausgibt.

Hierfür musst du die Datei **name.js** öffnen. Die Dateiendung **.js** steht im Übrigen für die Programmiersprache JavaScript.

In JavaScript kann man beispielsweise mit dem Befehl **//** einen Kommentar erstellen. Alles was hinter diesen Zeichen steht, wird ignoriert. Dies ist hilfreich, um geschriebenen Code zu erklären.

Ersetze den Kommentar (Zeile 6) zwischen den geschweiften Klammern mit folgendem Code:

```javascript
console.log('Hallo, mein Name ist ' + name);
```

Der Befehl **console.log(...)** gibt Text in der Konsole aus. In diesem Beispiel haben wir zwei Zeichenfolgen (auch: Strings) miteinander konkatiniert.

## Schritt 4: Ausprobieren
Glückwunsch, das war's.

Wenn alles geklappt hat, ist die Aufgabe nun bereit zum abgeben. Teste sie doch gleich aus. Die Prozedur ist dieselbe. Starte die Anwendung mit:
```bash
> node index.js
```
und probier es doch mit deinem Namen aus! :)