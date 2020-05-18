class Driver {
  constructor(name,startDate) {
    this.name = name;
    this.startDate = startDate;
  }

  yearsExperienceFromBeginningOf(date){
    return this.getFullYear() - date
  }
}

class Route {
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled(){
    return this.beginningLocation.vertical - this.endingLocation.vertical;
  }
}
