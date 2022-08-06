<template>
  <div id="upload-video">
    <input
      ref="videos"
      type="file"
      name="files"
      multiple
      required
      accept="video/mp4,video/avi"
    /><br />
    标题：<input ref="text" type="text" value="123" /> 标题：<input
      ref="text"
      type="text"
      value="123"
    />
    标题：<input ref="text" type="text" value="123" />

    <button @click="upload">上传</button>

    <div class="upload-progressbar">
      <div ref="progress" class="upload-progress"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UploadVideo",

  methods: {
    async upload() {
      let video = this.$refs.videos;
      // let text = this.$refs.text;
      let files = video.files,
        fileLen = files.length;
      if (fileLen < 1) {
        alert("你还没选择文件");
        return;
      }
      if (fileLen > 5) {
        alert("只能选择5个文件");
        return;
      }
      let videoInfo = {
        name: "第一个视频",
        author_id: this.$store.state.userInfo.id,
        comments_id: 1,
      };
      console.log(files);
      let param = new FormData();
      param.append("video", files[0]);
      param.append("videoInfo", JSON.stringify(videoInfo));
      let config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        transformRequest: [
          function (data) {
            return data;
          },
        ],
        onUploadProgress: (e) => {
          console.log(e);
          let persent = ((e.loaded / e.total) * 100) | 0;
          this.$refs.progress.style.width = persent + "%";
          if (e.loaded === e.total) {
            alert("完成！");
          }
        },
      };
      this.$http.post("http://localhost:4536/upload/video", param, config);
    },
  },
  mounted() {
    let videos = this.$refs.videos;
    let text = this.$refs.text;
    console.dir(videos);
    console.dir(text);
    videos.onchange = function () {
      let files = videos.files,
        fileLen = files.length;

      let fileMaxSize = 1024 * 1024 * 1024 * 4;
      for (var i = 0; i < fileLen; i++) {
        let file = files[i];
        console.log(file, fileMaxSize);
        if (file.size > fileMaxSize) {
          alert("文件超过大小4G");
        }
      }

      console.log(fileLen);
    };
  },
};
</script>

<style scoped>
#upload-video {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  /* justify-content: center; */
}
.upload-progressbar {
  width: 400px;
  height: 40px;
  border: 1px solid black;
}
.upload-progress {
  width: 50%;
  height: 100%;
  background-color: aqua;
}
</style>
