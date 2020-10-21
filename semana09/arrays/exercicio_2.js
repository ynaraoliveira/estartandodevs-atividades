const listStudents = [
   {
      name: "Pedro",
      grades: [6.5, 7.1, 10, 4.5],
   },
   {
      name: "Joao",
      grades: [3, 4.2, 7, 3],
   },
   {
      name: "Maria",
      grades: [9, 10, 8, 10],
   },
   {
      name: "Ana",
      grades: [1, 6, 4.5, 9],
   },
   {
      name: "Samuel",
      grades: [8, 9, 9.5, 7],
   },
];

const numBimester = 4;
const averageGrade = 7;

let arrResponse = [];

function calcGrades() {
   // loop through all grades array
   for(let i = 0; i < listStudents.length; i++) {
   let grade = listStudents[i].grades;

   // sum grade
   let sum = 0;
   grade.forEach(item => sum += item);

   // calculate average grade
   const average = (sum / numBimester).toFixed(1);

   // define status
   let status = "reprovado";
   if(average >= averageGrade) {
      status = "aprovado";
   };

   // push new values to the array
   const {name} = listStudents[i];
   arrResponse.push({
      nome: name,
      media: average,
      status: status,
   });

   };
   console.log(arrResponse);
};

calcGrades();



















