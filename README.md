# Casino Roulette documentation

Welcome to the casino roulette documentation. This is the plain HTML, CSS and JS (TypeScript) casino roulette implementation that is originally written using JSX but compiles to plain JS by Babel. 

Live example - https://codesandbox.io/s/casino-roulette-kl5k8m  

If you need the same for your React project, take a look at - https://github.com/IvanAdmaers/react-casino-roulette

# Wheel

![wheel](https://i.ibb.co/Dgj33tk/s1.png)

## Constructor options

Where * means required

| **Optn** | **Type** | **Default value** | **Description** |
|--|--|--|--|
| id* | `string` | - | The wheel render element id |
| type* | `string` | - | The wheel type: American or European |

## Example

```html
<div id="roulette-wheel"></div>
```

```js
const wheel = new RouletteWheel({
  id: 'roulette-wheel',
  type: 'American',
});
```

## Methods

| **Method** | **Arguments**  | **Description** |
|--|-- | --|
| changeType | `(type: string)` | New wheel type. American or European |
| doSpin | `(bet: string, onSpinningEnd?: () => void)` | Start spinning wheel function. It takes a number of a winning bet on the wheel and a function which will be called when the wheel stop spinning (optional argument) |

## Example

```js
startButton.addEventListener('click', () => {
  wheel.doSpin('0', () => console.info('done'));
});

changeWheelTypeButton.addEventListener('click', () => {
  wheel.changeType('European');
});
```

# Table

![table](https://i.ibb.co/fGYXMRg/s2.png)

## Constructor options

Where * means required

| **Opt** | **Type** | **Default value** | **Description** |
|--|--|--|--|
| id* | `string` | - | The table render element id |
| type* | `string` | - | The table type: American or European |
| bets* | `object` | - | The table bets. Type: { [key: string]: { icon?: string; } } |
| onBet* | `(params: { bet: string; payload: string[]; id: string; }) => void` | - | Function which handles user bets |

## Example

```html
<div id="roulette-table"></div>
```

```js
const bets = {};

const handleBet = (bet) => {
  bets[bet.id] = {};

  table.render();
};

const table = new RouletteTable({
  id: 'roulette-table',
  type: 'American',
  bets,
  onBet: handleBet,
});
```

## Methods

| **Method** | **Arguments**  | **Description** |
|--|-- | --|
| changeType | `(type: string)` | New table type. American or European |
| render | `-` | Renders the table with updated data. Call this method every time your bets object changes |

## Example

```js
const handleBet = (bet) => {
  // ...

  table.render();

  // ...
};

changeTableTypeButton.addEventListener('click', () => {
  table.changeType('European');
});
```

## Scripts

* `npm test` - tests
* `npm run dev` - dev
* `npm run build` - production. See for the `build` folder

## Conclusion

Make sure you link the roulette css & js file.
