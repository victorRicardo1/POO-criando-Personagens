class SkillTree {
    constructor(classe, level, skillLevel1, skillLevel2,skillLevel3,skillLevel4,skillLevel5,skillLevel6,skillLevel7,skillLevel8,skillLevel9,skillLevel10) {
      this.classe = classe;
      this.level = level;
      this.skillLevel1 = skillLevel1;
      this.skillLevel2 = skillLevel2;
      this.skillLevel3 = skillLevel3;
      this.skillLevel4 = skillLevel4;
      this.skillLevel5 = skillLevel5;
      this.skillLevel6 = skillLevel6;
      this.skillLevel7 = skillLevel7;
      this.skillLevel8 = skillLevel8;
      this.skillLevel9 = skillLevel9;
      this.skillLevel10 = skillLevel10;
    }

    usarSkill1(){
      switch(this.classe){
        case 'Guerreiro':
        console.log('Deu um corte');
        break;
      }
    }
    usarSkill2(){}
    usarSkill3(){}
    usarSkill4(){}
    usarSkill5(){}
    usarSkill6(){}
    usarSkill7(){}
    usarSkill8(){}
    usarSkill9(){}
    usarSkill10(){}
  }
  
  class Personagem extends SkillTree {
    constructor(nome,idade, raça, força, destreza, defesa, classe) {
      super(classe);
      this.nome = nome;
      this.idade = idade;
      this.raça = raça;
      this.força = força;
      this.destreza = destreza;
      this.defesa = defesa;
    }

    atacar(){}
    defender(){}
    usarItem(){}
    apresentação() {
      console.log(`Esmagarei o seu crânio, Orc imundo! Eu sou ${this.nome}`);
    }
  }
  
  const PersoGremlord = new Personagem(
    'Gremlörd Rajang',
    30,
    'Anão',
    100,
    80,
    90,
    'Berserker'
  );
  
 

const persoEvo = new Personagem(
  'Evo Kramer',
  30,
  'Humano',
  90,
  40,
  60,
  'Paladino'
)

const persoYarper = new Personagem(
  'Yarper',
  60,
  'Anão',
  50,
  30,
  20,
  'Arcano'
  )

const persoThokk = new Personagem(
  'Thokk',
  22,
  'Meio Elfo',
  70,
  60,
  80,
  'Arcano'
)

const persoCaspian = new Personagem(  
  'Caspian',
  21,
  'Merfolk',
  100,
  70,
  70,
  'Guerreiro'
)

const firstPerson = new Personagem('Gremlörd' ,31, 'anão', 100, 200, 300, 'Guerreiro');
firstPerson.usarSkill1()
console.log(firstPerson)
console.log(firstPerson.classe);
