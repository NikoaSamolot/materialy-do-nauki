/*
====================================================
EDU BRAINVERSE - BAZA MATERIAŁÓW
====================================================

DODAWANIE NOWEGO PRZEDMIOTU:

{
    id: "biologia",
    name: "Biologia",
    icon: "🧬"
}

DODAWANIE MATERIAŁU:

{
    title: "Nazwa materiału",
    description: "Krótki opis",
    url: "https://twoj-link.pl"
}

====================================================
*/


// ==================================================
// PRZEDMIOTY
// ==================================================

const subjects = [

    {
        id: "jezyk-polski",
        name: "Język polski",
        icon: "📖"
    },

    {
        id: "matematyka",
        name: "Matematyka",
        icon: "📐"
    },

    {
        id: "historia",
        name: "Historia",
        icon: "🏛️"
    },

    {
        id: "wos",
        name: "WOS",
        icon: "⚖️"
    },

    {
        id: "jezyk-angielski",
        name: "Język angielski",
        icon: "🇬🇧"
    },

    {
        id: "informatyka",
        name: "Informatyka",
        icon: "💻"
    },

    {
        id: "geografia",
        name: "Geografia",
        icon: "🌍"
    },

    {
        id: "biologia",
        name: "Biologia",
        icon: "🧬"
    },

    {
        id: "chemia",
        name: "Chemia",
        icon: "⚗️"
    },

    {
        id: "fizyka",
        name: "Fizyka",
        icon: "⚛️"
    }

];


// ==================================================
// MATERIAŁY
// ==================================================

const materialsData = {

    // ==============================================
    // JĘZYK POLSKI
    // ==============================================

    "jezyk-polski": [

        {
            title: "Antygona – opracowanie",
            description: "Najważniejsze informacje, bohaterowie i problematyka.",
            url: "https://example.com/antygona"
        },

        {
            title: "Środki stylistyczne",
            description: "Lista najważniejszych środków stylistycznych.",
            url: "https://example.com/srodki-stylistyczne"
        }

    ],


    // ==============================================
    // MATEMATYKA
    // ==============================================

    "matematyka": [

        {
            title: "Potęgi i pierwiastki",
            description: "Wzory i podstawowe zasady.",
            url: "https://example.com/potegi"
        },

        {
            title: "Równania",
            description: "Powtórzenie równań i metod ich rozwiązywania.",
            url: "https://example.com/rownania"
        }

    ],


    // ==============================================
    // HISTORIA
    // ==============================================

    "historia": [

        {
            title: "Historia Kompletna powtórka do kartkówki z chronologii",
            description: "Daty, Królowie, Dynastie, Liczenie lat, Quiz",
            url: "https://edu.brainverse.pl/historia-kartkowka-1/"
        }

    ],


    // ==============================================
    // WOS
    // ==============================================

    "wos": [

        {
            title: "Konstytucja RP",
            description: "Podstawowe informacje o Konstytucji.",
            url: "https://example.com/konstytucja"
        }

    ],


    // ==============================================
    // JĘZYK ANGIELSKI
    // ==============================================

    "jezyk-angielski": [

        {
            title: "English Grammar",
            description: "Najważniejsze zagadnienia gramatyczne.",
            url: "https://example.com/grammar"
        }

    ],


    // ==============================================
    // INFORMATYKA
    // ==============================================

    "informatyka": [

        {
            title: "Podstawy HTML",
            description: "Podstawowe znaczniki HTML.",
            url: "https://example.com/html"
        }

    ],


    // ==============================================
    // GEOGRAFIA
    // ==============================================

    "geografia": [],


    // ==============================================
    // BIOLOGIA
    // ==============================================

    "biologia": [],


    // ==============================================
    // CHEMIA
    // ==============================================

    "chemia": [],


    // ==============================================
    // FIZYKA
    // ==============================================

    "fizyka": []

};
