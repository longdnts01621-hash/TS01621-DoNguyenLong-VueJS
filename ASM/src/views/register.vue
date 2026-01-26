<template>
  <div class="col-md-4 mx-auto">
    <h3 class="text-center">Đăng ký</h3>

    <form>
      <input class="form-control mb-2" placeholder="Tên">
      <input class="form-control mb-2" placeholder="Email">
      <input type="password" class="form-control mb-2" placeholder="Password">
      <fieldset class="row">
    <legend class="col-form-label col-sm-4 pt-0">Giới tính</legend>
    <div class="col-sm-8">
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
        <label class="form-check-label" for="gridRadios1">
          Nam
        </label>
      </div>

      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
        <label class="form-check-label" for="gridRadios2">
          Nữ
        </label>
      </div>
    </div>
  </fieldset>
      <button class="btn btn-secondary w-100">Register</button>
    </form>
  </div>
</template>
