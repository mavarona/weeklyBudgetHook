 export const reviewBudget = (budget, remaining) => {
     let classAlert;
     // Check 25% 
     if ((budget / 4) > remaining) {
         classAlert = 'alert alert-danger';
     } else if ((budget / 2) > remaining) {
         classAlert = 'alert alert-warning'
     } else {
         classAlert = 'alert alert alert-success';
     }
     return classAlert;
 }