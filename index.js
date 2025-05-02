const level_e1 = [
    ['e', 'l_m_d', 'e', 'e', 'o'],
    ['e', 'e', 'e', 'b_u_d', 'o'],
    ['b_u_d', 'e', 'u_m_l', 'e', 'e'],
    ['e', 'e', 'e', 'o', 'e'], 
    ['e', 'e', 'u_m_r', 'e', 'e'] 
  ];
const level_e2 = [
    ['o', 'e', 'b_l_r', 'e', 'e'],
    ['e', 'u_m_l', 'e', 'e', 'u_m_l'],
    ['b_u_d', 'o', 'u_m_r', 'e', 'e'],
    ['e', 'e', 'e', 'o', 'e'], 
    ['e', 'e', 'e', 'e', 'e']
  ];
const level_e3 = [
    ['e', 'e', 'b_l_r', 'e', 'e'],
    ['e', 'e', 'e', 'e', 'b_u_d'], 
    ['e', 'u_m_l', 'b_u_d', 'e', 'e'], 
    ['e', 'o', 'e', 'e', 'e'], 
    ['e', 'b_l_r', 'e', 'e', 'u_m_l']
  ];
const level_e4 = [
    ['e', 'e', 'e', 'b_l_r', 'e'],
    ['e', 'e', 'e', 'e', 'e'], 
    ['b_u_d', 'e', 'l_m_d', 'e', 'l_m_d'],
    ['e', 'e', 'e', 'e', 'e'],
    ['e', 'e', 'o', 'u_m_r', 'e']
  ];
const level_e5 = [
    ['e', 'e', 'b_l_r', 'e', 'e'],
    ['e', 'd_m_r', 'e', 'e', 'e'],
    ['b_u_d', 'e', 'e', 'u_m_r', 'e'],
    ['e', 'e', 'b_u_d', 'o', 'e'],
    ['e', 'u_m_l', 'e', 'e', 'e']
  ];


const level_d1 = [
    ['e', 'l_m_d', 'o', 'o', 'e', 'b_l_r', 'e'],
    ['b_u_d', 'e', 'e', 'e', 'e', 'e', 'e'],
    ['e', 'e', 'b_u_d', 'e', 'e', 'e', 'e'],
    ['e', 'e', 'e', 'u_m_r', 'e', 'e', 'e'], 
    ['u_m_r', 'e', 'l_m_d', 'e', 'b_l_r', 'e', 'o'],
    ['e', 'e', 'e', 'e', 'e', 'e', 'e'],
    ['e', 'e', 'e', 'b_l_r', 'e', 'e', 'e'],
  ];
const level_d2 = [
    ['e', 'e', 'o', 'e', 'e', 'e', 'e'],
    ['b_u_d', 'e', 'b_l_r', 'e', 'e', 'u_m_l', 'e'],
    ['e', 'e', 'b_l_r', 'e', 'e', 'e', 'b_u_d'],
    ['d_m_r', 'e', 'e', 'e', 'e', 'e', 'e'],
    ['e', 'o', 'l_m_d', 'e', 'e', 'e', 'e'],
    ['e', 'd_m_r', 'e', 'e', 'e', 'e', 'e'],
    ['e', 'e', 'o', 'e', 'e', 'e', 'e'],
  ];
const level_d3 = [
    ['e', 'e', 'b_l_r', 'e', 'e', 'e', 'e'],
    ['e', 'e', 'e', 'e', 'e', 'e', 'b_u_d'],
    ['o', 'e', 'u_m_r', 'e', 'e', 'e', 'e'],
    ['e', 'e', 'e', 'e', 'e', 'e', 'e'],
    ['e', 'o', 'u_m_r', 'e', 'b_l_r', 'e', 'e'],
    ['b_u_d', 'e', 'e', 'e', 'e', 'l_m_d', 'e'],
    ['e', 'e', 'o', 'u_m_r', 'e', 'e', 'e'],
  ];
