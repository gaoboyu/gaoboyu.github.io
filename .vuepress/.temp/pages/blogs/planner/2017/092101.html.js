export const data = JSON.parse("{\"key\":\"v-bc34ba4e\",\"path\":\"/blogs/planner/2017/092101.html\",\"title\":\"second page in category2\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"second page in category2\",\"date\":\"2017/09/21\",\"tags\":[\"tag4\"],\"categories\":[\"category2\"]},\"headers\":[],\"git\":{\"createdTime\":null,\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"blogs/planner/2017/092101.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}