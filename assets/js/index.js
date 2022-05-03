('#add_client').submit(function (event) {
  ('Data  Inserted Successfully')
})
('#update_client').submit(function (event) {
  event.preventDefault()
  const unindexed_array = (this).serializeArray()
  const data = {}
    .map(unindexed_array, function (n, i) {
      data[n.name] = n.value
    })
  console.log(data)
  const request = {
    url: `http://localhost:3000/api/clients/${data.id}`,
    method: 'PUT',
    data: data
  }
  let ajax

  ajax(request).done(function (response) {
    alert('Data Update Successfully!')
  })
})
if ((window.location.pathname)==  , '/') {
  ondelete = ('.table tbody td a.delete')
  ondelete.click(function () {
    const id = (this).attr('data-id')
    const request = {
      url: `http://localhost:3000/api/clients/${id}`,
      method: 'DELETE',
      data: data
    }
    if (confirm('DO you rellay want to delete this record?')) {
      ajax(request).done(function (response) {
        alert('Data Deleted Successfully!')
        location.reload()
      })
    }
  })
}
