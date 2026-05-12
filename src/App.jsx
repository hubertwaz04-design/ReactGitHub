import './App.css';
import SnakeMenu from './components/SnakeMenu';

function App() {
  return (
    <div className="bg-light" style={{ minHeight: '100vh', fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif" }}>
      
      {/* Dodano id="strona-glowna" */}
      <header id="strona-glowna" className="bg-dark text-white text-center py-5 shadow">
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
        
        <section className="mb-5 row justify-content-center">
          <div className="col-lg-8">
            <div className="text-center mb-4">
              <h2 className="fw-bold">Nawigacja Inna Niż Wszystkie</h2>
              <p className="text-muted">Użyj strzałek na klawiaturze, aby najechać na zakładkę. Strona sama cię tam przeniesie!</p>
            </div>
            <div className="shadow-lg rounded overflow-hidden">
              <SnakeMenu />
            </div>
          </div>
        </section>

        <hr className="my-5" />

        {/* Dodano id="o-mnie" */}
        <section id="o-mnie" className="mb-5 pt-4">
          <h2 className="display-5 fw-bold mb-4 border-bottom pb-2">Moja Filozofia Tworzenia</h2>
          <div className="row g-5">
            <div className="col-md-6">
              <h4 className="fw-bold text-primary">Architektura ponad rzemiosło</h4>
              <p style={{ textAlign: 'justify', lineHeight: '1.8' }}>
                Programowanie to dla mnie coś więcej niż tylko pisanie instrukcji dla maszyny. 
                Traktuję kod jak nowoczesną formę architektury. Każdy komponent Reacta, każda funkcja 
                JavaScriptu i każdy układ CSS to fundamenty, na których budujemy cyfrowe budynki.
              </p>
            </div>
            <div className="col-md-6">
              <h4 className="fw-bold text-success">Użytkownik w centrum uwagi (UX)</h4>
              <p style={{ textAlign: 'justify', lineHeight: '1.8' }}>
                Nawet najbardziej wyrafinowany algorytm jest bezużyteczny, jeśli interfejs, z którym 
                styka się użytkownik końcowy, jest toporny, nieintuicyjny lub wolny. Projektując aplikacje, 
                zawsze wcielam się w rolę osoby, która po raz pierwszy widzi dany ekran.
              </p>
            </div>
          </div>
        </section>

        {/* Dodano id="artykuly" */}
        <section id="artykuly" className="mb-5 bg-white p-5 shadow-sm rounded pt-4">
          <h2 className="fw-bold mb-4">Dziennik Inżyniera: Moje Przemyślenia</h2>
          <article className="mb-5">
            <h3 className="h4 text-dark">Przyszłość front-endu w erze Sztucznej Inteligencji</h3>
            <p className="text-muted small">Opublikowano: 12 maja 2026 | Czas czytania: 5 min</p>
            <p style={{ textAlign: 'justify', lineHeight: '1.8' }}>
              Żyjemy w fascynujących czasach. Narzędzia takie jak AI drastycznie zmieniają sposób, w jaki piszemy kod. 
              Prawdziwą wartością programisty staje się umiejętność logicznego myślenia, łączenia 
              różnych technologii w jedną, spójną całość oraz dogłębne zrozumienie biznesu.
            </p>
          </article>
        </section>

        {/* Dodano id="projekty" */}
        <section id="projekty" className="mb-5 pt-4">
          <h2 className="display-5 fw-bold mb-4 text-center">Moje Flagowe Projekty</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-header bg-dark text-white text-center py-4">
                  <h5 className="mb-0">E-Commerce Platform</h5>
                </div>
                <div className="card-body">
                  <p className="card-text">W pełni funkcjonalny sklep internetowy z systemem płatności, koszykiem i panelem administratora.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-header bg-success text-white text-center py-4">
                  <h5 className="mb-0">Task Manager Pro</h5>
                </div>
                <div className="card-body">
                  <p className="card-text">Aplikacja do zarządzania czasem i zadaniami. Wykorzystuje zaawansowane metody Drag & Drop.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-header bg-primary text-white text-center py-4">
                  <h5 className="mb-0">Interactive Portfolio</h5>
                </div>
                <div className="card-body">
                  <p className="card-text">Strona, którą właśnie przeglądasz! Udowadnia, że React potrafi tworzyć angażujące aplikacje.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer className="bg-dark text-white py-5 mt-5">
        <div className="container text-center">
          <h3 className="fw-bold mb-3">Zbudujmy coś niesamowitego</h3>
          <p className="small text-muted mb-0">&copy; 2026 Wszelkie prawa zastrzeżone.</p>
        </div>
      </footer>

    </div>
  );
}

export default App;