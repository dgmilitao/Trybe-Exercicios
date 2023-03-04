const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
  const battleMembers = { mage, warrior, dragon };

//   Crie uma função que retorne o dano do dragão.

// O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).

const dragonBreath = () =>  Math.round(Math.random() * (dragon.strength - 15) + 15);
console.log(dragonBreath());

// Crie uma função que retorne o dano causado pelo warrior.

// O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).  

const warriorSkill = () => Math.round(Math.random() * (warrior.strength * warrior.weaponDmg - warrior.strength) + warrior.strength);
console.log(warriorSkill());

const mageMagic = () => {
    let damage = undefined;
    let manaCost = 0;
    
    if (mage.mana < 15) {
        damage = 'Não possui mana suficiente';
        manaCost = 0;
    } else {
        manaCost += -15;
        damage = Math.round(Math.random() * mage.intelligence) + (mage.intelligence * 2) - mage.intelligence;
    }
    return { damage, manaCost };
}

console.log(mageMagic());

//Crie a primeira HOF que compõe o objeto gameActions.

const gameActions = {
    warriorTurn: (warriorSkill) => {
        warrior.damage = warriorSkill();
        dragon.healthPoints -= warrior.damage;
    },
    mageTurn: (mageMagic) => {
        const mageNewStats = mageMagic();
        mage.damage = mageNewStats.damage;
        mage.mana += mageNewStats.manaCost;
        if (typeof mage.damage === 'number') {
            dragon.healthPoints -= mage.damage;
        }   
    },
    dragonTurn: (dragonBreath) => {
        dragon.damage = dragonBreath();
        mage.healthPoints -= dragon.damage;
        warrior.healthPoints -= dragon.damage;
    },
    battleStatus: () => battleMembers,
}

gameActions.warriorTurn(warriorSkill);
gameActions.mageTurn(mageMagic);
gameActions.mageTurn(mageMagic);
//gameActions.mageTurn(mageMagic);
gameActions.dragonTurn(dragonBreath);

console.log(gameActions.battleStatus());