import { IOnBetParams, Table } from './components/Table';
import { Wheel } from './components/Wheel';

import { Type } from './types';

import './example/styles.css';

declare const window: Window &
  typeof globalThis & {
    RouletteTable: typeof Table;
    RouletteWheel: typeof Wheel;
  };

window.RouletteTable = Table;
window.RouletteWheel = Wheel;

// Options
const typeSelect = document.getElementById('type');

const bets: { [key: string]: { icon: string } } = {};

if (typeSelect === null) {
  throw new Error('Type select is undefined')
}

const getType = () => (typeSelect as HTMLSelectElement).value as Type;

const cleanBets = () => {
  Object.keys(bets).forEach((key) => {
    delete bets[key];
  });
}

const type = getType();

typeSelect.addEventListener('change', () => {
  const newType = getType();

  cleanBets();

  table.changeType(newType);
  wheel.changeType(newType);
});

// Test wheel
const spinButton = document.getElementById('wheel-button');

const wheel = new window.RouletteWheel({
  id: 'roulette-wheel',
  type,
});

spinButton?.addEventListener('click', () => {
  wheel.doSpin('0');
});

// Test table

const handleBet = (bet: IOnBetParams) => {
  console.log(bet);
  
  bets[bet.id] = { icon: 'https://cdn-icons-png.flaticon.com/512/10095/10095709.png' };

  table.render();
};

const table = new window.RouletteTable({
  id: 'roulette-table',
  type,
  bets,
  onBet: handleBet,
});
