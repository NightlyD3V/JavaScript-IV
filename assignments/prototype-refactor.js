/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.
  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  
  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/
/*______________________________________*/
//      *OLD CODE*
// function GameObject(args) {
//     this.createdAt = args.createdAt;
//     this.name = args.name;
//     this.dimensions = args.dimensions;
//   }
  
//   GameObject.prototype.destroy = function () {
//     return `${this.name} was removed from the game`;
//   }
/*_____________________________________*/

//      *REFACTOR* 
class GameObject {
    constructor(args) {
        this.createdAt = args.createdAt;
        this.name = args.name;
        this.dimensions = args.dimensions;
    }
    destroy() {
        return `${this.name} was removed from the game`;
    }
}
  /*
    === CharacterStats ===
    * healthPoints
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */
 /*_____________________________________*/
//           *OLD CODE*
//   function CharacterStats(stats) {
//     this.healthPoints = stats.healthPoints;
//     this.attackPoints = stats.attackPoints;
//     // Inherits GameObjects args
//     GameObject.call(this, stats);
//   }
  
//   // Inheritance methods from GameObject
//   CharacterStats.prototype = Object.create(GameObject.prototype);
  
//   CharacterStats.prototype.takeDamage = function() {
//     return `${this.name} took damage`;
//   }
/*____________________________________*/

  //       *REFACTOR* 
class CharacterStats extends GameObject {
    constructor(stats) {
        super(stats);
        this.healthPoints = stats.healthPoints;
        this.attackPoints = stats.attackPoints;
    }
    takeDamage() {
        return `${this.name} took damage`;
    }
}
  
  /*
    === Humanoid (Having an appearance or character resembling that of a human.) ===
    * team
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
  */
/*__________________________________*/
//           *OLD CODE*
//   function Humanoid(args) {
//     this.team = args.team;
//     this.weapons = args.weapons;
//     this.language = args.language;
//     // Inherits CharacterStats stats
//     CharacterStats.call(this, args);
//   }
  
//   // Inherit methods from GameObject & CharacterStats
//   Humanoid.prototype = Object.create(CharacterStats.prototype);
  
//   Humanoid.prototype.greet = function() {
//     return `${this.name} offers a greeting in ${this.language}`;
//   }
 /*________________________________*/ 
  
 //           *REFACTOR*
 class Humanoid extends CharacterStats {
     constructor(args){
         super(args);
         this.team = args.team;
         this.weapons = args.weapons;
         this.language = args.language;
     }
     greet() {
         return `${this.name} offers a greeting in ${this.language}`;
     }
 }
  /*
    * Inheritance chain: GameObject -> CharacterStats -> Humanoid
    * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
    * Instances of CharacterStats should have all of the same properties as GameObject.
  */
  
  // Test you work by un-commenting these 3 objects and the list of console logs below:
  
  
    const mage = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 5,
      name: 'Bruce',
      team: 'Mage Guild',
      weapons: [
        'Staff of Shamalama',
      ],
      language: 'Common Tongue',
    });
  
    const swordsman = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2,
      },
      healthPoints: 15,
      name: 'Sir Mustachio',
      team: 'The Round Table',
      weapons: [
        'Giant Sword',
        'Shield',
      ],
      language: 'Common Tongue',
    });
  
    const archer = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Lilith',
      team: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
    });
  
    console.log(mage.createdAt); // Today's date
    console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    console.log(swordsman.healthPoints); // 15
    console.log(mage.name); // Bruce
    console.log(swordsman.team); // The Round Table
    console.log(mage.weapons); // Staff of Shamalama
    console.log(archer.language); // Elvish
    console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    console.log(mage.takeDamage()); // Bruce took damage.
    console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  
  
    // Stretch task: 
    // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
    // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
    // * Create two new objects, one a villain and one a hero and fight it out with methods!
  
//         *OLD CODE*
/*_______________________________*/
//   function Hero(args) {
//     // Inherit args
//     Humanoid.call(this, args);
//   }
  
//   // Inherit from Humanoid 
//   Hero.prototype = Object.create(Humanoid.prototype);
  
//   // Fight Method
//   Hero.prototype.fight = function(who) {
//     while(who.healthPoints != -1) {
//       if(who.healthPoints === 0) {
//        console.log(who.destroy());
//        break;
//       } else {
//       console.log(who.healthPoints -= `${this.attackPoints}` , `${this.name} just attacked ${who.name} with ${this.weapons[0]} for ${this.attackPoints}`);
//       }
//     }
//   }
  /*____________________________*/
//          *REFACTOR*
class Hero extends Humanoid {
    constructor(args) {
        super(args);
    }
    fight(who) {
        while(who.healthPoints != -1) {
            if(who.healthPoints === 0) {
            console.log(who.destroy());
            break;
            } else {
            console.log(who.healthPoints -= `${this.attackPoints}` , `${this.name} just attacked ${who.name} with ${this.weapons[0]} for ${this.attackPoints}`);
            }
        }
    }
}
//        *OLD CODE*
/*_________________________________*/
  //    VILLIAN CONSTRUCT
//   function Villian(args) {
//     // Inherit args
//     Humanoid.call(this, args);
//   }
//   //Inherit from Humanoid 
//   Villian.prototype = Object.create(Humanoid.prototype);
/*_________________________________*/
//        *REFACTOR*
class Villian extends Humanoid {
    constructor(args) {
        super(args);
    }
}
  // Objects
  const hero = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 100,
    attackPoints: 10,
    name: 'spiderman',
    team: 'New York',
    weapons: [
      'Webs',
      'Senses',
    ],
    language: 'Spidey',
  });
  
  const villian = new Villian({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 100,
    name: 'Dr.Oct',
    team: 'New York',
    weapons: [
      'Claw',
      'Reactor',
    ],
    language: 'Octo',
  });
  
  hero.fight(villian);
  console.log(hero);
  console.log(villian);