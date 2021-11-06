function searchTable() {
  var input, filter, table, table_caption, tr, td, row_count, i, j, display;
  table = document.getElementById("search_tbl");
  table_caption = document.getElementById("search_caption");
  tr = table.getElementsByClassName("search_row");
  input = document.getElementById("search_input");
  filter = input.value.toUpperCase();
  row_count = 0;
  if (filter) { // Loop through table rows, hide if not matching search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td");
      for (j = 0; j < td.length; j++) {
        if (td[j].textContent.toUpperCase().indexOf(filter) > -1) {
          display = ""; //Display row if one field contains the filter
          //tr[i].style.display = ""; 
          row_count++;
          break;
        } else { // Hide otherwise 
          //tr[i].style.display = "none";
          display = "none";
        }
      }
      tr[i].style.display = display;
    }
    table_caption.textContent = "Antall treff: " + row_count;
  } else { // Loop through table rows, show all
    for (i = 0; i < tr.length; i++) { 
      tr[i].style.display = "";
    }
    table_caption.textContent = "";
  }
}
