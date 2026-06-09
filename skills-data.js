/* ===================================================================
 *  全端工程師技能樹 — 共用資料來源
 *  index.html 與 detail.html 都讀這個檔。未來擴充技能 / 文件只改這裡。
 *
 *  欄位說明：
 *    id        : 唯一代號（也是文件頁網址 detail.html?id=xxx）
 *    name      : 顯示名稱
 *    level     : 1=入門 2=中階 3=進階
 *    icon      : Simple Icons slug（自動抓 logo）；emoji 則直接顯示
 *    color     : logo 顏色（hex 不含 #），留空用品牌色
 *    desc      : 一句話簡介
 *    checklist : 學完必須會的 6 項自我檢核（可勾選、記進度）
 *    points    : 學習重點清單
 *    links     : 參考文件 [{label, url}]
 *    children  : 子項目技術（各自獨立頁，含 id / url / checklist）
 * =================================================================== */
window.SKILL_DATA = {
  frontend: {
    title: "前端 Frontend", sub: "使用者介面與互動", cls: "col-fe", accent: "#58a6ff",
    skills: [
      { id:"html", name:"HTML", level:1, icon:"html5", color:"E34F26",
        desc:"網頁的骨架，定義內容的結構與語意。",
        checklist:["用語意化標籤架構頁面（header/nav/main/article）","建立含驗證的表單（input types / required）","正確使用 a / img / meta / link 標籤","分辨 block 與 inline 元素行為","用 alt / label / aria 做基本無障礙","寫出可通過 W3C 驗證的乾淨結構"],
        points:["語意化標籤","表單與輸入","無障礙 a11y 基礎"],
        links:[{label:"MDN：HTML 教學", url:"https://developer.mozilla.org/zh-TW/docs/Web/HTML"},{label:"web.dev：Learn HTML", url:"https://web.dev/learn/html"}] },
      { id:"css", name:"CSS", level:1, icon:"css", color:"663399",
        desc:"控制版面、樣式與排版，讓網頁美觀並具響應式。",
        checklist:["用 Flexbox 完成水平／垂直置中與排列","用 Grid 切多欄版面","寫 RWD（media query / 相對單位）","掌握盒模型、position、z-index","做 transition 與 keyframes 動畫","用 CSS 變數管理樣式"],
        points:["Flexbox / Grid","RWD 響應式","動畫與過場"],
        links:[{label:"MDN：CSS 教學", url:"https://developer.mozilla.org/zh-TW/docs/Web/CSS"},{label:"CSS-Tricks：Flexbox 指南", url:"https://css-tricks.com/snippets/css/a-guide-to-flexbox/"}] },
      { id:"js", name:"JavaScript", level:1, icon:"javascript", color:"F7DF1E",
        desc:"瀏覽器的程式語言，負責互動與邏輯。",
        checklist:["熟練 let/const、箭頭函式、解構、展開","操作 DOM 並綁定事件","用 Promise / async-await 處理非同步","用 fetch 串接 API 並處理錯誤","陣列方法 map/filter/reduce 運用自如","理解 this、閉包與作用域"],
        points:["ES6+ 語法","DOM 操作","非同步 async/await"],
        links:[{label:"MDN：JavaScript 指南", url:"https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Guide"},{label:"JavaScript.info", url:"https://javascript.info/"}] },
      { id:"git", name:"Git / 版本控制", level:1, icon:"git", color:"F05032",
        desc:"管理程式碼版本與團隊協作的必備工具。",
        checklist:["熟練 init/clone/add/commit/push 流程","建立、切換與合併分支","解決合併衝突","用 Pull Request 做協作","看懂 git log / diff / status","用 reset / revert / stash 處理常見情境"],
        points:["branch / merge","PR 流程","衝突解決"],
        links:[{label:"Pro Git（官方書，中文）", url:"https://git-scm.com/book/zh-tw/v2"},{label:"Learn Git Branching（互動）", url:"https://learngitbranching.js.org/?locale=zh_TW"}] },
      { id:"ts", name:"TypeScript", level:2, icon:"typescript", color:"3178C6",
        desc:"為 JavaScript 加上型別，提升大型專案可維護性。",
        checklist:["宣告基本型別與 interface / type","用泛型寫可重用函式與元件","運用聯合型別、列舉、字面量型別","型別縮小（narrowing）與型別守衛","設定 tsconfig 與嚴格模式","為第三方套件補型別（d.ts）"],
        points:["型別系統","泛型","型別推論"],
        links:[{label:"TypeScript 官方 Handbook", url:"https://www.typescriptlang.org/docs/"},{label:"Total TypeScript（免費教材）", url:"https://www.totaltypescript.com/books/total-typescript-essentials"}] },
      { id:"pkg", name:"套件管理", level:2, icon:"npm", color:"CB3837",
        desc:"管理專案依賴與腳本。",
        checklist:["看懂 package.json 與 scripts","安裝／移除依賴並分辨 dev 依賴","理解 semver 版本符號（^ ~）","用 lock 檔確保一致安裝","設定並發布一個套件","用 workspace 管理 monorepo"],
        points:["package.json","semver","monorepo"],
        links:[{label:"npm 官方文件", url:"https://docs.npmjs.com/"},{label:"pnpm 官方文件", url:"https://pnpm.io/zh-TW/motivation"}],
        children:[
          {id:"npm", name:"npm", icon:"npm", color:"CB3837", url:"https://www.npmjs.com/",
            checklist:["用 npm init 建立專案","安裝／移除套件與 --save-dev","看懂並編輯 package.json scripts","理解 package-lock.json 作用","用 npx 執行套件","發布套件到 npm registry"]},
          {id:"pnpm", name:"pnpm", icon:"pnpm", color:"F69220", url:"https://pnpm.io/",
            checklist:["安裝 pnpm 並初始化專案","理解硬連結節省空間原理","用 pnpm workspace 管理 monorepo","熟練 add / remove / update","設定 .npmrc 與 hoisting","遷移既有專案到 pnpm"]},
          {id:"yarn", name:"Yarn", icon:"yarn", color:"2C8EBB", url:"https://yarnpkg.com/",
            checklist:["yarn init 與安裝依賴","理解 yarn.lock 作用","用 yarn workspaces","yarn 與 npm 指令對照","了解 Plug'n'Play 模式","快取與離線安裝"]}
        ] },
      { id:"tailwind", name:"CSS 工具", level:2, icon:"tailwindcss", color:"06B6D4",
        desc:"加速樣式開發的 CSS 工具與框架。",
        checklist:["用 utility class 完成常見排版","設定 config 客製主題","用 responsive / hover / dark 變體","抽出元件避免重複 class","Sass 變數 / 巢狀 / mixin 基本用法","建立可維護的設計 token 系統"],
        points:["Utility-first","設計系統","主題切換"],
        links:[{label:"Tailwind CSS 官方文件", url:"https://tailwindcss.com/docs"},{label:"Sass 官方文件", url:"https://sass-lang.com/documentation/"}],
        children:[
          {id:"tailwindcss", name:"Tailwind", icon:"tailwindcss", color:"06B6D4", url:"https://tailwindcss.com/",
            checklist:["安裝並引入 Tailwind","熟練常用 utility class 排版","設定 config 客製色／字型／間距","用 responsive 與 dark 變體","用 @apply 抽共用樣式","清除未用 class 優化體積"]},
          {id:"sass", name:"Sass", icon:"sass", color:"CC6699", url:"https://sass-lang.com/",
            checklist:["變數與巢狀語法","用 mixin 與 @include","partial 與 @use / @import","運算與內建函式","迴圈與條件（@each / @if）","建立可維護樣式架構"]}
        ] },
      { id:"react", name:"前端框架", level:2, icon:"react", color:"61DAFB",
        desc:"主流前端框架，以元件化方式建構 UI。",
        checklist:["用函式元件與 JSX 組合 UI","用 props 與 state 管理資料流","掌握 useState / useEffect","處理列表渲染、key 與條件渲染","表單受控元件與事件處理","用 useContext / 自訂 hook 抽邏輯"],
        points:["元件與 Props","Hooks / Composition","生命週期"],
        links:[{label:"React 官方文件（react.dev）", url:"https://react.dev/learn"},{label:"Vue 官方文件（繁中）", url:"https://zh-hk.vuejs.org/guide/introduction.html"}],
        children:[
          {id:"reactjs", name:"React", icon:"react", color:"61DAFB", url:"https://react.dev/",
            checklist:["JSX 與函式元件","useState / useEffect","props 與事件處理","列表與條件渲染","useContext 與自訂 hook","效能優化（memo / useMemo）"]},
          {id:"vuejs", name:"Vue", icon:"vuedotjs", color:"4FC08D", url:"https://vuejs.org/",
            checklist:["template 語法與指令（v-if / v-for）","ref / reactive 響應式","computed 與 watch","元件與 props / emit","Composition API","Vue Router 基本路由"]},
          {id:"svelte", name:"Svelte", icon:"svelte", color:"FF3E00", url:"https://svelte.dev/",
            checklist:["元件語法與 reactivity","用 $: 反應式宣告","props 與事件","store 狀態管理","用 SvelteKit 做路由","build 與部署"]}
        ] },
      { id:"state", name:"狀態管理", level:2, icon:"redux", color:"764ABC",
        desc:"管理跨元件的應用狀態。",
        checklist:["分辨何時需要全域狀態","建立 store 並更新狀態","處理非同步副作用","狀態切片與模組化","避免不必要的 re-render","狀態正規化與持久化"],
        points:["全域狀態","副作用處理","狀態正規化"],
        links:[{label:"Redux Toolkit 官方文件", url:"https://redux-toolkit.js.org/"},{label:"Zustand", url:"https://zustand.docs.pmnd.rs/"},{label:"Pinia（Vue）", url:"https://pinia.vuejs.org/zh/"}],
        children:[
          {id:"redux", name:"Redux", icon:"redux", color:"764ABC", url:"https://redux.js.org/",
            checklist:["store / action / reducer 概念","用 Redux Toolkit 建 slice","useSelector / useDispatch","非同步（createAsyncThunk）","middleware 概念","用 DevTools 除錯"]},
          {id:"zustand", name:"Zustand", icon:"🐻", color:"", url:"https://zustand.docs.pmnd.rs/",
            checklist:["建立 store 與 set / get","在元件中讀取狀態","非同步 action","selector 避免 re-render","persist 持久化","slice 模式拆分"]},
          {id:"pinia", name:"Pinia", icon:"🍍", color:"", url:"https://pinia.vuejs.org/",
            checklist:["定義 store（state / getters / actions）","在元件使用 store","非同步 action","與 Vue DevTools 整合","持久化外掛","模組化多 store"]}
        ] },
      { id:"vite", name:"建構工具", level:2, icon:"vite", color:"646CFF",
        desc:"現代前端打包與開發伺服器。",
        checklist:["建立 Vite 專案並啟動 dev server","理解 HMR 與模組解析","設定環境變數（.env）","設定別名（alias）與 plugin","build 產出與 preview","程式碼分割與資源優化"],
        points:["模組打包","HMR 熱更新","環境變數"],
        links:[{label:"Vite 官方文件（繁中）", url:"https://vite.dev/guide/"},{label:"Webpack 官方文件", url:"https://webpack.js.org/"}],
        children:[
          {id:"vitejs", name:"Vite", icon:"vite", color:"646CFF", url:"https://vite.dev/",
            checklist:["建立 Vite 專案","dev server 與 HMR","設定 .env 環境變數","alias 與 plugin","build 與 preview","程式碼分割"]},
          {id:"webpack", name:"Webpack", icon:"webpack", color:"8DD6F9", url:"https://webpack.js.org/",
            checklist:["entry / output 設定","loader 處理資源","plugin 擴充功能","mode 與 devServer","code splitting","效能優化與分析"]}
        ] },
      { id:"test-fe", name:"前端測試", level:3, icon:"vitest", color:"6E9F18",
        desc:"確保 UI 與邏輯穩定。",
        checklist:["寫單元測試（describe / it / expect）","用 mock / spy 隔離依賴","用 Testing Library 測元件互動","測試非同步與 API 呼叫","寫 E2E 測試（Playwright）","量測覆蓋率並納入 CI"],
        points:["單元測試","元件測試","E2E 測試"],
        links:[{label:"Vitest 官方文件", url:"https://vitest.dev/"},{label:"Playwright 官方文件", url:"https://playwright.dev/"},{label:"Testing Library", url:"https://testing-library.com/docs/"}],
        children:[
          {id:"vitest", name:"Vitest", icon:"vitest", color:"6E9F18", url:"https://vitest.dev/",
            checklist:["設定 Vitest 環境","describe / it / expect","mock 與 spy","測試覆蓋率","與 Testing Library 整合","watch 與 UI 模式"]},
          {id:"jest", name:"Jest", icon:"jest", color:"C21325", url:"https://jestjs.io/",
            checklist:["設定 Jest","matcher 斷言","mock 模組與函式","測試非同步","快照測試（snapshot）","覆蓋率報告"]},
          {id:"playwright", name:"Playwright", icon:"playwright", color:"2EAD33", url:"https://playwright.dev/",
            checklist:["安裝與設定","定位元素與操作","斷言（expect）","處理等待與網路","錄製測試（codegen）","CI 中執行與報告"]}
        ] },
      { id:"next", name:"全端框架", level:3, icon:"nextdotjs", color:"FFFFFF",
        desc:"支援 SSR、SSG 與 API 路由的整合框架。",
        checklist:["分辨 SSR / SSG / CSR / ISR 適用情境","用檔案式路由（app / pages）","資料抓取（fetch / server component）","建立 API route / route handler","用 next/image、metadata 優化","部署到 Vercel 並設定環境變數"],
        points:["SSR / SSG","檔案路由","資料抓取策略"],
        links:[{label:"Next.js 官方文件", url:"https://nextjs.org/docs"},{label:"Nuxt 官方文件", url:"https://nuxt.com/docs"}],
        children:[
          {id:"nextjs", name:"Next.js", icon:"nextdotjs", color:"FFFFFF", url:"https://nextjs.org/",
            checklist:["app / pages router","SSR / SSG / ISR","route handler API","server / client component","next/image 與 metadata","部署 Vercel"]},
          {id:"nuxt", name:"Nuxt", icon:"nuxtdotjs", color:"00DC82", url:"https://nuxt.com/",
            checklist:["pages 目錄路由","useFetch / useAsyncData","server routes（nitro）","layouts 與 middleware","模組生態系","部署設定"]},
          {id:"remix", name:"Remix", icon:"remix", color:"FFFFFF", url:"https://remix.run/",
            checklist:["路由與巢狀路由","loader 與 action","表單與漸進增強","錯誤邊界","session 管理","部署"]}
        ] },
      { id:"perf", name:"效能優化", level:3, icon:"⚡", color:"",
        desc:"提升載入速度與使用者體驗。",
        checklist:["量測 Core Web Vitals（LCP / CLS / INP）","用 Lighthouse 找出瓶頸","程式碼分割與 lazy load","圖片／字型／資源優化","設定快取與 CDN 策略","減少 re-render 與主執行緒阻塞"],
        points:["Code Splitting","Lighthouse","快取策略"],
        links:[{label:"web.dev：Performance", url:"https://web.dev/explore/learn-core-web-vitals"},{label:"MDN：Web 效能", url:"https://developer.mozilla.org/zh-TW/docs/Web/Performance"}] },
    ]
  },
  backend: {
    title: "後端 Backend", sub: "資料、邏輯與服務", cls: "col-be", accent: "#3fb950",
    skills: [
      { id:"lang", name:"程式語言", level:1, icon:"nodedotjs", color:"5FA04E",
        desc:"後端核心語言。",
        checklist:["熟悉一門語言的語法與型別","操作常用資料結構（陣列／map／set）","用函式／模組／套件組織程式","錯誤處理與例外機制","檔案 IO 與環境變數讀取","非同步／並行的基本概念"],
        points:["資料結構","演算法基礎","錯誤處理"],
        links:[{label:"Node.js 官方文件", url:"https://nodejs.org/zh-tw/docs"},{label:"Python 官方教學", url:"https://docs.python.org/zh-tw/3/tutorial/"},{label:"A Tour of Go", url:"https://go.dev/tour/"}],
        children:[
          {id:"nodejs", name:"Node.js", icon:"nodedotjs", color:"5FA04E", url:"https://nodejs.org/",
            checklist:["模組系統（ESM / CJS）","fs / path / http 核心模組","事件迴圈與非同步","npm 與 package.json","串流（stream）概念","錯誤處理與除錯"]},
          {id:"python", name:"Python", icon:"python", color:"3776AB", url:"https://www.python.org/",
            checklist:["資料型別與容器","函式與模組／套件","list / dict 推導式","例外處理","虛擬環境與 pip","常用標準庫"]},
          {id:"golang", name:"Go", icon:"go", color:"00ADD8", url:"https://go.dev/",
            checklist:["變數／型別／struct","goroutine 與 channel","interface 與方法","error 處理慣例","套件與 go mod","標準庫 net/http"]}
        ] },
      { id:"http", name:"HTTP / REST API", level:1, icon:"🌐", color:"",
        desc:"網路通訊與 API 設計的基礎。",
        checklist:["掌握 GET/POST/PUT/PATCH/DELETE 語意","正確使用狀態碼（2xx/4xx/5xx）","設計 RESTful 資源路徑","處理 header / query / body / JSON","理解 CORS 與快取 header","用 Postman / curl 測試 API"],
        points:["HTTP 方法/狀態碼","RESTful 設計","JSON"],
        links:[{label:"MDN：HTTP", url:"https://developer.mozilla.org/zh-TW/docs/Web/HTTP"},{label:"REST API 教學", url:"https://restfulapi.net/"}] },
      { id:"sql", name:"關聯式資料庫", level:1, icon:"postgresql", color:"4169E1",
        desc:"關聯式資料庫與 SQL 查詢語言。",
        checklist:["設計正規化資料表與關聯","熟練 CRUD 與 WHERE / ORDER / LIMIT","各種 JOIN 與聚合（GROUP BY）","建立索引並理解查詢效能","交易（transaction）與 ACID","避免 SQL injection"],
        points:["CRUD","Join","索引基礎"],
        links:[{label:"PostgreSQL 官方文件", url:"https://www.postgresql.org/docs/"},{label:"SQLBolt（互動教學）", url:"https://sqlbolt.com/"}],
        children:[
          {id:"postgresql", name:"PostgreSQL", icon:"postgresql", color:"4169E1", url:"https://www.postgresql.org/",
            checklist:["建表與資料型別","CRUD 與 JOIN","索引與 EXPLAIN","交易與鎖","JSON 欄位","psql 與備份"]},
          {id:"mysql", name:"MySQL", icon:"mysql", color:"4479A1", url:"https://www.mysql.com/",
            checklist:["建表與引擎（InnoDB）","CRUD 與 JOIN","索引優化","交易與隔離級別","使用者與權限","備份與還原"]},
          {id:"sqlite", name:"SQLite", icon:"sqlite", color:"003B57", url:"https://www.sqlite.org/",
            checklist:["建立資料庫檔","基本 CRUD","判斷適用情境","與應用嵌入整合","交易","了解限制與注意事項"]}
        ] },
      { id:"git-be", name:"Git / 版本控制", level:1, icon:"git", color:"F05032",
        desc:"程式碼版本管理與協作。",
        checklist:["採用團隊分支策略（git flow / trunk）","撰寫清楚的 commit message","熟悉 code review 流程與規範","解決 rebase / merge 衝突","用 tag 管理版本發布","與 CI 整合自動檢查"],
        points:["branch 策略","code review","CI 整合"],
        links:[{label:"Pro Git（官方書，中文）", url:"https://git-scm.com/book/zh-tw/v2"},{label:"GitHub Flow", url:"https://docs.github.com/zh/get-started/using-github/github-flow"}] },
      { id:"framework", name:"後端框架", level:2, icon:"nestjs", color:"E0234E",
        desc:"服務端應用框架。",
        checklist:["建立路由並處理請求／回應","撰寫與串接 middleware","採用分層架構（controller / service）","驗證輸入並統一錯誤處理","連接資料庫與設定管理","撰寫 RESTful API 並測試"],
        points:["路由與中介層","MVC 架構","錯誤處理機制"],
        links:[{label:"Express 官方文件", url:"https://expressjs.com/zh-tw/"},{label:"FastAPI 官方文件", url:"https://fastapi.tiangolo.com/zh/"},{label:"NestJS 官方文件", url:"https://docs.nestjs.com/"}],
        children:[
          {id:"express", name:"Express", icon:"express", color:"FFFFFF", url:"https://expressjs.com/",
            checklist:["建立 server 與路由","middleware 機制","處理 req / res 與 body","錯誤處理 middleware","串接資料庫","RESTful API 設計"]},
          {id:"nestjs", name:"NestJS", icon:"nestjs", color:"E0234E", url:"https://nestjs.com/",
            checklist:["module / controller / service","依賴注入（DI）","DTO 與 validation pipe","guard / interceptor","連接 TypeORM / Prisma","Swagger 文件"]},
          {id:"fastapi", name:"FastAPI", icon:"fastapi", color:"009688", url:"https://fastapi.tiangolo.com/",
            checklist:["路由與型別提示","Pydantic model 驗證","依賴注入","async 處理","自動 OpenAPI 文件","錯誤處理"]},
          {id:"django", name:"Django", icon:"django", color:"092E20", url:"https://www.djangoproject.com/",
            checklist:["MVT 架構","model 與 ORM","view 與 URL 路由","template 與 form","admin 後台","用 DRF 做 API"]}
        ] },
      { id:"orm", name:"ORM", level:2, icon:"prisma", color:"2D3748",
        desc:"以物件方式操作資料庫。",
        checklist:["定義 schema / model 與關聯","執行 migration 管理結構變更","CRUD 與關聯查詢（include / join）","交易與批次操作","避免 N+1 查詢問題","seed 與測試資料管理"],
        points:["Schema 定義","Migration","關聯查詢"],
        links:[{label:"Prisma 官方文件", url:"https://www.prisma.io/docs"},{label:"SQLAlchemy 官方文件", url:"https://docs.sqlalchemy.org/"}],
        children:[
          {id:"prisma", name:"Prisma", icon:"prisma", color:"2D3748", url:"https://www.prisma.io/",
            checklist:["定義 schema","migrate 管理結構","CRUD 與關聯查詢","交易","seed 資料","Prisma Studio"]},
          {id:"sqlalchemy", name:"SQLAlchemy", icon:"sqlalchemy", color:"D71F00", url:"https://www.sqlalchemy.org/",
            checklist:["定義 model","session 與查詢","關聯（relationship）","migration（Alembic）","交易","避免 N+1"]},
          {id:"drizzle", name:"Drizzle", icon:"drizzle", color:"C5F74F", url:"https://orm.drizzle.team/",
            checklist:["定義 schema","型別安全查詢","migration","關聯查詢","與框架整合","studio 工具"]}
        ] },
      { id:"nosql", name:"NoSQL / 快取", level:2, icon:"mongodb", color:"47A248",
        desc:"非關聯式儲存與快取。",
        checklist:["設計文件資料模型","CRUD 與查詢／聚合管線","索引與效能考量","用 Redis 做快取與過期策略","處理快取失效與一致性","Session／排行榜等實戰應用"],
        points:["文件資料庫","快取策略","Session 儲存"],
        links:[{label:"MongoDB 官方文件", url:"https://www.mongodb.com/docs/"},{label:"Redis 官方文件", url:"https://redis.io/docs/latest/"}],
        children:[
          {id:"mongodb", name:"MongoDB", icon:"mongodb", color:"47A248", url:"https://www.mongodb.com/",
            checklist:["文件與集合概念","CRUD 操作","查詢與聚合管線","索引","資料建模","Mongoose ODM"]},
          {id:"redis", name:"Redis", icon:"redis", color:"FF4438", url:"https://redis.io/",
            checklist:["string / hash / list / set 型別","設定過期（TTL）","用作快取","Pub / Sub","持久化（RDB / AOF）","常見應用模式"]}
        ] },
      { id:"auth", name:"認證與授權", level:2, icon:"🔐", color:"",
        desc:"使用者身份驗證與權限控制。",
        checklist:["實作註冊／登入與密碼雜湊（bcrypt）","簽發與驗證 JWT","實作 OAuth 2.0 第三方登入","設計 RBAC 角色權限","保護路由與 refresh token","防範常見認證漏洞（OWASP）"],
        points:["JWT","OAuth 2.0","RBAC 權限"],
        links:[{label:"JWT 介紹（jwt.io）", url:"https://jwt.io/introduction"},{label:"OAuth 2.0 簡介", url:"https://oauth.net/2/"},{label:"OWASP 認證指南", url:"https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html"}],
        children:[
          {id:"jwt", name:"JWT", icon:"jsonwebtokens", color:"FFFFFF", url:"https://jwt.io/",
            checklist:["JWT 結構（header / payload / signature）","簽發與驗證","設定過期與 refresh","安全儲存（httpOnly）","常見漏洞防範","與後端整合"]},
          {id:"oauth2", name:"OAuth 2.0", icon:"auth0", color:"EB5424", url:"https://oauth.net/2/",
            checklist:["授權碼流程","scope 與 token","整合 Google / GitHub 登入","refresh token","PKCE","安全注意事項"]},
          {id:"passport", name:"Passport", icon:"passport", color:"34E27A", url:"https://www.passportjs.org/",
            checklist:["設定 strategy","本地登入策略","OAuth 策略","session 與 serialize","保護路由","多策略整合"]}
        ] },
      { id:"api-design", name:"進階 API 設計", level:2, icon:"graphql", color:"E10098",
        desc:"GraphQL、gRPC 等不同 API 風格。",
        checklist:["定義 GraphQL schema 與 resolver","query / mutation / subscription","用 gRPC 定義 proto 與服務","API 版本控制策略","錯誤處理與分頁設計","產生 API 文件（OpenAPI）"],
        points:["GraphQL","gRPC","API 版本控制"],
        links:[{label:"GraphQL 官方文件", url:"https://graphql.org/learn/"},{label:"gRPC 官方文件", url:"https://grpc.io/docs/"}],
        children:[
          {id:"graphql", name:"GraphQL", icon:"graphql", color:"E10098", url:"https://graphql.org/",
            checklist:["定義 schema / type","query 與 resolver","mutation","參數與分頁","錯誤處理","用 Apollo 整合"]},
          {id:"grpc", name:"gRPC", icon:"🔌", color:"", url:"https://grpc.io/",
            checklist:["定義 proto","生成程式碼","實作服務","unary / stream 模式","錯誤碼","與 REST 比較"]}
        ] },
      { id:"mq", name:"訊息佇列", level:3, icon:"apachekafka", color:"FFFFFF",
        desc:"非同步處理與系統解耦。",
        checklist:["理解 Pub/Sub 與佇列模型","發布與消費訊息","設計事件驅動流程","處理重試／死信佇列","確保訊息順序與冪等","監控與背壓（backpressure）處理"],
        points:["Pub/Sub","事件驅動","重試機制"],
        links:[{label:"Apache Kafka 文件", url:"https://kafka.apache.org/documentation/"},{label:"RabbitMQ 教學", url:"https://www.rabbitmq.com/tutorials"}],
        children:[
          {id:"kafka", name:"Kafka", icon:"apachekafka", color:"FFFFFF", url:"https://kafka.apache.org/",
            checklist:["topic / partition 概念","producer 發送","consumer group","offset 管理","可靠性設定","監控"]},
          {id:"rabbitmq", name:"RabbitMQ", icon:"rabbitmq", color:"FF6600", url:"https://www.rabbitmq.com/",
            checklist:["queue / exchange 概念","發送與消費","routing 模式","ack 與重試","死信佇列","叢集概念"]}
        ] },
      { id:"docker", name:"容器化 Docker", level:3, icon:"docker", color:"2496ED",
        desc:"打包應用與環境，確保一致部署。",
        checklist:["撰寫 Dockerfile 打包應用","建置與執行映像／容器","用 docker compose 編排多服務","管理 volume 與網路","映像分層與體積優化","推送到 registry 並部署"],
        points:["Dockerfile","Compose","映像優化"],
        links:[{label:"Docker 官方文件", url:"https://docs.docker.com/"},{label:"Docker 入門指南", url:"https://docs.docker.com/get-started/"}] },
      { id:"cicd", name:"CI/CD", level:3, icon:"githubactions", color:"2088FF",
        desc:"自動化測試與部署流程。",
        checklist:["設定 CI 自動跑測試／lint","用 workflow / pipeline 語法","建置產物並快取依賴","設定多環境部署（dev / stg / prod）","管理密鑰與環境變數","自動化發布與回滾"],
        points:["GitHub Actions","自動部署","環境管理"],
        links:[{label:"GitHub Actions 文件", url:"https://docs.github.com/zh/actions"},{label:"GitLab CI/CD 文件", url:"https://docs.gitlab.com/ee/ci/"}],
        children:[
          {id:"github-actions", name:"GitHub Actions", icon:"githubactions", color:"2088FF", url:"https://github.com/features/actions",
            checklist:["workflow 語法（yaml）","trigger 事件","job 與 step","用 action 市集","secret 管理","建置與部署"]},
          {id:"gitlab-ci", name:"GitLab CI", icon:"gitlab", color:"FC6D26", url:"https://docs.gitlab.com/ee/ci/",
            checklist:[".gitlab-ci.yml 結構","stage 與 job","runner 概念","artifact 與 cache","環境與部署","變數管理"]},
          {id:"jenkins", name:"Jenkins", icon:"jenkins", color:"D24939", url:"https://www.jenkins.io/",
            checklist:["建立 pipeline","Jenkinsfile 語法","plugin 安裝","agent 與節點","憑證管理","整合通知"]}
        ] },
      { id:"cloud", name:"雲端 / K8s", level:3, icon:"kubernetes", color:"326CE5",
        desc:"雲端服務與容器編排。",
        checklist:["部署服務到雲端平台","設定負載平衡與自動擴展","撰寫 K8s deployment / service","管理 config / secret","監控、日誌與健康檢查","成本與資安基本最佳實踐"],
        points:["雲端服務","Kubernetes","負載平衡"],
        links:[{label:"Kubernetes 官方文件", url:"https://kubernetes.io/zh-cn/docs/home/"},{label:"AWS 入門文件", url:"https://docs.aws.amazon.com/"}],
        children:[
          {id:"aws", name:"AWS", icon:"☁️", color:"", url:"https://aws.amazon.com/",
            checklist:["EC2 / S3 / RDS 基礎","IAM 權限","VPC 網路概念","Lambda 無伺服器","CloudWatch 監控","成本控管"]},
          {id:"gcp", name:"GCP", icon:"googlecloud", color:"4285F4", url:"https://cloud.google.com/",
            checklist:["Compute / Storage 基礎","IAM 與專案","Cloud Run","Cloud SQL","監控與日誌","成本控管"]},
          {id:"kubernetes", name:"Kubernetes", icon:"kubernetes", color:"326CE5", url:"https://kubernetes.io/",
            checklist:["pod / deployment / service","kubectl 操作","config / secret","ingress 與網路","擴展與探針","Helm 概念"]}
        ] },
      { id:"sysdesign", name:"系統設計 / 微服務", level:3, icon:"🏗️", color:"",
        desc:"高可用、可擴展的架構設計。",
        checklist:["拆解需求並估算流量與容量","設計可水平擴展的架構","快取／資料庫／佇列選型","微服務拆分與通訊","處理一致性／可用性權衡","設計監控、告警與容錯"],
        points:["微服務","水平擴展","監控與日誌"],
        links:[{label:"System Design Primer（GitHub）", url:"https://github.com/donnemartin/system-design-primer"},{label:"microservices.io 模式", url:"https://microservices.io/patterns/"}] },
    ]
  },
  ai: {
    title: "AI 輔助開發", sub: "用 AI 加速與升級開發", cls: "col-ai", accent: "#bc8cff",
    skills: [
      { id:"copilot", name:"AI 程式助手", level:1, icon:"githubcopilot", color:"FFFFFF",
        desc:"IDE 內 AI 補全與重構工具。",
        checklist:["在 IDE 安裝並設定 AI 助手","用註解／命名引導補全","判斷接受／修改／拒絕建議","用 inline chat 重構與解釋","產生測試與樣板程式","審視 AI 產出，避免盲信"],
        points:["程式碼補全","行內建議","快捷重構"],
        links:[{label:"GitHub Copilot 文件", url:"https://docs.github.com/zh/copilot"},{label:"Cursor 官方文件", url:"https://docs.cursor.com/"}],
        children:[
          {id:"github-copilot", name:"GitHub Copilot", icon:"githubcopilot", color:"FFFFFF", url:"https://github.com/features/copilot",
            checklist:["安裝設定於 IDE","用註解引導補全","inline chat 用法","產生測試／重構","Copilot Chat 問答","審視產出"]},
          {id:"cursor", name:"Cursor", icon:"✦", color:"", url:"https://cursor.com/",
            checklist:["設定專案","Cmd+K 編輯","Chat 與 codebase 問答","Composer 多檔修改","規則（rules）設定","審視 diff"]},
          {id:"claude-code", name:"Claude Code", icon:"claude", color:"D97757", url:"https://www.claude.com/product/claude-code",
            checklist:["安裝與設定","用自然語言下指令","讀寫／編輯檔案","執行與除錯","用 skills / MCP","審視變更"]}
        ] },
      { id:"chat", name:"AI 對話助手", level:1, icon:"anthropic", color:"FFFFFF",
        desc:"用對話式 AI 協助查問題、寫程式、解 bug。",
        checklist:["清楚描述問題並提供上下文","貼錯誤訊息請 AI 除錯","請 AI 解釋陌生程式碼","迭代追問逐步逼近答案","請 AI 產出文件／註解","驗證 AI 回答的正確性"],
        points:["問題拆解","除錯協助","文件撰寫"],
        links:[{label:"Claude 使用文件", url:"https://docs.claude.com/"},{label:"ChatGPT 說明中心", url:"https://help.openai.com/"}],
        children:[
          {id:"claude", name:"Claude", icon:"claude", color:"D97757", url:"https://claude.ai/",
            checklist:["有效描述需求","提供上下文／檔案","迭代追問","請求解釋程式碼","產出文件","驗證回答"]},
          {id:"chatgpt", name:"ChatGPT", icon:"openai", color:"FFFFFF", url:"https://chatgpt.com/",
            checklist:["清楚提問","貼錯誤除錯","用 Code Interpreter","自訂指令","迭代優化","驗證輸出"]},
          {id:"gemini", name:"Gemini", icon:"googlegemini", color:"8E75B2", url:"https://gemini.google.com/",
            checklist:["有效提問","多模態輸入","整合 Google 生態","程式輔助","迭代","驗證"]}
        ] },
      { id:"prompt", name:"Prompt Engineering", level:2, icon:"✨", color:"",
        desc:"設計有效提示，讓 AI 產出更精準。",
        checklist:["設定角色與任務目標","提供足夠上下文與範例（few-shot）","指定輸出格式與限制","用思維鏈（step by step）引導","迭代優化提示","針對不同模型調整策略"],
        points:["角色設定","上下文提供","少量範例 few-shot"],
        links:[{label:"Anthropic：Prompt Engineering", url:"https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/overview"},{label:"OpenAI：Prompt 指南", url:"https://platform.openai.com/docs/guides/prompt-engineering"},{label:"Prompt Engineering Guide", url:"https://www.promptingguide.ai/zh"}] },
      { id:"ai-review", name:"AI Code Review", level:2, icon:"🔍", color:"",
        desc:"用 AI 進行程式碼審查與品質把關。",
        checklist:["設定 AI 自動審查 PR","解讀 AI 提出的問題","用 AI 做安全／漏洞掃描","請 AI 提重構建議","結合人工判斷取捨","將 AI review 納入流程"],
        points:["自動審查","安全掃描","重構建議"],
        links:[{label:"GitHub Copilot Code Review", url:"https://docs.github.com/zh/copilot/using-github-copilot/code-review/using-copilot-code-review"},{label:"CodeRabbit 文件", url:"https://docs.coderabbit.ai/"}],
        children:[
          {id:"copilot-review", name:"Copilot Review", icon:"githubcopilot", color:"FFFFFF", url:"https://docs.github.com/copilot",
            checklist:["啟用 PR 審查","解讀建議","採納／忽略判斷","安全掃描","與流程整合","搭配人工複查"]},
          {id:"coderabbit", name:"CodeRabbit", icon:"🐰", color:"", url:"https://www.coderabbit.ai/",
            checklist:["設定整合 repo","解讀 AI 評論","逐行建議採納","摘要與互動","規則設定","與流程整合"]}
        ] },
      { id:"llm-api", name:"LLM API 整合", level:2, icon:"openai", color:"FFFFFF",
        desc:"把大型語言模型接進自己的應用。",
        checklist:["呼叫 Chat / Messages API","設計 system / user / assistant 訊息","處理串流（streaming）回應","控制 temperature / max tokens","計算 token 與成本","實作 function / tool calling"],
        points:["OpenAI/Claude API","串流回應","Token 控制"],
        links:[{label:"Anthropic API 文件", url:"https://docs.claude.com/en/api/overview"},{label:"OpenAI API 文件", url:"https://platform.openai.com/docs/overview"}],
        children:[
          {id:"anthropic-api", name:"Anthropic API", icon:"anthropic", color:"FFFFFF", url:"https://docs.claude.com/en/api/overview",
            checklist:["呼叫 Messages API","system / user 訊息","串流回應","tool use","控制 token / temperature","計算成本"]},
          {id:"openai-api", name:"OpenAI API", icon:"openai", color:"FFFFFF", url:"https://platform.openai.com/",
            checklist:["Chat Completions","訊息角色","串流","function calling","控制參數","計算成本"]}
        ] },
      { id:"rag", name:"RAG / 向量資料庫", level:3, icon:"📚", color:"",
        desc:"檢索增強生成，讓 AI 讀你的資料回答。",
        checklist:["將文件切塊（chunking）","產生 embedding 並入庫","向量相似度檢索（top-k）","組合檢索結果到 prompt","評估與調校檢索品質","處理更新與來源引用"],
        points:["Embedding","向量檢索","知識庫整合"],
        links:[{label:"LangChain：RAG 教學", url:"https://python.langchain.com/docs/tutorials/rag/"},{label:"Pinecone：Learn RAG", url:"https://www.pinecone.io/learn/retrieval-augmented-generation/"}],
        children:[
          {id:"langchain", name:"LangChain", icon:"langchain", color:"FFFFFF", url:"https://www.langchain.com/",
            checklist:["chain 與 prompt template","串接 LLM","retriever 與向量庫","memory","agent 與 tool","LCEL 表達式"]},
          {id:"pinecone", name:"Pinecone", icon:"🌲", color:"", url:"https://www.pinecone.io/",
            checklist:["建立 index","upsert 向量","查詢 top-k","metadata 過濾","namespace","與 RAG 整合"]},
          {id:"chroma", name:"Chroma", icon:"🎨", color:"", url:"https://www.trychroma.com/",
            checklist:["建立 collection","加入文件與 embedding","查詢","metadata 過濾","持久化","與 RAG 整合"]}
        ] },
      { id:"agent", name:"AI Agent 開發", level:3, icon:"🤖", color:"",
        desc:"打造能自動執行任務的 AI 代理。",
        checklist:["定義工具（tool）與函式","設計 agent 推理迴圈","多步驟任務規劃與執行","加入記憶與狀態","處理錯誤與重試","設計多 agent 協作流程"],
        points:["工具呼叫","多步驟推理","工作流編排"],
        links:[{label:"Anthropic：Building Effective Agents", url:"https://www.anthropic.com/research/building-effective-agents"},{label:"LangGraph 文件", url:"https://langchain-ai.github.io/langgraph/"}],
        children:[
          {id:"langgraph", name:"LangGraph", icon:"🕸️", color:"", url:"https://langchain-ai.github.io/langgraph/",
            checklist:["定義 graph 與 node","狀態管理","條件邊與迴圈","加入工具","記憶與持久化","部署"]},
          {id:"claude-agent-sdk", name:"Claude Agent SDK", icon:"claude", color:"D97757", url:"https://docs.claude.com/en/api/agent-sdk/overview",
            checklist:["安裝 SDK","定義 agent 與工具","處理對話迴圈","整合 MCP","權限控制","部署"]},
          {id:"autogen", name:"AutoGen", icon:"🤝", color:"", url:"https://microsoft.github.io/autogen/",
            checklist:["定義 agent","多 agent 對話","group chat","工具整合","人類介入","流程編排"]}
        ] },
      { id:"mcp", name:"MCP / 工具整合", level:3, icon:"🔌", color:"",
        desc:"Model Context Protocol，讓 AI 連接外部工具與資料。",
        checklist:["理解 MCP 架構（client / server）","建立一個 MCP server","定義 tools / resources / prompts","連接到 Claude / IDE 測試","處理權限與安全","封裝外部 API 為 MCP 工具"],
        points:["MCP Server","工具定義","上下文供給"],
        links:[{label:"MCP 官方網站", url:"https://modelcontextprotocol.io/"},{label:"MCP 規格文件", url:"https://modelcontextprotocol.io/docs/getting-started/intro"}] },
    ]
  }
};

