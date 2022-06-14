// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2)
}
// describe('returnLastTwoDrivers()', function () {
//     it('should return an array of the last two drivers', function () {
//       expect(returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])).to.eql(['Amari', 'Mo']);
//     });
//   });
const returnLastTwoDrivers = function (drivers){
    return drivers.slice(2,4)
}
// console.log(returnFirstTwoDrivers(drivers))
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
//takes integer and multiplies by integer
const createFareMultiplier = function(multiplier) {
    return function (fare) {
        return fare * multiplier
    }
}
const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)
const selectDifferentDrivers = function(drivers, selectedDrivers){
    return selectedDrivers(drivers)
}