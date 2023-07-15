import { ITableProps } from '../components/Table';

export type Type = 'American' | 'European';

export interface ISectionProps {
  onBetCatcherHover: (
    event: any /*React.MouseEvent<HTMLDivElement>*/
  ) => void;
  bets: ITableProps['bets'];
  type: Type;
}
