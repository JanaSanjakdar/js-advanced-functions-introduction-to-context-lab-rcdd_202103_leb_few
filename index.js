// Your code here

}.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createEmployeeRecord(employees){
  return {
    firstName: employees[0],
    familyName: employees[1],
    title: employees[2],
    payPerHour: employees[3],
    timeInEvents: [],
    timeOutEvents: [],
  };
}

function createEmployeeRecords(arrayOfEmployees){
  return arrayOfEmployees.map(createEmployeeRecord);
}

function createTimeInEvent(dateStamp){
  let [date, hour] = dateStamp.split(' ');

  this.timeInEvents.push({
    type: "TimeIn", 
    hour: parseInt(hour, 10),
    date: date
  });
    return this;
}

function createTimeOutEvent(dateStamp){
  let [date, hour] = dateStamp.split(' ');

  this.timeOutEvents.push({
    type: "TimeOut", 
    hour: parseInt(hour, 10),
    date: date 
  });
    return this;
}

function hoursWorkedOnDate(dateWorked){
  let clockIn = this.timeInEvents.find(event => event.date === dateWorked);
  let clockOut = this.timeOutEvents.find(event => event.date === dateWorked);

  return (clockOut.hour - clockIn.hour) / 100;
}

function wagesEarnedOnDate(dateWorked){
  return this.payPerHour * hoursWorkedOnDate.call(this, dateWorked);
}

function findEmployeeByFirstName(records, firstName){
  return records.find(record => {
    return record.firstName === firstName;
  });
}

function calculatePayroll(arrayOfEmployees){
  return arrayOfEmployees.reduce((total, hours) => total + allWagesFor.call(hours), 0);
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
