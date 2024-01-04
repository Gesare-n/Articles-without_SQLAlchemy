function scuberGreetingForFeet(someValue) {
    if (someValue < 30000) {
      return "Enjoy your free ride!";
    } else if (someValue >= 30000 && someValue < 50000) {
      return "You've got a discount on your scuber!";
    } else if (someValue >= 50000 && someValue < 70000) {
      return "Take 15% off your scuber!";
    } else {
      return "Sorry, we can't help you with that distance.";
    }
  }
  
  function ternaryCheckCity(desiredCity) {
    return desiredCity === "Everywhere" ? "No restrictions! Scuber can take you everywhere!" : `Sure! Scuber is available in ${desiredCity}.`;
  }
  
  function switchOnCharmFromTip(tipAmount) {
    let charmLevel;
    switch (true) {
      case tipAmount < 700:
        charmLevel = "A bit below average.";
        break;
      case tipAmount >= 700 && tipAmount < 1200:
        charmLevel = "Decent tip!";
        break;
      case tipAmount >= 1200 && tipAmount < 1800:
        charmLevel = "You're a generous soul!";
        break;
      case tipAmount >= 1800:
        charmLevel = "Outstanding! Your tip is truly appreciated.";
        break;
      default:
        charmLevel = "Invalid tip amount.";
    }
    return charmLevel;
  }
  
  // Testing the functions with sample values
  console.log(scuberGreetingForFeet(40000)); // You've got a discount on your scuber!
  console.log(ternaryCheckCity("New York")); // Sure! Scuber is available in New York.
  console.log(switchOnCharmFromTip(1500)); // You're a generous soul!
  