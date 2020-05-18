class Driver {
  constructor(name,startDate) {
    this.name = name;
    this.startDate = startDate;
  }

  yearsExperienceFromBeginningOf(date){
    let startYear = new Date(this.startDate)
    return date - startYear.getFullYear()
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
