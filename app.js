class ARViewer {
  constructor() {
    this.init();
  }

  init() {
    this.showAR();
  }

  showAR() {
    const modelViewer = document.createElement("model-viewer");
    modelViewer.setAttribute("src", "model.gltf");
    modelViewer.setAttribute("ar", "");
    modelViewer.setAttribute("ar-modes", "scene-viewer quick-look");
    modelViewer.setAttribute("camera-controls", "");
    modelViewer.setAttribute("shadow-intensity", "1");
    modelViewer.setAttribute("auto-rotate", "");
    modelViewer.setAttribute("ios-src", "/model.usdz");
    modelViewer.setAttribute("scale", "0.25 0.25 0.25");

    document.body.appendChild(modelViewer);

    setTimeout(() => {
      modelViewer.activateAR();
    }, 500);
  }
}

new ARViewer();
