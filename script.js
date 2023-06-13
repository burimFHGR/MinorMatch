const API_KEY = "HIER API KEY EINGEBEN";
const submitButton = document.querySelector('#submit');
const outputElement = document.querySelector('#output');
const inputElement = document.querySelector('input');
const historyElement = document.querySelector('.history');
const buttonElement = document.querySelector('button');




const minors = [
  {
    id: "1",
    minor: "3D Motion Design",
    beschreibung: "In diesem Modul werden Studierende solide Kenntnisse im Bereich 3D Motion Design vermittelt, um eigene animierte Projekte zu planen und umzusetzen. Das Semesterprojekt beinhaltet die Entwicklung eines Storyboards für einen TV-Ident und die praktische Umsetzung mithilfe von 3D-Animationstechniken. Nach erfolgreicher Teilnahme sind die Studierenden in der Lage, ihr eigenes TV-Ident zu erstellen."
  },
  {
    id: "2",
    minor: "Designing Multimedia Experiences",
    beschreibung: "Dieses Minor bietet eine virtuelle Version des Minors Eventinszenierung an. Die Studierenden lernen, wie man Besuchern von verschiedenen Orten und Events ein beeindruckendes Erlebnis bietet, indem sie Storytelling und verschiedene Inszenierungselemente wie Geräusche, Farben und Düfte einsetzen. Das Ziel ist es, eine Botschaft oder ein Produkt emotional zu verbinden und Aufmerksamkeit zu generieren." 
  },
  {
    id: "3",
    minor: "Eventinszenierung",
    beschreibung: "In diesem praxisnahen Minor geht es darum, Besuchern ein beeindruckendes Erlebnis zu bieten und eine Botschaft oder ein Produkt mit Emotionen zu verbinden. Dazu werden verschiedene Inszenierungselemente wie Storytelling, Geräusche, Farben und visuelle Reize genutzt. Durch Workshops mit Praxispartnern werden bestehende inszenierte Welten analysiert und neue Erlebnis-Konzepte erstellt."
  },
  {
    id: "4",
    minor: "Looks Bildgestaltung",
    beschreibung: "Im Minor geht es um die Verwendung von Cinematic Looks mit digitalen Kameras. Die Studierenden lernen die Voraussetzungen und Generierung von Looks kennen, erkunden deren Einfluss auf die Wirkung und Stimmung von Bildern und nutzen Bildprofile zur Erweiterung des Kontrastumfangs in der Postproduktion. In praxisnahen Übungen wenden sie verschiedene Techniken an und realisieren eine thematisch freie filmische Gruppenarbeit."
  },
  {
    id: "5",
    minor: "Audio für das 21. Jahrhundert",
    beschreibung: "Radio ist ursprünglich als Sender-Empfänger-Konzept bekannt, bei dem Radiostationen Programme senden und Zuhörer diese empfangen. Heutzutage wird der Begriff Radio jedoch breiter definiert und umfasst nicht nur die lineare Übertragung, sondern bietet auch neue Möglichkeiten und Herausforderungen. Radio ist nicht tot, sondern wird neu erfunden."
  },
  {
    id: "6",
    minor: "Corporate Social Media",
    beschreibung: "Social Media verändert unsere Kommunikation und Medienlandschaft grundlegend, mit Chancen wie direkter Dialog, Datenanalyse und gezielter Zielgruppenansprache, aber auch Risiken wie Shitstorms und Fake News. Das Modul behandelt die Neuausrichtung der Unternehmenskommunikation auf Social Media und vermittelt Grundlagen zu Themen wie Content Marketing, SEO und digitalem Storytelling, um eine praxisorientierte Toolbox zu entwickeln und das Gelernte in einer Projektarbeit umzusetzen."
  },
  {
    id: "7",
    minor: "Artificial Intelligence",
    beschreibung: "Das Modul richtet sich an Studierende ohne technische Vorkenntnisse und bietet eine Einführung in KI-Technologien und -Software. Es ermöglicht kreatives Experimentieren und die Entwicklung eigener KI-Ideen mithilfe von JavaScript und Python. Der Unterricht findet auf Englisch statt."
  },
  {
    id: "8",
    minor: "Creative Writing",
    beschreibung: "Das Minor Creative Writing bietet die Möglichkeit, alte Denkmuster abzulegen und die Kraft der Sprache neu zu entdecken. Durch intuitive Schreibübungen, gemeinsame Textanalysen und Inputs von erfahrenen Schriftstellern und Spoken-Wort-Künstlern werden neue Ideen entwickelt und ein individueller Schreibstil gefördert. Dies ermöglicht intensive Lesemomente und vermittelt wertvolle Kompetenzen für die kreative und innovative Bewältigung der Anforderungen in der schnelllebigen Berufswelt."
  },
  {
    id: "9",
    minor: "Animation im Dokumentarfilm",
    beschreibung: "In diesem Modul wird untersucht, wie Animation im Bereich des Dokumentarfilms genutzt werden kann, um hybride Erfahrungsräume zu schaffen und die Grenzen der Realität zu überwinden. Es werden Ideen entwickelt, Konzepte entworfen und ein Teaser für einen fiktiven Dokumentarfilm erstellt, wobei der Fokus auf den Übergängen zwischen Realfilm und Animation liegt. Vorkenntnisse im Bereich Animation werden vorausgesetzt."
  },
  {
    id: "10",
    minor: "Make it sound!",
    beschreibung: "Im Minor Make It Sound lernen Studierende den gesamten Prozess der Filmvertonung kennen, von der Konzeption bis zur fertigen Produktion. Sie werden in Musikproduktion, Sounddesign und Dialogbearbeitung eingeführt und erlernen den Umgang mit Musikproduktionstools, Audiobearbeitung und Sounddesigntechniken. Das Mixing und Mastering von Audiomaterial wird ebenfalls behandelt. Es sind keine besonderen musikalischen Vorkenntnisse erforderlich, da die Studierenden mit ihren eigenen Fähigkeiten arbeiten und eigene Sounddesign-Artefakte erstellen können."
    },
  {
    id: "11",
    minor: "International and Intercultural Communication",
    beschreibung: "Der Minor in Internationaler und interkultureller Kommunikation bietet Studierenden die Möglichkeit, ihre Fähigkeiten in der Medien- und Kommunikationsarbeit mit Menschen aus anderen Kulturen zu verbessern. Durch die Entwicklung von Kulturverständnis, interkultureller Interaktion und Anpassungsfähigkeit sollen die Studierenden in der Lage sein, erfolgreich in internationalen und interkulturellen Situationen zu kommunizieren und einen flexibleren Denkansatz zu entwickeln, der ihnen in ihrer Karriere von Nutzen sein wird. Der Unterricht findet auf Englisch statt." 
  },
  {
    id: "12",
    minor: "Werbespot und Imagefilm",
    beschreibung: "Hier lernen Studierende die Besonderheiten und Möglichkeiten der Werbung kennen. Sie lernen, prägnante Botschaften mit überzeugenden Geschichten zu vermitteln und beschäftigen sich mit Radiospots, TV-Spots und Imagefilmen sowie verschiedenen Erzählstilen. Durch praktische Übungen in kleinen Teams konzipieren und produzieren sie einen Radiospot und einen Werbespot. Nach Abschluss des Moduls sind die Studierenden mit der Entwicklung audiovisueller Werbung vertraut, können Werbespots im Team umsetzen, die Grenzen und Potenziale von Radiospots erkennen und ansprechende Radiospots erstellen."
  },
  {
    id: "13",
    minor: "New Independent Media",
    beschreibung: "Die Welt der neuen unabhängigen Medien wächst rasant, mit Start-ups wie www.tsüri.ch, www.republik.ch, www.bajour.ch, www.babanews.ch und www.maximumcinema.ch. In Gesprächen mit den Teams erfahren wir, wie sie ihre Projekte gegründet haben, über redaktionelle Arbeit, Community-Aufbau, Branding und Finanzierung durch Crowdfunding oder Stiftungen. Professionelle Influencer teilen ihr Wissen über Reichweite, Engagement und Werbedeals, während wir wertvolles Insider-Wissen erhalten und uns für zukünftige Studien- und Berufsmöglichkeiten vernetzen können."},
  {
    id: "14",
    minor: "Projektmanagement",
    beschreibung: "Dieser Minor vermittelt praktische Projektmanagement-Fähigkeiten und -Kompetenzen, um in der Berufswelt erfolgreich zu sein. Es werden Themen wie Planung, Organisation, Kontrolle, Soft Skills und Projektmanagement-Konzepte behandelt, um Studierende auf die Herausforderungen von Projekten vorzubereiten und ihnen die Fähigkeit zu geben, eigenständig und ergebnisorientiert zu arbeiten. Fallbeispiele und Optimierung der persönlichen Arbeitsweise sind ebenfalls Teil des Programms." 
  },
  {
    id: "15",
    minor: "Digital Marketing and Advertising",
    beschreibung: "Etwa 30% der Absolventen des Studiengangs MMP arbeiten in den Bereichen Werbung und Marketing. Digitale Werbung ist weltweit der wichtigste Werbekanal und hat das Farbfernsehen überholt. Das Minor Digital Marketing vermittelt Grundlagen des Online-Marketings, inklusive der Nutzung von Google, YouTube, Facebook, Instagram und TikTok, sowie Werbeformen wie Influencer-Marketing und Content Marketing durch praktische Übungen und Referenten aus der Branche."
    },
  {
    id: "16",
    minor: "Newsroom und investigativer Journalismus",
    beschreibung: "Die Digitalisierung des Journalismus hat die Produktion von Inhalten grundlegend verändert, mit multimedialen Newsrooms, ständiger Aktualisierung und Interaktion über Kommentar-Bereiche und soziale Medien. Die Nutzung von OSINT ermöglicht detektivische Recherchen in der digitalen Welt und wird von renommierten Schweizer Medienunternehmen wie Tamedia, Ringier, CH Media, Watson, NZZ und SRF in Workshops und Praxis-Übungen vermittelt, angeführt von Peter Wälty, dem Erfinder des erfolgreichsten News-Portals der Schweiz, 20 Minuten."
},
  {
    id: "17",
    minor: "Postproduction",
    beschreibung: "Das Minor vermittelt praxisorientierte Kenntnisse über wichtige Produktionstechniken und Nachbearbeitung von digitalem Bildmaterial. Die Teilnehmer lernen den Umgang mit After Effects, Premiere und DaVinci Resolve durch Tutorials und setzen ihr eigenes Projekt um, bei dem sie sich mit Greenbox-Aufnahmen, Special Effects, Schnitt-Techniken, Ton und Farben auseinandersetzen. Nach Abschluss des Moduls können die Studierenden digitales Bewegtbildmaterial mit 3D-Compositing bearbeiten, professionelle Editing-Anwendungen nutzen und die passende Postproduktionstechnik für jedes Projekt auswählen und umsetzen." 
  },
  {
    id: "18",
    minor: "Minor XR Content Production",
    beschreibung: "Hier lernen die Teilnehmer, realistische 3D-Modelle mithilfe von Fotogrammetrie zu erstellen und diese in 3D-Animationsfilmen, Spielen oder erweiterten Realitätsanwendungen zu verwenden. Sie erwerben Kenntnisse über Virtual, Augmented und Mixed Reality sowie deren Anwendungsbereiche und bewährte Praktiken. Darüber hinaus entwickeln sie ein Verständnis für die Benutzererfahrung und das Benutzeroberflächendesign in XR-Konzepten." 
  },
  {
    id: "19",
    minor: "Game Design and Interactive Storytelling",
    beschreibung: "Der Minor konzentriert sich auf das Gestalten von virtuellen Welten, um die Spieler/Nutzer körperlich und emotional zu beeinflussen. Der Kurs umfasst Papier-Prototyping-Methoden, um Konzepte wie sensorisches Design, Spielmechanik, Storytelling und Charakterdesign zu entwickeln und zu simulieren. Programmierkenntnisse sind nicht erforderlich, jedoch werden zeitlose Kunst- und Designtechniken für fortschrittliche interaktive Erfahrungen vermittelt." 
  },
  {
    id: "20",
    minor: "WebTech",
    beschreibung: "Im Minor Webtech beschäftigen sich die Studierenden mit verschiedenen Webtechnologien wie HTML, CSS, JavaScript, PHP und Datenbanken. Sie wählen ein Thema aus, bereiten Präsentationen vor, führen Übungen durch und setzen schließlich eigene Projekte um. Der Abschluss bildet ein Hackathon, bei dem sie ihre Projekte präsentieren und ihre Arbeit kommunizieren können." 
  },
  {
    id: "21",
    minor: "WordPress DeepDive",
    beschreibung: "In diesem Minor geht es um eine detaillierte und vertiefte Beschäftigung mit WordPress. Die Themen umfassen Themes, Plugins, das Dashboard und Erweiterungen aller Art. Ziel ist es, nach dem Minor sicher im Umgang mit WordPress zu sein und eigene Erweiterungen entwickeln zu können."  
  },
  {
    id: "22",
    minor: "Zeichnen können ?",
    beschreibung: "Der Kurs konzentriert sich auf die Vielfalt des Zeichnens und ermutigt die Teilnehmer, ihre eigene zeichnerische Sprache zu entdecken und weiterzuentwickeln. Es werden verschiedene zeitgenössische Ausdrucksformen der Zeichnung erkundet und die Schüler entwickeln differenzierte Wahrnehmungskonzepte, um ihre Umwelt zeichnerisch darzustellen. Der Kurs führt die Teilnehmer von der Idee bis zur Umsetzung ihrer Zeichnungen." 
   },
  {
    id: "23",
    minor: "Learning from the professionals",
    beschreibung: "Interdisziplinäre Teams bieten eine jährliche Studienreise zur Biennale in Venedig an, wo die neuesten Innovationen in Architektur, Kunst und Multimedia erkundet werden können. Die Studierenden werden in die Installationen und Anwendungen eingeführt und erstellen Skizzen, um ihre Denkprozesse zu dokumentieren. Die Teilnahme erfordert das Vorwissen im Modul Sketch&Draw."
  }
]

