export interface Employee {
    id: number;
    name: string;
    salary: number;
}
export class EmployeeService {
    private employees: Employee[] = [];
    // Create
    addEmployee(employee: Employee): void {
        this.employees.push(employee);
    }
    // Read
    getEmployees(): Employee[] {
        return this.employees;
    }
    // Update
    updateEmployee(id: number, name: string, salary: number): void {
        const employee = this.employees.find(emp => emp.id === id);
        if (employee) {
            employee.name = name;
            employee.salary = salary;
        } else {
            console.log("Employee not found.");
        }
    }
    // Delete
    deleteEmployee(id: number): void {
        const index = this.employees.findIndex(emp => emp.id === id);
        if (index !== -1) {
            this.employees.splice(index, 1);
        } else {
            console.log("Employee not found.");
        }
    }
}