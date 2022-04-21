const Intern = require('../lib/Intern');

test('creates an intern object', ()=>{
    const intern = new Intern('Thom', 1, 'thom@gmail.com', 'UVM');

    expect(intern.school).toEqual(expect.any(String));
});

test('return school', ()=>{
    const intern = new Intern('Thom', 1, 'thom@gmail.com', 'UVM');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.getSchool()));
});

test('return role of employee', ()=>{
    const intern = new Intern('Thom', 1, 'thom@gmail.com', 'UVM');

    expect(intern.getRole()).toEqual('Intern');
});