/* 共用小工具：判斷 icon 是 emoji 還是 logo slug，產生對應 HTML */
window.SKILL_ICON = function (skill, size) {
  size = size || 34;
  const ic = skill.icon || "";
  const isEmoji = /[\u{1F000}-\u{1FFFF}\u{2600}-\u{27BF}\u{2B00}-\u{2BFF}]/u.test(ic);
  if (!ic || isEmoji) {
    return `<span class="ic ic-emoji" style="width:${size}px;height:${size}px;font-size:${Math.round(size*0.5)}px">${ic || "•"}</span>`;
  }
  const color = skill.color ? "/" + skill.color : "";
  const url = `https://cdn.simpleicons.org/${ic}${color}`;
  return `<span class="ic" style="width:${size}px;height:${size}px">
    <img src="${url}" alt="${skill.name}" width="${Math.round(size*0.62)}" height="${Math.round(size*0.62)}"
         onerror="this.parentNode.classList.add('ic-emoji');this.parentNode.textContent='•';">
  </span>`;
};

/* 共用：用 id 找技能（含子項目），回傳 {skill, col, isChild, parent} */
window.SKILL_FIND = function (id) {
  for (const key in window.SKILL_DATA) {
    const col = window.SKILL_DATA[key];
    for (const s of col.skills) {
      if (s.id === id) return { skill: s, col, isChild: false, parent: null };
      if (s.children) {
        for (const c of s.children) {
          if (c.id === id) return { skill: c, col, isChild: true, parent: s };
        }
      }
    }
  }
  return null;
};

window.LV_TEXT = { 1:"入門", 2:"中階", 3:"進階" };

/* ===================================================================
 *  技能延伸關係（技能樹的「父節點」）
 *  null = 該領域根技能（橫排起點）；某 id = 接在它正下方往下長
 * =================================================================== */
window.SKILL_PARENT = {
  // 前端
  html:null, css:null, js:null, git:null,
  ts:"js", pkg:"js", tailwind:"css",
  vite:"js", "test-fe":"js", perf:"js",
  react:"ts", state:"react", next:"react",
  // 後端
  lang:null, http:null, sql:null, "git-be":null, docker:null,
  framework:"lang", orm:"framework", auth:"framework", "api-design":"framework", mq:"framework",
  nosql:"sql", cicd:"docker", cloud:"docker", sysdesign:"cloud",
  // AI
  copilot:null, chat:null,
  prompt:"chat", "llm-api":"chat", "ai-review":"copilot",
  rag:"llm-api", agent:"llm-api", mcp:"agent"
};
