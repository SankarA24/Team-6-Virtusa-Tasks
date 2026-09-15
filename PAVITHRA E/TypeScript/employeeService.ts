interface Employee {
    id: number;
    name: string;
    salary: number;
}

class EmployeeService {

    private employees: Employee[] = [];

    // CREATE
    addEmployee(employee: Employee): void {
        this.employees.push(employee);
        console.log("Employee added successfully");
    }

    // READ
    getEmployees(): Employee[] {
        return this.employees;
    }

    // READ BY ID
    getEmployeeById(id: number): Employee | undefined {
        return this.employees.find(emp => emp.id === id);
    }

    // UPDATE
    updateEmployee(
        id: number,
        name: string,
        salary: number
    ): void {

        let employee = this.employees.find(
            emp => emp.id === id
        );

        if (employee) {
            employee.name = name;
            employee.salary = salary;

            console.log("Employee updated successfully");
        } else {
            console.log("Employee not found");
        }
    }

    // DELETE
    deleteEmployee(id: number): void {

        this.employees = this.employees.filter(
            emp => emp.id !== id
        );

        console.log("Employee deleted successfully");
    }
}

// Create service object
let service = new EmployeeService();

// CREATE
service.addEmployee({
    id: 1,
    name: "Pavithra",
    salary: 30000
});

service.addEmployee({
    id: 2,
    name: "Anu",
    salary: 35000
});

// READ
console.log(service.getEmployees());

// UPDATE
service.updateEmployee(1, "Pavithra E", 40000);

// READ BY ID
console.log(service.getEmployeeById(1));

// DELETE
service.deleteEmployee(2);

// Final employees
console.log(service.getEmployees());