# byskyting.github.io
Resultatarkiv for Byskytinga: Den årlige skytekonkurransen mellom skytterlagene i Møre og Romsdals tre største byer.

## Innlegging av resultater
1. Logg inn på github.com (må opprette konto og gis rettigheter til å bidra).
2. Last opp bildefilene med skiveutskrift til assets/images/gravkort/lagskyting/<årstall> og assets/images/gravkort/patronistskyting/<årstall> (greiest å navngi filene slik: <lag>_<skive>.<format> (feks 1_4.png for skive 4 på lag 1 og bildet er en png-fil)).
3. Legg inn resultatene i filene _data/lagskyting_sammenlagt.csv, _data/lagskyting individuelt.csv og _data/patronistskyting.csv:
  * Resultatene legges inn slik at siste år ligger øverst.
  * Resultatene for hvert år legges inn sortert på plassering/poeng fra høyest til lavest.
  * Bruk "," som separator.
  * Bruk "." som desimaltegn.
  * Inkluder referanse til filnavnet gitt til skiveutskriften i den siste kolonnen.
4. Etter arrangement i Molde legges nyutnevnte riddere til øverst i _data/ridderutnevnelse.csv.

## Valideringer
* Navn på skytter: Om et resultat legges inn med navn på skytter som ikke ligger i _data/navneliste.csv, så vil det vises i resultatlisten. Sjekk om det er første året skytteren er med eller om navnet er lagt inn litt forskjellig fra tidligere år. Legg til skytterens navn øverst i navneliste.csv om det er en ny skytter, evt rett navnet om det er feil. Unngå å legge inn duplikate navn i navnelisten, kun et navn per person.
* Poengsummer: Hvis det er lagt inn resultater der verdiene fra seriene ikke stemmer overens med summene, så vil det vises i resultatlisten. Sjekk da resultatet mot skiva/bildet og rett eventuelle feil. Om tellende resultater ikke stemmer overens med registrert totalsum for laget så vil det også utheves.
* Antall resultater: Opp gjennom åra har det vært litt forskjellig program og antall tellende skyttere på laget. Det kan se ut som tellende skyttere var de 6 beste til 1931, de 5 beste fra 1932 til 1934, de 10 beste fra 1949 til 1981, og de 8 beste fra 1982 til i dag. Om det er registrert for få resultater og totalsummen ikke stemmer med innlagte resultat, så vil det vises.
* Alle valideringer merkes med ei "*", så en kan enkelt søke og liste opp rader med valideringsfeil. 

## Bidrag
Oppfordrer alle til å bidra med rettelser av evt feil eller manglende resultater. Det kan være mange som kan supplere med utfyllende resultater, f.eks. gamle gravkort, avisutklipp, e.l. 
