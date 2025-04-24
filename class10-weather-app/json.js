const toys ={
    toy1: {name:'Teddy',color:"Brown"},
    toy2: {name:'Car',color:"Red"},
    toy3:{name:'Doll',color:"Pink"}
}
console.log(toys);
//pack inti JSON object where key and value look like strings
const toysJSONString = JSON.stringify(toys);
// output :{"toy1":{"name":"Teddy","color":"Brown"},"toy2":{"name":"Car","color":"Red"},"toy3":{"name":"Doll","color":"Pink"}}
console.log(toysJSONString);
//unpacking 
const unpackToys = JSON.parse(toysJSONString);
console.log(unpackToys);
/*{
    toy1: { name: 'Teddy', color: 'Brown' },
    toy2: { name: 'Car', color: 'Red' },
    toy3: { name: 'Doll', color: 'Pink' }
  }*/