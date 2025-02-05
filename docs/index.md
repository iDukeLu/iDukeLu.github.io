---
lastUpdated: false
---

<template v-for="post in curPosts" :key="post.url">
  <h3 :id="post.title" class="post-title">
    <a class="header-anchor"
      :href="`#${post.title}`"
      :aria-label="`Permalink to &quot;${post.title}&quot;`">
    ​</a>
    <a :href="post.url">{{ post.title }}</a>
  </h3>
  <div style="display: flex; justify-content: space-between; align-items: center;">
    <div style="display: flex; gap: 8px;">
      <template v-for="tag in post.tags" :key="tag">
        <span class="post-tag">{{ tag }}</span>
      </template>
    </div>
    <span>{{ post.date.string }}</span>
  </div>
  <div v-if="post.excerpt" v-html="post.excerpt"></div>
</template>

<!-- 分页 -->
<div class="pagination-container">
  <t-pagination
    v-model="current"
    v-model:pageSize="pageSize"
    :total="total"
    size="small"
    :showPageSize="false"
    :showPageNumber="!isMobile()"
    :showJumper="isMobile()"
    @current-change="onCurrentChange"
  />
</div>


<script lang="ts" setup>
import { ref, computed } from "vue";
import {
	MessagePlugin,
	PaginationProps,
	Pagination as TPagination,
} from "tdesign-vue-next";

import { data as posts } from "./.vitepress/theme/posts.data.mts";
import { isMobile } from "./.vitepress/theme/utils/mobile.ts";

const search = window.location.search.slice(1);
const searchParams = new URLSearchParams(search);
const page = searchParams.get("page") || 1;

const current = ref(+page);
const pageSize = ref(10);
const total = ref(posts.length);

const curPosts = computed(() => {
	return posts.slice(
		(current.value - 1) * pageSize.value,
		current.value * pageSize.value
	);
});

const onCurrentChange: PaginationProps["onCurrentChange"] = (
	index,
	pageInfo
) => {
	MessagePlugin.success(`转到第${index}页`);

	const url = new URL(window.location as any);
	url.searchParams.set("page", index.toString());
	window.history.replaceState({}, "", url);

	window.scrollTo({
		top: 0,
	});
};
</script>


<style lang="scss" scoped>
/* 去掉.vp-doc li + li 的 margin-top */
.pagination-container {
	margin-top: 60px;

	:deep(li) {
		margin-top: 0px;
	}
}

.post-tag {
  display: inline-block; /* 使 span 表现为块级元素 */
  padding: 0px 4px; /* 内边距 */
  border: 1px solid #ccc; /* 边框 */
  border-radius: 8px; /* 圆角 */
  font-size: 12px; /* 字体大小 */
  background-color:transparent; /* 背景颜色 */
  margin-right: 4px; /* 右侧间距 */
  margin-bottom: 2px; /* 底部间距 */
}

.post-title {
	margin-bottom: 6px;
	border-top: 0px;
	position: relative;
	top: 0;
	left: 0;
}
</style>