var text = document.getElementById('svg_text');


document.getElementById('paste_svg')
  .addEventListener('click', () => {
    navigator.clipboard.readText().then((clipText) =>
      document.getElementById("svg_text").value = clipText);
  });
/* SVG to PNG (c) 2017 CY Wong / myByways.com */
text.wrap = 'off';
var svg = null;
var width = document.getElementById('w');
var height = document.getElementById('h');
document.getElementById('load_svg').addEventListener('click', function () {
  var div = document.getElementById('d');
  div.innerHTML = text.value;
  svg = div.querySelector('svg');
  width.value = svg.getBoundingClientRect().width;
  height.value = svg.getBoundingClientRect().height;
});
document.getElementById('s').addEventListener('click', function () {
  var canvas = document.getElementById('canvas_png');
  svg.setAttribute('width', width.value);
  svg.setAttribute('height', height.value);
  canvas.width = width.value;
  canvas.height = height.value;
  var data = new XMLSerializer().serializeToString(svg);
  var win = window.URL || window.webkitURL || window;
  var img = new Image();
  var blob = new Blob([data], { type: 'image/svg+xml' });
  var url = win.createObjectURL(blob);
  img.onload = function () {
    canvas.getContext('2d').drawImage(img, 0, 0);
    win.revokeObjectURL(url);
    var uri = canvas.toDataURL('image/png').replace('image/png', 'octet/stream');
    var a = document.createElement('a');
    document.body.appendChild(a);
    a.style = 'display: none';
    a.href = uri
    a.download = (svg.id || svg.svg.getAttribute('name') || svg.getAttribute('aria-label') || 'untitled') + '.png';
    a.click();
    window.URL.revokeObjectURL(uri);
    document.body.removeChild(a);
  };
  img.src = url;
});