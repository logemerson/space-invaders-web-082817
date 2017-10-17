const allShips = [];
let shipId = 0;

class Spaceship {
  constructor(name, crew, phasers, shields) {
    this.id = ++shipId;
    this.name = name;
    this.crew = crew;
    this.phasers = phasers;
    this.shields = shields;

    //specials default to off
    this.cloaked = false;
    this.warpDrive = "disengaged";
    this.phasersCharge = "uncharged";

    //default to docked if no crew
    if (this.crew.length < 1) {
      this.docked = true;
    } else {
      this.docked = false;
    }
    this.notifyCrew();
    allShips.push(this);
  }

  notifyCrew() {
    this.crew.forEach(member => (member.currentShip = this));
  }
}
