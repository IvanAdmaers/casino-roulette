import { Fragment } from '../../../Fragment';
import { Chip } from '../../Chip';

import { ACTION_TYPES } from '../../../../constants';
import { findChipIcon, shouldRenderChip } from '../../../../helpers';
import { ISectionProps } from '../../../../types';

export const ZeroBets = ({
  onBetCatcherHover,
  bets,
  type,
}: ISectionProps) => {
  const numbers = ['0']

  if (type == 'American') {
    numbers.push('00')
  }

  return (
    <Fragment>
      {numbers.map((number) => (
        <div
          key={`zero-item-${number}`}
          className={`zero-item ${type}`}
          data-action={ACTION_TYPES[number as '0' | '00']}
          data-bet={number}
        >
          {/* start chip */}
          {number === '0' && (
            <Fragment>
              <div
                className="spleet-bet-catcher"
                onMouseEnter={onBetCatcherHover}
                onMouseLeave={onBetCatcherHover}
                data-action={type === 'American' ? ACTION_TYPES.STREET : ACTION_TYPES.TOP_LINE_EU}
                data-highlight={type === 'American' ? '0-00-2' : '0-3-2-1'}
                style={{ left: 'auto', right: '-15px', zIndex: 15 }}
              />
              {shouldRenderChip(
                type === 'American' ? '0-00-2' : '0-3-2-1',
                bets
              ) === true && (
                <Chip
                  position="right-top"
                  icon={findChipIcon(
                    type === 'American' ? '0-00-2' : '0-3-2-1',
                    bets
                  )}
                />
              )}
            </Fragment>
          )}
          {/* start chip | New */}
          {type === 'European' && number === '0' && (
            <Fragment>
              <div
                className="split-up-bet-catcher-right"
                onMouseEnter={onBetCatcherHover}
                onMouseLeave={onBetCatcherHover}
                data-action={ACTION_TYPES.SPLIT}
                data-highlight={'0-3'}
                style={{ height: '85px', zIndex: 14 }}
              />
              {shouldRenderChip('0-3', bets) === true && (
                <Chip
                  position={'right-top-with-offset'}
                  icon={findChipIcon('0-3', bets)}
                />
              )}
            </Fragment>
          )}
          {/* end chip */}
          {/* end chip */}
          {/* start chip */}
          <div
            className={`corner-bet-catcher ${number === '0' ? 'bottom' : ''}`}
            onMouseEnter={onBetCatcherHover}
            onMouseLeave={onBetCatcherHover}
            data-action={
              type === 'American'
                ? ACTION_TYPES.TOP_LINE_US
                : ACTION_TYPES.TOP_LINE_EU
            }
            data-highlight={
              type === 'American'
                ? number === '0'
                  ? '0-00-1-2-3'
                  : '00-0-1-2-3'
                : '0-1-2-3'
            }
            style={{ zIndex: 14 }}
          />
          {shouldRenderChip(
            type === 'American'
              ? number === '0'
                ? '0-00-1-2-3'
                : '00-0-1-2-3'
              : '0-1-2-3',
            bets
          ) === true && (
            <Chip
              position={number === '0' ? 'right-bottom' : 'right-top'}
              icon={findChipIcon(
                type === 'American'
                  ? number === '0'
                    ? '0-00-1-2-3'
                    : '00-0-1-2-3'
                  : '0-1-2-3',
                bets
              )}
            />
          )}
          {/* end chip */}
          {/* start chip */}
          {type === 'American' && number === '0' && (
            <Fragment>
              <div
                className="split-up-bet-catcher-top"
                onMouseEnter={onBetCatcherHover}
                onMouseLeave={onBetCatcherHover}
                data-action={ACTION_TYPES.ROW}
                data-highlight="0-00"
              />
              {shouldRenderChip('0-00', bets) === true && (
                <Chip position="center-top" icon={findChipIcon('0-00', bets)} />
              )}
            </Fragment>
          )}
          {/* end chip */}
          {/* start chip */}
          <div
            className="split-up-bet-catcher-right"
            onMouseEnter={onBetCatcherHover}
            onMouseLeave={onBetCatcherHover}
            data-action={ACTION_TYPES.SPLIT}
            data-highlight={`${number}-${number === '0' ? 2 : 3}`}
            style={{
              zIndex: number === '00' ? 12 : '',
              height: number === '00' ? '85px' : '',
            }}
          />
          {shouldRenderChip(`${number}-${number === '0' ? 2 : 3}`, bets) ===
            true && (
            <Chip
              position={
                type === 'American'
                  ? number === '0'
                    ? 'right-top-with-no-offset'
                    : 'right-top-with-offset'
                  : 'right-center'
              }
              icon={findChipIcon(`${number}-${number === '0' ? 2 : 3}`, bets)}
            />
          )}
          {/* end chip */}
          {/* start chip */}
          <div
            className="split-up-bet-catcher-right"
            onMouseEnter={onBetCatcherHover}
            onMouseLeave={onBetCatcherHover}
            data-action={ACTION_TYPES.SPLIT}
            data-highlight={`${number}-${number === '0' ? 1 : 2}`}
            style={{ height: '85px', top: 'auto', bottom: 0 }}
          />
          {shouldRenderChip(`${number}-${number === '0' ? 1 : 2}`, bets) ===
            true && (
            <Chip
              position={
                number === '0'
                  ? 'right-bottom-with-offset'
                  : 'right-bottom-with-no-offset'
              }
              icon={findChipIcon(`${number}-${number === '0' ? 1 : 2}`, bets)}
            />
          )}
          {/* end chip */}
          {/* start chip */}
          <div
            className={
              number === '0' ? 'basket-catcher-bottom' : 'basket-catcher-top'
            }
            onMouseEnter={onBetCatcherHover}
            onMouseLeave={onBetCatcherHover}
            data-action={
              type === 'American'
                ? ACTION_TYPES.TOP_LINE_US
                : ACTION_TYPES.TOP_LINE_EU
            }
            data-highlight={
              type === 'American'
                ? `${number === '0' ? '0-00' : '00-0'}-1-2-3`
                : '0-1-2-3'
            }
            style={{ left: '-3px' }}
          />
          {/* end chip */}
          {/* start chip | New | Todo: duplicate of the catcher above */}
          <div
            className={
              type === 'European' && number === '0'
                ? 'basket-catcher-top'
                : ''
            }
            onMouseEnter={onBetCatcherHover}
            onMouseLeave={onBetCatcherHover}
            data-action={ACTION_TYPES.TOP_LINE_EU}
            data-highlight={'0-3-2-1'}
            style={{ left: '-3px' }}
          />
          {/* end chip */}
          <div className="value">{number}</div>
          {shouldRenderChip(number, bets) && (
            <Chip position="center" icon={findChipIcon(number, bets)} />
          )}
        </div>
      ))}
    </Fragment>
  );
};
