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
    let vertical = Math.abs(this.endingLocation.vertical - this.beginningLocation.vertical);
    let horizontalBeginning = eastWest.indexOf(this.beginningLocation.horizontal) + 1;
    let horizontalEnding = eastWest.indexOf(this.beginningLocation.horizontal) + 1;
    let horizontal = Math.abs(horizontalBeginning - horizontalEnding);
    let eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
];

    return vertical + horizontal ;
  }
}
