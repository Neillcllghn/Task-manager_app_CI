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
  let modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
  });