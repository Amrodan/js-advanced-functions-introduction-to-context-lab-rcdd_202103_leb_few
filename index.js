// Your code here
function createEmployeeRecord(arr) { return {
firstName : arr[0], familyName : arr[1], title : arr[2], payPerHour :arr[3],timeInEvents : [],timeOutEvents : []}

}

function createEmployeeRecords (as) {
const employees = []
as.forEach(employee=>employees.push(createEmployeeRecord(employee)))
return employees;
}
function createTimeInEvent(record,timeIn) {
const timeAr= timeIn.split(' ')
const obj = {type:'TimeIn', hour: parseInt(timeAr[1]),date: timeAr[0]}
record.timeInEvents.push(obj)
return record
}

function createTimeOutEvent(record,timeOut) {
  const timeAr = timeOut.split(' ');
  const obj = {type : 'TimeOut',hour: parseInt(timeAr[1]), date: timeAr[0]}
  record.timeOutEvents.push(obj);
  return record
}
function hoursWorkedOnDate (record, date) {

   const timeIn = record.timeInEvents.find(event => event.date === date)
   const timeOut = record.timeOutEvents.find(event => event.date === date)
   return (timeOut.hour - timeIn.hour)/100
}

function wagesEarnedOnDate (record, date) {
   return hoursWorkedOnDate(record, date) * record.payPerHour
}

function allWagesFor (record) {
   const dates = record.timeOutEvents.map(event => event.date)

   return dates.reduce((total, date) => total + wagesEarnedOnDate (record, date), 0)
}
