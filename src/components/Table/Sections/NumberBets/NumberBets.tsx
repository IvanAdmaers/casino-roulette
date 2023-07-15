import { Chip } from '../../Chip';
import { Fragment } from '../../../Fragment';

import config from '../../../../config/table.json';
import {
  shouldRenderBottomCatcher,
  shouldRenderChip,
  shouldRenderCornerBetCatcher,
  shouldRenderRightCatcher,
  shouldRenderSixLineBetCatcher,
  shouldRenderTopCatcher,
  shouldRenderTopRightDoubleStreetCatcher,
  shouldRenderTopStreetCatcher,
  findChipIcon,
} from '../../../../helpers';
import { ACTION_TYPES } from '../../../../constants';
import { ISectionProps } from '../../../../types';

export const NumberBets = ({ onBetCatcherHover, bets, type }: ISectionProps) => {
  return (
    <Fragment>
      {Array.from({ length: 36 }, (_, i) => i + 1).map((number) => (
        <div
          key={number}
          data-action={ACTION_TYPES.STRAIGHT_UP}
          data-bet={`${number}`}
          className={`${
            config.RED.includes(number) ? 'red-item' : 'black-item'
          }`}
        >
          {/* start chip */}
          {shouldRenderCornerBetCatcher(number) && (
            <Fragment>
              <div
                className="corner-bet-catcher"
                onMouseEnter={onBetCatcherHover}
                onMouseLeave={onBetCatcherHover}
                data-action={ACTION_TYPES.CORNER}
                data-highlight={`${number}-${number + 1}-${number + 3}-${
                  number + 4
                }`}
              />
              {shouldRenderChip(
                `${number}-${number + 1}-${number + 3}-${number + 4}`,
                bets
              ) === true && (
                <Chip
                  position="right-top"
                  icon={findChipIcon(
                    `${number}-${number + 1}-${number + 3}-${number + 4}`,
                    bets
                  )}
                />
              )}
            </Fragment>
          )}
          {/* end chip */}
          {/* start chip */}
          {shouldRenderTopRightDoubleStreetCatcher(number) && (
            <Fragment>
              <div
                className="double-street-catcher-top-right"
                onMouseEnter={onBetCatcherHover}
                onMouseLeave={onBetCatcherHover}
                data-action={ACTION_TYPES.DOUBLE_STREET}
                data-highlight={`${number}-${number - 1}-${number - 2}-${
                  number + 3
                }-${number + 2}-${number + 1}`}
              />
              {shouldRenderChip(
                `${number}-${number - 1}-${number - 2}-${number + 3}-${
                  number + 2
                }-${number + 1}`,
                bets
              ) === true && (
                <Chip
                  position="right-top"
                  icon={findChipIcon(
                    `${number}-${number - 1}-${number - 2}-${number + 3}-${
                      number + 2
                    }-${number + 1}`,
                    bets
                  )}
                />
              )}
            </Fragment>
          )}
          {/* end chip */}
          {/* start chip */}
          {shouldRenderTopStreetCatcher(number) && (
            <Fragment>
              <div
                className="split-up-bet-catcher-top"
                onMouseEnter={onBetCatcherHover}
                onMouseLeave={onBetCatcherHover}
                data-action={ACTION_TYPES.STREET}
                data-highlight={`${number}-${number - 1}-${number - 2}`}
              />
              {shouldRenderChip(
                `${number}-${number - 1}-${number - 2}`,
                bets
              ) === true && (
                <Chip
                  position="center-top"
                  icon={findChipIcon(
                    `${number}-${number - 1}-${number - 2}`,
                    bets
                  )}
                />
              )}
            </Fragment>
          )}
          {/* end chip */}
          {(number === 1 || number === 2) && (
            <Fragment>
              <div
                className="spleet-bet-catcher"
                onMouseEnter={onBetCatcherHover}
                onMouseLeave={onBetCatcherHover}
                data-action={ACTION_TYPES.STREET}
                data-highlight={type === 'American' ? `${number === 1 ? '0-1-2' : '00-2-3'}` : `${number === 1 ? '0-1-2' : '0-2-3'}`}
                style={{ zIndex: 12 }}
                data-soil
              />
              {shouldRenderChip(
                type === 'American' ? `${number === 1 ? '0-1-2' : '00-2-3'}` : `${number === 1 ? '0-1-2' : '0-2-3'}`,
                bets
              ) === true && (
                <Chip
                  position="left-top"
                  icon={findChipIcon(
                    type === 'American' ? `${number === 1 ? '0-1-2' : '00-2-3'}` : `${number === 1 ? '0-1-2' : '0-2-3'}`,
                    bets
                  )}
                />
              )}
            </Fragment>
          )}
          {shouldRenderTopCatcher(number) && (
            <Fragment>
              <div
                className="split-up-bet-catcher-top"
                onMouseEnter={onBetCatcherHover}
                onMouseLeave={onBetCatcherHover}
                data-action={ACTION_TYPES.SPLIT}
                data-highlight={`${number}-${number + 1}`}
              />
              {shouldRenderChip(`${number}-${number + 1}`, bets) === true && (
                <Chip
                  position="center-top"
                  icon={findChipIcon(`${number}-${number + 1}`, bets)}
                />
              )}
            </Fragment>
          )}
          <div className="value">{number}</div>
          {shouldRenderChip(`${number}`, bets) && (
            <Chip position="center" icon={findChipIcon(`${number}`, bets)} />
          )}
          {shouldRenderRightCatcher(number) && (
            <Fragment>
              <div
                className="split-up-bet-catcher-right"
                onMouseEnter={onBetCatcherHover}
                onMouseLeave={onBetCatcherHover}
                data-action={ACTION_TYPES.SPLIT}
                data-highlight={`${number}-${number + 3}`}
              />
              {shouldRenderChip(`${number}-${number + 3}`, bets) === true && (
                <Chip
                  position="right-center"
                  icon={findChipIcon(`${number}-${number + 3}`, bets)}
                />
              )}
            </Fragment>
          )}
          {shouldRenderBottomCatcher(number) && (
            <Fragment>
              <div
                className="split-up-bet-catcher-bottom"
                onMouseEnter={onBetCatcherHover}
                onMouseLeave={onBetCatcherHover}
                data-action={ACTION_TYPES.STREET}
                data-highlight={`${number}-${number + 1}-${number + 2}`}
              />
              {shouldRenderChip(
                `${number}-${number + 1}-${number + 2}`,
                bets
              ) === true && (
                <Chip
                  position="center-bottom"
                  icon={findChipIcon(
                    `${number}-${number + 1}-${number + 2}`,
                    bets
                  )}
                />
              )}
            </Fragment>
          )}
          {shouldRenderSixLineBetCatcher(number) && (
            <Fragment>
              <div
                className="six-lines-catcher"
                onMouseEnter={onBetCatcherHover}
                onMouseLeave={onBetCatcherHover}
                data-action={ACTION_TYPES.DOUBLE_STREET}
                data-highlight={`${number}-${number + 1}-${number + 2}-${
                  number + 3
                }-${number + 4}-${number + 5}`}
              />
              {shouldRenderChip(
                `${number}-${number + 1}-${number + 2}-${number + 3}-${
                  number + 4
                }-${number + 5}`,
                bets
              ) === true && (
                <Chip
                  position="right-bottom"
                  icon={findChipIcon(
                    `${number}-${number + 1}-${number + 2}-${number + 3}-${
                      number + 4
                    }-${number + 5}`,
                    bets
                  )}
                />
              )}
            </Fragment>
          )}
        </div>
      ))}
    </Fragment>
  );
};
