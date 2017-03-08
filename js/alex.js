$(document).ready(function () {
   $("#submit").click(function () {
    database.ref().push($("#feedback").val());
   });
  });