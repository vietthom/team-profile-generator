const Developer = require('../Models/Developer');

test('create a Developer object', ()=> {
    const developer = new Developer('Thom', 1, 'thom@gmail.com', 'vietthom');

    expect(developer.github).toEqual(expect.any(String));
});

test('return github', ()=> {
    const developer = new Developer('Thom', 1, 'thom@gmail.com', 'vietthom');

    expect(developer.getGithub()).toEqual(expect.stringContaining(developer.github.toString()));
});

test('return role of employee', ()=> {
    const developer = new Developer ('Thom', 1, 'thom@gmail.com', 'vietthom');

    expect(developer.getRole()).toEqual('Developer');
});