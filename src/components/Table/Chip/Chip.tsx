import './Chip.css';

export interface IChipProps {
  position:
    | 'center'
    | 'right-top'
    | 'right-bottom'
    | 'center-top'
    | 'right-top-with-offset'
    | 'right-bottom-with-offset'
    | 'right-bottom-with-no-offset'
    | 'right-top-with-no-offset'
    | 'center-bottom'
    | 'left-top'
    | 'right-center';
  icon?: string;
}

export const Chip = ({ position, icon } : IChipProps) => {
  return (
    <div
      className={`chip ${position}`}
      style={{ backgroundImage: icon !== undefined ? `url("${icon}")` : '' }}
    />
  );
};
