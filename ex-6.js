const devTeam = {
    lead: {
        name: "Alice",
        skills: ["JavaScript", "React", "Node.js"]
    },
    testers: [
        { name: "Bob", skills: ["HTML", "CSS", "JavaScript"] },
        { name: "Charlie", skills: ["Python", "Django", "PostgreSQL"] }
    ],
    projectName: "WebApp"
};

// Gli oggetti in memoria sono 4:
// - devTeam
// - lead
// - testers[0], di nome 'Bob'
// - testers[1], di nome 'Charlie'

const teamLead = devTeam.lead;

teamLead.skills.push("GraphQL");

const devTeamCopy = JSON.parse(JSON.stringify(devTeam));

devTeamCopy.projectName = "MobileApp";

const testerGenerator = (name) => {

    const tester = {name, skills: []};

    const possibleSkills = ["JavaScript", "React", "Node.js", "HTML", "CSS", "Python", "Django", "PostgreSQL"];

    let l = possibleSkills.length;

    for (let i = 0; i < 3; i ++) { /* ho usato questo stratagemma per evitare ripetizioni nelle skills */

        const n = Math.floor(Math.random() * l);
        
        tester.skills.push(possibleSkills[n]);

        possibleSkills.splice(n, 1);

        l --;
    }

    return tester;
}

devTeamCopy.testers.push(testerGenerator('Dwyane'));

// Sono stati creati altri 2 oggetti:
// - devTeamCopy
// - tester, 'Dwyane'
// la variabile 'teamLead' creata inizialmente era soltanto una reference all'oggetto 'lead'.


