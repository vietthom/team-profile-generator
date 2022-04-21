const Employee = require('../Models/Employee');

test('create an employee object', ()=>{
    const employee = new Employee('Thom', 1, 'thom@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('return employee name', ()=>{
    const employee = new Employee('Thom', 1, 'thom@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test('return employee Id', ()=>{
    const employee = new Employee('Thom', 1, 'thom@gmail.com');
    expect(employee.getId()).toEqual(expect.any(Number));
});

test('return employee email', ()=>{
    const employee = new Employee('Thom', 1, 'thom@gmail.com');
    expect(employee.getEmail()).toEqual(expect.any(String));
});

test('return role of employee', ()=>{
    const employee = new Employee('Thom', 1, 'thom@gmail.com');
    expect(employee.getRole()).toEqual('Employee');
});