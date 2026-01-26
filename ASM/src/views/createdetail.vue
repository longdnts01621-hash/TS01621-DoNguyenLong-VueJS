<template>
<form class="row">
  <div class="col-md-6">
    <div class="mb-3">
    <label for="inputtieude4" class="form-label">Tiêu đề</label>
    <input type="text" class="form-control" id="inputtieude4">
  </div>
  <div class="md-3">
    <label for="inputnoidung4" class="form-label">Nội dung</label>
    <input type="text" class="form-control" id="inputnoidung4">
  </div><br>
  <div class="mb-3">
    <label for="inputtacgia4" class="form-label">Thêm ảnh</label>
    <input type="file" name="file">
    </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Đăng</button> 
</div>
              
  </div>
</form>


<table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Tiêu đề</th>
      <th scope="col">Nội dung</th>
      <th scope="col">Tác giả</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Dream Flower</td>
      <td>...</td>
      <td>Author 1</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Lien Quan</td>
      <td>...</td>
      <td>Author 2</td>
    </tr>
   
  </tbody>
</table>
</template>
