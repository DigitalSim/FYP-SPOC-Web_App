function convertToSingaporeTime(utcTimeString) {
    const options = {
        year: 'numeric', month: '2-digit', day: '2-digit',
        hour: '2-digit', minute: '2-digit', second: '2-digit',
        timeZone: 'Asia/Singapore' // Set to the appropriate time zone
    };

    const utcTime = new Date(utcTimeString);
    return utcTime.toLocaleString(undefined, options);
}

function isLocalhost(url) {
    return url.includes('localhost') || url.includes('127.0.0.1');
}

API_URL = (isLocalhost(location.hostname) != true ? 'https://' + location.hostname : 'http://localhost:3000');

function addToTable(AdminNo, StudentName, AttemptKera, AttemptPhoro, CompleteKera, CompletePhoro, FirstAttempt, LastAttempt) {
    const template = document.querySelector('#row-template');
    const row = template.content.firstElementChild.cloneNode(true);
    row.querySelector('.AdminNo').textContent = AdminNo;
    row.querySelector('.StudentName').textContent = StudentName;
    row.querySelector('.AttemptKera').textContent = AttemptKera;
    row.querySelector('.AttemptPhoro').textContent = AttemptPhoro;
    row.querySelector('.CompleteKera').textContent = CompleteKera;
    row.querySelector('.CompletePhoro').textContent = CompletePhoro;
    row.querySelector('.FirstAttempt').textContent = convertToSingaporeTime(FirstAttempt);
    row.querySelector('.LastAttempt').textContent = convertToSingaporeTime(LastAttempt);

    document.querySelector('#module-tbody').appendChild(row);
}

// Call addToTable with your data
// addToTable(AdminNo, StudentName, AttemptKera, AttemptPhoro, CompleteKera, CompletePhoro, FirstAttempt, LastAttempt);
