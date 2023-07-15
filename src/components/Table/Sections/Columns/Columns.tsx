import { Chip } from '../../Chip';
import { Fragment } from '../../../Fragment';

import { shouldRenderChip, findChipIcon } from '../../../../helpers';
import { ACTION_TYPES } from '../../../../constants';
import { ISectionProps } from '../../../../types';

export const Columns = ({ onBetCatcherHover, bets }: ISectionProps) => {
  return (
    <Fragment>
      <div
        className="column-item"
        onMouseEnter={onBetCatcherHover}
        onMouseLeave={onBetCatcherHover}
        data-action={ACTION_TYPES['1ST_COLUMN']}
        data-bet={ACTION_TYPES['1ST_COLUMN']}
        data-highlight={ACTION_TYPES['1ST_COLUMN']}
      >
        <div className="value">1st</div>
        {shouldRenderChip(ACTION_TYPES['1ST_COLUMN'], bets) && (
          <Chip
            position="center"
            icon={findChipIcon(ACTION_TYPES['1ST_COLUMN'], bets)}
          />
        )}
      </div>
      <div
        className="column-item"
        onMouseEnter={onBetCatcherHover}
        onMouseLeave={onBetCatcherHover}
        data-action={ACTION_TYPES['2ND_COLUMN']}
        data-bet={ACTION_TYPES['2ND_COLUMN']}
        data-highlight={ACTION_TYPES['2ND_COLUMN']}
      >
        <div className="value">2nd</div>
        {shouldRenderChip(ACTION_TYPES['2ND_COLUMN'], bets) && (
          <Chip
            position="center"
            icon={findChipIcon(ACTION_TYPES['2ND_COLUMN'], bets)}
          />
        )}
      </div>
      <div
        className="column-item"
        onMouseEnter={onBetCatcherHover}
        onMouseLeave={onBetCatcherHover}
        data-action={ACTION_TYPES['3RD_COLUMN']}
        data-bet={ACTION_TYPES['3RD_COLUMN']}
        data-highlight={ACTION_TYPES['3RD_COLUMN']}
      >
        <div className="value">3rd</div>
        {shouldRenderChip(ACTION_TYPES['3RD_COLUMN'], bets) && (
          <Chip
            position="center"
            icon={findChipIcon(ACTION_TYPES['3RD_COLUMN'], bets)}
          />
        )}
      </div>
    </Fragment>
  );
};
