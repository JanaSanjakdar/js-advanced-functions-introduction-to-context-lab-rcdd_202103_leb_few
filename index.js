// Your code here
//function createEmployeeRecord(array) {
//  let emp=
let createEmployeeRecord = fucntion(record){
return  {firstName: array[0],
            familyName: array[1],
            title: array[2],
            payPerHour: array[3],
            timeInEvents: [],
            timeOutEvents: []
          }
          //  return emp
          }
let createEmployeeRecord = function (emploeeRecordData){
  return employeeRecordData.map(function(record){
    return createEmployeeRecord(record)
  })
}
/*function createEmplees (arrayOfArrays){
  let employees =[];
  arrayOfArrays.forEach (emp => {employees.push(createEmployeeRecord(emp))
  });
  return employees
}*/

function createTimeInEvent (emp,timeStamp){
  let hour = parseInt (timeStamp.split(' ')[1])
  let date = timeStamp.split (' ')[0]
  emp.timeInEvents.push({
    type: "TimeIn",
    hour: hour,
    date: date
  })
  return emp
}

function createTimeOutEvent(emp, timeStamp){
  let hour = parseInt (timeStamp.split(' ')[1])
  let date = timeStamp.split (' ')[0]
  emp.timeOutEvents.push({
    type: "TimeOut",
    hour: hour,
    date: date
  })
  return emp
}

function hoursWorkedOnDate (emp, timeStamp){
let timeIn = emp.timeEvents.fint(x=> x.date === timeStamp)
let timeOut = emp.timeOutEvents.find (x => x.date === timeStamp)
let hoursWorked = (timeOut.hour - timeIn.hour) /100
  return hoursWorked
}

function wagesEarnedOnDate(emp, timeStamp){
    return hoursWorkedOnDate(emp, timeStamp) * emp.payPerHour
}

function allWagesFor (emp){
let availableDates = emp.timeInEvents.map((e) => {return e.date})
let payable =availableDates.reduce(function(totalPay,date){
  return totalPay + wagesEarnedOnDate(emp, timeStamp)
},0 )
return payable
}


function findEmployeeByFirstName (srcArray,firstName){
  return srcArray.find(x=> { return x.firstName === firstName})
}


function calculatePayroll(emp){
let subtotalPay = emp.map((e)=> allWagesFor(e))
  return subtotalPay.reduce ((num, subtotalPay)=> num + subtotalPay)
}
