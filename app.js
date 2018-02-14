$(document).ready(function() {
  var operation = "";
  var arr = [];
  var v = "";
  var bool;
  var temp = "";
  var second = false;

  $("button")
    .not(
      "#addButton,#subtractButton,#multiplyButton,#equalsButton,#divideButton"
    )
    .click(function() {
      if (temp != "" && second) {
        $("#display").val("");
        v = $(this).val();
        $("#display").val($("#display").val() + v);
        arr.push(v);
        v = "";
        bool = false;
        operation = "";
        second = false;
      } else {
        v = $(this).val();
        $("#display").val($("#display").val() + v);
        arr.push(v);
        v = "";
        bool = false;
        operation = "";
      }
    });

  $("#addButton, #subtractButton,#multiplyButton,#divideButton").click(
    function() {
      if (temp === "") {
        if (operation === "") {
          operation = $(this).text();
          $("#display").val("");
        } else {
          arr.pop();
          operation = $(this).text();
        }

        arr.push(operation);
      } else {
        operation = $(this).text();
        arr = [];
        arr.push(temp);
        arr.push(operation);
        second = true;
      }
    }
  );

  $("#clearButton").click(function() {
    $("#display").val("");
    arr = [];
  });

  $("#equalsButton").click(function() {
    if (bool) {
      arr.push(arr[arr.length - 2]);
      arr.push(arr[arr.length - 2]);
      var input = arr.join("");
      temp = eval(input);
      $("#display").val(eval(input));
    } else {
      var input = arr.join("");
      temp = eval(input);
      $("#display").val(eval(input));
    }
    bool = true;
  });
});
