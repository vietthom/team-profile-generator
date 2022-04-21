const Engineer = require('../lib/Engineer');

test('create an Engineer object', ()=> {
    const engineer = new Engineer('Thom', 1, 'thom@gmail.com', 'vietthom');

    expect(engineer.github).toEqual(expect.any(String));
});

test('return github', ()=> {
    const engineer = new Engineer('Thom', 1, 'thom@gmail.com', 'vietthom');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('return role of employee', ()=> {
    const engineer = new Engineer ('Thom', 1, 'thom@gmail.com', 'vietthom');

    expect(engineer.getRole()).toEqual('Engineer');
});