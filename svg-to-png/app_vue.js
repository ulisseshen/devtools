const { createApp, ref } = Vue

createApp({
  data() {
    return {
      message: 'Hello World!',
      alturaOriginal:0,
      larguraOriginal:0,
      svgText:'',
      svgViewHTML:''
    }
  },
  methods: {
    reverseMessage() {
      this.message = this.message.split('').reverse().join('')
    },
    pasteSvg() {
      navigator.clipboard.readText().then((clipText) =>
      this.svgText = clipText);

    },
    loadSvg() {
      // let svgView = document.getElementById('svg_view');
      this.svgViewHTML = this.svgText;
      // svg = svgView.querySelector('svg');
      // width.value = svg.getBoundingClientRect().width;
      // height.value = svg.getBoundingClientRect().height;
      // alturaOriginal = parseInt(height.value);
      // larguraOriginal = parseInt(width.value);
    },
    notify() {
      alert('navigation was prevented.')
    }
  }
}).mount('#body-app')