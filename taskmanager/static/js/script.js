document.addEventListener('DOMContentLoaded', function() {
    // sidenav initialzation
    let sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);
  });

  // datepicker intialisation
  let datepicker = document.querySelectorAll('.datepicker');
  M.Datepicker.init(datepicker, {
    format: "dd mmmm, yyyy",
    i18n: {done: "Select"}
  });

  // select intialisation
  let selects = document.querySelectorAll('select');
  M.FormSelect.init(selects);

  // collapsable intialisation
  let collapsibles = document.querySelectorAll('.collapsible');
  M.Collapsible.init(collapsibles);

  // Modal intialisation
  let modal = document.querySelectorAll('.modal');
  M.Modal.init(modal);