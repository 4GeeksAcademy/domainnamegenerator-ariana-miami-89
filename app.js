
let pronoun = ['my', 'your', 'their'];

let adj = ['sleepy', 'mysterious', 'legendary'];

let noun = ['coder', 'robot', 'wizard', 'penguin', 'detective'];
  
  // generating the domains using nested for loops (3)
  for(let i = 0; i < pronoun.length; i++) {
    for(let j = 0; j < adj.length; j++) {
      for(let k = 0; k < noun.length; k++) {
        console.log(pronoun[i] + adj[j] + noun[k]+'.com'); 
      }
    }
  }
