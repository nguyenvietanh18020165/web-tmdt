$.ajaxSetup({
  headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
  }
});

function removeRow(id, url)
{
  if(confirm('Bạn có chắc muốn xóa không?'))  {
    $.ajax({
      type: 'DELETE',
      datatype: 'JSON',
      data: { id },
      url: url,
      success: function(result) {
        console.log(result);
      }
    })
  }
}