const level_d4 = [
    ['e', 'e', 'e', 'e', 'e', 'e', 'e'],
    ['e', 'e', 'e', 'b_u_d', 'e', 'u_m_l', 'e'],
    ['e', 'e', 'u_m_r', 'e', 'e', 'e', 'e'],
    ['e', 'b_l_r', 'e', 'o', 'e', 'b_l_r', 'e'],
    ['e', 'e', 'u_m_l', 'e', 'l_m_d', 'e', 'e'],
    ['b_u_d', 'e', 'e', 'e', 'e', 'u_m_r', 'e'],
    ['e', 'e', 'e', 'e', 'e', 'e', 'e'],
  ];
const level_d5 = [
    ['e', 'e', 'e', 'e', 'e', 'e', 'e'],
    ['e', 'e', 'e', 'e', 'e', 'd_m_r', 'e'],
    ['e', 'e', 'b_l_r', 'b_l_r', 'e', 'l_m_d', 'e'],
    ['e', 'e', 'e', 'e', 'e', 'e', 'e'],
    ['e', 'e', 'd_m_r', 'e', 'o', 'e', 'e'],
    ['e', 'u_m_l', 'e', 'b_u_d', 'e', 'e', 'e'],
    ['e', 'e', 'e', 'e', 'e', 'e', 'e'],
  ];

const easyMaps = [
    { src: 'pics/levels/easy/level_e1.png', map: level_e1 },
    { src: 'pics/levels/easy/level_e2.png', map: level_e2 },
    { src: 'pics/levels/easy/level_e3.png', map: level_e3 },
    { src: 'pics/levels/easy/level_e4.png', map: level_e4 },
    { src: 'pics/levels/easy/level_e5.png', map: level_e5 },
];

const hardMaps = [
    { src: 'pics/levels/hard/level_d1.png', map: level_d1 },
    { src: 'pics/levels/hard/level_d2.png', map: level_d2 },
    { src: 'pics/levels/hard/level_d3.png', map: level_d3 },
    { src: 'pics/levels/hard/level_d4.png', map: level_d4 },
    { src: 'pics/levels/hard/level_d5.png', map: level_d5 },
];


let Map = []

  
let timerInterval;
let selectedDifficulty = '';
let gridSize = 5;
  
const tiles = {
    'e': 'pics/tiles/empty.png',
    'b': 'pics/tiles/bridge.png',
    'o': 'pics/tiles/oasis.png',
    'm': 'pics/tiles/mountain.png',
    'r': 'pics/tiles/straight_rail.png',
    'c': 'pics/tiles/curve_rail.png',
    'b_r': 'pics/tiles/bridge_rail.png',
    'm_r': 'pics/tiles/mountain_rail.png',
};
  
const mountainRotations = {
    'd_m_r': 0,
    'l_m_d': 90,
    'u_m_l': 180,
    'u_m_r': 270
};

const bridgeRotations = {
    'b_u_d': 0,
    'b_l_r': 90,
};
  
  
function startGame() {
  const playerName = document.querySelector('#player-name').value;  
    if (!playerName) {
      return;
    }
  
    if (!selectedDifficulty) {
      return;
    }
  
    document.querySelector('#menu').classList.add('hidden');
    document.querySelector('#game').classList.remove('hidden');

  
    document.querySelector('#player-display').textContent = playerName;
  
    gridSize = selectedDifficulty === 'easy' ? 5 : 7;
    startTimer();
    loadGameBackground(selectedDifficulty);
    createGrid();
  }
  
  function loadGameBackground(difficulty) { 
    let maps;
    if (difficulty === 'easy') {
        maps = easyMaps;
    } else {
        maps = hardMaps;
    }

    const randomIndex = Math.floor(Math.random() * maps.length);
    const selectedMap = maps[randomIndex];

    Map = selectedMap.map;
  }
  
