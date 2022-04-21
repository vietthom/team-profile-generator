const Manager = require('../lib/Manager');

test('create a Manager object', ()=>{
    const manager = new Manager('Thom', 1, 'thom@gmail.com', 1);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('return role of employee', ()=>{
    const manager = new Manager('Thom', 1, 'thom@gmail.com');

    expect(manager.getRole()).toEqual('Manager');
});