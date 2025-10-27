class ARViewer {
  constructor() {
    this.init();
  }

  showToast(message) {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
      toast.remove();
    }, 4000);
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

    modelViewer.addEventListener("error", () => {
      this.showToast("Ошибка загрузки модели");
    });

    setTimeout(() => {
      if (modelViewer.canActivateAR) {
        modelViewer.activateAR();
      } else {
        this.showToast("AR не поддерживается на этом устройстве");
      }
    }, 500);
  }
}

new ARViewer();
