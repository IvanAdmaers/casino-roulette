import { getWheelNumbers } from '../../helpers/getWheelNumbers';

import { Type } from '../../types';

import './Wheel.css';

export interface IWheelProps {
  id: string;
  type: Type;
}

export class Wheel {
  private element: HTMLElement;
  private rouletteContainer: HTMLElement | null;
  private rouletteContainerClass: string;
  private type: Type;
  private wheelNumbers: string[];

  constructor({ id, type }: IWheelProps) {
    const element = document.getElementById(id);

    if (element === null) {
      throw new Error('Wheel id is incorrect');
    }

    this.element = element;
    this.type = type;
    this.wheelNumbers = getWheelNumbers(this.type);
    this.rouletteContainer = null;
    this.rouletteContainerClass = 'roulette-wheel-container';

    this.render();
  }

  public doSpin = (bet: string, onSpinningEnd?: () => void) => {
    if (this.rouletteContainer === null) {
      throw new Error('Roulette container is null');
    }

    const rouletteInner = this.rouletteContainer.querySelector('[data-role="inner"]')

    if (rouletteInner === null) {
      throw new Error('Could not find roulette inner')
    }

    rouletteInner.classList.remove('rest');
    rouletteInner.removeAttribute('data-spintoindex');

    const betIndex = this.wheelNumbers.indexOf(bet);
    
    setTimeout(() => {
      rouletteInner.setAttribute('data-spintoindex', `${betIndex}`);

      setTimeout(() => {
        rouletteInner.classList.add('rest');
        onSpinningEnd?.();
      }, 9000);
    }, 100);
  }

  private renderWheel() {
    return (
      <div className={`${this.rouletteContainerClass} ${this.type}`}>
      <div
        className="roulette-wheel-plate with-animation"
      >
        <ul data-role="inner" className="roulette-wheel-inner">
          {this.wheelNumbers.map((number, index) => (
            <li
              key={`wheel-${number}`}
              data-index={index}
              data-bet={number}
              className="roulette-wheel-bet-number"
            >
              <label htmlFor={`wheel-pit-${number}`}>
                <input
                  type="radio"
                  name="pit"
                  id={`wheel-pit-${number}`}
                  defaultValue={number}
                />
                <span className="roulette-wheel-pit">{number}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
    );
  }
  
  public changeType(type: Type) {
    this.type = type;
    this.wheelNumbers = getWheelNumbers(this.type);

    this.render();

    this.rouletteContainer = document.querySelector(`.${this.rouletteContainerClass}`);
  }

  public render() {
    this.element.textContent = '';
    this.element.appendChild(this.renderWheel() as any);

    if (this.rouletteContainer === null) {
      this.rouletteContainer = document.querySelector(`.${this.rouletteContainerClass}`);
    }
  }
}
