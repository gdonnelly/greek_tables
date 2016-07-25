var data = d3.csv("greek.csv", function(error, data) {
     console.log(data);
    // function makeTable(a) {
     var l = $("#myTable"),
        m = $("<tbody></tbody>"),
        n = _.template("<tr><td><%= name %></td><td><%= org %></td><td><%= affil %></td><td><%= school %></td><td><%= company %></td><td><%= industry %></td></tr>");
        _.each(data, function(data) {
            var b = n(data);
            m.append(b);
        }),
        l.append(m);

    $(function(){
    $("#myTable").dataTable();
        })
    // };
});

// var template = _.template("<tr><td><%= name %></td><td><%= org %></td><td><%= school %></td><td><%= affil %></td><td><%= school %></td><td><%= company %></td><td><%= industry %></td>"),
//     tableContainer = $("#myTable")
//     tableBody = $("<tbody></tbody>");
// d3.csv("greek.csv", function(data){
//   _.each(data, function(d){
//     tableBody.append(template(d));
//   })
//   tableContainer.append(tableBody)
// })
