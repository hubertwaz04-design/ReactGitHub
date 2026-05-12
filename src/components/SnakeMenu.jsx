import { useState, useEffect } from 'react';

const GRID_SIZE = 20; 
const CELL_SIZE = 25; 

const SnakeMenu = () => {
  const [snake, setSnake] = useState([{ x: 10, y: 10 }, { x: 10, y: 11 }]);
  const [dir, setDir] = useState({ x: 0, y: -1 }); 
  const [menuItems, setMenuItems] = useState([]);
  const [activePage, setActivePage] = useState('Brak');
  // NOWOŚĆ: Stan przechowujący informację, czy wąż ma pauzę
  const [isPaused, setIsPaused] = useState(false); 

  useEffect(() => {
    const pages = [
      { id: 1, name: 'Główna', color: '#ff4757', targetId: 'strona-glowna' },
      { id: 2, name: 'O mnie', color: '#2ed573', targetId: 'o-mnie' },
      { id: 3, name: 'Artykuły', color: '#feca57', targetId: 'artykuly' },
      { id: 4, name: 'Projekty', color: '#1e90ff', targetId: 'projekty' },
    ];
    
    const placedItems = pages.map(page => ({
      ...page,
      x: Math.floor(Math.random() * (GRID_SIZE - 2)) + 1,
      y: Math.floor(Math.random() * (GRID_SIZE - 2)) + 1,
    }));
    setMenuItems(placedItems);
  }, []);

  // Sterowanie strzałkami
  useEffect(() => {
    const handleKeyDown = (e) => {
      if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
        
        // NOWOŚĆ: Naciśnięcie dowolnej strzałki zdejmuje pauzę!
        if (isPaused) {
          setIsPaused(false);
        }

        setDir(prevDir => {
          switch(e.key) {
            case 'ArrowUp': return prevDir.y === 1 ? prevDir : { x: 0, y: -1 };
            case 'ArrowDown': return prevDir.y === -1 ? prevDir : { x: 0, y: 1 };
            case 'ArrowLeft': return prevDir.x === 1 ? prevDir : { x: -1, y: 0 };
            case 'ArrowRight': return prevDir.x === -1 ? prevDir : { x: 1, y: 0 };
            default: return prevDir;
          }
        });
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPaused]); // Dodaliśmy isPaused do nasłuchiwacza

  // Ruch węża
  useEffect(() => {
    // NOWOŚĆ: Jeśli wąż jest zapauzowany, całkowicie zatrzymaj tę funkcję
    if (isPaused) return;

    const moveSnake = setInterval(() => {
      setSnake(prevSnake => {
        const head = prevSnake[0];
        let newX = head.x + dir.x;
        let newY = head.y + dir.y;

        if (newX < 0) newX = GRID_SIZE - 1;
        if (newX >= GRID_SIZE) newX = 0;
        if (newY < 0) newY = GRID_SIZE - 1;
        if (newY >= GRID_SIZE) newY = 0;

        const hitItem = menuItems.find(item => item.x === newX && item.y === newY);
        
        if (hitItem) {
          setActivePage(hitItem.name); 
          
          // NOWOŚĆ: Włączamy pauzę w momencie kolizji!
          setIsPaused(true);
          
          const section = document.getElementById(hitItem.targetId);
          if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }

        return [{ x: newX, y: newY }, ...prevSnake.slice(0, prevSnake.length - 1)];
      });
    }, 150); 
    
    return () => clearInterval(moveSnake);
  }, [dir, menuItems, isPaused]); // Dodaliśmy isPaused do zależności

  return (
    <div className="card p-3 m-3" style={{ backgroundColor: '#2f3542', color: 'white' }}>
      <div className="mx-auto bg-dark border border-secondary" style={{ position: 'relative', width: GRID_SIZE * CELL_SIZE, height: GRID_SIZE * CELL_SIZE, overflow: 'hidden' }}>
        {menuItems.map(item => (
          <div key={item.id} style={{ position: 'absolute', left: item.x * CELL_SIZE, top: item.y * CELL_SIZE, width: CELL_SIZE, height: CELL_SIZE, backgroundColor: item.color, borderRadius: '50%' }}>
            <span style={{ position: 'absolute', top: -20, fontSize: '11px', fontWeight: 'bold', color: item.color, whiteSpace: 'nowrap' }}>{item.name}</span>
          </div>
        ))}
        {snake.map((seg, i) => (
          <div key={i} style={{ position: 'absolute', left: seg.x * CELL_SIZE, top: seg.y * CELL_SIZE, width: CELL_SIZE, height: CELL_SIZE, backgroundColor: i === 0 ? '#7bed9f' : '#2ed573' }} />
        ))}
      </div>
      <div className="mt-4 text-center" style={{ minHeight: '80px' }}>
        <h5 className="text-secondary mb-1">Ostatnio odwiedzona sekcja:</h5>
        <h3 className="text-warning fw-bold mb-2">{activePage}</h3>
        {/* NOWOŚĆ: Wyświetlamy informację o pauzie */}
        {isPaused && (
          <span className="badge bg-danger p-2 fs-6 animate__animated animate__pulse animate__infinite">
            PAUZA - Wciśnij dowolną strzałkę, aby odblokować węża
          </span>
        )}
      </div>
    </div>
  );
};

export default SnakeMenu;