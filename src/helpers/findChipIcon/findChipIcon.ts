import type { IRouletteTableProps } from '../../components/Table';

export const findChipIcon = (id: string, bets: IRouletteTableProps['bets']) =>
  bets[id]?.icon;
