/* Your code goes here */
function Fighter(newFighterProperties) {
    let name=newFighterProperties.name;
    let damage=newFighterProperties.damage;
    let hp=newFighterProperties.hp;
    const totalHP=hp;
    let agility=newFighterProperties.agility;
    let wins=0;
    let losses=0;
    this.getName=function(){
        return name;
    }
    this.getDamage=function(){
        return damage;
    }
    this.getAgility=function(){
        return agility;
    }
    this.getHealth=function(){
        return hp;
    }
    this.attack=function(defender){
        let defenderAgility=defender.getAgility();
        let fullProbaility=100;
        let probability=fullProbaility-defenderAgility; 
        if(Math.random() < probability/fullProbaility){
            console.log(this.getName()+' make '+this.getDamage()+' damage to '+defender.getName());
            defender.dealDamage(this.getDamage());
        }else{
            console.log(this.getName()+' attack missed');
        }
    }
    this.logCombatHistory=function(){
        console.log('Name: '+this.getName()+', Wins: '+wins+', Losses: '+losses);
    }
    this.heal=function(healthPoints){
        if(hp+healthPoints>totalHP){
            hp=totalHP;
        } else{
           hp=hp+healthPoints; 
        }
    }
    this.dealDamage=function(damagePoints){
        if(hp-damagePoints<0){
            hp=0;
        } else{
           hp=hp-damagePoints; 
        }
    }
    this.addWin=function(){
        wins+=1;
    }
    this.addLose=function(){
        losses+=1;
    }
  }
  function battle(fighter1,fighter2){
      let fighter1HP=fighter1.getHealth();
      let fighter2HP=fighter2.getHealth();
      if (fighter1HP===0){
        console.log(fighter1.getName()+' is dead and can\'t fight');
        return;
    } 
    if (fighter2HP===0){
        console.log(fighter2.getName()+' is dead and can\'t fight');
        return;
    } 
      while (fighter1HP>0&&fighter2HP>0){
          fighter1.attack(fighter2);
          fighter2.attack(fighter1);
          fighter1HP=fighter1.getHealth();
          fighter2HP=fighter2.getHealth();

      }
      if (fighter1HP===0){
          fighter2.addWin();
          fighter1.addLose();
      }  
      if (fighter2HP===0){
        fighter1.addWin();
        fighter2.addLose();
      }
      return;
  }
  const Fighter1 = new Fighter({name: 'John', damage: 20, hp: 100, agility: 25});
  const Fighter2 = new Fighter({name: 'Bob', damage: 30, hp: 120, agility: 60});
  battle(Fighter1,Fighter2);
  battle(Fighter1,Fighter2);
  Fighter1.logCombatHistory();
  Fighter2.logCombatHistory();
  const heal1=20;
  const heal2=40;
  Fighter1.heal(heal1);
  Fighter2.heal(heal2);
  battle(Fighter1,Fighter2);
  Fighter1.logCombatHistory();
  Fighter2.logCombatHistory();

