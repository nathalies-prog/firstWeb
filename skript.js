const questions = [
    {
        question: "Was bist Du für ein Mensch?",
        options: [
            { text: "Einzelgänger", image: "Images/Wolf.jpg", points: 3 },
            { text: "Extrovertiert", image: "Images/Extrovertiet.jpg", points: 1 },
            { text: "Introvertiert", image: "Images/Introvertiert.jpg", points: 2 },
        ]
    },
    {
        question: "Was ist dein Lieblingstier?",
        options: [
            { text: "Hund", image: "Images/Hund.jpg", points: 1 },
            { text: "Katze", image: "Images/Katze.jpg", points: 3 },
            { text: "anderes Haustier", image: "Images/anderes.jpg", points: 2 },
            { text: "kein Haustier", image: "Images/keinHaustier.jpg", points: 4 }
        ]
    },
    {
        question: "Welches dieser fiktiven Tiere würdest Du am ehesten adoptieren?",
        options: [
            { text: "Ein feuerspeiender Drache, der dir nur manchmal gehorcht, dich aber beschützt.", image: "Images/drache.jpg", points: 4},
            { text: "Ein dreiköpfiger Hund, der extrem anhänglich bei dir ist, aber jeden Anderen hasst.", image:"Images/dreikopf.jpg", points:3},
            { text: "Ein einäugiges Chamäleon, das Farben wechselt,je nach deiner Laune.",image:"Images/chamaeleon.jpg", points:1},
            { text:  "Ein buntes Einhorn, das in der Lage ist, deine Lieblingsmusik zu spielen, aber nur, wenn du es streichelst.", image:"Images/einhorn.jpg", points:2}
        ]
    },
    {
        question: "Wenn du eine Art von übernatürlichem Begleiter haben könntest,welcher wäre das?",
        options:[
            { text: "Ein sarkastischer Geist, der nur erscheint wenn du in den Spiegel blickst.",points:4},
            { text: "Ein Zeitreisender, der dich jede Woche einmal besucht um dir einen Ratschlag zu erteilen.", points: 3},
            { text: "Ein kleiner Hauself, der dir immer Kaffee bringt,wenn du ihn brauchst.", points:1},
            { text: "Ein magischer Kater, der die Fähigkeit hat, die Gedanken von anderen Tieren zu verstehen und dir ihre Geheimnisse verrät.", points: 2}
        ]
    },
    {
        question: "Welches Starterpokemon wählst Du?",
        options: [
            { text: "Glumanda", image: "Images/glumanda.jpg", points: 3 },
            { text: "Schiggy", image: "Images/schiggy.jpg", points: 2 },
            { text: "Bisasam", image: "Images/bisasam.jpg", points: 1 },
            { text: "Pikachu", image: "Images/pikachu.jpg", points: 4 }
        ]
    },
    {
        question: "Die Gesetze sind für einen Tag ausgesetzt, was tust Du?",
        options: [
            { text: "Eine Bank ausrauben.", image: "Images/Bank.jpg", points: 3 },
            { text: "Jemanden umbringen.", image: "Images/187.png", points: 4 },
            { text: "Nichts was ich sonst nicht auch tun würde.", image: "Images/Nichts.jpg", points: 1 },
            { text: "Etwas Anderes.", image: "Images/anders.jpg", points: 2 }
        ]
    },
    {
        question: "Welches Harry Potter Haus wählst Du?",
        options: [
            { text: "Griffindor", image: "Images/Griffindor.jpg", points: 3 },
            { text: "Ravenclaw", image: "Images/Ravenclaw.jpg", points: 1 },
            { text: "Hufflepuff", image: "Images/Hufflepuff.jpg", points: 2 },
            { text: "Slytherin", image: "Images/Slytherin.jpg", points: 4 }
        ]
    },
    {
        question: "Welche Superkraft hättest Du gerne?",
        options: [
            { text: "Unsichtbarkeit", points: 4},
            { text: "Gedanken lesen", points: 3},
            { text: "Fliegen", points: 1},
            { text: "Zeit reisen", points: 2},            
        ]
    },
    {
        question: "Welchen dieser Gefängnisinsassen würdest Du am ehesten entlassen?",
        options: [
            { text: "Weiblich,32,sitzt wegen schwerer Körperverletzung", points: 3 },
            { text: "Männlich, 19, sitzt wegen Waffen & Drogenhandel", points: 2 },
            { text: "Weiblich,78, Serienmörderin", points: 4 },
            { text: "Männlich 40, sitzt wegen schweren Raub", points: 1 }
        ]
    },
    {
        question: "Welche dieser Personen, findest Du am sympathischsten?",
        options: [
            { text: "Michael Scofield", image: "Images/michael.jpg", points: 1, tooltip: "Geniales Genie, bereit, alles für seinen Bruder zu riskieren." },
            { text: "John Abruzzi", image: "Images/john.jpg", points: 4, tooltip: "Mafiaboss mit familiärer Loyalität und dunklem Geheimnis."  },
            { text: "Theodore Tbag Bagwell", image: "Images/tbag.jpg", points: 5, tooltip:"Charismatisch und manipulativ, stets mit düsteren Absichten."  },
            { text: "Lincoln Burrows", image: "Images/lincoln.jpg", points: 2 ,tooltip: "Michael's Bruder, loyal und kämpferisch."},
            { text: "David Tweener Apolskis", image: "Images/tweener.jpg", points: 3,tooltip: "Jung und impulsiv, versucht sich anzupassen." }
        ]
    },
    {
        question: "Wovor hast Du am meisten Angst?",
        options: [
            { text: "Spinnen", image: "Images/Spinne.jpg", points: 2 },
            { text: "Höhe oder Enge", image: "Images/Höhenangst.jpg", points: 3 },
            { text: "Verlust oder Bindungsängste", image: "Images/Angst.jpg", points: 4 },
            { text: "Etwas Anderes", image: "Images/andereÄngste.jpg", points: 1 }
        ]
    },
    {
        question: "Es bricht ein großes Feuer aus, du kannst nur einen retten,wen wählst Du?",
        options: [
            { text: "Mutter oder Vater", points: 1 },
            { text: "Meine Frau oder meinen Mann", points: 2 },
            { text: "dich selbst", points: 4 },
            { text: "Bruder oder Schwester", points: 3 },
            { text: "Niemanden", points: 5 }
        ]
    }
];
const descriptions = [
    { minPoints: 12, maxPoints: 20, text: "Du bist ein ruhiger und nachdenklicher Mensch, der seine Energie aus Momenten der Stille und des Alleinseins schöpft. Du bevorzugst tiefe und bedeutungsvolle Gespräche über oberflächliche Small-Talks und fühlst dich oft am wohlsten, wenn du in deinem eigenen Raum bist, um deinen Gedanken freien Lauf zu lassen.Auch wenn du nicht im Rampenlicht stehen möchtest, wissen die Menschen um dich herum, dass du eine reiche innere Welt besitzt, die du teilst, wenn es dir richtig erscheint.", sound: "Sounds/lonely.mp3" },
    { minPoints: 21, maxPoints: 31, text: "Du bist ein offener und herzlicher Mensch, der gerne Zeit mit anderen verbringt, ohne jedoch ständig im Mittelpunkt stehen zu müssen. Du schätzt gute Gespräche und genießt es, in Gesellschaft zu sein, weißt aber auch die Ruhe von Momenten alleine zu schätzen.", sound:"Sounds/normal.mp3" },
    { minPoints: 32, maxPoints: 40, text: "Du bist der Typ Mensch, der keine Gelegenheit auslässt, das Leben in vollen Zügen zu genießen! Deine Energie ist so ansteckend, dass man neben dir fast das Gefühl hat, Koffein intravenös verabreicht zu bekommen. Du liebst es, jeden Raum zum Strahlen zu bringen, sei es mit deinen Witzen, deinem Lachen oder deinem unaufhaltsamen Unsinn. Langeweile kennst du nicht. Deine Freunde wissen, dass sie sich mit dir einen verrückten Vogel an die Seite angelacht haben. aber hey – du bist einfach zu beschäftigt, das Leben zu genießen!",sound: "Sounds/littlecreep.mp3" },
    { minPoints: 41, maxPoints: 49, text: "Du bist das lebende Beispiel für einen psychisch gestörten Menschen - nein, spaß.Die Menschen fragen sich oft, was in deinem Kopf vor sich geht – und manchmal sind sie sich nicht sicher, ob sie es wirklich wissen wollen! Deine unvorhersehbaren Einfälle bringen ein ganz neues Level an Chaos in den Alltag. Du bist der Meister der Überraschungen: Ein Tag mit dir könnte alles beinhalten, vom spontanen Tanz im Regen bis hin zu philosophischen Diskussionen über die Bedeutung von fliegenden Fischen.Du machst das Leben für alle um dich herum zu einem faszinierenden, wenn auch manchmal verwirrenden Erlebnis!" ,sound: "Sounds/creepy.mp3"}
];
let totalPoints = 0;
let currentQuestionIndex = 0;

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question").innerText = currentQuestion.question;
    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    currentQuestion.options.forEach((option) => {
        const optionDiv = document.createElement("div");
        optionDiv.className = "option";

        if (currentQuestionIndex === 9 && option.tooltip) {
            optionDiv.setAttribute("data-tooltip", option.tooltip);
        }
        if (option.image) {
            const img = document.createElement("img");
            img.src = option.image;
            img.alt = option.text;
            img.className = "option-image";
            img.onclick = () => {
                if (option.text === "Theodore Tbag Bagwell") {
                    selectOption(option.points, true); // Spezieller Sound für Tbag
                } else {
                    selectOption(option.points); // Standard Klick-Sound
                }
            };
            optionDiv.appendChild(img);
        }
        const text = document.createElement("span");
        text.innerText = option.text;
        text.className = "option-text";
        text.onclick = () => {
            if (option.text === "Theodore Tbag Bagwell") {
                selectOption(option.points, true); // Spezieller Sound für Tbag
            } else {
                selectOption(option.points); // Standard Klick-Sound
            }
        };
        optionDiv.appendChild(text);

        optionsDiv.appendChild(optionDiv);
    });
}

