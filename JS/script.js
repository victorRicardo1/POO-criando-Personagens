class SkillTree {
    constructor(classe, skillLevel1, skillLevel2,skillLevel3,skillLevel4,skillLevel5,skillLevel6,skillLevel7,skillLevel8,skillLevel9,skillLevel10 ) {
      this.classe = classe;
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

    usarSkill1(){}
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
    constructor(nome, idade, raça, força, destreza, defesa, classe) {
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
      console.error(`Esmagarei o seu crânio, Orc imundo! Eu sou ${this.nome}`);
    }
  }
  
  const personagem1 = new Personagem(
    'Gremlörd',
    30,
    'Anão',
    100,
    80,
    90,
    'Berserker'
  );
  
  personagem1.apresentação();
  console.log(personagem1.classe); // Output: "Guerreiro Classe"]

