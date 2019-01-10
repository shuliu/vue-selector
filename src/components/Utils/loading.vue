<template>
  <div class="loading">
    <div class="loading-bg"></div>
    <div class="loading-msg">
      <div id="block_ui" align="center">
        <img src="../../assets/loader.gif" />
      </div>
    </div>
  </div>
</template>

<style>
.loading-bg {
  z-index: 2000;
  border: medium none;
  margin: 0px;
  padding: 0px;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  background-color: rgb(0, 0, 0);
  opacity: 0.6;
  cursor: wait;
  position: fixed;
}

.loading-msg {
  z-index: 2011;
  position: fixed;
  padding: 15px;
  margin: 0px;
  width: 30%;
  top: 40%;
  left: 35%;
  text-align: center;
  color: rgb(255, 255, 255);
  border: medium none;
  background-color: rgb(255, 255, 255);
  cursor: wait;
  opacity: 0.5;
  border-radius: 10px;
}
</style>