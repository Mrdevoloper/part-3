let salaries = {
  "Akmal": 1200,
	"Salim": 5200,
	"Karima": 1800
}

let elprice = document.querySelector("#show")

function sumSalary(price)
{
    let sum = 0;
    for(let salary of Object.values(price)){
      sum += salary
    } 
    // console.log(salary)
    return sum;
}
show.textContent = (sumSalary(salaries));

console.log(sumSalary(salaries));

// return