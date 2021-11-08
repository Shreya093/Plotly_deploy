d3.selectAll("body").on("change", updatePage);

function updatePage() {
  var dropdownMenu = d3.selectAll("#selectOption").node();
  var dropdownMenuID = dropdownMenu.id;
  var selectedOption = dropdownMenu.value;

  console.log(dropdownMenuID);
  console.log(selectedOption);

  var subjectIdNode = document.getElementById('selectOption');
  var value = subjectIdNode.options[subjectIdNode.selectedIndex].text;
  console.log("The selected value = " + value);
  
};
