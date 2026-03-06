let calsi = prompt("enter the operation to be performed(add, sub, mul, div, mod)");

switch (calsi) {
  case 'add':
    {
      var a = Number(prompt("enter the number"));
      var b = Number(prompt("enter the number"));
      confirm(a + b);
    }
    break;

    case 'sub':
    {
      var a = Number(prompt("enter the number"));
      var b = Number(prompt("enter the number"));
      confirm(a - b);
    }
    break;

    case 'mul':
    {
      var a = Number(prompt("enter the number"));
      var b = Number(prompt("enter the number"));
      confirm(a * b);
    }
    break;

    case 'div':
    {
      var a = Number(prompt("enter the number"));
      var b = Number(prompt("enter the number"));
      confirm(a / b);
    }
    break;

    case 'mod':
    {
      var a = Number(prompt("enter the number"));
      var b = Number(prompt("enter the number"));
      confirm(a % b);
    }
    break;
  default:
    confirm("invalid operation");
}
