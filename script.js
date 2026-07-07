let total = 0;

for (let i = 1; i <= 3; i++) {
  let number = Number(prompt("Enter Your Number", i));
  total += number;
}

threePercentage = (total * 3) / 100;
total = total - threePercentage;

alert(total);
