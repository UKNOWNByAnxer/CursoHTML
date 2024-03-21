const box = document.getElementById('box');
const widthInput = document.getElementById('width');
const heightInput = document.getElementById('height');
const paddingInput = document.getElementById('padding');
const marginInput = document.getElementById('margin');
const borderWidthInput = document.getElementById('borderWidth');
const borderRadiusInput = document.getElementById('borderRadius');
const boxSizingSelect = document.getElementById('boxSizing');

widthInput.addEventListener('input', updateBox);
heightInput.addEventListener('input', updateBox);
paddingInput.addEventListener('input', updateBox);
marginInput.addEventListener('input', updateBox);
borderWidthInput.addEventListener('input', updateBox);
borderRadiusInput.addEventListener('input', updateBox);
boxSizingSelect.addEventListener('input', updateBox);

function updateBox() {
  const width = `${widthInput.value}px`;
  const height = `${heightInput.value}px`;
  const padding = `${paddingInput.value}px`;
  const margin = `${marginInput.value}px`;
  const borderWidth = `${borderWidthInput.value}px`;
  const borderRadiusValue = `${borderRadiusInput.value}px`;

  box.style.width = width;
  box.style.height = height;
  box.style.padding = padding;
  box.style.margin = margin;
  box.style.borderWidth = borderWidth;
  box.style.borderRadius = borderRadiusValue;

  if (boxSizingSelect.value === 'border-box') {
    box.style.boxSizing = 'border-box';
  } else {
    box.style.boxSizing = 'content-box';
  }
}

updateBox();