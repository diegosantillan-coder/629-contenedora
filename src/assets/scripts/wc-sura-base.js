import {
	r as w,
	n as s,
	s as g,
	x as u,
	t as L,
	w as j,
} from './chunks/property.js';
const C =
	'.headerHome{position:relative;width:100%;height:auto;margin:0;padding:0;box-sizing:border-box;background-color:var(--sura-color-brand-primary-1)}.headerContent{position:relative;width:100%;height:auto;margin:0;padding:0;box-sizing:border-box;display:flex;flex-direction:column}.headerContent{background-color:var(--sura-color-brand-second-1)}.headerLogo img{display:block;margin:0 10px 0 0;height:42px;width:auto}.headerLogo b{font-family:var(--sura-font-family-base);font-size:1.2rem;font-weight:700;color:var(--sura-color-brand-primary-2)}.headerTitle,.headerLogo{position:relative;width:1200px;max-width:100%;height:80px;margin:0 auto;padding:0 15px;display:flex;align-items:center;box-sizing:border-box}.headerTitle{height:42px}.headerTitle span{margin:0 10px 0 0;padding:0;font-family:var(--sura-font-family-base);font-size:18px;color:var(--sura-color-brand-primary-2);text-align:left;font-weight:700;line-height:normal;cursor:default}@media (min-width: 960px) and (max-width: 1199px){.headerTitle{width:100%;padding:0 10px}}@media (min-width: 768px) and (max-width: 959px){.headerTitle{width:100%;padding:0 10px}.headerTitle span{font-size:18px;display:none}}@media (max-width: 767px){.headerTitle{width:100%;padding:0 10px}}@media (max-width: 519px){.headerHome{position:relative;height:auto;z-index:initial;top:initial;left:initial;box-shadow:none}}';
var N = Object.defineProperty,
	D = Object.getOwnPropertyDescriptor,
	M = (o, e, r, a) => {
		for (
			var n = a > 1 ? void 0 : a ? D(e, r) : e, t = o.length - 1, c;
			t >= 0;
			t--
		)
			(c = o[t]) && (n = (a ? c(e, r, n) : c(n)) || n);
		return a && n && N(e, r, n), n;
	};
let h = class extends g {
	constructor() {
		super(...arguments),
			(this.titulo = 'SEGUROS'),
			(this.descripcion = 'Ecosistema Digital SURA');
	}
	render() {
		return u`
      <header>
        <div class="headerHome">
          <div class="headerLogo">
            <a href="/">
              <img
                alt="encabezado-sucursal"
                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNi41LjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDE1MCA1MiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTUwIDUyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojRkZGRkZGO30NCjwvc3R5bGU+DQo8ZyBpZD0iQ2FwYV8xLTIiPg0KCTxnPg0KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTI4LjYsNDEuOGMwLjEtMC4xLDAtMC4yLTAuMS0wLjJjLTIuOCwxLjEtOSwyLjItMTIuOCwyLjhjLTMuMywwLjUtNi4yLDAuNi03LjcsMC43bC0wLjcsMC4xDQoJCQljLTAuMSwwLTAuMSwwLjEtMC4xLDAuMWMwLDAuMSwwLDAuMSwwLjEsMC4xYzAuMywwLjMsMS4yLDEuMiwzLjEsMS41YzIuMSwwLjMsNS4zLTAuMyw5LjMtMS40QzEyMi45LDQ0LjYsMTI2LjcsNDIuOSwxMjguNiw0MS44Ig0KCQkJLz4NCgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTEyOC45LDQzLjRjLTEuOCwxLjItNC4yLDIuNC03LjEsMy40cy02LjEsMS45LTkuNSwyLjVjLTAuMSwwLTAuMSwwLjEtMC4xLDAuMXYwLjFjMC42LDAuNSwxLjMsMC43LDIuMiwwLjgNCgkJCWMxLjEsMC4xLDIuNCwwLDQtMC40YzEuNC0wLjQsMi43LTEsNC4yLTEuN2MxLjQtMC43LDIuOC0xLjUsMy45LTIuM2MxLjItMC44LDItMS43LDIuNi0yLjRDMTI4LjksNDMuNSwxMjguOSw0My41LDEyOC45LDQzLjQiLz4NCgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTExNC40LDEyYzAuNywwLjgsMS42LDEuMywyLjgsMS43aDAuMWMwLjMsMC4xLDE5LjEsNSwyNCw2LjRjMi4yLDAuNiwzLjksMSw0LjcsMS4zYzAuMSwwLDAuMSwwLDAuMS0wLjENCgkJCWMwLDAsMC0wLjEtMC4xLTAuMWMtMy4xLTEuMy0yMi40LTguNy0yOS43LTExLjVsLTMuMS0xLjJjLTAuMSwwLTAuMiwwLTAuMiwwdjAuMWMwLDAuMywwLjIsMS42LDAuOCwyLjYNCgkJCUMxMTQsMTEuNSwxMTQuMiwxMS43LDExNC40LDEyIi8+DQoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xMTUuMiw0LjZjMC40LDAuNSwwLjcsMC44LDEuNCwxLjJjMC4yLDAuMSwwLjUsMC4zLDAuNywwLjRsMS43LDAuOWMxLDAuNSwxNS41LDcuMiwxNy42LDguMw0KCQkJYzIuNSwxLjIsNSwyLjQsNi4xLDNjMC4xLDAsMC4yLDAsMC4xLTAuMWMtMi43LTEuNy0xMy4xLTguMi0yMC40LTEyLjhsLTUuMy0zLjJsLTEtMC42bC0xLjgtMS4xYy0wLjEsMC0wLjEsMC0wLjIsMA0KCQkJUzExNCwwLjcsMTE0LDAuN2MwLDAuMiwwLDEuNiwwLjQsMi42QzExNC43LDMuNywxMTQuOSw0LjIsMTE1LjIsNC42Ii8+DQoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xMjguMyw0Ni43QzEyOC4zLDQ2LjcsMTI4LjIsNDYuNywxMjguMyw0Ni43Yy0yLjUsMi40LTYsMy43LTcuMiw0LjFjLTAuMSwwLTAuMSwwLjEtMC4xLDAuMQ0KCQkJYzAsMC4xLDAsMC4xLDAuMSwwLjJjMC4yLDAuMSwxLjYsMC45LDQuMy0wLjVjMS41LTAuOCwyLjMtMiwzLTMuN0MxMjguNCw0Ni43LDEyOC4zLDQ2LjcsMTI4LjMsNDYuNyIvPg0KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTQ1LjUsMjYuOGMtMS4yLDAuMy01LjgsMS41LTkuOSwyLjZjLTMuNSwwLjktNy40LDItNy40LDJjLTAuNCwwLjEtMC4zLDAuMy0wLjIsMC4zYzAuMSwwLjIsMC4zLDAuNSwwLjYsMQ0KCQkJYzAuNiwxLjEsMS41LDAuOSwyLjIsMC43YzAuMSwwLDE0LjEtNS45LDE0LjgtNi4zYzAuMS0wLjEsMC0wLjEsMC0wLjFDMTQ1LjYsMjYuOCwxNDUuNSwyNi44LDE0NS41LDI2LjgiLz4NCgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTEzOS40LDM2LjZMMTM5LjQsMzYuNmMtMS45LDEuNi00LjgsNC03LjcsNi41Yy0wLjMsMC4yLTAuNCwwLjYtMC41LDEuMWMtMC4yLDAuOC0wLjYsMS45LTAuNiwxLjkNCgkJCWMtMC4xLDAuMiwwLDAuMywwLjMsMC4xYzIuMi0yLjQsNy4yLTcuOSw4LjYtOS41QzEzOS41LDM2LjYsMTM5LjQsMzYuNiwxMzkuNCwzNi42Ii8+DQoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xNDguMiwyMy4xYy0yLjUtMC41LTMyLjctNS44LTMyLjgtNS44Yy0wLjEsMC0wLjEsMC0wLjIsMC4xYzAsMC4xLDAsMC4xLDAsMC4yYzAuNSwxLjYsMS43LDMuMSwzLjcsMy44DQoJCQljMC4yLDAuMSwwLjQsMC4xLDAuNywwLjFjMCwwLDI1LjcsMS43LDI4LjUsMS45YzAuMSwwLDAuMSwwLDAuMS0wLjFTMTQ4LjMsMjMuMSwxNDguMiwyMy4xIi8+DQoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xNDcsMjQuOGMtMC45LDAtMi44LDAtNS4xLDBjLTIuNywwLTUuOSwwLTksMGMtNC4xLDAtMTAuNywwLTEwLjcsMHMtMC4xLDAtMC4xLDAuMVYyNQ0KCQkJYzAuMSwwLjMsMC41LDEsMC45LDEuNGMwLjgsMC45LDEuNywxLjMsMi43LDEuNGMwLjEsMCwwLjIsMCwwLjMsMHMwLjIsMCwwLjMsMGMwLjEsMCwxOS42LTIuOCwyMC43LTIuOUMxNDcsMjUsMTQ3LjEsMjUsMTQ3LDI0LjgNCgkJCUMxNDcuMSwyNC45LDE0NywyNC44LDE0NywyNC44Ii8+DQoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xNDQsMjkuNmMtMS4zLDAuOC00LjgsMy03LjgsNC44Yy0xLjcsMS0zLjgsMi4yLTQuOSwyLjljLTAuMSwwLjEtMC4yLDAuMS0wLjIsMC40YzAsMCwwLjEsMC4zLDAuMSwwLjcNCgkJCWMwLjEsMS42LDAuOCwxLjQsMS44LDAuN2wwLjEtMC4xYzMuNC0yLjgsOS42LTgsMTEtOS4yQzE0NCwyOS42LDE0NCwyOS42LDE0NCwyOS42Ii8+DQoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik04Ny41LDEyYy02LjcsMC0xMyw0LjktMTMuMywxNC42Yy0wLjIsOC43LDQuMywxNC45LDEyLDE0LjljNi4zLDAsOC42LTQuNCw4LjYtNC40YzAuNCwzLDIsMy45LDUuMSwzLjlWMTINCgkJCUg4Ny41TDg3LjUsMTJ6IE05NC41LDI5YzAsNC0yLjMsNy44LTcuMyw3LjhjLTQuNCwwLTcuNi0zLTcuNC0xMC4yYzAuMi02LjksMy41LTEwLDcuOS0xMGMwLjMsMCwwLjcsMCwxLDBsMCwwaDUuOFYyOUw5NC41LDI5eiINCgkJCS8+DQoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00NC44LDEydjIwYzAsMi45LTIuNCw0LjQtNS42LDQuNGMtMy40LDAtNS41LTEuNS01LjUtNC40VjE3YzAtNC4zLTIuNy01LTUtNXYyMS4yYzAsNS40LDQuOCw4LDEwLjUsOA0KCQkJczEwLjgtMi42LDEwLjgtOFYxNy43QzQ5LjksMTMuNSw0OC4zLDEyLDQ0LjgsMTIiLz4NCgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTE2LjcsMjQuOWwtNi4yLTEuN2MtMS43LTAuNS0zLjItMS4yLTMuMi0zLjNzMS4zLTMuMiw0LTMuMmg1LjVjMi40LDAsNS4zLTAuOCw1LjMtNC44SDExLjgNCgkJCWMtNi40LDAtMTAsMy4yLTEwLDcuOGMwLDQuMywyLjcsNi43LDcuNiw4bDUuNCwxLjRjMi4yLDAuNiwzLDIsMywzLjRjMCwyLjItMS40LDMuNS00LjcsMy41TDIuNywzNi4ydjQuN2gxMC41DQoJCQljNi40LDAsMTAtMy40LDEwLTcuOVMyMS40LDI2LjIsMTYuNywyNC45Ii8+DQoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik02Ny4yLDEyYy02LjIsMC0xMC41LDMuNi0xMC41LDExdjE3LjloNXYtMThjMC0zLjgsMi4xLTYuMSw2LTYuMWgxLjVjNC40LDAsNS4xLTIuMyw1LjEtNC44TDY3LjIsMTJMNjcuMiwxMg0KCQkJeiIvPg0KCTwvZz4NCjwvZz4NCjwvc3ZnPg0K" />
            </a>
            <b>${this.descripcion}</b>
          </div>
          <div class="headerContent">
            <div class="headerTitle">
              <span>${this.titulo}</span>
            </div>
          </div>
        </div>
      </header>
    `;
	}
};
h.styles = w(C);
M([s({ type: String })], h.prototype, 'titulo', 2);
M([s({ type: String })], h.prototype, 'descripcion', 2);
h = M([L('sura-base-header')], h);
const v =
	'footer{padding:3%;text-align:center;position:relative;background-color:var(--sura-color-brand-primary-1);flex-shrink:0}footer span{font-family:var(--sura-font-family-base);color:var(--sura-color-brand-primary-2)}';
