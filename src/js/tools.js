export function create(el, type) {
  let element = document.createElement(el);
  if (type) {
    type.includes('#')
      ? element.setAttribute('id', type.replace('#', ''))
      : element.setAttribute('class', type);
  }
  return element;
}

export function add(child, parent) {
  parent.appendChild(child);
}
