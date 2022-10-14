# Blackjack

A huszonegy egy kártyajáték, melyet 52 lapos francia kártyával játszanak dzsókerek nélkül. Blackjack
néven is ismert. A játék célja, hogy a játékos lapjai összértéke minél közelebb legyen a
huszonegyhez, de azt ne lépje túl.

## Funkciók

- A játszmák szobákban történnek és egy szobában 2-7 fő lehet egyszerre jelen.
- Zsetonok kezelése:
  - Minden egyes játékba lépés során a játékos kap egy adott zseton mennyiséget amit a játék során felhasználhat. 
- A játékosokat valamilyen módon meg kell nevezni és asszerint megjelníteni őket az asztalnál.
- Egy játékos a következőket tudja megtenni:
  - **Hit**: Lapkérés.
  - **Stand/Stay**: Nem kér több lapot.
  - **Double**: Első két lap után lehet a tétet duplázni. Ezután már csak egy lapot kaphat a játékos.
  - **Split**: Ha játékos elsp két lapja pár, akkor ezt két "kéz"-re oszthatja. Mind a két kézre
    tehet tétet és mind két kéz külön osztásban részesül, szóval kérhet lapot külön-külön.
  - **Insurance**: Ha az osztó színével felfelé látszó lapja Ász, akkor a játékos ezzel a bemondással
    „biztosítást” köthet. A tét legfeljebb az eredeti tét másfélszerese lehet. Ha az osztó másik
    kártyájának értéke 10 (10-es, Bubi, Dáma vagy Király), akkor a játékos a tétet 2:1 arányban kapja
    vissza. Ha az osztó másik kártyájának értéke a 10-estől eltérő, akkor az osztó nyer.  
  - **Surrender**: Ha osztás után feladja a játékos, akkor a tétjének a felét visszakapja.
  - **Bust**: Ha a lapok összértéke 21 felett van, akkor elveszti a játékot.
  - **Push**: Kifejezés, ha játékos és az osztó lapjainak értéke egyforma. Gondolom ilyenkor
    a tét feleződik.
  - **Blackjack**: Ha a lapok értéke pontosan 21.
- Lapok értéke:
  - Ász: 1 vagy 11.
    - **Jatékos szempontjából**: Ha a lapok összege az ásszal meghaladná a 21-et, akkor 1-nek
      tekinthető, egyébként 11.
    - **Osztó szempontjából**: Ha a lapok összértéke az ász 11-s értékével számolva 17 és 21 közé
      esik, akkor nem tekintheti 1-nek. Ha 21-t meghaladja, akkor igen.
  - Király, dáma, bubi: 10
  - Számozottak: 2 és 10 közötti érték.
- A felhasználónak szüksége van egy grafikus felületre.
- A felhasználói felületen látszik:
  - Egyes műveletekhez tartozó gombok.
  - Kapott és az osztó által mutatot lapok.
  - Játékosok lapszáma
  - Játékosok és saját zseton száma

## Technológia

- Frontend:
  - A lehető legegyszerűbb megvalósítás használata, mivel egyikünk sem ért hozzá.
  - HTML5, CSS, Javascript technológiát használnánk hozzá. Még nem tudjuk kell e valamilyen
    frontend keretrendszer.
- Backend:
  - Node.js-t használnánk, ami egy JavaScript keretrendszer.
  - Modulok, amiket lehetségesen használni fogunk:
    - http
    - mocha

- Tesztelés:
  - Unit tesztek készítéséhez a mocha Node.js könyvtárat szeretnénk használni.

## Forrás

[Blackjack-wiki-hu](https://hu.wikipedia.org/wiki/Huszonegy)