var S = Object.defineProperty,
	k = Object.getOwnPropertyDescriptor,
	z = (o, e, r, a) => {
		for (
			var n = a > 1 ? void 0 : a ? k(e, r) : e, t = o.length - 1, c;
			t >= 0;
			t--
		)
			(c = o[t]) && (n = (a ? c(e, r, n) : c(n)) || n);
		return a && n && S(e, r, n), n;
	};
let m = class extends g {
	render() {
		return u`
      <footer class="footer">
        <span>Copyright © ${new Date().getFullYear()} SEGUROS SURA CO.</span>
        <br />
        <span>Entorno de Desarrollo</span>
      </footer>
    `;
	}
};
m.styles = w(v);
m = z([L('sura-base-footer')], m);
const T =
	'@charset "UTF-8";[class^=sura-icon]:before,[class*=sura-icon]:before{font-family:sura-icons;font-style:normal;font-weight:400;display:inline-block;text-decoration:inherit;text-align:center;text-transform:none}.sura-icon-sm{font-size:1rem}.sura-icon-md{font-size:1.5rem}.sura-icon-lg{font-size:2rem}.sura-icon-xl{font-size:2.5rem}.sura-icon-xxl{font-size:3.875rem}.sura-icon-badge-percent:before{content:""}.sura-icon-blogger:before{content:""}.sura-icon-rotate-left:before{content:""}.sura-icon-instagram:before{content:""}.sura-icon-linkedin:before{content:""}.sura-icon-youtube:before{content:""}.sura-icon-x:before{content:""}.sura-icon-toast-exclamation:before{content:""}.sura-icon-ready:before{content:""}.sura-icon-close-circle:before{content:""}.sura-icon-shield-ready:before{content:""}.sura-icon-toast-info:before{content:""}.sura-icon-volume:before{content:""}.sura-icon-hide:before{content:""}.sura-icon-open-eye:before{content:""}.sura-icon-moon:before{content:""}.sura-icon-doll:before{content:""}.sura-icon-accident-car:before{content:""}.sura-icon-oil:before{content:""}.sura-icon-flight:before{content:""}.sura-icon-ship:before{content:""}.sura-icon-bicycle:before{content:""}.sura-icon-van:before{content:""}.sura-icon-auto-workshop:before{content:""}.sura-icon-workshop:before{content:""}.sura-icon-rocket:before{content:""}.sura-icon-power-station:before{content:""}.sura-icon-garage:before{content:""}.sura-icon-gasoline:before{content:""}.sura-icon-crane:before{content:""}.sura-icon-tools:before{content:""}.sura-icon-wheel:before{content:""}.sura-icon-cargo-cart:before{content:""}.sura-icon-dump-truck:before{content:""}.sura-icon-motorcycle-workshop:before{content:""}.sura-icon-engine:before{content:""}.sura-icon-skateboard:before{content:""}.sura-icon-scooter:before{content:""}.sura-icon-first-place:before{content:""}.sura-icon-license:before{content:""}.sura-icon-to-hand:before{content:""}.sura-icon-hand-care:before{content:""}.sura-icon-handwashing:before{content:""}.sura-icon-hand-stop:before{content:""}.sura-icon-hand-back-point-up:before{content:""}.sura-icon-all-good:before{content:""}.sura-icon-hand-dollar:before{content:""}.sura-icon-animals:before{content:""}.sura-icon-cow:before{content:""}.sura-icon-dog:before{content:""}.sura-icon-cat:before{content:""}.sura-icon-fingerprint-1:before{content:""}.sura-icon-pig:before{content:""}.sura-icon-hourse:before{content:""}.sura-icon-injured:before{content:""}.sura-icon-old-man:before{content:""}.sura-icon-baby:before{content:""}.sura-icon-runnig:before{content:""}.sura-icon-operator:before{content:""}.sura-icon-doctor:before{content:""}.sura-icon-dni:before{content:""}.sura-icon-educator:before{content:""}.sura-icon-sick:before{content:""}.sura-icon-serveral-people:before{content:""}.sura-icon-newborn:before{content:""}.sura-icon-child:before{content:""}.sura-icon-worker:before{content:""}.sura-icon-person:before{content:""}.sura-icon-fractured-person:before{content:""}.sura-icon-person-board:before{content:""}.sura-icon-clerk:before{content:""}.sura-icon-people-icons:before{content:""}.sura-icon-user:before{content:""}.sura-icon-round-graph:before{content:""}.sura-icon-shop:before{content:""}.sura-icon-briefcase:before{content:""}.sura-icon-cash-register:before{content:""}.sura-icon-currency:before{content:""}.sura-icon-statistics:before{content:""}.sura-icon-supermarket:before{content:""}.sura-icon-moneybag:before{content:""}.sura-icon-balance:before{content:""}.sura-icon-bank:before{content:""}.sura-icon-settings:before{content:""}.sura-icon-barcode:before{content:""}.sura-icon-bill:before{content:""}.sura-icon-trash:before{content:""}.sura-icon-photography:before{content:""}.sura-icon-bluetooth:before{content:""}.sura-icon-search:before{content:""}.sura-icon-notes:before{content:""}.sura-icon-timetable:before{content:""}.sura-icon-sheet:before{content:""}.sura-icon-rotate-right:before{content:""}.sura-icon-rotate:before{content:""}.sura-icon-recycle:before{content:""}.sura-icon-random:before{content:""}.sura-icon-location-arrow:before{content:""}.sura-icon-numerical-filter:before{content:""}.sura-icon-upward:before{content:""}.sura-icon-alphabet:before{content:""}.sura-icon-shared:before{content:""}.sura-icon-siren:before{content:""}.sura-icon-alert:before{content:""}.sura-icon-information:before{content:""}.sura-icon-circle-question:before{content:""}.sura-icon-description:before{content:""}.sura-icon-glow:before{content:""}.sura-icon-cc:before{content:""}.sura-icon-fingerprint:before{content:""}.sura-icon-license-1:before{content:""}.sura-icon-little-hands:before{content:""}.sura-icon-wheelchair:before{content:""}.sura-icon-clock:before{content:""}.sura-icon-alarm:before{content:""}.sura-icon-mail:before{content:""}.sura-icon-cloud-alert:before{content:""}.sura-icon-caret-down:before{content:""}.sura-icon-upload-file:before{content:""}.sura-icon-cloud-load:before{content:""}.sura-icon-chevron-arrow-right:before{content:""}.sura-icon-download:before{content:""}.sura-icon-expand:before{content:""}.sura-icon-forward-arrow-up:before{content:""}.sura-icon-small-row-right:before{content:""}.sura-icon-arrows-forward-left:before{content:""}.sura-icon-down-arrow:before{content:""}.sura-icon-arrow-up-line:before{content:""}.sura-icon-big-right-arrow:before{content:""}.sura-icon-left-arrow:before{content:""}.sura-icon-sowing:before{content:""}.sura-icon-battery:before{content:""}.sura-icon-truck:before{content:""}.sura-icon-burden:before{content:""}.sura-icon-car:before{content:""}.sura-icon-electric-car:before{content:""}.sura-icon-key-on-hand:before{content:""}.sura-icon-flat-tire:before{content:""}.sura-icon-motorcycle:before{content:""}.sura-icon-date:before{content:""}.sura-icon-camera:before{content:""}.sura-icon-file:before{content:""}.sura-icon-file-open:before{content:""}.sura-icon-navigation-check:before{content:""}.sura-icon-click:before{content:""}.sura-icon-keys:before{content:""}.sura-icon-written:before{content:""}.sura-icon-ellipsis:before{content:""}.sura-icon-three-points:before{content:""}.sura-icon-close:before{content:""}.sura-icon-privade:before{content:""}.sura-icon-star:before{content:""}.sura-icon-funnel:before{content:""}.sura-icon-impression:before{content:""}.sura-icon-internet:before{content:""}.sura-icon-link:before{content:""}.sura-icon-location:before{content:""}.sura-icon-map:before{content:""}.sura-icon-statement:before{content:""}.sura-icon-more-line:before{content:""}.sura-icon-note:before{content:""}.sura-icon-microphone:before{content:""}.sura-icon-held-down:before{content:""}.sura-icon-anchored:before{content:""}.sura-icon-play:before{content:""}.sura-icon-sliders:before{content:""}.sura-icon-label:before{content:""}.sura-icon-keyboard:before{content:""}.sura-icon-call:before{content:""}.sura-icon-video:before{content:""}.sura-icon-wifi:before{content:""}.sura-icon-women:before{content:""}.sura-icon-pregnant:before{content:""}.sura-icon-old-person:before{content:""}.sura-icon-app:before{content:""}.sura-icon-facebook:before{content:""}.sura-icon-spotify:before{content:""}.sura-icon-tiktok:before{content:""}.sura-icon-whatsapp:before{content:""}.sura-icon-adn:before{content:""}.sura-icon-ambulance:before{content:""}.sura-icon-glasses:before{content:""}.sura-icon-first-aid-kit:before{content:""}.sura-icon-bain:before{content:""}.sura-icon-heart:before{content:""}.sura-icon-virus:before{content:""}.sura-icon-face-mask:before{content:""}.sura-icon-intensive-care:before{content:""}.sura-icon-healthy-tooth:before{content:""}.sura-icon-stethoscope:before{content:""}.sura-icon-medical-order:before{content:""}.sura-icon-fracture:before{content:""}.sura-icon-gripe:before{content:""}.sura-icon-hospital:before{content:""}.sura-icon-vaccine:before{content:""}.sura-icon-medicines:before{content:""}.sura-icon-domicile:before{content:""}.sura-icon-microscope:before{content:""}.sura-icon-sample:before{content:""}.sura-icon-oxygen:before{content:""}.sura-icon-radiation:before{content:""}.sura-icon-x-ray:before{content:""}.sura-icon-heart-rate:before{content:""}.sura-icon-smart-watch:before{content:""}.sura-icon-thermometer:before{content:""}.sura-icon-germs:before{content:""}.sura-icon-one:before{content:""}.sura-icon-check-circle:before{content:""}.sura-icon-two:before{content:""}.sura-icon-apartment:before{content:""}.sura-icon-several-apps:before{content:""}.sura-icon-lightbulb:before{content:""}.sura-icon-house:before{content:""}.sura-icon-helmet:before{content:""}.sura-icon-check-line:before{content:""}.sura-icon-book:before{content:""}.sura-icon-birthday-date:before{content:""}.sura-icon-gears:before{content:""}.sura-icon-x-linea:before{content:""}.sura-icon-pencil:before{content:""}.sura-icon-latoop:before{content:""}.sura-icon-hammer:before{content:""}.sura-icon-medal:before{content:""}.sura-icon-gift:before{content:""}.sura-icon-tv:before{content:""}.sura-icon-cup:before{content:""}.sura-icon-phone-hand:before{content:""}.sura-icon-forward-down-arrow:before{content:""}.sura-icon-accident:before{content:""}.sura-icon-calculator:before{content:""}.sura-container-select{font-size:.87rem;color:#2d6df6;font-family:Sura-Sans;display:flex;flex-direction:column;gap:4px}.sura-container-select .disabled{color:#b4b4b5}.sura-container-select .error{color:#d12d35}.sura-container-select .select-menu{min-width:240px;width:240px;font-family:Sura-Sans;font-size:1rem;font-weight:400;font-style:normal;color:#2d6df6;position:relative}.sura-container-select .select-menu .select-btn{display:flex;height:48px;background:#fff;padding:0 16px;font-size:1rem;font-weight:400;border-radius:12px;align-items:center;cursor:pointer;justify-content:space-between;border:1px solid #0033a0}.sura-container-select .select-menu .disabled{border:1px solid #b4b4b5;color:#b4b4b5}.sura-container-select .select-menu .error{border:1px solid #d12d35;color:#d12d35}.sura-container-select .select-menu .select-btn i{font-size:1.37rem;transition:.3s}.sura-container-select .select-menu.active .select-btn i{transform:rotate(-180deg)}.sura-container-select .select-menu.active .options{display:block}.sura-container-select .select-menu.small{min-width:60px;width:60px;font-size:.87rem}.sura-container-select .select-menu.small .select-btn{font-size:.87rem;padding:0 10px;height:40px}.sura-container-select .select-menu.small .select-btn i{font-size:1rem}.sura-container-select .options{z-index:10;position:absolute;width:220px;padding:10px;margin-top:4px;border:1px solid #81b1ff;border-radius:12px;background:#fff;display:none}.sura-container-select .options__option{display:flex;height:48px;cursor:pointer;padding:0 16px;border-radius:8px;align-items:center;background:#fff}.sura-container-select .options__option:hover{background:#f8f8f8}.sura-container-select .options__option.small{padding:0 10px}.sura-container-select .options i{font-size:1.37rem;margin-right:12px}.sura-container-select .options.small{width:40px}';
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const A = {
		ATTRIBUTE: 1,
		CHILD: 2,
		PROPERTY: 3,
		BOOLEAN_ATTRIBUTE: 4,
		EVENT: 5,
		ELEMENT: 6,
	},
	I =
		(o) =>
		(...e) => ({ _$litDirective$: o, values: e });
