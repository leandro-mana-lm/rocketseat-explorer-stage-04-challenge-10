let students = [];
let include;

const createStudent = () => {
  students.push({
    name: prompt('Insira o Nome do Estudante:'),
    grades: [
      Number(prompt('Insira a Nota da Primeira Prova:')),
      Number(prompt('Insira a Nota da Segunda Prova:')),
    ],

    average: function () {
      return (
        this.grades.reduce((accumulator, grade) => accumulator + grade, 0) /
        this.grades.length
      );
    },

    approved: function () {
      return this.average() >= 7;
    },
  });
};

const includeNewStudent = () => {
  const answer = prompt('Gostaria de incluir novo Estudante? [SIM / NÃO]');

  include = answer.toUpperCase().trim() === 'SIM';
};

const showStudentResult = () => {
  students.forEach((student) =>
    alert(`
    A média do(a) aluno(a) ${student.name} é: ${student.average()}.
    ${
      student.approved()
        ? `Parabéns, ${student.name}! Você foi aprovado(a) no concurso!`
        : `Não foi dessa vez, ${student.name}! Tente novamente!`
    }
    `)
  );
};

const main = () => {
  do {
    createStudent();
    includeNewStudent();
  } while (include);

  showStudentResult();
};

main();
