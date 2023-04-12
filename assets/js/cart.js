$(document).ready(function() {
    $('.delete-row').click(function(event) {
      event.preventDefault();
      $(this).closest('tr').remove();
      updateTotal();
    });
  
    function updateTotal() {
      let total = 0;
      $('tbody tr').each(function(index, element) {
        let quantity = parseInt($(element).find('input').val());
        let price = parseInt($(element).find('td:nth-child(4)').text().replace('VND', ''));
        let rowTotal = quantity * price;
        $(element).find('td:nth-child(5)').text(rowTotal + "VND");
        total += rowTotal;
      });
      $('tfoot tr td:nth-child(2)').text(total + "VND");
    }
  });
  