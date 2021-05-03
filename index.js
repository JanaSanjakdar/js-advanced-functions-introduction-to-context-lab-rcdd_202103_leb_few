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
let createTimeInEvent = function(dateTimeInStamp){
    let [date, hour] = dateTimeInStamp.split(' ');
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date: date,
    })
    return this
}
/*function createTimeInEvent (emp,timeStamp){
  let hour = parseInt (timeStamp.split(' ')[1])
  let date = timeStamp.split (' ')[0]
  emp.timeInEvents.push({
    type: "TimeIn",
    hour: hour,
    date: date
  })
  return emp
}*/
let createTimeOutEvent = function(dateTimeOutStamp){
    let [date, hour] = dateTimeOutStamp.split(' ');
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date: date,
    })
    return this
}
/*function createTimeOutEvent(emp, timeStamp){
  let hour = parseInt (timeStamp.split(' ')[1])
  let date = timeStamp.split (' ')[0]
  emp.timeOutEvents.push({
    type: "TimeOut",
    hour: hour,
    date: date
  })
  return emp
}*/
let hoursWorkedOnDate = function(dateRequested){
    let inEvent = this.timeInEvents.find(function(e){
        return e.date === dateRequested;
    })
    let outEvent = this.timeOutEvents.find(function(e){
        return e.date === dateRequested;
    })
    return (outEvent.hour - inEvent.hour) / 100;
}
/*function hoursWorkedOnDate (emp, timeStamp){
let timeIn = emp.timeEvents.fint(x=> x.date === timeStamp)
let timeOut = emp.timeOutEvents.find (x => x.date === timeStamp)
let hoursWorked = (timeOut.hour - timeIn.hour) /100
  return hoursWorked
}*/
let wagesEarnedOnDate = function(dateRequested){
    let wage = hoursWorkedOnDate.call(this, dateRequested) * this.payPerHour
    return parseFloat(wage.toString())
}
/*function wagesEarnedOnDate(emp, timeStamp){
    return hoursWorkedOnDate(emp, timeStamp) * emp.payPerHour
}*/
let findEmployeeByFirstName = function(employees, firstName){
    return employees.find(function(record){
        return record.firstName === firstName
    })
}

let calculatePayroll = function(employees){
    return employees.reduce(function(memo, rec){
        return memo + allWagesFor.call(rec)
    }, 0)
}
/*function allWagesFor (emp){
let availableDates = emp.timeInEvents.map((e) => {return e.date})
let payable =availableDates.reduce(function(totalPay,date){
  return totalPay + wagesEarnedOnDate(emp, timeStamp)
},0 )
return payable
}


function findEmployeeByFirstName (srcArray,firstName){
  return srcArray.find(x=> { return x.firstName === firstName})
}*/


function calculatePayroll(emp){
let subtotalPay = emp.map((e)=> allWagesFor(e))
  return subtotalPay.reduce ((num, subtotalPay)=> num + subtotalPay)
}
