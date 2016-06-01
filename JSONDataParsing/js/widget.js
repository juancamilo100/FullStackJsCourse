var request = new XMLHttpRequest();

request.onreadystatechange = function() {
    if (request.readyState === 4) {
        var employees = JSON.parse(request.responseText);
        var statusHTML = '<ul class="bulleted">'
        for (var i = 0; i < employees.length; i++) {
          if (employees[i].inoffice === true) {
            statusHTML += '<li class="in">';
          }
          else {
            statusHTML += '<li class="out">';
          }
          statusHTML += employees[i].name;
          statusHTML += '</li>';
        }
        statusHTML += '</ul>';
    }

    document.getElementById('employeeList').innerHTML = statusHTML;
}
request.open('GET', 'data/employees.json');
request.send();
