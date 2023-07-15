import { ZeroBets } from './Sections/ZeroBets';
import { NumberBets } from './Sections/NumberBets';
import { Columns } from './Sections/Columns';
import { Dozens } from './Sections/Dozens';
import { BottomBets } from './Sections/BottomBets';

import { ACTION_TYPES } from '../../constants';

import { hasOwn } from '../../utills';

import config from '../../config/table.json';

import { Type } from '../../types';

import './Table.css';

export interface IOnBetParams {
  bet: keyof typeof ACTION_TYPES;
  payload: string[];
  id: string;
}

export type BetType = {
  icon?: string;
};

export interface ITableProps {
  id: string;
  type: Type;
  onBet: (params: IOnBetParams) => void;
  bets: { [key: string]: BetType };
  isDebug?: boolean;
}

class Table {
  private element: HTMLElement;
  private type: Type;
  private bets: ITableProps['bets'];
  private onBet: ITableProps['onBet'];

  constructor({ id, type, bets, onBet }: ITableProps) {
    const element = document.getElementById(id);

    if (element === null) {
      throw new Error('Table id is incorrect');
    }

    this.element = element;
    this.type = type;
    this.bets = bets;
    this.onBet = onBet;

    this.render();

    this.element.addEventListener('click', this.tableListener);
  }

  private tableListener = (event: Event) => {
    const highlightElement = (event.target as HTMLDivElement)?.closest(
      '[data-highlight]'
    );
    const highlightData = (highlightElement as HTMLDivElement)?.dataset
      ?.highlight;

    const betElement = (event.target as HTMLDivElement)?.closest('[data-bet]');
    const betData = (betElement as HTMLDivElement)?.dataset?.bet;

    const action = ((highlightElement ?? betElement) as HTMLDivElement)?.dataset
      ?.action;

    if (
      (highlightData === undefined || highlightData === '') &&
      (betData === undefined || betData === '')
    ) {
      console.error('No data in [data-bet] or [data-highlight]');
      return;
    }

    if (action === undefined || action === '') {
      console.error('Action is undefined');
      return;
    }

    const isActionSupported = Object.keys(ACTION_TYPES).includes(action);

    if (isActionSupported === false) {
      console.error('Unsupported action', action);
      return;
    }

    /* Checks are done */

    const payloadData = (highlightData ?? betData) as string;

    const getPayload = () => {
      const firstId = payloadData.split('-')[0];

      const isPayloadInConfig = hasOwn(config, firstId);

      if (isPayloadInConfig === true) {
        return config[firstId as keyof typeof config].map((item) => `${item}`);
      }

      return payloadData.split('-').map((item) => item);
    };

    const payload = getPayload();

    this.onBet({
      bet: action as keyof typeof ACTION_TYPES,
      payload,
      id: payloadData,
    });
  };

  private doHighlight(betId: string) {
    const hoverClass = 'item-hover';

    const element = this.element.querySelector(`[data-bet="${betId}"]`);

    element?.classList?.toggle(hoverClass);
  }

  private handleBetCatcherHover = (event: Event) => {
    const highlightData = (event.currentTarget as HTMLDivElement).dataset
      .highlight;
    const toHighlight = highlightData?.split('-');

    const firstHighlight = toHighlight?.[0];

    if (firstHighlight === undefined) {
      return;
    }

    const isFromConfig = Object.keys(config).includes(firstHighlight);

    if (isFromConfig === true) {
      this.doHighlight(firstHighlight);

      if (config[firstHighlight as keyof typeof config] === undefined) {
        console.error('Config does not contain the key', firstHighlight);
        return;
      }

      config[firstHighlight as keyof typeof config].forEach((bet) =>
        this.doHighlight(`${bet}`)
      );

      return;
    }

    toHighlight?.forEach((element) => {
      this.doHighlight(element);
    });
  };

  private renderTable() {
    return (
      <div className="roulette-table-container no-debug">
        <section className="roulette-table-container-first">
          <ZeroBets
            type={this.type}
            onBetCatcherHover={this.handleBetCatcherHover}
            bets={this.bets}
          />
          <NumberBets
            type={this.type}
            onBetCatcherHover={this.handleBetCatcherHover}
            bets={this.bets}
          />
          <Columns
            type={this.type}
            onBetCatcherHover={this.handleBetCatcherHover}
            bets={this.bets}
          />
        </section>
        <section className="roulette-table-container-second">
          <Dozens
            type={this.type}
            onBetCatcherHover={this.handleBetCatcherHover}
            bets={this.bets}
          />
        </section>
        <div className="roulette-table-container-third">
          <BottomBets
            type={this.type}
            onBetCatcherHover={this.handleBetCatcherHover}
            bets={this.bets}
          />
        </div>
      </div>
    );
  }

  public render() {
    this.element.textContent = '';
    this.element.appendChild(this.renderTable() as any);
  }

  public changeType(type: Type) {
    this.type = type;

    this.render();
  }
}

export { Table };
