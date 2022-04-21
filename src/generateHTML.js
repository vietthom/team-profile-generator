const generateManager =(manager)=>{
    return `
    <div class="card" style="width: 18rem;">
        <div class="card-header">
            <h5 class="card-title" style="color: white;">${manager.name}</h5>
            <div class="position">
                <i class="fas fa-coffee"></i>
                <h6 class="card-subtitle mb-2" style="color: white;">Manager</h6>
            </div>
        </div>
        <div class="card-body">                 
            <p class="id">ID: ${manager.id}</p>
            <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
            <p class="office">Office Number: ${manager.officeNumber}</p>
        </div>
    </div>
`;
};

const generateEngineer = (engineer) => {
    return`
    <div class="card" style="width: 18rem;">
        <div class="card-header">
            <h5 class="card-title" style="color: white;">${engineer.name}</h5>
            <div class="position">
                <i class="fas fa-glasses"></i>
                <h6 class="card-subtitle mb-2" style="color: white;">Engineer</h6>
            </div>
        </div>
        <div class="card-body">                 
            <p class="id">ID: ${engineer.id}</p>
            <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
            <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
        </div>
    </div>
    `;
};

const generateIntern = (intern)=>{
    return `
    <div class="card" style="width: 18rem;">
        <div class="card-header">
            <h5 class="card-title" style="color: white;">${intern.name}</h5>
            <div class="position">
                <i class="fas fa-glasses"></i>
                <h6 class="card-subtitle mb-2" style="color: white;">Junior Developer</h6>
            </div>
    </div>
        <div class="card-body">                 
            <p class="id">ID: ${intern.id}</p>
            <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
            <p class="school">School: ${intern.school}</p>
        </div>                
    </div>
    `;
};

generateHTML = (data) =>{
    pageArray = [];

    for (let i =0; i<data.length; i++){
        const employee = data[i];
        const role = employee.getRole();

        if(role === 'Manager'){
            const managerCard = generateManager(employee);

            pageArray.push(managerCard);
        }

        if(role === 'Engineer'){
            const developerCard = generateEngineer(employee);

            pageArray.push(developerCard);
        }

        if(role === 'Intern'){
            const internCard = generateIntern(employee);

            pageArray.push(internCard);
        }
    }

    const employeeCards = pageArray.join('');

    const generateTeam= generateTeamPage(employeeCards);
    return generateTeam;
};

const generateTeamPage = (employeeCards)=>{
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<!-- Font Awesome -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet"/>
<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet"/>
<!-- MDB -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.11.0/mdb.min.css" rel="stylesheet"/>
<link rel="stylesheet" href="style.css">
<title>Team Profile</title>
</head>
<body>
    <header>
     <div>
        <span><h1>My Team</h1></span>
     </div>
    </header>
    <main>
        <div class="container">
            <div class="row justify-content-around " id="team-cards">
                ${employeeCards}
            </div>
        </div>
    </main>

</body>
<!-- MDB -->
<script
  type="text/javascript"
  src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/4.0.0/mdb.min.js"
></script>
</html>
`;
}

module.exports = generateHTML;