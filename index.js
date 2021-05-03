// Your code here

let createEmployeeRecord = function(row){
    return {
        firstName: row[0],
        familyName: row[1],
        title: row[2],
        payPerHour: row[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

let createEmployeeRecords = function(employeeRowData) {
    return employeeRowData.map(function(row){
        return createEmployeeRecord(row)
    })
}

let createTimeInEvent = function(employee, dateStamp){
    let [date, hour] = dateStamp.split(' ')

    employee.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })

    return employee
}

let createTimeOutEvent = function(employee, dateStamp){
    let [date, hour] = dateStamp.split(' ')

    employee.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })

    return employee
}

let hoursWorkedOnDate = function(employee, specificDate){
    let inEvent = employee.timeInEvents.find(function(e){
        return e.date === specificDate
    })

    let outEvent = employee.timeOutEvents.find(function(e){
        return e.date === specificDate
    })

    return (outEvent.hour - inEvent.hour) / 100
}

let wagesEarnedOnDate = function(employee, specificDate){
    let rawWage = hoursWorkedOnDate(employee, specificDate)
        * employee.payPerHour
    return parseFloat(rawWage.toString())
}

let allWagesFor = function(employee){
    let daysWorked = employee.timeInEvents.map(function(e){
        return e.date
    })
    let payable = daysWorked.reduce(function(memo, d){
        return memo + wagesEarnedOnDate(employee, d)
    }, 0)
    return payable
}

let findEmployeeByFirstName = function(srcArray, firstName) {
    return srcArray.find(function(rec){
      return rec.firstName === firstName
    })
  }

  let calculatePayroll = function(arrayOfEmployeeRecords){
      return arrayOfEmployeeRecords.reduce(function(memo, rec){
          return memo + allWagesFor(rec)
      }, 0)
  }


/*function createEmployeeRecord(array) {
 let emp=

 {firstName: array[0],
            familyName: array[1],
            title: array[2],
            payPerHour: array[3],
            timeInEvents: [],
            timeOutEvents: []
          }
          //  return emp
        }*/

/*function createEmplees (arrayOfArrays){
  let employees =[];
  arrayOfArrays.forEach (emp => {employees.push(createEmployeeRecord(emp))
  });
  return employees
}*/

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

/*function hoursWorkedOnDate (emp, timeStamp){
let timeIn = emp.timeEvents.fint(x=> x.date === timeStamp)
let timeOut = emp.timeOutEvents.find (x => x.date === timeStamp)
let hoursWorked = (timeOut.hour - timeIn.hour) /100
  return hoursWorked
}*/

/*function wagesEarnedOnDate(emp, timeStamp){
    return hoursWorkedOnDate(emp, timeStamp) * emp.payPerHour
}*/

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


/*function calculatePayroll(emp){
let subtotalPay = emp.map((e)=> allWagesFor(e))
  return subtotalPay.reduce ((num, subtotalPay)=> num + subtotalPay)
}*/