console.log(minors)

// Minor + Beschreibung
let alleMinorbeschreibung = "";
for (let i = 0; i < minors.length; i++) {
  alleMinorbeschreibung += minors[i].minor + ": " + minors[i].beschreibung + "\n";
}

// Minor
let alleMinor = "";
for (let i = 0; i < minors.length; i++) {
  alleMinor += minors[i].minor + "\n";
}

// // Beschreibung
// let alleBeschreibung = "";
// for (let i = 0; i < minors.length; i++) {
//   alleBeschreibung += minors[i].beschreibung + "\n";
// }

console.log(alleMinorbeschreibung);
console.log(alleMinor);









function findMinor(input) {
  const userInput = input.toLowerCase();

  minors.forEach((minor) => {
    const minorName = minor.minor.toLowerCase();
    const minorDescription = minor.beschreibung.toLowerCase();

    const nameScore = calculateScore(userInput, minorName);
    const descriptionScore = calculateScore(userInput, minorDescription);

    const totalScore = nameScore + descriptionScore;

  });
}

function calculateScore(input, text) {
  let score = 0;

  const inputWords = input.split(" ");
  const textWords = text.split(" ");

  inputWords.forEach((inputWord) => {
    textWords.forEach((textWord) => {
      if (textWord.includes(inputWord)) {
        score++;
      }
    });
  });

  return score;
}









