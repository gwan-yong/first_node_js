var members = ['a', 'b', 'c'];
console.log(members[1]); // b
var i =0;
while(i<members.length){
    console.log('array loop', members[i]);
    i = i+1;
};

var roles = {
    'programmer': 'a' ,
    'designer' : 'b' ,
     'manager' : 'c'
};
console.log(roles.designer); //b

for(var n in roles){
    console.log('object => ', n, 'value => ', roles[n]);
};