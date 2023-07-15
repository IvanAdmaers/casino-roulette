/* Start helpers */

const shouldRenderValue = (value) => {
  return !(
    value === undefined ||
    typeof value === null ||
    typeof value === 'boolean' ||
    Number.isNaN(value) === true
  );
};

const convertToKebabCase = (string) => {
  return string.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
};

const convertObjectToCSS = (cssObject) => {
  return Object.entries(cssObject)
    .map(([key, value]) => `${convertToKebabCase(key)}:${value};`)
    .join(' ');
};

/* End helpers */

const add = (parent, child) => {
  parent.appendChild(child?.nodeType ? child : document.createTextNode(child));
};

const appendChild = (parent, child) => {
  if (Array.isArray(child) === true) {
    child.forEach((nestedChild) =>
      appendChild(
        parent,
        shouldRenderValue(nestedChild) === false ? '' : nestedChild
      )
    );

    return;
  }

  add(parent, child);
};

export const jsx = (tag, props) => {
  const { children } = props;

  if (typeof tag === 'function') {
    return tag(props, children);
  }

  const element = document.createElement(tag);

  Object.entries(props || {}).forEach(([name, value]) => {
    if (
      name.startsWith('on') === true &&
      name.toLowerCase() in window === true
    ) {
      element.addEventListener(name.toLowerCase().substring(2), value);

      return;
    }

    // TEMPORARY SOLUTION | IT SHOULD NOT WORK LIKE THAT | TODO: FIX | TYPING ISSUE
    if (name === 'className') {
      element.setAttribute('class', value);

      return;
    }

    if (name === 'style') {
      element.setAttribute('style', convertObjectToCSS(value));

      return;
    }

    element.setAttribute(name, value);
  });

  appendChild(element, shouldRenderValue(children) === false ? '' : children);

  return element;
};

export const jsxs = jsx;
