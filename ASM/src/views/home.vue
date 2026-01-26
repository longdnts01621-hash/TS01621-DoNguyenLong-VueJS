<template>
  <div class="countainer">
    <div class="row">
      <div id="carouselExample" class="carousel slide col-6">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img width="50%" height="50%" :src="carouselImages[0]" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img width="50%" height="50%" :src="carouselImages[1]" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img width="50%" height="50%" :src="carouselImages[2]" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<div class="col-4">
  <h1>Một số bài viết mới</h1>
  <ul class="list-group">
  <li class="list-group-item">Ăn healthy có ích hay không</li>
  <li class="list-group-item">Dầu thực vật hay dầu động vật tốt hơn</li>
  <li class="list-group-item">Ăn nhiều loại rau có tác dụng gì</li>
</ul>
</div>
      <div class="col-12 mt-3 text-center">
    <h1>Danh sách bài viết</h1>
</div>
<div class="col-sm-4 col-4">
<div class="card">
<img class="img-fluid rounded my-2" width="100%" height="70%" :src="items[0].image" alt="Hình ảnh" />
<div class="card-body">
<h3 class="card-title">{{ items[0].title }}</h3>
<p class="card-text">{{ items[0].content }}</p>
<button class="btn btn-info">Xem chi tiết </button>
</div>
</div>
</div>
<div class="col-sm-4 col-4">
<div class="card">
<img class="img-fluid rounded my-2" width="100%" height="70%" :src="items[1].image" alt="Hình ảnh" />
<div class="card-body">
<h3 class="card-title" >{{ items[1].title }}</h3>
<p class="card-text">{{ items[1].content }}</p>
<button class="btn btn-info">Xem chi tiết </button>
</div>
</div>
</div>
<div class="col-sm-4 col-4">
<div class="card">
<img  class="img-fluid rounded my-2" width="100%" height="70%" :src="items[2].image" alt="Hình ảnh" />
<div class="card-body">
<h3 class="card-title" >{{ items[2].title }}</h3>
<p class="card-text">{{ items[2].content }}</p>
<button class="btn btn-info" >Xem chi tiết </button>
</div>
</div>
</div>
</div>
</div>

  
  
</template>


<script setup>
// Import hình ảnh từ thư mục assets
import img1 from '../assets/images/eat-clean.png';
import img2 from '../assets/images/sesameoil_300x300.jpg';
import img3 from '../assets/images/spinach_300x300.jpg';
import img4 from '../assets/images/video1.jpg';
import img5 from '../assets/images/video2.jpg';
import img6 from '../assets/images/video3.jpg';

const items = ([
{ title: 'Ăn healthy có ích hay không', content: '...', image: img1
},
{ title: 'Dầu thực vật hay dầu động vật tốt hơn', content: '...',
image: img2 },
{ title: 'Ăn nhiều loại rau có tác dụng gì', content: 'Rau má...', image:
img3 },
]);
const carouselImages = [img4, img5, img6];

</script>
