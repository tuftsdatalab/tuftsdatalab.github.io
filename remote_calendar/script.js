function initiateCalendars() {
  document.getElementById('la-tab').click();
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
}

initiateCalendars()