function setDifficulty(level) {
    selectedDifficulty = level;
    const difficultyButtons = document.querySelectorAll('.difficulty-btn');
    difficultyButtons.forEach(button => button.classList.remove('selected'));
    document.querySelector(`#${level}`).classList.add('selected');
}
  
function createGrid() {
    const elem = document.querySelector('#overlay-grid');
    elem.innerHTML = '';
    elem.style.gridTemplateColumns = `repeat(${Map[0].length}, 1fr)`;
  
    for (let row = 0; row < Map.length; row++) {
      for (let col = 0; col < Map[row].length; col++) {
        const cell = document.createElement('div');
        cell.classList.add('grid-cell');
        const tileType = Map[row][col];
        let tileImage = tiles['e'];
  
        if (tileType.includes('m')) {
          tileImage = tiles['m'];
          const rotation = mountainRotations[tileType];
          cell.innerHTML = `<img src="${tileImage}" alt="mountain" style="transform: rotate(${rotation}deg);">`;
        } else if (tileType.includes('b')) {
          tileImage = tiles['b'];
          const rotation = bridgeRotations[tileType];
          cell.innerHTML = `<img src="${tileImage}" alt="bridge" style="transform: rotate(${rotation}deg);">`;
        } else{ 
          tileImage = tiles[tileType];
          cell.innerHTML = `<img src="${tileImage}" alt="${tileType}">`;
        }
        cell.addEventListener('click', () => placeRail(row, col, cell));
        elem.appendChild(cell);
      }
    }
  }

  function placeRail(row, col, cell) {
    const tileType = Map[row][col];
    if (tileType === 'e') {
        let currentRotation = 0;
        
        if (Map[row][col] === 'e') {
            currentRotation = 0;  
        }
        Map[row][col] = 'l_c_d';

        const img = cell.querySelector('img');
        if (img) {
            const transform = img.style.transform;
            const match = transform.match(/rotate\((\d+)deg\)/);
            currentRotation = match ? parseInt(match[1], 10) : 0;
            currentRotation = (currentRotation + 90) % 360;
        }

        cell.innerHTML = `<img src="${tiles['c']}" alt="curve rail" style="transform: rotate(${currentRotation}deg);">`;

    } 
    else if (tileType.includes('str') || tileType.includes('c')) {
        let currentRotation = 0;
        let railType = 'l_c_d';
        const img = cell.querySelector('img');
        const transform = img.style.transform;
        const match = transform.match(/rotate\((\d+)deg\)/);
        currentRotation = match ? parseInt(match[1], 10) : 0;
        if (Map[row][col] === 'str_u_d' || Map[row][col] === 'str_l_r') {
          let newRotation = (currentRotation + 90) % 360;
          if (newRotation === 0) {
              railType = 'l_c_d';
          } else if (newRotation === 90) {
              railType = 'u_c_l';
          } else if (newRotation === 180) {
              railType = 'u_c_r';
          } else if (newRotation === 270) {
              railType = 'd_c_r';
          }
      } else if (Map[row][col] === 'l_c_d' || Map[row][col] === 'u_c_l' || Map[row][col] === 'u_c_r' || Map[row][col] === 'd_c_r') {
        if (currentRotation === 0 || currentRotation === 180){
          railType = 'str_u_d'
        }
        else if (currentRotation === 90 || currentRotation === 270){
          railType = 'str_l_r'
        }
        currentRotation = (currentRotation + 90) % 360;
    }
      
      Map[row][col] = railType;
      if (railType.includes('c'))
      {
        cell.innerHTML = `<img src="${tiles['c']}" alt="${railType} rail" style="transform: rotate(${currentRotation}deg);">`;
      }
      else {
        cell.innerHTML = `<img src="${tiles['r']}" alt="${railType} rail" style="transform: rotate(${currentRotation}deg);">`;
      }
    }
    
    else if (tileType === 'b_u_d' || tileType === 'b_l_r') {
        let rotation = 0;

        if (tileType === 'b_l_r') {
            rotation = 90;
        }

        Map[row][col] = 'b_r';
        cell.innerHTML = `<img src="${tiles['b_r']}" alt="bridge rail" style="transform: rotate(${rotation}deg);">`;
    } 
    else if (tileType.includes('m')) {
        if (Map[row][col] === 'm_r') {
            return;
        }
        let rotation = 0;
        if (tileType === 'l_m_d') {
            rotation = 90;
        } else if (tileType === 'u_m_l') {
            rotation = 180;
        } else if (tileType === 'u_m_r') {
            rotation = 270;
        }
        Map[row][col] = 'm_r';
        cell.innerHTML = `<img src="${tiles['m_r']}" alt="mountain rail" style="transform: rotate(${rotation}deg);">`;
    } 
}

