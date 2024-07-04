
/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken













/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

// Call
ausgabeNamen();

function ausgabeNamen() {

    let firstName = "Marius";

    console.log("Hallo, " + firstName +  " ! ");
    
}
// console.log(firstName);  // Fehler : scope !

/***** Funktionen 02b ******/
// 2b. Parametrisierung + Datenübergabe von AUSSEN 

ausgabeNamen2("Arian"); // Argument --> Daten für Parameter
ausgabeNamen2("Maxim");
ausgabeNamen2("Saba");

function ausgabeNamen2(firstName2) { //Parameter
    console.log("Hallo, " + firstName2 + " !" );   
}

