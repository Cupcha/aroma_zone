/**
 * @param {{ classList: { toggle: (arg0: any) => void; }; className: string; }} element
 * @param {any} className
 */
function toggleClass(element, className) {
    if (!element || !className) {
      return;
    }
  
    if (element.classList) {
      element.classList.toggle(className);
    } else {
      var classes = element.className.split(' ');
      var existingIndex = classes.indexOf(className);
  
      if (existingIndex >= 0)
        classes.splice(existingIndex, 1);
      else
        classes.push(className);
  
      element.className = classes.join(' ');
    }
  }
  