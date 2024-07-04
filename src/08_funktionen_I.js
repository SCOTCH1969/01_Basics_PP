
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

/***** Funktionen 02c *****/
// 2c. Mehrere Parameter / Argumente

// ausgabeNameParams("Max", "Mütze");

// const prompt = require('prompt-sync')({sigint: true});
// ausgabeNamenParams(prompt("Vorname?: "),prompt("Name?: "));

function ausgabeNamenParams(firstName, familyName) {
    console.log("Hallo, " + firstName + " " + familyName + " !") ;
}

/***** Funktionen 03a *****/
// 3a. Vorbereitung -Trennen der Funktionalitäten
// Postulat: one function = one job (uncle Bob)
// SRP single responsibility principle

ausgabeNamenSRP("Max","Mütze");

function ausgabeNamenSRP(firstName, familyName) {

    // 1. Funktionalität: string output
    const GAP = " ";
    let outputStr = ""Hallo, " + firstName + " " + familyName + "!"

    // 2. Funktionalität: string output

    console.log("Hallo, " + firstName + " " + familyName + "!");    


