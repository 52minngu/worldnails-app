export type Employee = {
    employee_id: string;
    employee_name: string;
    role: "admin" | "staff"
    active: boolean;
};

export const employees: Employee[] = [
    { employee_id: "chinh", employee_name: "Trina", role: "admin", active:true},
    { employee_id: "culan", employee_name: "Thoi", role: "admin", active:true},
    { employee_id: "nhi", employee_name: "Jenny", role: "staff", active:true},
    { employee_id: "tham", employee_name: "Lily", role: "staff", active:true},
    { employee_id: "idk", employee_name: "Unsure", role: "staff", active:true}
];

export function getEmployeeById(employee_id: string) {
    return employees.find((e) => e.employee_id === employee_id) ?? null;
}