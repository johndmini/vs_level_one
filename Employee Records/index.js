let employee = [];

function Employee(name, jobTitle, salary) {
    this.name = name;
    this.jobtitle = jobTitle;
    this.salary = salary;
    this.status = 'Full Time';
}
Employee.prototype.printEmployeeForm = function(){
    console.log(this.name + ' is a ' + this.jobtitle + ' and their salary is $' + this.salary + ' and is currently working ' + this.status);
}

let employeeOne = new Employee('John', 'Front End Developer', 90000);
let employeeTwo = new Employee('Rosalie', 'Back End Developer', 120000);
let employeeThree = new Employee('Joe', 'Full Stack Developer', 1450000);

employeeTwo.status = 'Part Time';

employeeOne.printEmployeeForm()
employeeTwo.printEmployeeForm()
employeeThree.printEmployeeForm()

employee.push(employeeOne, employeeTwo, employeeThree);
console.log(employee)