function selectOption(points,isSpecial = false) {
    const clickSound = new Audio("Sounds/clicksound.mp3");
    const specialClickSound = new Audio("sounds/normal2.mp3");

    // Wähle den Sound abhängig davon, ob die Option "Tbag" ist
    const soundToPlay = isSpecial ? specialClickSound : clickSound;
    soundToPlay.play().catch(error => {
        console.log("Klick-Sound konnte nicht abgespielt werden:", error);
    });

    totalPoints += points;

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("quiz").style.display = "none";
    document.getElementById("result").style.display = "block";

    // Passende Beschreibung auf Basis der Punkte finden
    let resultText = "";
    let resultSound = "";
    for (const description of descriptions) {
        if (totalPoints >= description.minPoints && totalPoints <= description.maxPoints) {
            resultText = description.text;
            resultSound = description.sound;
            break;
        }
    }
    if (totalPoints >= 37 && totalPoints <= 49) {
        resultText += ' <a href="https://www.awo-psychiatriezentrum.de/" target="_blank">Falls du Hilfe benötigst,du kleiner Psychopath.</a>';
    }
    // HTML-Inhalt setzen
    document.getElementById("Personality").innerHTML = resultText;
    document.getElementById("points").innerText = totalPoints + " von " + 49;
    const audio = new Audio(resultSound);
    audio.play();

}

function restartQuiz() {
    totalPoints = 0;
    currentQuestionIndex = 0;
    document.getElementById("quiz").style.display = "block";
    document.getElementById("result").style.display = "none";
    loadQuestion();
}

window.onload = loadQuestion;
