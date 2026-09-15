class StudentRecord {
    public studentId: number;
    public fullName: string;
    public gradePointAvg: number;
    public nextRecord: StudentRecord | null;

    constructor(id: number, name: string, gpa: number) {
        this.studentId = id;
        this.fullName = name;
        this.gradePointAvg = gpa;
        this.nextRecord = null;
    }
}
export class StudentList {
    private firstNode: StudentRecord | null;
    private lastNode: StudentRecord | null;
    public count: number;
    constructor() {
        this.firstNode = null;
        this.lastNode = null;
        this.count = 0;
    }
    add(id: number, name: string, gpa: number): void {
        const newRecord = new StudentRecord(id, name, gpa);     
        if (!this.firstNode) {
            this.firstNode = newRecord;
            this.lastNode = newRecord;
        } else {
            if (this.lastNode) {
                this.lastNode.nextRecord = newRecord;
                this.lastNode = newRecord;
            }
        }
        this.count++;
    }
    insertAtPosition(index: number, id: number, name: string, gpa: number): boolean {
        if (index < 0) return false;       
        if (index === 0) {
            const newRecord = new StudentRecord(id, name, gpa);
            newRecord.nextRecord = this.firstNode;
            this.firstNode = newRecord;
            if (this.count === 0) this.lastNode = newRecord;
            this.count++;
            return true;
        }     
        let current = this.firstNode;
        let position = 0;   
        while (current && position < index - 1) {
            current = current.nextRecord;
            position++;
        }
        if (!current) return false;     
        const newRecord = new StudentRecord(id, name, gpa);
        newRecord.nextRecord = current.nextRecord;
        current.nextRecord = newRecord;     
        if (!newRecord.nextRecord) this.lastNode = newRecord;
        this.count++;
        return true;
    }
    removeById(id: number): boolean {
        if (!this.firstNode) return false;
        if (this.firstNode.studentId === id) {
            this.firstNode = this.firstNode.nextRecord;
            if (!this.firstNode) this.lastNode = null;
            this.count--;
            return true;
        }
        let current = this.firstNode;
        while (current.nextRecord && current.nextRecord.studentId !== id) {
            current = current.nextRecord;
        }
        if (!current.nextRecord) return false;
        if (current.nextRecord === this.lastNode) {
            this.lastNode = current;
        }
        current.nextRecord = current.nextRecord.nextRecord;
        this.count--;
        return true;
    }
    findRecord(id: number): StudentRecord | null {
        let current = this.firstNode;
        for (let i = 0; i < this.count; i++) {
            if (current && current.studentId === id) {
                return current;
            }
            current = current ? current.nextRecord : null;
        }
        return null;
    }
    organizeByGpa(): void {
        if (this.count <= 1) return;   
        let sorted = null;
        let current = this.firstNode;  
        while (current) {
            const next = current.nextRecord;   
            if (!sorted || current.gradePointAvg > sorted.gradePointAvg) {
                current.nextRecord = sorted;
                sorted = current;
            } else {
                let temp = sorted;
                while (temp.nextRecord && current.gradePointAvg <= temp.nextRecord.gradePointAvg) {
                    temp = temp.nextRecord;
                }
                current.nextRecord = temp.nextRecord;
                temp.nextRecord = current;
            }
            current = next;
        }
        this.firstNode = sorted;
        let temp = this.firstNode;
        while (temp && temp.nextRecord) {
            temp = temp.nextRecord;
        }
        this.lastNode = temp;
    }
    printList(): void {
        let current = this.firstNode;
        while (current) {
            console.log(`${current.studentId} | ${current.fullName} | ${current.gradePointAvg}`);
            current = current.nextRecord;
        }
    }
    serialize(): any[] {
        const output = [];
        let current = this.firstNode;
        while (current) {
            output.push({
                id: current.studentId,
                name: current.fullName,
                gpa: current.gradePointAvg
            });
            current = current.nextRecord;
        }
        return output;
    }
}
const studentRegistry = new StudentList();
studentRegistry.add(101, "Alice Johnson", 3.8);
studentRegistry.add(102, "Bob Smith", 3.2);
studentRegistry.add(103, "Charlie Brown", 3.9);
studentRegistry.insertAtPosition(1, 104, "Diana Prince", 3.5);
studentRegistry.removeById(102);
studentRegistry.organizeByGpa();
studentRegistry.printList();
console.log(studentRegistry.serialize());
