webpackJsonp([1], {
    "/4VC": function(e, t) {},
    "2R3/": function(e, t) {},
    "39Gr": function(e, t) { e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfjBx8KEQnBzEY3AAAA4UlEQVQ4y82Tz0rDQBjEf1l6jJTQxCeo1x4E8aIvoOILKO1z+TwtgngQ7z0FFEwOahK82DoeshDIJmVzy1y+3eEbvpn9A6NDUBcdEwIQWT4CPu26rlWQ2b1u9S4fvOkGUKLSq12SSsWGe2vGByF3hguHfj4guTScOOQ5K/IewRxlbaMAmulB+44UH+inSwCgUz06ggrt+gSgQMuWg18z+KqHWxoc+tUhXecNXiZsWbRcPnHWm2Br2DhkfzusUaLC+/EVigFdK/VqT3XVfKCEI8AwtaMj4Iv6iL/5A8ogZ5z4B5vMuNI85moXAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE5LTA3LTMxVDA4OjE3OjA5KzAyOjAwJR7G3QAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOS0wNy0zMVQwODoxNzowOSswMjowMFRDfmEAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC" },
    "5KBk": function(e, t) {},
    "7Otq": function(e, t, a) { e.exports = a.p + "static/img/logo.eb3abc1.png" },
    "7kHn": function(e, t) {},
    Ednz: function(e, t) { e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfjBx8KCi+69whQAAABIUlEQVQ4y72SsS9DURjFz/OkicQiaW1Ck1olBpsQbJJaDP6BTkhsNoMQNoMRMUqIRGKUtknNXRoRBmkwv4XU05D4GdrX11fX6x3E2e6953e+7977Sf8ixoy7I+xwSYlDpiWJAXIkJZHhnewP+wqfhDrlgjp3jaNdoM58xL6ASfukJXEFwAcb9LaACmZtSqLQWpZZxJXo58tov8YNWgr1xBHLRrvHUKP8HnZal6QeSROWr38bAM+WwFsAnFgCfvCEDnmrO2SaFRx0ZpH/qmr4r0n8rvnn0cnZ6grMRAGXg1h7vnM2+1ii+qvdY7Q9e45jXmLSfSbbs1epxTZzz3hnOym28YzmB9ZIRN1OE0poVlMaVkqDkmp61I2KKjtYTsEf6htdSAG0+k0lgAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOS0wNy0zMVQwODoxMDo0NyswMjowMBO3qAMAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTktMDctMzFUMDg6MTA6NDcrMDI6MDBi6hC/AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg==" },
    MK1j: function(e, t) {},
    MvaK: function(e, t) {},
    NHnr: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var s = a("7+uW"),
            r = a("sUu7"),
            i = a("bOdI"),
            n = a.n(i),
            o = { name: "CustomInput", props: { name: String, type: String, placeholder: String, maxlength: String, value: "", label: String, validations: String, error: String } },
            l = {
                render: function() {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a("div", [a("label", [e._v(e._s(e.label))]), e._v(" "), a("input", { attrs: { name: e.name, type: e.type, placeholder: e.placeholder, maxlength: e.maxlength, "v-validate": e.validations }, domProps: { value: e.value }, on: { input: function(t) { return e.$emit("input", t.target.value) } } }), e._v(" "), a("span", { staticClass: "error" }, [e._v(e._s(e.error))])])
                },
                staticRenderFns: []
            };
        var c = { components: { CustomInput: a("VU/8")(o, l, !1, function(e) { a("MK1j") }, "data-v-6a71879a", null).exports, Datepicker: a("IC97").a }, name: "Form", data: function() { var e; return e = { currentStep: 1, name: "", lastname: "", email: "", phone: null, address: "", date: null }, n()(e, "email", ""), n()(e, "sendForm", !1), n()(e, "errorStep", !1), e }, mounted: function() { localStorage.getItem("currentStep") ? this.currentStep = parseInt(localStorage.getItem("currentStep")) : this.currentStep = 1, 2 === this.currentStep && (localStorage.getItem("name") ? this.name = localStorage.getItem("name") : this.name = "", localStorage.getItem("lastname") ? this.lastname = localStorage.getItem("lastname") : this.lastname = ""), 3 === this.currentStep && (localStorage.getItem("name") ? this.name = localStorage.getItem("name") : this.name = "", localStorage.getItem("lastname") ? this.lastname = localStorage.getItem("lastname") : this.lastname = "", localStorage.getItem("phone") ? this.phone = localStorage.getItem("phone") : this.phone = "", localStorage.getItem("address") ? this.address = localStorage.getItem("address") : this.address = "") }, computed: { firstStepIsValid: function() { return this.fields.name.valid && this.fields.lastname.valid }, secondStepIsValid: function() { return this.fields.phone.valid && this.fields.address.valid }, thirdStepIsValid: function() { return this.fields.email.valid } }, methods: { nextStep: function() { return 1 === this.currentStep && this.firstStepIsValid ? (this.errorStep = !1, this.currentStep = 2, this.setStoragefirstStep()) : 1 === this.currentStep ? this.errorStep = !0 : 2 === this.currentStep && this.secondStepIsValid ? (this.errorStep = !1, this.currentStep = 3, this.setStorageSecondStep()) : 2 === this.currentStep ? this.errorStep = !0 : void 0 }, backStep: function() { this.errorStep = !1, this.currentStep-- }, setStoragefirstStep: function() { localStorage.setItem("currentStep", this.currentStep), localStorage.setItem("name", this.name), localStorage.setItem("lastname", this.lastname) }, setStorageSecondStep: function() { localStorage.setItem("currentStep", this.currentStep), localStorage.setItem("phone", this.phone), localStorage.setItem("address", this.address) }, submit: function() { this.thirdStepIsValid && this.date ? (this.errorStep = !1, this.sendForm = !0, localStorage.clear()) : this.errorStep = !0 } } },
            A = {
                render: function() {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a("div", { staticClass: "formWrapper" }, [a("div", { staticClass: "wizardWrapper" }, [a("ul", { staticClass: "steps is-horizontal my-step-style" }, [a("li", { class: [1 === e.currentStep ? "is-active" : "", "steps-segment"] }, [a("span", { staticClass: "steps-marker" }, [e._v("1")])]), e._v(" "), a("li", { class: [2 === e.currentStep ? "is-active" : "", "steps-segment"] }, [a("span", { staticClass: "steps-marker" }, [e._v("2")])]), e._v(" "), a("li", { class: [3 === e.currentStep ? "is-active" : "", "steps-segment"] }, [a("span", { staticClass: "steps-marker" }, [e._v("3")])])])]), e._v(" "), a("div", { directives: [{ name: "show", rawName: "v-show", value: 1 === e.currentStep, expression: "currentStep === 1" }] }, [a("div", { staticClass: "inputWrapper" }, [a("custom-input", { directives: [{ name: "validate", rawName: "v-validate", value: "required|alpha", expression: "'required|alpha'" }], attrs: { name: "name", label: "Nombres", type: "text", placeholder: "Nombres", maxlength: "30", error: e.errors.first("name") }, model: { value: e.name, callback: function(t) { e.name = t }, expression: "name" } })], 1), e._v(" "), a("div", { staticClass: "inputWrapper" }, [a("custom-input", { directives: [{ name: "validate", rawName: "v-validate", value: "required|alpha", expression: "'required|alpha'" }], attrs: { name: "lastname", label: "Apellidos", type: "text", placeholder: "Apellidos", maxlength: "30", error: e.errors.first("lastname") }, model: { value: e.lastname, callback: function(t) { e.lastname = t }, expression: "lastname" } })], 1)]), e._v(" "), a("div", { directives: [{ name: "show", rawName: "v-show", value: 2 === e.currentStep, expression: "currentStep === 2" }] }, [a("div", { staticClass: "inputWrapper" }, [a("custom-input", { directives: [{ name: "validate", rawName: "v-validate", value: "required|digits:9", expression: "'required|digits:9'" }], attrs: { name: "phone", label: "Celular", type: "text", placeholder: "+51", maxlength: "9", error: e.errors.first("phone") }, model: { value: e.phone, callback: function(t) { e.phone = t }, expression: "phone" } })], 1), e._v(" "), a("div", { staticClass: "inputWrapper" }, [a("custom-input", { directives: [{ name: "validate", rawName: "v-validate", value: "required", expression: "'required'" }], attrs: { name: "address", label: "Dirección", type: "text", placeholder: "Jr..", maxlength: "60", error: e.errors.first("address") }, model: { value: e.address, callback: function(t) { e.address = t }, expression: "address" } })], 1)]), e._v(" "), a("div", { directives: [{ name: "show", rawName: "v-show", value: 3 === e.currentStep, expression: "currentStep === 3" }] }, [a("div", { staticClass: "inputWrapper" }, [a("label", { staticClass: "label" }, [e._v("Fecha de Nacimiento")]), e._v(" "), a("datepicker", { directives: [{ name: "validate", rawName: "v-validate", value: "required", expression: "'required'" }], attrs: { "input-class": "datepicker", name: "date", placeholder: "fecha de nacimiento" }, model: { value: e.date, callback: function(t) { e.date = t }, expression: "date" } }), e._v(" "), a("span", [e._v(e._s(e.errors.first("date")))])], 1), e._v(" "), a("div", { staticClass: "inputWrapper" }, [a("custom-input", { directives: [{ name: "validate", rawName: "v-validate", value: "required|email", expression: "'required|email'" }], attrs: { name: "email", label: "Correo Electrónico", type: "text", placeholder: "challenge@test.com", maxlength: "100", error: e.errors.first("email") }, model: { value: e.email, callback: function(t) { e.email = t }, expression: "email" } })], 1)]), e._v(" "), a("span", { directives: [{ name: "show", rawName: "v-show", value: e.errorStep, expression: "errorStep" }], staticClass: "errorStep" }, [e._v("rellena los campos correctamente")]), e._v(" "), a("span", { directives: [{ name: "show", rawName: "v-show", value: e.sendForm, expression: "sendForm" }], staticClass: "successForm" }, [e._v("Enviado!")]), e._v(" "), a("div", { staticClass: "buttonsWrapper" }, [1 != e.currentStep ? a("button", { staticClass: "button buttonStyle", on: { click: e.backStep } }, [e._v("REGRESAR\n    ")]) : e._e(), e._v(" "), 3 != e.currentStep ? a("button", { staticClass: "button buttonStyle", on: { click: e.nextStep } }, [e._v("SIGUIENTE\n    ")]) : e._e(), e._v(" "), 3 === e.currentStep ? a("button", { staticClass: "button buttonStyle", on: { click: e.submit } }, [e._v("ENVIAR\n    ")]) : e._e()])])
                },
                staticRenderFns: []
            };
        var p = a("VU/8")(c, A, !1, function(e) { a("MvaK") }, null, null).exports,
            m = a("mtWM"),
            d = a.n(m),
            u = {
                name: "Summary",
                data: function() { return { services: null } },
                mounted: function() {
                    var e = this;
                    d.a.get("https://challenge-labp.s3.amazonaws.com/services.json").then(function(t) { console.log("result", t), e.services = t.data })
                }
            },
            v = {
                render: function() {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a("div", { staticClass: "summaryWrapper" }, [a("div", { staticClass: "title" }, [e._v("Resumen de servicios")]), e._v(" "), a("div", { staticClass: "servicesWrapper" }, e._l(e.services, function(t) { return a("div", { key: t.id, staticClass: "serviceWrapper" }, [a("img", { staticClass: "serviceImage", attrs: { src: t.image, alt: "image-service" } }), e._v(" "), a("div", { staticClass: "serviceTitle" }, [e._v(e._s(t.name))]), e._v(" "), a("div", { staticClass: "serviceDescription" }, [e._v(e._s(t.description))])]) }), 0)])
                },
                staticRenderFns: []
            };
        var h = {
            render: function() {
                this.$createElement;
                this._self._c;
                return this._m(0)
            },
            staticRenderFns: [function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("div", { staticClass: "footerWrapper" }, [s("div", { staticClass: "content" }, [s("img", { attrs: { src: a("wYO/"), alt: "logo la positiva" } }), e._v(" "), s("div", { staticClass: "address" }, [s("span", { staticClass: "title" }, [e._v("Oficina Principal")]), e._v(" "), s("span", { staticClass: "addressDescription" }, [e._v("Calle Francisco Masías 370")]), e._v(" "), s("span", { staticClass: "addressDescription" }, [e._v("San Isidro, Lima 27")])]), e._v(" "), s("div", { staticClass: "social" }, [s("span", { staticClass: "title" }, [e._v("Síguenos")]), e._v(" "), s("div", { staticClass: "socialLogos" }, [s("a", { attrs: { href: "https://www.facebook.com/LaPositivaSeguros/?ref=br_rs" } }, [s("img", { staticClass: "imgLogo", attrs: { src: a("Wdxt"), alt: "facebook-logo" } })]), e._v(" "), s("a", { attrs: { href: "https://twitter.com/lapositiva_peru?lang=es" } }, [s("img", { staticClass: "imgLogo", attrs: { src: a("Ednz"), alt: "twitter-logo" } })]), e._v(" "), s("a", { attrs: { href: "https://www.youtube.com/user/LaPositivaPeru" } }, [s("img", { staticClass: "imgLogo", attrs: { src: a("39Gr"), alt: "yotube-logo" } })])])])])])
            }]
        };
        var g = { name: "Homepage", components: { FormComponent: p, SummaryServices: a("VU/8")(u, v, !1, function(e) { a("/4VC") }, "data-v-9deb4652", null).exports, FooterComponent: a("VU/8")({ name: "Footer" }, h, !1, function(e) { a("5KBk") }, "data-v-3bf57bca", null).exports } },
            S = {
                render: function() {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a("div", { staticClass: "homeWrapper" }, [e._m(0), e._v(" "), e._m(1), e._v(" "), e._m(2), e._v(" "), a("form-component"), e._v(" "), a("summary-services"), e._v(" "), a("footer-component")], 1)
                },
                staticRenderFns: [function() {
                    var e = this.$createElement,
                        t = this._self._c || e;
                    return t("div", { staticClass: "logoWrapper" }, [t("a", { attrs: { href: "https://www.lapositiva.com.pe/wps/portal/corporativo/home" } }, [t("img", { staticClass: "logo", attrs: { src: a("7Otq"), alt: "logo-positiva" } })])])
                }, function() {
                    var e = this.$createElement,
                        t = this._self._c || e;
                    return t("div", { staticClass: "bannerWrapper" }, [t("img", { staticClass: "banner", attrs: { src: a("hKcQ") } })])
                }, function() {
                    var e = this.$createElement,
                        t = this._self._c || e;
                    return t("div", { staticClass: "textWrapper" }, [t("p", { staticClass: "title-text" }, [this._v("Déjanos tus datos.¡Nos pondremos en contacto contigo!")])])
                }]
            };
        var f = { name: "App", components: { Home: a("VU/8")(g, S, !1, function(e) { a("7kHn") }, "data-v-f160abc8", null).exports } },
            C = {
                render: function() {
                    var e = this.$createElement,
                        t = this._self._c || e;
                    return t("div", { attrs: { id: "app" } }, [t("home")], 1)
                },
                staticRenderFns: []
            };
        var w = a("VU/8")(f, C, !1, function(e) { a("2R3/") }, null, null).exports;
        s.a.config.productionTip = !1, s.a.use(r.b);
        r.a.localize({ en: { messages: { email: "email no válido", required: "este campo es requerido", alpha: "solo se pueden escribir letras", digits: "este campo debe ser numérico y debe contener maximo 9 digitos" } } }), new s.a({ el: "#app", components: { App: w }, template: "<App/>" })
    },
    Wdxt: function(e, t) { e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfjBx8KCRAnvHauAAAAuElEQVQ4y2NgwAr+S/3v+3/r//f/EJCFkGHBqtySYTODMJIAEpsJi3J+hnUoylEAFg0MKQwSDDgBNie5wVlfGPYz/GBgYDjEgA/8v/YfBkKJcxIHnHWXOA1IluH1w39ZBk8GBgYGBl64UNB/UwYGhn8Maxg/YDOu5j8uEI7dSYwMRAAmYhRRpAE54rYxcDMwMDAwZDDwQ0UWMLxkYGBgYDiBPyzvwT1rOBB+GNVAroZ3UPo3w2dMSQD2QVTUgmmmPgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOS0wNy0zMVQwODowOToxNiswMjowMMC7WdkAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTktMDctMzFUMDg6MDk6MTYrMDI6MDCx5uFlAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg==" },
    hKcQ: function(e, t, a) { e.exports = a.p + "static/img/banner.e1f829c.jpg" },
    "wYO/": function(e, t, a) { e.exports = a.p + "static/img/logo-white.fd7f710.png" }
}, ["NHnr"]);
//# sourceMappingURL=app.8d54ad9dddcc62f0f9d7.js.map