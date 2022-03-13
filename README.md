#### No description

```js

//Array

const repeated=[1,1,2,3,4,5,5,5];

repeated.unique() // [1,2,3,4,5]

repeated.hasIndex(2) // true

repeated.hasIndex(8) // false

repeated.at(0); // 1

repeated.at(-1); // 5

repeated.min(); // 1

repeated.max(); // 5

const strings=["Denis", "Power"];

strings.toSet(); // Set(2) {'Denis', 'Power'}

//Plain Javascript Object.

const user={
firstname:"Denis", single:true, surname:"Power"
};

user.length; // 3
user.toMap(); // Map(3) {'firstname' => 'Denis', 'single' => true, 'surname' => 'Power'}

// Set

const somedata=new Set(["interjs", "mithriljs", "emberjs"]);

somedata.toArray(); // ["interjs", "mithriljs", "emberjs"];


// Map.

const map=new Map([["name","Denis"], ["Denis", "Power"]]);

map.toObj(); // {name:"Denis", Denis:"Power"}
```
