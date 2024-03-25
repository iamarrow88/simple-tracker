/**
 * The function creates HTML Element, adds classes, attributes, text content, places inside a parent HTML element. To skip unnecessary argument, replace it with '_'
 * @param {string} tag The first argument
 * @param {string} classes One ore more names of classes. Optional
 * @param {string} textContent A text inside the element. Optional
 * @param {HTMLElement} parenElement A parent element of the element. Optional
 * @param {Array} attributes Pairs of attributes. Example: [{'disabled': true}, {'data-key': 'picture'}]. Optional
 * @returns {HTMLElement} The function should return a HTMLElement
 */

export default function createElement(tag, classes, textContent, parenElement, attributes) {
  const element = document.createElement(tag);

  if (classes.length !== 0) {
    let result = [];
    if (classes instanceof Array) {
      result = classes;
    } else if (classes.split(' ').length !== 1) {
      result = classes.split(' ');
    } else {
      result = classes;
    }
    element.classList.add(result);
  }

  if (textContent.length !== 0) {
    element.textContent = textContent;
  }

  if (attributes.length !== 0) {
    console.log('attributes');
  }

  if(parenElement && parenElement instanceof HTMLElement) {
    parenElement.append(element);
  }

  return element;
}