function startTimer() {
  let seconds = 0;
  timerInterval = setInterval(() => {
    seconds++;
    document.querySelector('#timer').textContent = formatTime(seconds);
  }, 1000);
}
  
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}
  
function goToMenu() {
  clearInterval(timerInterval);
  document.querySelector('#game').classList.add('hidden');
  document.querySelector('#menu').classList.remove('hidden');
  document.querySelector('#end-screen').classList.add('hidden');
}
  
function showDescription() {
  document.querySelector('#description-popup').classList.remove('hidden');
}
  
function closeDescription() {
  document.querySelector('#description-popup').classList.add('hidden');
}
  
function stopGame() {
  stopTimer();
  document.querySelector('#end-screen').classList.remove('hidden');
  const totalTime = document.querySelector('#timer').textContent;
  document.querySelector('#completion-time').textContent = `You Completed This Task in ${totalTime}!`;
}

function stopTimer() {
  clearInterval(timerInterval);
}

function checkValid()
{
  //Here I just check the corners, that it should not go out of bounds.
  for (i = 0; i < gridSize; ++i)
  {
    for (j = 0; j < gridSize; ++j)
    {
      if (i === 0)
      {
        if (Map[0][j].includes('c'))
          {
            if (Map[0][0] === 'l_c_d') return false;
            if (Map[0][j] === 'u_c_l' || Map[0][j] === 'u_c_r') return false;
            if (Map[0][gridSize-1] === 'd_c_r') return false;
          }
        else if (Map[0][j].includes('str'))
        {
          if (Map[i][j] === 'str_u_d') return false;
          if (Map[0][0] === 'str_l_r' || Map[0][gridSize - 1] === 'str_l_r') return false;
        }
      }
      else if (j === 0)
      {
        if (Map[i][0].includes('c'))
          {
            if (Map[i][0] === 'u_c_l' || Map[i][0] === 'l_c_d') return false;
            if (Map[gridSize-1][0] === 'd_c_r') return false;
          }
          else if (Map[i][j].includes('str'))
            {
              if (Map[gridSize - 1][0] === 'str_u_d') return false;
              if (Map[i][j] === 'str_l_r') return false;
            }
      }
      else if (i === gridSize - 1)
        {
          if (Map[i][j].includes('c'))
            {
              if (Map[i][j] === 'd_c_r' || Map[i][j] === 'l_c_d') return false;
              if (Map[i][i] === 'u_c_r') return false;
            }
          else if (Map[i][j].includes('str'))
              {
                if (Map[gridSize - 1][gridSize - 1] === 'str_l_r') return false;
                if (Map[i][j] === 'str_u_d') return false;
              }
        }
        else if (j === gridSize - 1)
        {
          if (Map[i][j].includes('c'))
            {
              if (Map[i][j] === 'u_c_r' || Map[i][j] === 'l_c_d') return false;
            }
          else if (Map[i][j].includes('str'))
              {
                if (Map[i][j] === 'str_l_r') return false;
              }
        }
    }
  }
}