async function holeNachricht() {
  console.log('warten auf Antwort');
  const options = {
    method: "POST",
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: inputElement.value
        }
        ,  
        {
            role: "system",
            content: "Agiere als ein Assistent und schlage dem Benutzer eine begrenzte Liste von Minor-Fächern vor, die zum eingegeben Text passen. Spreche den Benutzer per Du an. Liste nicht alle Fächer auf , höchstens 3! Hier sind die Minor-Fächer: " + alleMinorbeschreibung
         }
      ],

    })
  };


  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', options);
    const data = await response.json();
    console.log(data);

// Typewriter effect
const messageContent = data.choices[0].message.content;
if (messageContent) {
  outputElement.textContent = ""; // Clear existing content
  const characters = messageContent.split("");
  let i = 0;
  const intervalId = setInterval(() => {
    outputElement.textContent += characters[i];
    if (i === 0) {
      document.querySelector('#lds-ellipsis').style.display = 'none';
    }
    i++;
    if (i === characters.length) {
      clearInterval(intervalId);
      buttonElement.addEventListener('click', clearInput);
    }
  }, 40); // Geschwindigkeit anpassen
}

    // History
    if (messageContent && inputElement.value) {
      const pElement = document.createElement('p');
      pElement.textContent = inputElement.value;
      pElement.addEventListener('click', () => changeInput(pElement.textContent));
      historyElement.append(pElement);
 
    }
  } catch (error) {
    console.log(error);
  }
}

inputElement.addEventListener('keydown', function(event) {
    if (event.key === "Enter" && inputElement.value.trim() !== "") {
      event.preventDefault();
      holeNachricht();
      document.querySelector('#lds-ellipsis').style.display = 'inline-block';
    }
  });

  submitButton.addEventListener('click', function() {
    holeNachricht();
    document.querySelector('#lds-ellipsis').style.display = 'inline-block';
  });
  

function clearInput() {
  inputElement.value = '';
  outputElement.innerText = '';
}