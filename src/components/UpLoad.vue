<template>
  <div id="upload">
    <div class="upload-left">
      <ul class="upload-sel">
        <li><router-link to="/upload/video"> 视频 </router-link></li>
        <li><router-link to="/upload/music"> 音频 </router-link></li>
        <li><router-link to="/upload/painting"> 插画 </router-link></li>
        <li><router-link to="/upload/novel"> 说说 </router-link></li>
      </ul>
    </div>

    <div class="upload-right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "UpLoad",
};
</script>

<style>
#upload {
  display: flex;
  position: relative;
}
.upload-left {
  width: 250px;
  height: 700px;
  background-color: azure;
  margin-right: 20px;
  position: relative;
  left: 0px;
}

.upload-right {
  width: 500px;
  height: 700px;
  background-color: aliceblue;
  flex: 1;
  display: flex;
  flex-direction: row;
}

.upload-sel {
  font-size: 25px;
  color: black;
}
.upload-right {
  color: rgb(30, 30, 30);
}
</style>
