"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4525],
  {
    87683: function (n, e, l) {
      l.d(e, {
        N: function () {
          return o;
        },
      });
      function o(n) {
        if (n) throw n;
      }
    },
    97327: function (n, e, l) {
      l.d(e, {
        P: function () {
          return o;
        },
      });
      function o(n, e) {
        let l = e || {};
        return ("" === n[n.length - 1] ? [...n, ""] : n)
          .join((l.padRight ? " " : "") + "," + (!1 === l.padLeft ? "" : " "))
          .trim();
      }
    },
    33859: function (n, e, l) {
      l.d(e, {
        T: function () {
          return t;
        },
      });
      let o = document.createElement("i");
      function t(n) {
        let e = "&" + n + ";";
        o.innerHTML = e;
        let l = o.textContent;
        return (
          (59 !== l.charCodeAt(l.length - 1) || "semi" === n) && l !== e && l
        );
      }
    },
    49385: function (n) {
      var e = Object.prototype.hasOwnProperty,
        l = Object.prototype.toString,
        o = Object.defineProperty,
        t = Object.getOwnPropertyDescriptor,
        r = function (n) {
          return "function" == typeof Array.isArray
            ? Array.isArray(n)
            : "[object Array]" === l.call(n);
        },
        a = function (n) {
          if (!n || "[object Object]" !== l.call(n)) return !1;
          var o,
            t = e.call(n, "constructor"),
            r =
              n.constructor &&
              n.constructor.prototype &&
              e.call(n.constructor.prototype, "isPrototypeOf");
          if (n.constructor && !t && !r) return !1;
          for (o in n);
          return void 0 === o || e.call(n, o);
        },
        u = function (n, e) {
          o && "__proto__" === e.name
            ? o(n, e.name, {
                enumerable: !0,
                configurable: !0,
                value: e.newValue,
                writable: !0,
              })
            : (n[e.name] = e.newValue);
        },
        i = function (n, l) {
          if ("__proto__" === l) {
            if (!e.call(n, l)) return;
            if (t) return t(n, l).value;
          }
          return n[l];
        };
      n.exports = function n() {
        var e,
          l,
          o,
          t,
          s,
          c,
          p = arguments[0],
          d = 1,
          m = arguments.length,
          g = !1;
        for (
          "boolean" == typeof p && ((g = p), (p = arguments[1] || {}), (d = 2)),
            (null == p || ("object" != typeof p && "function" != typeof p)) &&
              (p = {});
          d < m;
          ++d
        )
          if (((e = arguments[d]), null != e))
            for (l in e)
              (o = i(p, l)),
                p !== (t = i(e, l)) &&
                  (g && t && (a(t) || (s = r(t)))
                    ? (s
                        ? ((s = !1), (c = o && r(o) ? o : []))
                        : (c = o && a(o) ? o : {}),
                      u(p, { name: l, newValue: n(g, c, t) }))
                    : void 0 !== t && u(p, { name: l, newValue: t }));
        return p;
      };
    },
    21856: function (n, e, l) {
      l.d(e, {
        Z: function () {
          return o;
        },
      });
      function o(n) {
        if ("object" != typeof n || null === n) return !1;
        let e = Object.getPrototypeOf(n);
        return (
          (null === e ||
            e === Object.prototype ||
            null === Object.getPrototypeOf(e)) &&
          !(Symbol.toStringTag in n) &&
          !(Symbol.iterator in n)
        );
      }
    },
    83384: function (n, e, l) {
      l.d(e, {
        dy: function () {
          return y;
        },
        YP: function () {
          return v;
        },
      });
      class o {
        constructor(n, e, l) {
          (this.property = n), (this.normal = e), l && (this.space = l);
        }
      }
      function t(n, e) {
        let l = {},
          t = {},
          r = -1;
        for (; ++r < n.length; )
          Object.assign(l, n[r].property), Object.assign(t, n[r].normal);
        return new o(l, t, e);
      }
      (o.prototype.property = {}),
        (o.prototype.normal = {}),
        (o.prototype.space = null);
      var r = l(4144),
        a = l(54688);
      let u = {}.hasOwnProperty;
      function i(n) {
        let e;
        let l = {},
          t = {};
        for (e in n.properties)
          if (u.call(n.properties, e)) {
            let o = n.properties[e],
              u = new a.I(e, n.transform(n.attributes || {}, e), o, n.space);
            n.mustUseProperty &&
              n.mustUseProperty.includes(e) &&
              (u.mustUseProperty = !0),
              (l[e] = u),
              (t[(0, r.F)(e)] = e),
              (t[(0, r.F)(u.attribute)] = e);
          }
        return new o(l, t, n.space);
      }
      let s = i({
          space: "xlink",
          transform: (n, e) => "xlink:" + e.slice(5).toLowerCase(),
          properties: {
            xLinkActuate: null,
            xLinkArcRole: null,
            xLinkHref: null,
            xLinkRole: null,
            xLinkShow: null,
            xLinkTitle: null,
            xLinkType: null,
          },
        }),
        c = i({
          space: "xml",
          transform: (n, e) => "xml:" + e.slice(3).toLowerCase(),
          properties: { xmlLang: null, xmlBase: null, xmlSpace: null },
        });
      function p(n, e) {
        return e in n ? n[e] : e;
      }
      function d(n, e) {
        return p(n, e.toLowerCase());
      }
      let m = i({
        space: "xmlns",
        attributes: { xmlnsxlink: "xmlns:xlink" },
        transform: d,
        properties: { xmlns: null, xmlnsXLink: null },
      });
      var g = l(87311);
      let h = i({
          transform: (n, e) =>
            "role" === e ? e : "aria-" + e.slice(4).toLowerCase(),
          properties: {
            ariaActiveDescendant: null,
            ariaAtomic: g.booleanish,
            ariaAutoComplete: null,
            ariaBusy: g.booleanish,
            ariaChecked: g.booleanish,
            ariaColCount: g.number,
            ariaColIndex: g.number,
            ariaColSpan: g.number,
            ariaControls: g.spaceSeparated,
            ariaCurrent: null,
            ariaDescribedBy: g.spaceSeparated,
            ariaDetails: null,
            ariaDisabled: g.booleanish,
            ariaDropEffect: g.spaceSeparated,
            ariaErrorMessage: null,
            ariaExpanded: g.booleanish,
            ariaFlowTo: g.spaceSeparated,
            ariaGrabbed: g.booleanish,
            ariaHasPopup: null,
            ariaHidden: g.booleanish,
            ariaInvalid: null,
            ariaKeyShortcuts: null,
            ariaLabel: null,
            ariaLabelledBy: g.spaceSeparated,
            ariaLevel: g.number,
            ariaLive: null,
            ariaModal: g.booleanish,
            ariaMultiLine: g.booleanish,
            ariaMultiSelectable: g.booleanish,
            ariaOrientation: null,
            ariaOwns: g.spaceSeparated,
            ariaPlaceholder: null,
            ariaPosInSet: g.number,
            ariaPressed: g.booleanish,
            ariaReadOnly: g.booleanish,
            ariaRelevant: null,
            ariaRequired: g.booleanish,
            ariaRoleDescription: g.spaceSeparated,
            ariaRowCount: g.number,
            ariaRowIndex: g.number,
            ariaRowSpan: g.number,
            ariaSelected: g.booleanish,
            ariaSetSize: g.number,
            ariaSort: null,
            ariaValueMax: g.number,
            ariaValueMin: g.number,
            ariaValueNow: g.number,
            ariaValueText: null,
            role: null,
          },
        }),
        f = i({
          space: "html",
          attributes: {
            acceptcharset: "accept-charset",
            classname: "class",
            htmlfor: "for",
            httpequiv: "http-equiv",
          },
          transform: d,
          mustUseProperty: ["checked", "multiple", "muted", "selected"],
          properties: {
            abbr: null,
            accept: g.commaSeparated,
            acceptCharset: g.spaceSeparated,
            accessKey: g.spaceSeparated,
            action: null,
            allow: null,
            allowFullScreen: g.boolean,
            allowPaymentRequest: g.boolean,
            allowUserMedia: g.boolean,
            alt: null,
            as: null,
            async: g.boolean,
            autoCapitalize: null,
            autoComplete: g.spaceSeparated,
            autoFocus: g.boolean,
            autoPlay: g.boolean,
            blocking: g.spaceSeparated,
            capture: g.boolean,
            charSet: null,
            checked: g.boolean,
            cite: null,
            className: g.spaceSeparated,
            cols: g.number,
            colSpan: null,
            content: null,
            contentEditable: g.booleanish,
            controls: g.boolean,
            controlsList: g.spaceSeparated,
            coords: g.number | g.commaSeparated,
            crossOrigin: null,
            data: null,
            dateTime: null,
            decoding: null,
            default: g.boolean,
            defer: g.boolean,
            dir: null,
            dirName: null,
            disabled: g.boolean,
            download: g.overloadedBoolean,
            draggable: g.booleanish,
            encType: null,
            enterKeyHint: null,
            fetchPriority: null,
            form: null,
            formAction: null,
            formEncType: null,
            formMethod: null,
            formNoValidate: g.boolean,
            formTarget: null,
            headers: g.spaceSeparated,
            height: g.number,
            hidden: g.boolean,
            high: g.number,
            href: null,
            hrefLang: null,
            htmlFor: g.spaceSeparated,
            httpEquiv: g.spaceSeparated,
            id: null,
            imageSizes: null,
            imageSrcSet: null,
            inert: g.boolean,
            inputMode: null,
            integrity: null,
            is: null,
            isMap: g.boolean,
            itemId: null,
            itemProp: g.spaceSeparated,
            itemRef: g.spaceSeparated,
            itemScope: g.boolean,
            itemType: g.spaceSeparated,
            kind: null,
            label: null,
            lang: null,
            language: null,
            list: null,
            loading: null,
            loop: g.boolean,
            low: g.number,
            manifest: null,
            max: null,
            maxLength: g.number,
            media: null,
            method: null,
            min: null,
            minLength: g.number,
            multiple: g.boolean,
            muted: g.boolean,
            name: null,
            nonce: null,
            noModule: g.boolean,
            noValidate: g.boolean,
            onAbort: null,
            onAfterPrint: null,
            onAuxClick: null,
            onBeforeMatch: null,
            onBeforePrint: null,
            onBeforeUnload: null,
            onBlur: null,
            onCancel: null,
            onCanPlay: null,
            onCanPlayThrough: null,
            onChange: null,
            onClick: null,
            onClose: null,
            onContextLost: null,
            onContextMenu: null,
            onContextRestored: null,
            onCopy: null,
            onCueChange: null,
            onCut: null,
            onDblClick: null,
            onDrag: null,
            onDragEnd: null,
            onDragEnter: null,
            onDragExit: null,
            onDragLeave: null,
            onDragOver: null,
            onDragStart: null,
            onDrop: null,
            onDurationChange: null,
            onEmptied: null,
            onEnded: null,
            onError: null,
            onFocus: null,
            onFormData: null,
            onHashChange: null,
            onInput: null,
            onInvalid: null,
            onKeyDown: null,
            onKeyPress: null,
            onKeyUp: null,
            onLanguageChange: null,
            onLoad: null,
            onLoadedData: null,
            onLoadedMetadata: null,
            onLoadEnd: null,
            onLoadStart: null,
            onMessage: null,
            onMessageError: null,
            onMouseDown: null,
            onMouseEnter: null,
            onMouseLeave: null,
            onMouseMove: null,
            onMouseOut: null,
            onMouseOver: null,
            onMouseUp: null,
            onOffline: null,
            onOnline: null,
            onPageHide: null,
            onPageShow: null,
            onPaste: null,
            onPause: null,
            onPlay: null,
            onPlaying: null,
            onPopState: null,
            onProgress: null,
            onRateChange: null,
            onRejectionHandled: null,
            onReset: null,
            onResize: null,
            onScroll: null,
            onScrollEnd: null,
            onSecurityPolicyViolation: null,
            onSeeked: null,
            onSeeking: null,
            onSelect: null,
            onSlotChange: null,
            onStalled: null,
            onStorage: null,
            onSubmit: null,
            onSuspend: null,
            onTimeUpdate: null,
            onToggle: null,
            onUnhandledRejection: null,
            onUnload: null,
            onVolumeChange: null,
            onWaiting: null,
            onWheel: null,
            open: g.boolean,
            optimum: g.number,
            pattern: null,
            ping: g.spaceSeparated,
            placeholder: null,
            playsInline: g.boolean,
            popover: null,
            popoverTarget: null,
            popoverTargetAction: null,
            poster: null,
            preload: null,
            readOnly: g.boolean,
            referrerPolicy: null,
            rel: g.spaceSeparated,
            required: g.boolean,
            reversed: g.boolean,
            rows: g.number,
            rowSpan: g.number,
            sandbox: g.spaceSeparated,
            scope: null,
            scoped: g.boolean,
            seamless: g.boolean,
            selected: g.boolean,
            shape: null,
            size: g.number,
            sizes: null,
            slot: null,
            span: g.number,
            spellCheck: g.booleanish,
            src: null,
            srcDoc: null,
            srcLang: null,
            srcSet: null,
            start: g.number,
            step: null,
            style: null,
            tabIndex: g.number,
            target: null,
            title: null,
            translate: null,
            type: null,
            typeMustMatch: g.boolean,
            useMap: null,
            value: g.booleanish,
            width: g.number,
            wrap: null,
            align: null,
            aLink: null,
            archive: g.spaceSeparated,
            axis: null,
            background: null,
            bgColor: null,
            border: g.number,
            borderColor: null,
            bottomMargin: g.number,
            cellPadding: null,
            cellSpacing: null,
            char: null,
            charOff: null,
            classId: null,
            clear: null,
            code: null,
            codeBase: null,
            codeType: null,
            color: null,
            compact: g.boolean,
            declare: g.boolean,
            event: null,
            face: null,
            frame: null,
            frameBorder: null,
            hSpace: g.number,
            leftMargin: g.number,
            link: null,
            longDesc: null,
            lowSrc: null,
            marginHeight: g.number,
            marginWidth: g.number,
            noResize: g.boolean,
            noHref: g.boolean,
            noShade: g.boolean,
            noWrap: g.boolean,
            object: null,
            profile: null,
            prompt: null,
            rev: null,
            rightMargin: g.number,
            rules: null,
            scheme: null,
            scrolling: g.booleanish,
            standby: null,
            summary: null,
            text: null,
            topMargin: g.number,
            valueType: null,
            version: null,
            vAlign: null,
            vLink: null,
            vSpace: g.number,
            allowTransparency: null,
            autoCorrect: null,
            autoSave: null,
            disablePictureInPicture: g.boolean,
            disableRemotePlayback: g.boolean,
            prefix: null,
            property: null,
            results: g.number,
            security: null,
            unselectable: null,
          },
        }),
        b = i({
          space: "svg",
          attributes: {
            accentHeight: "accent-height",
            alignmentBaseline: "alignment-baseline",
            arabicForm: "arabic-form",
            baselineShift: "baseline-shift",
            capHeight: "cap-height",
            className: "class",
            clipPath: "clip-path",
            clipRule: "clip-rule",
            colorInterpolation: "color-interpolation",
            colorInterpolationFilters: "color-interpolation-filters",
            colorProfile: "color-profile",
            colorRendering: "color-rendering",
            crossOrigin: "crossorigin",
            dataType: "datatype",
            dominantBaseline: "dominant-baseline",
            enableBackground: "enable-background",
            fillOpacity: "fill-opacity",
            fillRule: "fill-rule",
            floodColor: "flood-color",
            floodOpacity: "flood-opacity",
            fontFamily: "font-family",
            fontSize: "font-size",
            fontSizeAdjust: "font-size-adjust",
            fontStretch: "font-stretch",
            fontStyle: "font-style",
            fontVariant: "font-variant",
            fontWeight: "font-weight",
            glyphName: "glyph-name",
            glyphOrientationHorizontal: "glyph-orientation-horizontal",
            glyphOrientationVertical: "glyph-orientation-vertical",
            hrefLang: "hreflang",
            horizAdvX: "horiz-adv-x",
            horizOriginX: "horiz-origin-x",
            horizOriginY: "horiz-origin-y",
            imageRendering: "image-rendering",
            letterSpacing: "letter-spacing",
            lightingColor: "lighting-color",
            markerEnd: "marker-end",
            markerMid: "marker-mid",
            markerStart: "marker-start",
            navDown: "nav-down",
            navDownLeft: "nav-down-left",
            navDownRight: "nav-down-right",
            navLeft: "nav-left",
            navNext: "nav-next",
            navPrev: "nav-prev",
            navRight: "nav-right",
            navUp: "nav-up",
            navUpLeft: "nav-up-left",
            navUpRight: "nav-up-right",
            onAbort: "onabort",
            onActivate: "onactivate",
            onAfterPrint: "onafterprint",
            onBeforePrint: "onbeforeprint",
            onBegin: "onbegin",
            onCancel: "oncancel",
            onCanPlay: "oncanplay",
            onCanPlayThrough: "oncanplaythrough",
            onChange: "onchange",
            onClick: "onclick",
            onClose: "onclose",
            onCopy: "oncopy",
            onCueChange: "oncuechange",
            onCut: "oncut",
            onDblClick: "ondblclick",
            onDrag: "ondrag",
            onDragEnd: "ondragend",
            onDragEnter: "ondragenter",
            onDragExit: "ondragexit",
            onDragLeave: "ondragleave",
            onDragOver: "ondragover",
            onDragStart: "ondragstart",
            onDrop: "ondrop",
            onDurationChange: "ondurationchange",
            onEmptied: "onemptied",
            onEnd: "onend",
            onEnded: "onended",
            onError: "onerror",
            onFocus: "onfocus",
            onFocusIn: "onfocusin",
            onFocusOut: "onfocusout",
            onHashChange: "onhashchange",
            onInput: "oninput",
            onInvalid: "oninvalid",
            onKeyDown: "onkeydown",
            onKeyPress: "onkeypress",
            onKeyUp: "onkeyup",
            onLoad: "onload",
            onLoadedData: "onloadeddata",
            onLoadedMetadata: "onloadedmetadata",
            onLoadStart: "onloadstart",
            onMessage: "onmessage",
            onMouseDown: "onmousedown",
            onMouseEnter: "onmouseenter",
            onMouseLeave: "onmouseleave",
            onMouseMove: "onmousemove",
            onMouseOut: "onmouseout",
            onMouseOver: "onmouseover",
            onMouseUp: "onmouseup",
            onMouseWheel: "onmousewheel",
            onOffline: "onoffline",
            onOnline: "ononline",
            onPageHide: "onpagehide",
            onPageShow: "onpageshow",
            onPaste: "onpaste",
            onPause: "onpause",
            onPlay: "onplay",
            onPlaying: "onplaying",
            onPopState: "onpopstate",
            onProgress: "onprogress",
            onRateChange: "onratechange",
            onRepeat: "onrepeat",
            onReset: "onreset",
            onResize: "onresize",
            onScroll: "onscroll",
            onSeeked: "onseeked",
            onSeeking: "onseeking",
            onSelect: "onselect",
            onShow: "onshow",
            onStalled: "onstalled",
            onStorage: "onstorage",
            onSubmit: "onsubmit",
            onSuspend: "onsuspend",
            onTimeUpdate: "ontimeupdate",
            onToggle: "ontoggle",
            onUnload: "onunload",
            onVolumeChange: "onvolumechange",
            onWaiting: "onwaiting",
            onZoom: "onzoom",
            overlinePosition: "overline-position",
            overlineThickness: "overline-thickness",
            paintOrder: "paint-order",
            panose1: "panose-1",
            pointerEvents: "pointer-events",
            referrerPolicy: "referrerpolicy",
            renderingIntent: "rendering-intent",
            shapeRendering: "shape-rendering",
            stopColor: "stop-color",
            stopOpacity: "stop-opacity",
            strikethroughPosition: "strikethrough-position",
            strikethroughThickness: "strikethrough-thickness",
            strokeDashArray: "stroke-dasharray",
            strokeDashOffset: "stroke-dashoffset",
            strokeLineCap: "stroke-linecap",
            strokeLineJoin: "stroke-linejoin",
            strokeMiterLimit: "stroke-miterlimit",
            strokeOpacity: "stroke-opacity",
            strokeWidth: "stroke-width",
            tabIndex: "tabindex",
            textAnchor: "text-anchor",
            textDecoration: "text-decoration",
            textRendering: "text-rendering",
            transformOrigin: "transform-origin",
            typeOf: "typeof",
            underlinePosition: "underline-position",
            underlineThickness: "underline-thickness",
            unicodeBidi: "unicode-bidi",
            unicodeRange: "unicode-range",
            unitsPerEm: "units-per-em",
            vAlphabetic: "v-alphabetic",
            vHanging: "v-hanging",
            vIdeographic: "v-ideographic",
            vMathematical: "v-mathematical",
            vectorEffect: "vector-effect",
            vertAdvY: "vert-adv-y",
            vertOriginX: "vert-origin-x",
            vertOriginY: "vert-origin-y",
            wordSpacing: "word-spacing",
            writingMode: "writing-mode",
            xHeight: "x-height",
            playbackOrder: "playbackorder",
            timelineBegin: "timelinebegin",
          },
          transform: p,
          properties: {
            about: g.commaOrSpaceSeparated,
            accentHeight: g.number,
            accumulate: null,
            additive: null,
            alignmentBaseline: null,
            alphabetic: g.number,
            amplitude: g.number,
            arabicForm: null,
            ascent: g.number,
            attributeName: null,
            attributeType: null,
            azimuth: g.number,
            bandwidth: null,
            baselineShift: null,
            baseFrequency: null,
            baseProfile: null,
            bbox: null,
            begin: null,
            bias: g.number,
            by: null,
            calcMode: null,
            capHeight: g.number,
            className: g.spaceSeparated,
            clip: null,
            clipPath: null,
            clipPathUnits: null,
            clipRule: null,
            color: null,
            colorInterpolation: null,
            colorInterpolationFilters: null,
            colorProfile: null,
            colorRendering: null,
            content: null,
            contentScriptType: null,
            contentStyleType: null,
            crossOrigin: null,
            cursor: null,
            cx: null,
            cy: null,
            d: null,
            dataType: null,
            defaultAction: null,
            descent: g.number,
            diffuseConstant: g.number,
            direction: null,
            display: null,
            dur: null,
            divisor: g.number,
            dominantBaseline: null,
            download: g.boolean,
            dx: null,
            dy: null,
            edgeMode: null,
            editable: null,
            elevation: g.number,
            enableBackground: null,
            end: null,
            event: null,
            exponent: g.number,
            externalResourcesRequired: null,
            fill: null,
            fillOpacity: g.number,
            fillRule: null,
            filter: null,
            filterRes: null,
            filterUnits: null,
            floodColor: null,
            floodOpacity: null,
            focusable: null,
            focusHighlight: null,
            fontFamily: null,
            fontSize: null,
            fontSizeAdjust: null,
            fontStretch: null,
            fontStyle: null,
            fontVariant: null,
            fontWeight: null,
            format: null,
            fr: null,
            from: null,
            fx: null,
            fy: null,
            g1: g.commaSeparated,
            g2: g.commaSeparated,
            glyphName: g.commaSeparated,
            glyphOrientationHorizontal: null,
            glyphOrientationVertical: null,
            glyphRef: null,
            gradientTransform: null,
            gradientUnits: null,
            handler: null,
            hanging: g.number,
            hatchContentUnits: null,
            hatchUnits: null,
            height: null,
            href: null,
            hrefLang: null,
            horizAdvX: g.number,
            horizOriginX: g.number,
            horizOriginY: g.number,
            id: null,
            ideographic: g.number,
            imageRendering: null,
            initialVisibility: null,
            in: null,
            in2: null,
            intercept: g.number,
            k: g.number,
            k1: g.number,
            k2: g.number,
            k3: g.number,
            k4: g.number,
            kernelMatrix: g.commaOrSpaceSeparated,
            kernelUnitLength: null,
            keyPoints: null,
            keySplines: null,
            keyTimes: null,
            kerning: null,
            lang: null,
            lengthAdjust: null,
            letterSpacing: null,
            lightingColor: null,
            limitingConeAngle: g.number,
            local: null,
            markerEnd: null,
            markerMid: null,
            markerStart: null,
            markerHeight: null,
            markerUnits: null,
            markerWidth: null,
            mask: null,
            maskContentUnits: null,
            maskUnits: null,
            mathematical: null,
            max: null,
            media: null,
            mediaCharacterEncoding: null,
            mediaContentEncodings: null,
            mediaSize: g.number,
            mediaTime: null,
            method: null,
            min: null,
            mode: null,
            name: null,
            navDown: null,
            navDownLeft: null,
            navDownRight: null,
            navLeft: null,
            navNext: null,
            navPrev: null,
            navRight: null,
            navUp: null,
            navUpLeft: null,
            navUpRight: null,
            numOctaves: null,
            observer: null,
            offset: null,
            onAbort: null,
            onActivate: null,
            onAfterPrint: null,
            onBeforePrint: null,
            onBegin: null,
            onCancel: null,
            onCanPlay: null,
            onCanPlayThrough: null,
            onChange: null,
            onClick: null,
            onClose: null,
            onCopy: null,
            onCueChange: null,
            onCut: null,
            onDblClick: null,
            onDrag: null,
            onDragEnd: null,
            onDragEnter: null,
            onDragExit: null,
            onDragLeave: null,
            onDragOver: null,
            onDragStart: null,
            onDrop: null,
            onDurationChange: null,
            onEmptied: null,
            onEnd: null,
            onEnded: null,
            onError: null,
            onFocus: null,
            onFocusIn: null,
            onFocusOut: null,
            onHashChange: null,
            onInput: null,
            onInvalid: null,
            onKeyDown: null,
            onKeyPress: null,
            onKeyUp: null,
            onLoad: null,
            onLoadedData: null,
            onLoadedMetadata: null,
            onLoadStart: null,
            onMessage: null,
            onMouseDown: null,
            onMouseEnter: null,
            onMouseLeave: null,
            onMouseMove: null,
            onMouseOut: null,
            onMouseOver: null,
            onMouseUp: null,
            onMouseWheel: null,
            onOffline: null,
            onOnline: null,
            onPageHide: null,
            onPageShow: null,
            onPaste: null,
            onPause: null,
            onPlay: null,
            onPlaying: null,
            onPopState: null,
            onProgress: null,
            onRateChange: null,
            onRepeat: null,
            onReset: null,
            onResize: null,
            onScroll: null,
            onSeeked: null,
            onSeeking: null,
            onSelect: null,
            onShow: null,
            onStalled: null,
            onStorage: null,
            onSubmit: null,
            onSuspend: null,
            onTimeUpdate: null,
            onToggle: null,
            onUnload: null,
            onVolumeChange: null,
            onWaiting: null,
            onZoom: null,
            opacity: null,
            operator: null,
            order: null,
            orient: null,
            orientation: null,
            origin: null,
            overflow: null,
            overlay: null,
            overlinePosition: g.number,
            overlineThickness: g.number,
            paintOrder: null,
            panose1: null,
            path: null,
            pathLength: g.number,
            patternContentUnits: null,
            patternTransform: null,
            patternUnits: null,
            phase: null,
            ping: g.spaceSeparated,
            pitch: null,
            playbackOrder: null,
            pointerEvents: null,
            points: null,
            pointsAtX: g.number,
            pointsAtY: g.number,
            pointsAtZ: g.number,
            preserveAlpha: null,
            preserveAspectRatio: null,
            primitiveUnits: null,
            propagate: null,
            property: g.commaOrSpaceSeparated,
            r: null,
            radius: null,
            referrerPolicy: null,
            refX: null,
            refY: null,
            rel: g.commaOrSpaceSeparated,
            rev: g.commaOrSpaceSeparated,
            renderingIntent: null,
            repeatCount: null,
            repeatDur: null,
            requiredExtensions: g.commaOrSpaceSeparated,
            requiredFeatures: g.commaOrSpaceSeparated,
            requiredFonts: g.commaOrSpaceSeparated,
            requiredFormats: g.commaOrSpaceSeparated,
            resource: null,
            restart: null,
            result: null,
            rotate: null,
            rx: null,
            ry: null,
            scale: null,
            seed: null,
            shapeRendering: null,
            side: null,
            slope: null,
            snapshotTime: null,
            specularConstant: g.number,
            specularExponent: g.number,
            spreadMethod: null,
            spacing: null,
            startOffset: null,
            stdDeviation: null,
            stemh: null,
            stemv: null,
            stitchTiles: null,
            stopColor: null,
            stopOpacity: null,
            strikethroughPosition: g.number,
            strikethroughThickness: g.number,
            string: null,
            stroke: null,
            strokeDashArray: g.commaOrSpaceSeparated,
            strokeDashOffset: null,
            strokeLineCap: null,
            strokeLineJoin: null,
            strokeMiterLimit: g.number,
            strokeOpacity: g.number,
            strokeWidth: null,
            style: null,
            surfaceScale: g.number,
            syncBehavior: null,
            syncBehaviorDefault: null,
            syncMaster: null,
            syncTolerance: null,
            syncToleranceDefault: null,
            systemLanguage: g.commaOrSpaceSeparated,
            tabIndex: g.number,
            tableValues: null,
            target: null,
            targetX: g.number,
            targetY: g.number,
            textAnchor: null,
            textDecoration: null,
            textRendering: null,
            textLength: null,
            timelineBegin: null,
            title: null,
            transformBehavior: null,
            type: null,
            typeOf: g.commaOrSpaceSeparated,
            to: null,
            transform: null,
            transformOrigin: null,
            u1: null,
            u2: null,
            underlinePosition: g.number,
            underlineThickness: g.number,
            unicode: null,
            unicodeBidi: null,
            unicodeRange: null,
            unitsPerEm: g.number,
            values: null,
            vAlphabetic: g.number,
            vMathematical: g.number,
            vectorEffect: null,
            vHanging: g.number,
            vIdeographic: g.number,
            version: null,
            vertAdvY: g.number,
            vertOriginX: g.number,
            vertOriginY: g.number,
            viewBox: null,
            viewTarget: null,
            visibility: null,
            width: null,
            widths: null,
            wordSpacing: null,
            writingMode: null,
            x: null,
            x1: null,
            x2: null,
            xChannelSelector: null,
            xHeight: g.number,
            y: null,
            y1: null,
            y2: null,
            yChannelSelector: null,
            z: null,
            zoomAndPan: null,
          },
        }),
        y = t([c, s, m, h, f], "html"),
        v = t([c, s, m, h, b], "svg");
    },
    60204: function (n, e, l) {
      l.d(e, {
        s: function () {
          return s;
        },
      });
      var o = l(4144),
        t = l(54688),
        r = l(9975);
      let a = /^data[-\w.:]+$/i,
        u = /-[a-z]/g,
        i = /[A-Z]/g;
      function s(n, e) {
        let l = (0, o.F)(e),
          s = e,
          d = r.k;
        if (l in n.normal) return n.property[n.normal[l]];
        if (l.length > 4 && "data" === l.slice(0, 4) && a.test(e)) {
          if ("-" === e.charAt(4)) {
            let n = e.slice(5).replace(u, p);
            s = "data" + n.charAt(0).toUpperCase() + n.slice(1);
          } else {
            let n = e.slice(4);
            if (!u.test(n)) {
              let l = n.replace(i, c);
              "-" !== l.charAt(0) && (l = "-" + l), (e = "data" + l);
            }
          }
          d = t.I;
        }
        return new d(s, e);
      }
      function c(n) {
        return "-" + n.toLowerCase();
      }
      function p(n) {
        return n.charAt(1).toUpperCase();
      }
    },
    81361: function (n, e, l) {
      l.d(e, {
        D: function () {
          return o;
        },
      });
      let o = {
        classId: "classID",
        dataType: "datatype",
        itemId: "itemID",
        strokeDashArray: "strokeDasharray",
        strokeDashOffset: "strokeDashoffset",
        strokeLineCap: "strokeLinecap",
        strokeLineJoin: "strokeLinejoin",
        strokeMiterLimit: "strokeMiterlimit",
        typeOf: "typeof",
        xLinkActuate: "xlinkActuate",
        xLinkArcRole: "xlinkArcrole",
        xLinkHref: "xlinkHref",
        xLinkRole: "xlinkRole",
        xLinkShow: "xlinkShow",
        xLinkTitle: "xlinkTitle",
        xLinkType: "xlinkType",
        xmlnsXLink: "xmlnsXlink",
      };
    },
    4144: function (n, e, l) {
      l.d(e, {
        F: function () {
          return o;
        },
      });
      function o(n) {
        return n.toLowerCase();
      }
    },
    54688: function (n, e, l) {
      l.d(e, {
        I: function () {
          return a;
        },
      });
      var o = l(9975),
        t = l(87311);
      let r = Object.keys(t);
      class a extends o.k {
        constructor(n, e, l, o) {
          var a, u;
          let i = -1;
          if ((super(n, e), o && (this.space = o), "number" == typeof l))
            for (; ++i < r.length; ) {
              let n = r[i];
              (a = r[i]), (u = (l & t[n]) === t[n]) && (this[a] = u);
            }
        }
      }
      a.prototype.defined = !0;
    },
    9975: function (n, e, l) {
      l.d(e, {
        k: function () {
          return o;
        },
      });
      class o {
        constructor(n, e) {
          (this.property = n), (this.attribute = e);
        }
      }
      (o.prototype.space = null),
        (o.prototype.boolean = !1),
        (o.prototype.booleanish = !1),
        (o.prototype.overloadedBoolean = !1),
        (o.prototype.number = !1),
        (o.prototype.commaSeparated = !1),
        (o.prototype.spaceSeparated = !1),
        (o.prototype.commaOrSpaceSeparated = !1),
        (o.prototype.mustUseProperty = !1),
        (o.prototype.defined = !1);
    },
    87311: function (n, e, l) {
      l.r(e),
        l.d(e, {
          boolean: function () {
            return t;
          },
          booleanish: function () {
            return r;
          },
          commaOrSpaceSeparated: function () {
            return c;
          },
          commaSeparated: function () {
            return s;
          },
          number: function () {
            return u;
          },
          overloadedBoolean: function () {
            return a;
          },
          spaceSeparated: function () {
            return i;
          },
        });
      let o = 0,
        t = p(),
        r = p(),
        a = p(),
        u = p(),
        i = p(),
        s = p(),
        c = p();
      function p() {
        return 2 ** ++o;
      }
    },
    93113: function (n, e, l) {
      l.d(e, {
        P: function () {
          return o;
        },
      });
      function o(n) {
        return n.join(" ").trim();
      }
    },
    66406: function (n, e, l) {
      function o(n) {
        let e = String(n),
          l = /\r?\n|\r/g,
          o = l.exec(e),
          r = 0,
          a = [];
        for (; o; )
          a.push(t(e.slice(r, o.index), r > 0, !0), o[0]),
            (r = o.index + o[0].length),
            (o = l.exec(e));
        return a.push(t(e.slice(r), r > 0, !1)), a.join("");
      }
      function t(n, e, l) {
        let o = 0,
          t = n.length;
        if (e) {
          let e = n.codePointAt(o);
          for (; 9 === e || 32 === e; ) o++, (e = n.codePointAt(o));
        }
        if (l) {
          let e = n.codePointAt(t - 1);
          for (; 9 === e || 32 === e; ) t--, (e = n.codePointAt(t - 1));
        }
        return t > o ? n.slice(o, t) : "";
      }
      l.d(e, {
        j: function () {
          return o;
        },
      });
    },
    68776: function (n, e, l) {
      function o() {
        let n = [],
          e = {
            run: function (...e) {
              let l = -1,
                o = e.pop();
              if ("function" != typeof o)
                throw TypeError("Expected function as last argument, not " + o);
              !(function t(r, ...a) {
                let u = n[++l],
                  i = -1;
                if (r) {
                  o(r);
                  return;
                }
                for (; ++i < e.length; )
                  (null === a[i] || void 0 === a[i]) && (a[i] = e[i]);
                (e = a),
                  u
                    ? (function (n, e) {
                        let l;
                        return function (...e) {
                          let r;
                          let a = n.length > e.length;
                          a && e.push(o);
                          try {
                            r = n.apply(this, e);
                          } catch (n) {
                            if (a && l) throw n;
                            return o(n);
                          }
                          a ||
                            (r instanceof Promise
                              ? r.then(t, o)
                              : r instanceof Error
                              ? o(r)
                              : t(r));
                        };
                        function o(n, ...t) {
                          l || ((l = !0), e(n, ...t));
                        }
                        function t(n) {
                          o(null, n);
                        }
                      })(
                        u,
                        t
                      )(...a)
                    : o(null, ...a);
              })(null, ...e);
            },
            use: function (l) {
              if ("function" != typeof l)
                throw TypeError(
                  "Expected `middelware` to be a function, not " + l
                );
              return n.push(l), e;
            },
          };
        return e;
      }
      l.d(e, {
        r: function () {
          return o;
        },
      });
    },
  },
]);
