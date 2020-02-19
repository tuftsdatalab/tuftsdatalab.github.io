function setCookie(cname, cvalue, exdays) {
    var d, expires;
    d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    expires = 'expires=' + d.toUTCString();
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}

function getCookie(cname) {
    var name, ca, i, c;
    name = cname + '=';
    ca = document.cookie.split(';');
    for (i = 0; i < ca.length; i += 1) {
        c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return null;
}

function initiateCalendars() {
    var calendar = getCookie('calendar');
    if (calendar === 'boston') {
        document.getElementById('boston-tab').click();
        setCookie('calendar', 'boston', 365);
    } else {
        document.getElementById('medford-tab').click();
        setCookie('calendar', 'medford', 365);
    }
}

function toggleTab(evt, ID) {
  var i, tablinks;  
  tabcontent = document.getElementsByClassName('tab-content');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }
  tablinks = document.getElementsByClassName('tab-link');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
  }
  document.getElementById(ID + '-content').style.display = 'block';
  evt.currentTarget.className += ' active';
  setCookie('calendar', ID, 365);
}

initiateCalendars()