const students=[
    {id: 21, name: 'omer sunny'},
    {id:22,name:'manna'},
    {id:30,name:'shampa'},
    {id:49,name:'sejuti'}
];

const names=students.map(s=>s.name);
const ids=students.map(s=>s.id);
const bigger=students.filter(s=>s.id>40);
const biggerone=students.find(s=>s.id>40);

console.log(biggerone);