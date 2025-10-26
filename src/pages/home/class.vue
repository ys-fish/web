<template>
  <div class="classBox">
    <div class="indexInner">
      <h4>原生鱼种类</h4>
      <div class="classType">
        <div class="typeItem" v-for="n in 10" :key="n" @click="$router.push('/type/13')">
          <v-img
            cover
            height="280"
            class="typeImg"
            src="https://cainwenxin.oss-cn-shenzhen.aliyuncs.com/02ede355cbbc51beb8f7ac78608e5d6f481032482.jpg"
          >
          </v-img>
          <h4 class="typeName">马口鱼属</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.classBox {
  width: 100%;
  box-sizing: border-box;
  padding: 15px 25px;
  overflow: hidden;
  overflow-y: auto;
  height: 100vh;
  background: #f9f9f9;
  .classType {
    margin-top: 10px;

    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 10px;
    .typeItem {
      //   width: 230px;
      height: 280px;
      border-radius: 20px;
      overflow: hidden;
      border: 3px solid white;
      position: relative;
      box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2),
        0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);
      .typeImg {
        // width: 230px;

        transition: all 0.3s;
        filter: blur(1px);
        &:hover {
          transform: scale(1.2);
          filter: blur(0px);
        }
      }
      .typeName {
        color: white;
        font-size: 20px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 1111;
      }
    }
  }
}
</style>
