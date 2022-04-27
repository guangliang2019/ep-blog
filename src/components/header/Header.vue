<template>
  <div class="header mda">
    <div class="nav-left">
      <Logo style="minwidth: 36px; padding-right: 10px" />
      <IconWithText @click="toHome">
        <icon-home :size="16" />
        <span style="margin: 2px">首页</span>
      </IconWithText>
      <IconWithText @click="toQA" style="padding: 0">
        <icon-bulb :size="16" />
        <span style="margin: 2px">问答</span>
      </IconWithText>
    </div>
    <a-input-search class="input" placeholder="请输入搜索内容" />
    <div class="nav-right">
      <a-button
        @click="toCreate"
        type="primary"
        size="large"
        style="margin-left: 8px"
      >
        我要创作
      </a-button>
      <IconWithText @click="changeTheme">
        <icon-sun v-if="theme === 'light'" :size="16" />
        <icon-moon v-if="theme === 'dark'" :size="16" />
        <span>{{ theme === "light" ? "明色" : "暗色" }}</span>
      </IconWithText>
      <IconWithText @click="toHistory">
        <icon-history :size="17" />
        <span>历史</span>
      </IconWithText>
      <IconWithText>
        <icon-star :size="17" />
        <span>收藏</span>
      </IconWithText>
      <IconWithText>
        <icon-notification :size="17" />
        <span>消息</span>
      </IconWithText>
      <a-avatar @click="toLogin" :size="32" class="avatar">
        <!-- <img src="../../assets/Avatar.png" /> -->
      </a-avatar>
    </div>
  </div>
  <div class="header mda-i">
    <a-avatar @click="toLogin" class="avatar" :size="32">
      <!-- <img src="../../assets/Avatar.png" /> -->
    </a-avatar>
    <a-input-search class="input" placeholder="请输入搜索内容" />
    <a-button style="width: 36px" type="text">
      <template #icon>
        <icon-menu-fold :size="24" />
      </template>
    </a-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/runtime-core";
import to from "@/router/to";
import type { Theme } from "@/utils/constants";
import Logo from "../Logo.vue";
import IconWithText from "./IconWithText.vue";

// TODO: 头像需要从用户信息获取，用户信息应该是全局状态

export default defineComponent({
  name: "BlogHeader",
  components: {
    Logo,
    IconWithText,
  },
  setup() {
    //主题相关
    const theme = ref<Theme>("light");
    const changeTheme = (): void => {
      switch (document.body.getAttribute("arco-theme")) {
        case "dark":
          document.body.setAttribute("arco-theme", "light");
          localStorage.setItem("theme", "light");
          theme.value = "light";
          break;
        case "light":
          document.body.setAttribute("arco-theme", "dark");
          localStorage.setItem("theme", "dark");
          theme.value = "dark";
          break;
        default:
          break;
      }
    };

    //导航栏路由相关
    const toHome = to("/");
    const toQA = to("/qa");
    const toNotice = to("/notice");
    const toStar = to("/star");
    const toHistory = to("/history");
    const toCreate = to("/create");
    const toLogin = to("/login");

    return {
      //主题
      theme,
      changeTheme,
      //路由
      toHome,
      toQA,
      toNotice,
      toStar,
      toHistory,
      toCreate,
      toLogin,
    };
  },
});
</script>

<style lang="less">
@import "../../utils/media.less";
.header {
  width: 100vw;
  max-width: 1440px;
  height: 56px;
  padding: 0 16px;
  color: var(--color-text-1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  .nav-left {
    width: 165px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .nav-right {
    width: 432px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
  }
  .arco-btn-text {
    color: var(--color-text-2);
    border: none;
  }
  .arco-btn-text:hover {
    color: rgb(var(--primary-5));
    background: transparent;
    border: none;
  }
  .arco-btn-text:active {
    color: var(--color-text-2);
    background: transparent;
    border: none;
  }
}
.nav-right-moblie {
  width: 72px;
  min-width: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.avatar {
  min-width: 32px;
}
.input {
  width: 100%;
  margin: 0 16px;
  font-size: 12px;
}
@media @mda {
  .input {
    margin: 0 12px;
    max-width: 400px;
  }
}
@media @lg {
  .avatar {
    margin: 0 6px 0 8px;
  }
}
</style>
