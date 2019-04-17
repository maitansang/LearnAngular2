import {Injectable} from '@angular/core';
export class EmployeeService {
    GetList(): any[] {
        let employees: any[] = [
            { Id: 1, Name: "Mai Tấn Sang" },
            { Id: 2, Name: "Mai Tấn Tèo" },
            { Id: 3, Name: "Mai Tấn Tý" }
        ];
        return employees
    }
}