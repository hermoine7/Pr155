AFRAME.registerComponent("diver-rotation-reader", {
  schema: {
    speedOfRoation: { type: "number", default: 0 },
    speedOfMovement: { type: "number", default: 0 }
  },
  init: function () {
    window.addEventListener("keydown", (e) => {
      
      this.data.speedOfRoation = this.el.getAttribute("rotation");      
      this.data.speedOfMovement = this.el.getAttribute("position");

      var diverRotation = this.data.speedOfRoation;      
      var diverPosition = this.data.speedOfMovement;

      if (e.key === "ArrowDown") {
        if (diverPosition.z < 20) {
          diverPosition.z += 20;
          this.el.setAttribute("position", diverPosition);
        }
      }
      if (e.key === "ArrowUp") {
        if (diverPosition.z> -10) {
          diverPosition.z -= 20;
          this.el.setAttribute("position", diverPosition);
        }
      }
      if (e.key === "ArrowRight") {
        if (diverRotation.y > -360) {
          diverRotation.y -= 20;
          this.el.setAttribute("rotation", diverRotation);
        }
        if (diverPosition.x < 20) {
          diverPosition.x += 20;
          this.el.setAttribute("position", diverPosition);
        }
      }
      if (e.key === "ArrowLeft") {
        if (diverRotation.y <360) {
          diverRotation.y += 20;
          this.el.setAttribute("rotation", diverRotation);
        }
        if (diverPosition.x > -20) {
          diverPosition.x -= 20;
          this.el.setAttribute("position", diverPosition);
        }
      }
    });
  }
});