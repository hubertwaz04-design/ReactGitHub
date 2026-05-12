import './App.css';
import SnakeMenu from './components/SnakeMenu';

function App() {
  return (
    <div className="bg-light" style={{ minHeight: '100vh', fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif" }}>
      
      {/* --- SEKCJA 1: HERO (Nagłówek główny) --- */}
      <header className="bg-dark text-white text-center py-5 shadow">
        <div className="container py-5">
          <h1 className="display-3 fw-bold mb-4">Moje Cyfrowe Królestwo</h1>
          <p className="lead text-secondary w-75 mx-auto" style={{ lineHeight: '1.8' }}>
            Witaj w miejscu, gdzie kod spotyka się z designem, a logika z kreatywnością. 
            Ta strona to nie tylko zbiór projektów – to manifest mojego podejścia do inżynierii 
            oprogramowania, dbałości o detale i niekończącego się głodu wiedzy.
          </p>
        </div>
      </header>

      <main className="container mt-5">
        
        {/* --- SEKCJA 2: INTERAKTYWNE MENU --- */}
        <section className="mb-5 row justify-content-center">
          <div className="col-lg-8">
            <div className="text-center mb-4">
              <h2 className="fw-bold">Nawigacja Inna Niż Wszystkie</h2>
              <p className="text-muted">Użyj strzałek na klawiaturze, aby zebrać zakładki i odkryć ukryte funkcje.</p>
            </div>
            <div className="shadow-lg rounded overflow-hidden">
              <SnakeMenu />
            </div>
          </div>
        </section>

        <hr className="my-5" />

        {/* --- SEKCJA 3: O MNIE I FILOZOFIA KODU (Długi tekst) --- */}
        <section className="mb-5">
          <h2 className="display-5 fw-bold mb-4 border-bottom pb-2">Moja Filozofia Tworzenia</h2>
          <div className="row g-5">
            <div className="col-md-6">
              <h4 className="fw-bold text-primary">Architektura ponad rzemiosło</h4>
              <p style={{ textAlign: 'justify', lineHeight: '1.8' }}>
                Programowanie to dla mnie coś więcej niż tylko pisanie instrukcji dla maszyny. 
                Traktuję kod jak nowoczesną formę architektury. Każdy komponent Reacta, każda funkcja 
                JavaScriptu i każdy układ CSS to fundamenty, na których budujemy cyfrowe budynki. 
                Zła architektura sprawi, że budynek runie pod własnym ciężarem, dlatego szczególną uwagę 
                zwracam na czysty kod (Clean Code), wzorce projektowe i skalowalność moich rozwiązań.
                W erze, gdzie wszystko działa w chmurze, optymalizacja każdego kilobajta danych przesyłanych 
                do klienta jest kluczowa dla sukcesu projektu.
              </p>
              <p style={{ textAlign: 'justify', lineHeight: '1.8' }}>
                Wierzę, że najlepszy kod to ten, którego nie trzeba pisać. Używanie odpowiednich 
                narzędzi, bibliotek takich jak Vite czy frameworków jak React, pozwala mi skupić się 
                na rozwiązywaniu rzeczywistych problemów biznesowych, a nie na wyważaniu otwartych drzwi.
                Mój proces twórczy zawsze zaczyna się od kartki papieru – zrozumienia problemu przed 
                napisaniem pierwszej linijki kodu.
              </p>
            </div>
            <div className="col-md-6">
              <h4 className="fw-bold text-success">Użytkownik w centrum uwagi (UX)</h4>
              <p style={{ textAlign: 'justify', lineHeight: '1.8' }}>
                Nawet najbardziej wyrafinowany algorytm jest bezużyteczny, jeśli interfejs, z którym 
                styka się użytkownik końcowy, jest toporny, nieintuicyjny lub wolny. Projektując aplikacje, 
                zawsze wcielam się w rolę osoby, która po raz pierwszy widzi dany ekran. Badam zachowania, 
                analizuję mapy cieplne (heatmaps) i staram się zminimalizować ilość kliknięć potrzebnych 
                do wykonania akcji.
              </p>
              <p style={{ textAlign: 'justify', lineHeight: '1.8' }}>
                Moje interfejsy są responsywne (Mobile-First) i dostępne (Web Accessibility). Staram się, 
                aby kolory ze sobą współgrały, a typografia była czytelna na każdym ekranie – od 
                smartwatchy, po wielkie monitory 4K. Snake Menu, które widziałeś na górze, to świetny przykład 
                tego, jak można połączyć użyteczność z elementem zaskoczenia (tzw. "Delightful UX"), co 
                sprawia, że użytkownik zapamiętuje stronę na dłużej.
              </p>
            </div>
          </div>
        </section>

        {/* --- SEKCJA 4: ROZBUDOWANE ARTYKUŁY (Wymuszają długie czytanie) --- */}
        <section className="mb-5 bg-white p-5 shadow-sm rounded">
          <h2 className="fw-bold mb-4">Dziennik Inżyniera: Moje Przemyślenia</h2>
          
          <article className="mb-5">
            <h3 className="h4 text-dark">Przyszłość front-endu w erze Sztucznej Inteligencji</h3>
            <p className="text-muted small">Opublikowano: 12 maja 2026 | Czas czytania: 5 min</p>
            <p style={{ textAlign: 'justify', lineHeight: '1.8' }}>
              Żyjemy w fascynujących czasach. Narzędzia takie jak GitHub Copilot czy inne modele językowe 
              drastycznie zmieniają sposób, w jaki piszemy kod. Wielu młodych programistów zastanawia się, 
              czy AI wkrótce ich zastąpi. Moja odpowiedź brzmi: nie. AI nie zastąpi programistów, ale 
              programiści, którzy używają AI, zastąpią tych, którzy tego nie robią. Obecnie front-end to 
              już nie tylko HTML i CSS. To zarządzanie skomplikowanym stanem aplikacji (np. za pomocą Redux 
              lub Context API), to bezpieczeństwo, autoryzacja za pomocą JWT, renderowanie po stronie 
              serwera (SSR) i optymalizacja wskaźników Core Web Vitals.
            </p>
            <p style={{ textAlign: 'justify', lineHeight: '1.8' }}>
              Prawdziwą wartością programisty staje się umiejętność logicznego myślenia, łączenia 
              różnych technologii w jedną, spójną całość oraz dogłębne zrozumienie biznesu. Narzędzia 
              będą generować szablony, ale to my musimy podejmować architektoniczne decyzje. W niedalekiej 
              przyszłości przewiduję powrót do upraszczania stosu technologicznego. React wciąż dominuje, 
              ale rosną w siłę alternatywy takie jak Svelte, które kompilują kod, zamiast obciążać 
              przeglądarkę wirtualnym DOM-em.
            </p>
          </article>

          <article>
            <h3 className="h4 text-dark">Dlaczego warto publikować kod na GitHubie?</h3>
            <p className="text-muted small">Opublikowano: Wczoraj | Czas czytania: 4 min</p>
            <p style={{ textAlign: 'justify', lineHeight: '1.8' }}>
              Stworzenie tej strony i umieszczenie jej na GitHub Pages to jeden z najważniejszych kroków 
              w budowaniu osobistej marki w branży IT. GitHub to nasze nowoczesne CV. Rekruterzy nie chcą 
              już czytać dokumentów w Wordzie, gdzie każdy wpisuje "znajomość Reacta - biegły". Rekruter 
              techniczny chce wejść w repozytorium, spojrzeć na historię commitów, jakość kodu, nazewnictwo 
              zmiennych i sposób rozwiązywania problemów.
            </p>
            <p style={{ textAlign: 'justify', lineHeight: '1.8' }}>
              Ponadto, system kontroli wersji Git uczy pokory i organizacji. Zmusza do dzielenia pracy na 
              logiczne kawałki. Kiedyś utrata kodu z powodu awarii dysku była koszmarem. Dziś, wysyłając 
              kod komendą <code>git push</code>, nie tylko go zabezpieczamy, ale też dajemy sobie możliwość 
              podróżowania w czasie (przywracania starszych wersji) i współpracy z ludźmi z całego świata. 
              Open Source to potęga, z której jako społeczność powinniśmy być dumni.
            </p>
          </article>
        </section>

        {/* --- SEKCJA 5: PORTFOLIO W KARTACH --- */}
        <section className="mb-5">
          <h2 className="display-5 fw-bold mb-4 text-center">Moje Flagowe Projekty</h2>
          <div className="row g-4">
            {/* Projekt 1 */}
            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-header bg-dark text-white text-center py-4">
                  <h5 className="mb-0">E-Commerce Platform</h5>
                </div>
                <div className="card-body">
                  <p className="card-text">W pełni funkcjonalny sklep internetowy z systemem płatności, koszykiem i panelem administratora. Zbudowany z myślą o maksymalnej konwersji i szybkości ładowania.</p>
                  <div className="mt-3">
                    <span className="badge bg-primary me-1">React</span>
                    <span className="badge bg-secondary me-1">Node.js</span>
                    <span className="badge bg-info text-dark">MongoDB</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Projekt 2 */}
            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-header bg-success text-white text-center py-4">
                  <h5 className="mb-0">Task Manager Pro</h5>
                </div>
                <div className="card-body">
                  <p className="card-text">Aplikacja do zarządzania czasem i zadaniami. Wykorzystuje zaawansowane metody przeciągania elementów (Drag & Drop) oraz synchronizację w czasie rzeczywistym.</p>
                  <div className="mt-3">
                    <span className="badge bg-primary me-1">React</span>
                    <span className="badge bg-danger me-1">Firebase</span>
                    <span className="badge bg-warning text-dark">Zustand</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Projekt 3 */}
            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-header bg-primary text-white text-center py-4">
                  <h5 className="mb-0">Interactive Portfolio</h5>
                </div>
                <div className="card-body">
                  <p className="card-text">Strona, którą właśnie przeglądasz! Udowadnia, że za pomocą czystego Reacta i kreatywnego podejścia można stworzyć angażujące doświadczenie dla użytkownika.</p>
                  <div className="mt-3">
                    <span className="badge bg-primary me-1">React</span>
                    <span className="badge bg-dark me-1">Vite</span>
                    <span className="badge bg-info text-dark">Bootstrap 5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* --- STOPKA --- */}
      <footer className="bg-dark text-white py-5 mt-5">
        <div className="container text-center">
          <h3 className="fw-bold mb-3">Zbudujmy coś niesamowitego</h3>
          <p className="text-secondary mb-4">Kod to poezja, a serwery to nasze płótno. Dziękuję za odwiedziny.</p>
          <div className="d-flex justify-content-center gap-3">
            <button className="btn btn-outline-light px-4 py-2">Skontaktuj się ze mną</button>
            <button className="btn btn-primary px-4 py-2">Pobierz CV</button>
          </div>
          <hr className="my-4 border-secondary" />
          <p className="small text-muted mb-0">
            &copy; 2026 Wszelkie prawa zastrzeżone. Strona wygenerowana w ułamku sekundy przez najszybsze narzędzia webowe.
          </p>
        </div>
      </footer>

    </div>
  );
}

export default App;