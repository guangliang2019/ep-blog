<template>
  <div class="home">
    <a-row :gutter="16" class="home-blog-row">
      <a-col :md="18" :sm="24" :xs="24" :lg="18">
        <Card :title="['关注', '推荐', '热榜']" style="min-height: 75vh">
          <template #关注>1</template>
          <template #推荐>2</template>
          <template #热榜>3</template>
        </Card>
      </a-col>
      <a-col :md="6" :sm="24" :xs="24" :lg="6">
        <Card title="推荐作者"> </Card>
        <Card title="高赞回答"> </Card>
      </a-col>
      <a-col> </a-col>
    </a-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, ref } from "@vue/runtime-core";
import Card from "@/components/Card.vue";
import { BLOG_LIST } from "./mock";
import type { Blog } from "@/utils/constants";

export default defineComponent({
  components: {
    Card,
  },
  setup() {
    const blogList = ref<Array<Blog>>([]);

    //请求相关
    const getBlogList = (): void => {
      //经过一番请求之后
      blogList.value = BLOG_LIST;
    };

    onBeforeMount(() => {
      getBlogList();
    });
    return {
      blogList,
    };
  },
});
</script>

<style lang="less" scoped>
@import "../utils/media.less";
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  &-blog-row {
    width: 100vw;
    max-width: 1440px;
    padding: 0 8px;
    box-sizing: border-box;
    min-height: 90vh;
  }
}
.loading {
  width: 100%;
  height: 56vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
