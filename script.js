 const net = document.getElementById("Net");
  const total = document.getElementById('Before');
  const form = document.getElementById("Form");

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const gross = parseFloat(total.value);

    if (isNaN(gross)) {
      alert("Please enter a valid number.");
      return;
    }

    function getTaxRate(income) {
      if (income <= 145000) {
        return 0.18;
      } else if (income <= 290500) {
        return 0.26;
      } else if (income <= 430500) {
        return 0.31;
      } else if (income <= 614000) {
        return 0.36;
      } else if (income <= 774500) {
        return 0.41;
      } else {
        return 0.45;
      }
    }

    const taxRate = getTaxRate(gross);
    const netIncome = gross * (1 - taxRate);
    net.value = netIncome.toFixed(2); 
  });

   