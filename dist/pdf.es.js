import { ref as p, openBlock as m, createElementBlock as _ } from "vue";
const u = (r, c) => {
  const t = r.__vccOpts || r;
  for (const [s, a] of c)
    t[s] = a;
  return t;
}, h = {
  __name: "PDFComp",
  props: {
    url: String
  },
  setup(r) {
    const c = r, t = p();
    let s = ["https://cdn.propvr.tech/css/magflip.min.css", "https://cdn.propvr.tech/css/themify-icons.min.css"];
    const a = (e) => !!document.querySelector('script[src="' + e + '"]'), d = (e) => !!document.querySelector('link[href="' + e + '"]'), l = async (e) => new Promise((n) => {
      if (a(e))
        n();
      else {
        const o = document.createElement("script");
        o.src = e, o.defer = "", o.onload = () => {
          console.log("External script loaded" + e), n();
        }, o.onerror = () => {
          console.error("Error loading external script"), n();
        }, document.body.appendChild(o);
      }
    }), i = async (e) => new Promise((n) => {
      if (d(e))
        n();
      else {
        const o = document.createElement("link");
        o.href = e, o.rel = "stylesheet", o.type = "text/css", o.onload = () => {
          n(), console.log("External script loaded" + e);
        }, o.onerror = () => {
          n(), console.error("Error loading external script");
        }, document.body.appendChild(o);
      }
    });
    return l("https://cdn.propvr.tech/js/jquery-2.1.3.min.js").then(() => {
      l("https://cdn.propvr.tech/js/magflip.min.js").then(() => {
        Promise.all([s.map((e) => {
          i(e);
        })]).then(() => {
          var e = setInterval(() => {
            if (window.DFLIP) {
              var n = { hard: "cover", pageMode: window.DFLIP.PAGE_MODE.SINGLE, webgl: !1, height: 500, duration: 800, hideControls: "share,download,pageMode,startPage,endPage,sound" };
              t.value.innerHTML = "", $("#df_manual_book").flipBook(c.url, n), clearInterval(e);
            }
          }, 100);
        });
      });
    }), (e, n) => (m(), _("div", {
      ref_key: "DFLip_container",
      ref: t,
      id: "df_manual_book"
    }, null, 512));
  }
}, g = /* @__PURE__ */ u(h, [["__scopeId", "data-v-77e41b9b"]]);
export {
  g as PDFComp
};
