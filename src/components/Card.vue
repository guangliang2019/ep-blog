<template>
  <div class="blog-card">
    <div v-if="!isTab" class="blog-card-header">
      <span class="blog-card-header-title" :heading="5">{{ title }}</span>
    </div>
    <slot v-if="!isTab" />
    <a-tabs v-if="isTab" :default-active-key="title[0]">
      <a-tab-pane v-for="item in title" :key="item" :title="item">
        <slot :name="item" />
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  props: {
    title: {
      type: [String, Array],
      default: "默认标题",
    },
  },
  setup(props) {
    //判断渲染标题还是tab页
    const isTab = Array.isArray(props.title) ? true : false;

    return {
      isTab,
      ...props,
    };
  },
});
</script>

<style lang="less">
.blog-card {
  width: 100%;
  min-height: 300px;
  background-color: var(--color-bg-2);
  border-radius: 4px;
  box-shadow: 0px 4px 36px -8px rgba(black, 0.08);
  margin-bottom: 16px;
  &-header {
    height: 56px;
    border-bottom: 1px solid var(--color-border);
    transition: 340ms border-bottom;
    padding-left: 16px;
    &-title {
      color: rgb(var(--primary-6));
      line-height: 56px;
      font-size: 16px;
      font-weight: 400;
    }
  }
  //Arco Tab 样式重写
  .arco-tabs-nav-tab {
    height: 57px;
  }
  .arco-tabs-nav-type-line .arco-tabs-tab-title {
    font-size: 16px;
  }
  .arco-tabs-nav-type-line .arco-tabs-tab {
    margin: 7px 16px 0;
  }
}
</style>
