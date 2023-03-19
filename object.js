let user = { name : 'Raju', email: 'raju@gmail.com', password : '23456789'};
console.log(user.email);
console.log(user['name']);
user.address = "Lucknow";
console.log(user);
delete user.password;
console.log(user);
console.log(Object.keys(user));
console.log(Object.values(user));

let smartphone={
    brand : 'samsung',
    mode1:'s23 Ultra',
    prices:78000,
    color:['white','red','black']
}
console.log(smartphone.color);
console.log(smartphone);
console.log(smartphone.color[1]);
smartphone.color.push('yellow');
console.log(smartphone);