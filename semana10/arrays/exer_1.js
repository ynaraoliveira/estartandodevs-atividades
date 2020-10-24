function experiencia(years) {
   if(years >= 0 && years <= 1) {
      return "Iniciante";
   } else if (years > 1 && years < 4) {
      return "Intermediário";
   } else if (years >= 4 && years < 7) {
      return "Avançado";
   } else if (years >= 7) {
      return "Jedi Master";
   } else {
      return "Insira um valor válido";
   }
}

console.log(experiencia(7));