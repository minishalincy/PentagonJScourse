let calsi = prompt(
  "enter the operation to be performed(add, sub, mul, div, mod)",
);
var a = Number(prompt("enter the number"));
var b = Number(prompt("enter the number"));

switch (calsi) {
  case "add":
    {
      confirm(a + b);
    }
    break;

  case "sub":
    {
      confirm(a - b);
    }
    break;

  case "mul":
    {
      confirm(a * b);
    }
    break;

  case "div":
    {
      confirm(a / b);
    }
    break;

  case "mod":
    {
      confirm(a % b);
    }
    break;
  default:
    confirm("invalid operation");
}