class E {
	constructor(e) {}
	get _$AU() {
		return this._$AM._$AU;
	}
	_$AT(e, r, a) {
		(this._$Ct = e), (this._$AM = r), (this._$Ci = a);
	}
	_$AS(e, r) {
		return this.update(e, r);
	}
	update(e, r) {
		return this.render(...r);
	}
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const y = I(
	class extends E {
		constructor(o) {
			var e;
			if (
				(super(o),
				o.type !== A.ATTRIBUTE ||
					o.name !== 'class' ||
					((e = o.strings) == null ? void 0 : e.length) > 2)
			)
				throw Error(
					'`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.'
				);
		}
		render(o) {
			return (
				' ' +
				Object.keys(o)
					.filter((e) => o[e])
					.join(' ') +
				' '
			);
		}
		update(o, [e]) {
			var a, n;
			if (this.st === void 0) {
				(this.st = new Set()),
					o.strings !== void 0 &&
						(this.nt = new Set(
							o.strings
								.join(' ')
								.split(/\s/)
								.filter((t) => t !== '')
						));
				for (const t in e)
					e[t] && !((a = this.nt) != null && a.has(t)) && this.st.add(t);
				return this.render(e);
			}
			const r = o.element.classList;
			for (const t of this.st) t in e || (r.remove(t), this.st.delete(t));
			for (const t in e) {
				const c = !!e[t];
				c === this.st.has(t) ||
					((n = this.nt) != null && n.has(t)) ||
					(c ? (r.add(t), this.st.add(t)) : (r.remove(t), this.st.delete(t)));
			}
			return j;
		}
	}
);
var _ = Object.defineProperty,
	O = Object.getOwnPropertyDescriptor,
	b = (o, e, r, a) => {
		for (
			var n = a > 1 ? void 0 : a ? O(e, r) : e, t = o.length - 1, c;
			t >= 0;
			t--
		)
			(c = o[t]) && (n = (a ? c(e, r, n) : c(n)) || n);
		return a && n && _(e, r, n), n;
	};
let i = class extends g {
	constructor() {
		super(...arguments),
			(this.options = []),
			(this.placeholder = ''),
			(this.active = !1),
			(this.disabled = !1),
			(this.error = !1),
			(this.label = ''),
			(this.description = ''),
			(this.class = '');
	}
	render() {
		const o = { disabled: this.disabled, error: this.error };
		return u`
      <div class="sura-container-select">
        <label class="${y(o)}">${this.label}</label>
        <div
          class="select-menu ${this.class} ${this.active ? 'active' : ''}"
          @click="${this.toggleMenu}">
          <div class="select-btn ${y(o)}">
            <span class="select-text">${this.placeholder}</span>
            <i class="sura-icon-forward-down-arrow"></i>
          </div>
          <ul class="options ${this.class}">
            ${this.options.map(
							(e) => u`
                <li
                  class="options__option ${this.class}"
                  @click="${() => this.selectOption(e)}">
                  <span class="options__text">${e}</span>
                </li>
              `
						)}
          </ul>
        </div>
        ${
					this.description
						? u`<span class="option-text ${y(o)}"
              >${this.description}</span
            >`
						: null
				}
      </div>
    `;
	}
	toggleMenu() {
		this.disabled || (this.active = !this.active);
	}
	selectOption(o) {
		(this.active = !0),
			(this.placeholder = o),
			this.dispatchEvent(new CustomEvent('option-selected', { detail: o }));
	}
};
i.styles = w(T);
b([s({ type: Array })], i.prototype, 'options', 2);
b([s({ type: String })], i.prototype, 'placeholder', 2);
b([s({ type: Boolean })], i.prototype, 'active', 2);
b([s({ type: Boolean })], i.prototype, 'disabled', 2);
b([s({ type: Boolean })], i.prototype, 'error', 2);
b([s({ type: String })], i.prototype, 'label', 2);
b([s({ type: String })], i.prototype, 'description', 2);
b([s({ type: String })], i.prototype, 'class', 2);
i = b([L('sura-dropdown')], i);
const Y =
	'@charset "UTF-8";[class^=sura-icon]:before,[class*=sura-icon]:before{font-family:sura-icons;font-style:normal;font-weight:400;display:inline-block;text-decoration:inherit;text-align:center;text-transform:none}.sura-icon-sm{font-size:1rem}.sura-icon-md{font-size:1.5rem}.sura-icon-lg{font-size:2rem}.sura-icon-xl{font-size:2.5rem}.sura-icon-xxl{font-size:3.875rem}.sura-icon-badge-percent:before{content:""}.sura-icon-blogger:before{content:""}.sura-icon-rotate-left:before{content:""}.sura-icon-instagram:before{content:""}.sura-icon-linkedin:before{content:""}.sura-icon-youtube:before{content:""}.sura-icon-x:before{content:""}.sura-icon-toast-exclamation:before{content:""}.sura-icon-ready:before{content:""}.sura-icon-close-circle:before{content:""}.sura-icon-shield-ready:before{content:""}.sura-icon-toast-info:before{content:""}.sura-icon-volume:before{content:""}.sura-icon-hide:before{content:""}.sura-icon-open-eye:before{content:""}.sura-icon-moon:before{content:""}.sura-icon-doll:before{content:""}.sura-icon-accident-car:before{content:""}.sura-icon-oil:before{content:""}.sura-icon-flight:before{content:""}.sura-icon-ship:before{content:""}.sura-icon-bicycle:before{content:""}.sura-icon-van:before{content:""}.sura-icon-auto-workshop:before{content:""}.sura-icon-workshop:before{content:""}.sura-icon-rocket:before{content:""}.sura-icon-power-station:before{content:""}.sura-icon-garage:before{content:""}.sura-icon-gasoline:before{content:""}.sura-icon-crane:before{content:""}.sura-icon-tools:before{content:""}.sura-icon-wheel:before{content:""}.sura-icon-cargo-cart:before{content:""}.sura-icon-dump-truck:before{content:""}.sura-icon-motorcycle-workshop:before{content:""}.sura-icon-engine:before{content:""}.sura-icon-skateboard:before{content:""}.sura-icon-scooter:before{content:""}.sura-icon-first-place:before{content:""}.sura-icon-license:before{content:""}.sura-icon-to-hand:before{content:""}.sura-icon-hand-care:before{content:""}.sura-icon-handwashing:before{content:""}.sura-icon-hand-stop:before{content:""}.sura-icon-hand-back-point-up:before{content:""}.sura-icon-all-good:before{content:""}.sura-icon-hand-dollar:before{content:""}.sura-icon-animals:before{content:""}.sura-icon-cow:before{content:""}.sura-icon-dog:before{content:""}.sura-icon-cat:before{content:""}.sura-icon-fingerprint-1:before{content:""}.sura-icon-pig:before{content:""}.sura-icon-hourse:before{content:""}.sura-icon-injured:before{content:""}.sura-icon-old-man:before{content:""}.sura-icon-baby:before{content:""}.sura-icon-runnig:before{content:""}.sura-icon-operator:before{content:""}.sura-icon-doctor:before{content:""}.sura-icon-dni:before{content:""}.sura-icon-educator:before{content:""}.sura-icon-sick:before{content:""}.sura-icon-serveral-people:before{content:""}.sura-icon-newborn:before{content:""}.sura-icon-child:before{content:""}.sura-icon-worker:before{content:""}.sura-icon-person:before{content:""}.sura-icon-fractured-person:before{content:""}.sura-icon-person-board:before{content:""}.sura-icon-clerk:before{content:""}.sura-icon-people-icons:before{content:""}.sura-icon-user:before{content:""}.sura-icon-round-graph:before{content:""}.sura-icon-shop:before{content:""}.sura-icon-briefcase:before{content:""}.sura-icon-cash-register:before{content:""}.sura-icon-currency:before{content:""}.sura-icon-statistics:before{content:""}.sura-icon-supermarket:before{content:""}.sura-icon-moneybag:before{content:""}.sura-icon-balance:before{content:""}.sura-icon-bank:before{content:""}.sura-icon-settings:before{content:""}.sura-icon-barcode:before{content:""}.sura-icon-bill:before{content:""}.sura-icon-trash:before{content:""}.sura-icon-photography:before{content:""}.sura-icon-bluetooth:before{content:""}.sura-icon-search:before{content:""}.sura-icon-notes:before{content:""}.sura-icon-timetable:before{content:""}.sura-icon-sheet:before{content:""}.sura-icon-rotate-right:before{content:""}.sura-icon-rotate:before{content:""}.sura-icon-recycle:before{content:""}.sura-icon-random:before{content:""}.sura-icon-location-arrow:before{content:""}.sura-icon-numerical-filter:before{content:""}.sura-icon-upward:before{content:""}.sura-icon-alphabet:before{content:""}.sura-icon-shared:before{content:""}.sura-icon-siren:before{content:""}.sura-icon-alert:before{content:""}.sura-icon-information:before{content:""}.sura-icon-circle-question:before{content:""}.sura-icon-description:before{content:""}.sura-icon-glow:before{content:""}.sura-icon-cc:before{content:""}.sura-icon-fingerprint:before{content:""}.sura-icon-license-1:before{content:""}.sura-icon-little-hands:before{content:""}.sura-icon-wheelchair:before{content:""}.sura-icon-clock:before{content:""}.sura-icon-alarm:before{content:""}.sura-icon-mail:before{content:""}.sura-icon-cloud-alert:before{content:""}.sura-icon-caret-down:before{content:""}.sura-icon-upload-file:before{content:""}.sura-icon-cloud-load:before{content:""}.sura-icon-chevron-arrow-right:before{content:""}.sura-icon-download:before{content:""}.sura-icon-expand:before{content:""}.sura-icon-forward-arrow-up:before{content:""}.sura-icon-small-row-right:before{content:""}.sura-icon-arrows-forward-left:before{content:""}.sura-icon-down-arrow:before{content:""}.sura-icon-arrow-up-line:before{content:""}.sura-icon-big-right-arrow:before{content:""}.sura-icon-left-arrow:before{content:""}.sura-icon-sowing:before{content:""}.sura-icon-battery:before{content:""}.sura-icon-truck:before{content:""}.sura-icon-burden:before{content:""}.sura-icon-car:before{content:""}.sura-icon-electric-car:before{content:""}.sura-icon-key-on-hand:before{content:""}.sura-icon-flat-tire:before{content:""}.sura-icon-motorcycle:before{content:""}.sura-icon-date:before{content:""}.sura-icon-camera:before{content:""}.sura-icon-file:before{content:""}.sura-icon-file-open:before{content:""}.sura-icon-navigation-check:before{content:""}.sura-icon-click:before{content:""}.sura-icon-keys:before{content:""}.sura-icon-written:before{content:""}.sura-icon-ellipsis:before{content:""}.sura-icon-three-points:before{content:""}.sura-icon-close:before{content:""}.sura-icon-privade:before{content:""}.sura-icon-star:before{content:""}.sura-icon-funnel:before{content:""}.sura-icon-impression:before{content:""}.sura-icon-internet:before{content:""}.sura-icon-link:before{content:""}.sura-icon-location:before{content:""}.sura-icon-map:before{content:""}.sura-icon-statement:before{content:""}.sura-icon-more-line:before{content:""}.sura-icon-note:before{content:""}.sura-icon-microphone:before{content:""}.sura-icon-held-down:before{content:""}.sura-icon-anchored:before{content:""}.sura-icon-play:before{content:""}.sura-icon-sliders:before{content:""}.sura-icon-label:before{content:""}.sura-icon-keyboard:before{content:""}.sura-icon-call:before{content:""}.sura-icon-video:before{content:""}.sura-icon-wifi:before{content:""}.sura-icon-women:before{content:""}.sura-icon-pregnant:before{content:""}.sura-icon-old-person:before{content:""}.sura-icon-app:before{content:""}.sura-icon-facebook:before{content:""}.sura-icon-spotify:before{content:""}.sura-icon-tiktok:before{content:""}.sura-icon-whatsapp:before{content:""}.sura-icon-adn:before{content:""}.sura-icon-ambulance:before{content:""}.sura-icon-glasses:before{content:""}.sura-icon-first-aid-kit:before{content:""}.sura-icon-bain:before{content:""}.sura-icon-heart:before{content:""}.sura-icon-virus:before{content:""}.sura-icon-face-mask:before{content:""}.sura-icon-intensive-care:before{content:""}.sura-icon-healthy-tooth:before{content:""}.sura-icon-stethoscope:before{content:""}.sura-icon-medical-order:before{content:""}.sura-icon-fracture:before{content:""}.sura-icon-gripe:before{content:""}.sura-icon-hospital:before{content:""}.sura-icon-vaccine:before{content:""}.sura-icon-medicines:before{content:""}.sura-icon-domicile:before{content:""}.sura-icon-microscope:before{content:""}.sura-icon-sample:before{content:""}.sura-icon-oxygen:before{content:""}.sura-icon-radiation:before{content:""}.sura-icon-x-ray:before{content:""}.sura-icon-heart-rate:before{content:""}.sura-icon-smart-watch:before{content:""}.sura-icon-thermometer:before{content:""}.sura-icon-germs:before{content:""}.sura-icon-one:before{content:""}.sura-icon-check-circle:before{content:""}.sura-icon-two:before{content:""}.sura-icon-apartment:before{content:""}.sura-icon-several-apps:before{content:""}.sura-icon-lightbulb:before{content:""}.sura-icon-house:before{content:""}.sura-icon-helmet:before{content:""}.sura-icon-check-line:before{content:""}.sura-icon-book:before{content:""}.sura-icon-birthday-date:before{content:""}.sura-icon-gears:before{content:""}.sura-icon-x-linea:before{content:""}.sura-icon-pencil:before{content:""}.sura-icon-latoop:before{content:""}.sura-icon-hammer:before{content:""}.sura-icon-medal:before{content:""}.sura-icon-gift:before{content:""}.sura-icon-tv:before{content:""}.sura-icon-cup:before{content:""}.sura-icon-phone-hand:before{content:""}.sura-icon-forward-down-arrow:before{content:""}.sura-icon-accident:before{content:""}.sura-icon-calculator:before{content:""}.paginator,.button,.links,.link{display:flex;align-items:center;justify-content:center}.paginator{padding:10px 24px;border-radius:8px;column-gap:8px;background:#fff;font-size:.87rem;font-family:Sura-Sans;font-style:normal;font-weight:700;line-height:normal}.paginator .button{border:none;color:#2d6df6;height:40px;width:40px;border-radius:30px;background:#fff;filter:drop-shadow(0px 0px 4px rgba(0,0,0,.25))}@media (min-width: 768px){.paginator .button{filter:none}}.paginator .button i{font-size:1rem;pointer-events:none}.paginator .button:disabled{color:#888b8d;pointer-events:none}.paginator .link{height:36px;width:36px;color:#0033a0;border-radius:30px;cursor:pointer;border:none;background:#fff}.paginator .links{column-gap:8px}@media (max-width: 768px){.paginator .links{display:none}}.paginator .button:hover,.paginator .link:hover,.paginator .link.active{color:#fff;background:#2d6df6}.paginator .details{display:flex;align-items:center;justify-content:center;column-gap:8px;color:#3f3f41;font-style:normal;font-weight:400;line-height:normal}.paginator .information-mobile{font-size:.75rem;font-style:normal;font-weight:400;line-height:normal}.paginator .page{color:#0033a0}@media (min-width: 768px){.paginator .information-mobile{display:none}}@media (max-width: 768px){.paginator .details__text{display:none}}';
var Q = Object.defineProperty,
	$ = Object.getOwnPropertyDescriptor,
	d = (o, e, r, a) => {
		for (
			var n = a > 1 ? void 0 : a ? $(e, r) : e, t = o.length - 1, c;
			t >= 0;
			t--
		)
			(c = o[t]) && (n = (a ? c(e, r, n) : c(n)) || n);
		return a && n && Q(e, r, n), n;
	};
let f = class extends g {
	constructor() {
		super(...arguments),
			(this.maximoPaginas = 1),
			(this.paginaActual = 1),
			(this.registrosTotales = 1),
			(this.listaOpciones = []),
			(this.registrosPagina = 0),
			(this.paginas = []);
	}
	cambiarPagina(o) {
		(this.paginaActual = o), this.emitirEvento(), this.requestUpdate();
	}
	cambiarNumeroRegistros(o) {
		this.registrosPagina = Number(o.detail);
		const e = this.registrosTotales / this.registrosPagina;
		(this.paginas = this.calcularPaginasMostrar(
			e,
			this.maximoPaginas,
			this.paginaActual
		)),
			this.emitirEvento(),
			this.requestUpdate();
	}
	emitirEvento() {
		this.dispatchEvent(
			new CustomEvent('onPageChange', {
				detail: {
					paginaActual: this.paginaActual,
					registrosPagina: this.registrosPagina,
				},
			})
		);
	}
	calcularPaginasMostrar(o, e, r) {
		const a = Math.floor(e / 2);
		let n = e;
		r + a >= o ? (n = o) : r > a && (n = r + a);
		const t = Math.max(n - e, 0);
		return Array.from({ length: Math.min(o, e) }, (c, x) => x + 1 + t);
	}
	render() {
		const o = this.registrosTotales / this.registrosPagina;
		this.paginas = this.calcularPaginasMostrar(
			o,
			this.maximoPaginas,
			this.paginaActual
		);
		const e = {
			prev: () => this.paginaActual === 1 || this.paginaActual > o,
			next: () => this.paginaActual >= o,
		};
		return u`
      <div class="paginator">
        <button
          id="previous"
          class="button ${e.prev() ? 'disabled' : ''}"
          @click=${() => this.cambiarPagina(this.paginaActual - 1)}
          ?disabled=${e.prev()}>
          <i class="sura-icon-arrows-forward-left"></i>
        </button>
        <div class="links">
          ${this.paginas.map(
						(r) => u`<button
                class="link ${this.paginaActual === r ? 'active' : ''}"
                @click=${() => this.cambiarPagina(r)}>
                ${r}
              </button>`
					)}
          <button class="link">...</button>
          <button
            class="link lastPage"
            @click=${() => this.cambiarPagina(o)}>
            ${o}
          </button>
        </div>
        <p class="information-mobile">
          <span class="page"
            >página ${this.paginaActual} de ${o}</span
          >
        </p>
        <button
          id="next"
          class="button ${e.next() ? 'disabled' : ''}"
          @click=${() => this.cambiarPagina(this.paginaActual + 1)}
          ?disabled=${e.next()}>
          <i class="sura-icon-small-row-right"></i>
        </button>
        <div class="details">
          <p class="details__text">Mostrar</p>
          <sura-dropdown
            .options="${this.listaOpciones}"
            class="small"
            placeholder="${this.registrosPagina}"
            @option-selected="${this.cambiarNumeroRegistros}"></sura-dropdown>
          <p class="details__text">Filas por página</p>
        </div>
      </div>
    `;
	}
};
f.styles = w(Y);
d([s({ type: Number })], f.prototype, 'maximoPaginas', 2);
d([s({ type: Number })], f.prototype, 'paginaActual', 2);
d([s({ type: Number })], f.prototype, 'registrosTotales', 2);
d([s({ type: Array })], f.prototype, 'listaOpciones', 2);
d([s({ type: Number })], f.prototype, 'registrosPagina', 2);
d([s({ type: Array })], f.prototype, 'paginas', 2);
f = d([L('sura-paginator')], f);
const P =
	'@charset "UTF-8";.sura-title-6,.sura-title-5,.sura-title-4,.sura-title-3,.sura-title-2,.sura-title-1{font-family:Sura-Sans;font-style:normal;font-weight:700}.sura-small,.sura-caption,.sura-body,.sura-body-banner-2,.sura-body-banner-1{font-family:Sura-Sans;font-style:normal;font-weight:400}.sura-caption-bold,.sura-body-bold{font-family:Sura-Sans;font-style:normal;font-weight:700}.sura-toast-info,.sura-toast-success,.sura-toast-warn,.sura-toast-error{display:flex;padding:8px 16px;flex-direction:column;gap:16px;border-radius:12px;border:1px solid #81b1ff}*,*:before,*:after{box-sizing:border-box}*{margin:0;padding:0;font-family:var(--sura-font-family-base);box-sizing:border-box}:root{font-family:var(--sura-font-family-base)}body{line-height:1.5;-webkit-font-smoothing:antialiased}img,picture,video,canvas,svg{display:block;max-width:100%}input,button,textarea,select{font:inherit}p,span,h1,h2,h3,h4,h5,h6{overflow-wrap:break-word;color:var(--sura-color-gray-web)}.sura-skyblue{color:#2d6df6}.sura-blue{color:#0033a0}.sura-yellow{color:#e3e829}.sura-aqua{color:#00aec7}.sura-gray{color:#888b8d}.sura-white{color:#fff}.sura-skyblue-neutral{color:#81b1ff}.sura-blue-neutral{color:#838dc8}.sura-yellow-neutral{color:#ecf0a1}.sura-aqua-neutral{color:#9be1e9}.sura-gray-neutral{color:#b4b4b5}.sura-bg-1{background-color:#e5e9ea}.sura-bg-2{background-color:#f9fae1}.sura-bg-3{background-color:#e6faef}.sura-bg-4{background-color:#dfeaff}.sura-bg-5{background-color:#f8f8f8}.sura-bg-white{background-color:#fff}.sura-alert-success{color:#067014}.sura-alert-warn{color:#ed8b00}.sura-alert-error{color:#e4002b}.sura-alert-info{color:#0033a0}.sura-alert-error-1{color:#d12d35}.sura-bg-success{background-color:#def6de}.sura-bg-warn{background-color:#fff5ec}.sura-bg-error{background-color:#fff4f3}.sura-bg-info{background-color:#e0eaff}.sura-color-info{color:#e0eaff}.sura-gray-1{color:#f4f4f4}.sura-gray-2{color:#e7e7e7}.sura-gray-3{color:#b4b4b5}.sura-gray-4{color:#878789}.sura-gray-5{color:#3f3f41}.sura-black{color:#000}.sura-bg-black{background-color:#3f3f41}[class^=sura-icon]:before,[class*=sura-icon]:before{font-family:sura-icons;font-style:normal;font-weight:400;display:inline-block;text-decoration:inherit;text-align:center;text-transform:none}.sura-icon-sm{font-size:1rem}.sura-icon-md{font-size:1.5rem}.sura-icon-lg{font-size:2rem}.sura-icon-xl{font-size:2.5rem}.sura-icon-xxl{font-size:3.875rem}.sura-icon-badge-percent:before{content:""}.sura-icon-blogger:before{content:""}.sura-icon-rotate-left:before{content:""}.sura-icon-instagram:before{content:""}.sura-icon-linkedin:before{content:""}.sura-icon-youtube:before{content:""}.sura-icon-x:before{content:""}.sura-icon-toast-exclamation:before{content:""}.sura-icon-ready:before{content:""}.sura-icon-close-circle:before{content:""}.sura-icon-shield-ready:before{content:""}.sura-icon-toast-info:before{content:""}.sura-icon-volume:before{content:""}.sura-icon-hide:before{content:""}.sura-icon-open-eye:before{content:""}.sura-icon-moon:before{content:""}.sura-icon-doll:before{content:""}.sura-icon-accident-car:before{content:""}.sura-icon-oil:before{content:""}.sura-icon-flight:before{content:""}.sura-icon-ship:before{content:""}.sura-icon-bicycle:before{content:""}.sura-icon-van:before{content:""}.sura-icon-auto-workshop:before{content:""}.sura-icon-workshop:before{content:""}.sura-icon-rocket:before{content:""}.sura-icon-power-station:before{content:""}.sura-icon-garage:before{content:""}.sura-icon-gasoline:before{content:""}.sura-icon-crane:before{content:""}.sura-icon-tools:before{content:""}.sura-icon-wheel:before{content:""}.sura-icon-cargo-cart:before{content:""}.sura-icon-dump-truck:before{content:""}.sura-icon-motorcycle-workshop:before{content:""}.sura-icon-engine:before{content:""}.sura-icon-skateboard:before{content:""}.sura-icon-scooter:before{content:""}.sura-icon-first-place:before{content:""}.sura-icon-license:before{content:""}.sura-icon-to-hand:before{content:""}.sura-icon-hand-care:before{content:""}.sura-icon-handwashing:before{content:""}.sura-icon-hand-stop:before{content:""}.sura-icon-hand-back-point-up:before{content:""}.sura-icon-all-good:before{content:""}.sura-icon-hand-dollar:before{content:""}.sura-icon-animals:before{content:""}.sura-icon-cow:before{content:""}.sura-icon-dog:before{content:""}.sura-icon-cat:before{content:""}.sura-icon-fingerprint-1:before{content:""}.sura-icon-pig:before{content:""}.sura-icon-hourse:before{content:""}.sura-icon-injured:before{content:""}.sura-icon-old-man:before{content:""}.sura-icon-baby:before{content:""}.sura-icon-runnig:before{content:""}.sura-icon-operator:before{content:""}.sura-icon-doctor:before{content:""}.sura-icon-dni:before{content:""}.sura-icon-educator:before{content:""}.sura-icon-sick:before{content:""}.sura-icon-serveral-people:before{content:""}.sura-icon-newborn:before{content:""}.sura-icon-child:before{content:""}.sura-icon-worker:before{content:""}.sura-icon-person:before{content:""}.sura-icon-fractured-person:before{content:""}.sura-icon-person-board:before{content:""}.sura-icon-clerk:before{content:""}.sura-icon-people-icons:before{content:""}.sura-icon-user:before{content:""}.sura-icon-round-graph:before{content:""}.sura-icon-shop:before{content:""}.sura-icon-briefcase:before{content:""}.sura-icon-cash-register:before{content:""}.sura-icon-currency:before{content:""}.sura-icon-statistics:before{content:""}.sura-icon-supermarket:before{content:""}.sura-icon-moneybag:before{content:""}.sura-icon-balance:before{content:""}.sura-icon-bank:before{content:""}.sura-icon-settings:before{content:""}.sura-icon-barcode:before{content:""}.sura-icon-bill:before{content:""}.sura-icon-trash:before{content:""}.sura-icon-photography:before{content:""}.sura-icon-bluetooth:before{content:""}.sura-icon-search:before{content:""}.sura-icon-notes:before{content:""}.sura-icon-timetable:before{content:""}.sura-icon-sheet:before{content:""}.sura-icon-rotate-right:before{content:""}.sura-icon-rotate:before{content:""}.sura-icon-recycle:before{content:""}.sura-icon-random:before{content:""}.sura-icon-location-arrow:before{content:""}.sura-icon-numerical-filter:before{content:""}.sura-icon-upward:before{content:""}.sura-icon-alphabet:before{content:""}.sura-icon-shared:before{content:""}.sura-icon-siren:before{content:""}.sura-icon-alert:before{content:""}.sura-icon-information:before{content:""}.sura-icon-circle-question:before{content:""}.sura-icon-description:before{content:""}.sura-icon-glow:before{content:""}.sura-icon-cc:before{content:""}.sura-icon-fingerprint:before{content:""}.sura-icon-license-1:before{content:""}.sura-icon-little-hands:before{content:""}.sura-icon-wheelchair:before{content:""}.sura-icon-clock:before{content:""}.sura-icon-alarm:before{content:""}.sura-icon-mail:before{content:""}.sura-icon-cloud-alert:before{content:""}.sura-icon-caret-down:before{content:""}.sura-icon-upload-file:before{content:""}.sura-icon-cloud-load:before{content:""}.sura-icon-chevron-arrow-right:before{content:""}.sura-icon-download:before{content:""}.sura-icon-expand:before{content:""}.sura-icon-forward-arrow-up:before{content:""}.sura-icon-small-row-right:before{content:""}.sura-icon-arrows-forward-left:before{content:""}.sura-icon-down-arrow:before{content:""}.sura-icon-arrow-up-line:before{content:""}.sura-icon-big-right-arrow:before{content:""}.sura-icon-left-arrow:before{content:""}.sura-icon-sowing:before{content:""}.sura-icon-battery:before{content:""}.sura-icon-truck:before{content:""}.sura-icon-burden:before{content:""}.sura-icon-car:before{content:""}.sura-icon-electric-car:before{content:""}.sura-icon-key-on-hand:before{content:""}.sura-icon-flat-tire:before{content:""}.sura-icon-motorcycle:before{content:""}.sura-icon-date:before{content:""}.sura-icon-camera:before{content:""}.sura-icon-file:before{content:""}.sura-icon-file-open:before{content:""}.sura-icon-navigation-check:before{content:""}.sura-icon-click:before{content:""}.sura-icon-keys:before{content:""}.sura-icon-written:before{content:""}.sura-icon-ellipsis:before{content:""}.sura-icon-three-points:before{content:""}.sura-icon-close:before{content:""}.sura-icon-privade:before{content:""}.sura-icon-star:before{content:""}.sura-icon-funnel:before{content:""}.sura-icon-impression:before{content:""}.sura-icon-internet:before{content:""}.sura-icon-link:before{content:""}.sura-icon-location:before{content:""}.sura-icon-map:before{content:""}.sura-icon-statement:before{content:""}.sura-icon-more-line:before{content:""}.sura-icon-note:before{content:""}.sura-icon-microphone:before{content:""}.sura-icon-held-down:before{content:""}.sura-icon-anchored:before{content:""}.sura-icon-play:before{content:""}.sura-icon-sliders:before{content:""}.sura-icon-label:before{content:""}.sura-icon-keyboard:before{content:""}.sura-icon-call:before{content:""}.sura-icon-video:before{content:""}.sura-icon-wifi:before{content:""}.sura-icon-women:before{content:""}.sura-icon-pregnant:before{content:""}.sura-icon-old-person:before{content:""}.sura-icon-app:before{content:""}.sura-icon-facebook:before{content:""}.sura-icon-spotify:before{content:""}.sura-icon-tiktok:before{content:""}.sura-icon-whatsapp:before{content:""}.sura-icon-adn:before{content:""}.sura-icon-ambulance:before{content:""}.sura-icon-glasses:before{content:""}.sura-icon-first-aid-kit:before{content:""}.sura-icon-bain:before{content:""}.sura-icon-heart:before{content:""}.sura-icon-virus:before{content:""}.sura-icon-face-mask:before{content:""}.sura-icon-intensive-care:before{content:""}.sura-icon-healthy-tooth:before{content:""}.sura-icon-stethoscope:before{content:""}.sura-icon-medical-order:before{content:""}.sura-icon-fracture:before{content:""}.sura-icon-gripe:before{content:""}.sura-icon-hospital:before{content:""}.sura-icon-vaccine:before{content:""}.sura-icon-medicines:before{content:""}.sura-icon-domicile:before{content:""}.sura-icon-microscope:before{content:""}.sura-icon-sample:before{content:""}.sura-icon-oxygen:before{content:""}.sura-icon-radiation:before{content:""}.sura-icon-x-ray:before{content:""}.sura-icon-heart-rate:before{content:""}.sura-icon-smart-watch:before{content:""}.sura-icon-thermometer:before{content:""}.sura-icon-germs:before{content:""}.sura-icon-one:before{content:""}.sura-icon-check-circle:before{content:""}.sura-icon-two:before{content:""}.sura-icon-apartment:before{content:""}.sura-icon-several-apps:before{content:""}.sura-icon-lightbulb:before{content:""}.sura-icon-house:before{content:""}.sura-icon-helmet:before{content:""}.sura-icon-check-line:before{content:""}.sura-icon-book:before{content:""}.sura-icon-birthday-date:before{content:""}.sura-icon-gears:before{content:""}.sura-icon-x-linea:before{content:""}.sura-icon-pencil:before{content:""}.sura-icon-latoop:before{content:""}.sura-icon-hammer:before{content:""}.sura-icon-medal:before{content:""}.sura-icon-gift:before{content:""}.sura-icon-tv:before{content:""}.sura-icon-cup:before{content:""}.sura-icon-phone-hand:before{content:""}.sura-icon-forward-down-arrow:before{content:""}.sura-icon-accident:before{content:""}.sura-icon-calculator:before{content:""}@font-face{font-family:Sura-Sans;font-style:normal;font-weight:400;src:url(https://staticdigital.labsura.com.co/assets/fonts/SuraSans.ttf) format(truetype)}@font-face{font-family:Arial;font-style:normal;font-weight:400;src:url(https://staticdigital.labsura.com.co/assets/fonts/Arial.ttf) format(truetype)}@font-face{font-family:Barlow,Montserrat,sans-serif;font-style:normal;font-weight:400;src:url(https://staticdigital.labsura.com.co/assets/fonts/Barlow.ttf) format(truetype)}@font-face{font-family:sura-icons;src:url(https://staticdigital.labsura.com.co/assets/fonts/sura-icons.woff) format("woff"),url(https://staticdigital.labsura.com.co/assets/fonts/sura-icons.ttf) format(truetype),url(https://staticdigital.labsura.com.co/assets/fonts/sura-icons.svg) format("svg");font-weight:400;font-style:normal}.sura-title-1{font-size:3.875rem;line-height:3.875rem}.sura-title-2{font-size:3rem;line-height:3rem}.sura-title-3{font-size:2rem;line-height:2rem}.sura-title-4{font-size:1.625rem;line-height:1.625rem}.sura-title-5{font-size:1.37rem;font-weight:600;line-height:1.37rem}.sura-title-6{font-size:1.12rem;font-weight:600;line-height:1.12rem}.sura-body-banner-1{font-size:2rem;line-height:2.375rem}.sura-body-banner-2{font-size:1.5rem;line-height:1.75rem}.sura-body-bold,.sura-body{font-size:1rem;line-height:normal}.sura-caption-bold,.sura-caption{font-size:.87rem;line-height:normal}.sura-small{font-size:.75rem;line-height:normal}.text-bold{font-weight:700}@media screen and (width < 768px){.sura-title-1{font-size:2.625rem;line-height:2.625rem}.sura-title-2{font-size:2.25rem;line-height:2.25rem}.sura-title-3{font-size:1.75rem;line-height:1.75rem}.sura-title-4{font-size:1.5rem;line-height:1.5rem}.sura-title-5{font-size:1.25rem;line-height:1.25rem}.sura-body-banner-2{font-size:1.12rem;line-height:1.125rem}}.sura-toast-info,.sura-toast-success,.sura-toast-warn,.sura-toast-error{max-width:980px;min-width:290px;height:auto;padding:16px;align-items:flex-start}@media (width <= 480px){.sura-toast-info,.sura-toast-success,.sura-toast-warn,.sura-toast-error{width:343px}}@media (481px >= width <= 1023px){.sura-toast-info,.sura-toast-success,.sura-toast-warn,.sura-toast-error{width:720px}}@media (width >= 1024px){.sura-toast-info,.sura-toast-success,.sura-toast-warn,.sura-toast-error{width:100%}}.sura-toast-info__header,.sura-toast-success__header,.sura-toast-warn__header,.sura-toast-error__header{display:flex;gap:12px;align-items:center}.sura-toast-info__header span,.sura-toast-info__header .icon,.sura-toast-success__header span,.sura-toast-success__header .icon,.sura-toast-warn__header span,.sura-toast-warn__header .icon,.sura-toast-error__header span,.sura-toast-error__header .icon{font-size:var(--sura-font-size-24)}.sura-toast-info__header .vertical-line,.sura-toast-success__header .vertical-line,.sura-toast-warn__header .vertical-line,.sura-toast-error__header .vertical-line{height:46px;width:2px;border-radius:4px}.sura-toast-info__texto,.sura-toast-success__texto,.sura-toast-warn__texto,.sura-toast-error__texto{display:flex;flex-direction:column;align-items:flex-start;gap:4px}.sura-toast-info.show-content,.sura-toast-success.show-content,.sura-toast-warn.show-content,.sura-toast-error.show-content{position:relative}.sura-toast-info.show-content .icon-close,.sura-toast-success.show-content .icon-close,.sura-toast-warn.show-content .icon-close,.sura-toast-error.show-content .icon-close{position:absolute;top:10px;right:10px;cursor:pointer}.sura-toast-info{background-color:#e1ebff}.sura-toast-info__header .vertical-line{background-color:#0033a0}.sura-toast-success{background-color:#def6de}.sura-toast-success__header .vertical-line{background-color:#067014}.sura-toast-warn{background-color:#fff5ec}.sura-toast-warn__header .vertical-line{background-color:#ed8b00}.sura-toast-error{background-color:#fff4f3}.sura-toast-error__header .vertical-line{background-color:#d12d35}';
var J = Object.defineProperty,
	G = Object.getOwnPropertyDescriptor,
	p = (o, e, r, a) => {
		for (
			var n = a > 1 ? void 0 : a ? G(e, r) : e, t = o.length - 1, c;
			t >= 0;
			t--
		)
			(c = o[t]) && (n = (a ? c(e, r, n) : c(n)) || n);
		return a && n && J(e, r, n), n;
	};
let l = class extends g {
	constructor() {
		super(...arguments),
			(this.type = 'info'),
			(this.bodyContent = null),
			(this.title = ''),
			(this.subtitle = ''),
			(this.closable = !1),
			(this.iconMap = {
				info: 'sura-icon-toast-info',
				warn: 'sura-icon-toast-exclamation',
				error: 'sura-icon-close-circle',
				success: 'sura-icon-ready',
			});
	}
	closeToast() {
		this.dispatchEvent(new CustomEvent('close'));
	}
	render() {
		const o = `${this.iconMap[this.type]} sura-icon-md sura-alert-${this.type}`,
			e = `sura-toast-${this.type}`;
		return u`
      <article class="${e} show-content">
        ${this.renderCloseIcon()}
        <div class="${e}__header">
          <div class="vertical-line"></div>
          <span class="${o}"></span>
          <div class="${e}__texto">
            <p class="sura-body-bold sura-blue">${this.title}</p>
            <p class="sura-caption">${this.subtitle}</p>
          </div>
        </div>
        ${this.renderBodyContent()}
      </article>
    `;
	}
	renderBodyContent() {
		return this.bodyContent
			? u`
        <div class="card-sura__description">
          <p class="sura-body">${this.bodyContent}</p>
        </div>
      `
			: '';
	}
	renderCloseIcon() {
		return this.closable
			? u`
        <span
          class="icon-close sura-icon-x-linea sura-icon-sm sura-blue"
          @click="${this.closeToast}"></span>
      `
			: '';
	}
};
l.styles = w(P);
p([s({ type: String })], l.prototype, 'type', 2);
p([s({ type: String })], l.prototype, 'bodyContent', 2);
p([s({ type: String })], l.prototype, 'title', 2);
p([s({ type: String })], l.prototype, 'subtitle', 2);
p([s({ type: Boolean })], l.prototype, 'closable', 2);
l = p([L('sura-toast')], l);
