const allCrew = [];
let crewId = 0;

class CrewMember {
  constructor(position, currentShip) {
    this.id = ++crewId;
    this.position = position;
    this.currentShip = "Looking for a Rig";

    if (currentShip) {
      this.currentShip = currentShip;
    }

    allCrew.push(this);
  }

  engageWarpDrive() {
    if (this.currentShip === "Looking for a Rig" || this.position !== "Pilot") {
      return "had no effect";
    } else {
      this.currentShip.warpDrive = "engaged!";
    }
  }
  setsInvisibility() {
    if (
      this.currentShip === "Looking for a Rig" ||
      this.position !== "Defender"
    ) {
      return "had no effect";
    } else {
      this.currentShip.cloaked = true;
    }
  }
  chargePhasers() {
    if (
      this.currentShip === "Looking for a Rig" ||
      this.position !== "Gunner"
    ) {
      return "had no effect";
    } else {
      this.currentShip.phasersCharge = "charged!";
    }
  }
}
