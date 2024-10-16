(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1698],
  {
    85506: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/careers",
        function () {
          return r(87210);
        },
      ]);
    },
    87210: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          __N_SSG: function () {
            return $;
          },
          default: function () {
            return ee;
          },
        });
      var a = r(52322),
        s = r(96577),
        i = r.n(s),
        o = r(39097),
        l = r.n(o),
        n = r(5632),
        c = r(55351),
        d = r(2784);
      let m = d.forwardRef(function (e, t) {
        return d.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 2,
              stroke: "currentColor",
              "aria-hidden": "true",
              ref: t,
            },
            e
          ),
          d.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
          })
        );
      });
      var u = r(15159),
        x = r(29982),
        h = r(42380),
        f = r(83940),
        p = r(44382),
        g = r(88147),
        b = r(60426),
        v = r.n(b),
        w = ["x", "y", "z"],
        y = function (e) {
          Object.assign(this, {
            uniforms: {},
            geometry: { vertices: [{ x: 0, y: 0, z: 0 }] },
            mode: 0,
            modifiers: {},
            attributes: [],
            multiplier: 1,
            buffers: [],
          }),
            Object.assign(this, e),
            this.prepareProgram(),
            this.prepareUniforms(),
            this.prepareAttributes();
        };
      (y.prototype.compileShader = function (e, t) {
        var r = this.gl.createShader(e);
        return this.gl.shaderSource(r, t), this.gl.compileShader(r), r;
      }),
        (y.prototype.prepareProgram = function () {
          var e = this.gl,
            t = this.vertex,
            r = this.fragment,
            a = e.createProgram();
          e.attachShader(a, this.compileShader(35633, t)),
            e.attachShader(a, this.compileShader(35632, r)),
            e.linkProgram(a),
            e.useProgram(a),
            (this.program = a);
        }),
        (y.prototype.prepareUniforms = function () {
          for (
            var e = Object.keys(this.uniforms), t = 0;
            t < e.length;
            t += 1
          ) {
            var r = this.gl.getUniformLocation(this.program, e[t]);
            this.uniforms[e[t]].location = r;
          }
        }),
        (y.prototype.prepareAttributes = function () {
          void 0 !== this.geometry.vertices &&
            this.attributes.push({ name: "aPosition", size: 3 }),
            void 0 !== this.geometry.normal &&
              this.attributes.push({ name: "aNormal", size: 3 }),
            (this.attributeKeys = []);
          for (var e = 0; e < this.attributes.length; e += 1)
            this.attributeKeys.push(this.attributes[e].name),
              this.prepareAttribute(this.attributes[e]);
        }),
        (y.prototype.prepareAttribute = function (e) {
          for (
            var t = this.geometry,
              r = this.multiplier,
              a = t.vertices,
              s = t.normal,
              i = new Float32Array(r * a.length * e.size),
              o = 0;
            o < r;
            o += 1
          )
            for (
              var l = e.data && e.data(o, r), n = o * a.length * e.size, c = 0;
              c < a.length;
              c += 1
            )
              for (var d = 0; d < e.size; d += 1) {
                var m = this.modifiers[e.name];
                (i[n] =
                  void 0 !== m
                    ? m(l, c, d, this)
                    : "aPosition" === e.name
                    ? a[c][w[d]]
                    : "aNormal" === e.name
                    ? s[c][w[d]]
                    : l[d]),
                  (n += 1);
              }
          (this.attributes[this.attributeKeys.indexOf(e.name)].data = i),
            this.prepareBuffer(
              this.attributes[this.attributeKeys.indexOf(e.name)]
            );
        }),
        (y.prototype.prepareBuffer = function (e) {
          var t = e.data,
            r = e.name,
            a = e.size,
            s = this.gl.createBuffer();
          this.gl.bindBuffer(34962, s), this.gl.bufferData(34962, t, 35044);
          var i = this.gl.getAttribLocation(this.program, r);
          this.gl.enableVertexAttribArray(i),
            this.gl.vertexAttribPointer(i, a, 5126, !1, 0, 0),
            (this.buffers[this.attributeKeys.indexOf(e.name)] = {
              buffer: s,
              location: i,
              size: a,
            });
        }),
        (y.prototype.render = function (e) {
          var t = this,
            r = this.uniforms,
            a = this.multiplier,
            s = this.gl;
          s.useProgram(this.program);
          for (var i = 0; i < this.buffers.length; i += 1) {
            var o = this.buffers[i],
              l = o.location,
              n = o.buffer,
              c = o.size;
            s.enableVertexAttribArray(l),
              s.bindBuffer(34962, n),
              s.vertexAttribPointer(l, c, 5126, !1, 0, 0);
          }
          Object.keys(e).forEach(function (t) {
            r[t].value = e[t].value;
          }),
            Object.keys(r).forEach(function (e) {
              var a = r[e];
              t.uniformMap[a.type](a.location, a.value);
            }),
            s.drawArrays(this.mode, 0, a * this.geometry.vertices.length),
            this.onRender && this.onRender(this);
        }),
        (y.prototype.destroy = function () {
          for (var e = 0; e < this.buffers.length; e += 1)
            this.gl.deleteBuffer(this.buffers[e].buffer);
          this.gl.deleteProgram(this.program), (this.gl = null);
        });
      var j = function (e) {
        var t = this,
          r = e || {},
          a = r.canvas;
        void 0 === a && (a = document.querySelector("canvas"));
        var s = r.context;
        void 0 === s && (s = {});
        var i = r.contextType;
        void 0 === i && (i = "experimental-webgl");
        var o = r.settings;
        void 0 === o && (o = {});
        var l = a.getContext(i, Object.assign({ alpha: !1, antialias: !1 }, s));
        Object.assign(this, {
          gl: l,
          canvas: a,
          uniforms: {},
          instances: new Map(),
          shouldRender: !0,
        }),
          Object.assign(this, {
            devicePixelRatio: 1,
            clearColor: [1, 1, 1, 1],
            position: { x: 0, y: 0, z: 2 },
            clip: [0.001, 100],
          }),
          Object.assign(this, o),
          (this.uniformMap = {
            float: function (e, t) {
              return l.uniform1f(e, t);
            },
            vec2: function (e, t) {
              return l.uniform2fv(e, t);
            },
            vec3: function (e, t) {
              return l.uniform3fv(e, t);
            },
            vec4: function (e, t) {
              return l.uniform4fv(e, t);
            },
            mat2: function (e, t) {
              return l.uniformMatrix2fv(e, !1, t);
            },
            mat3: function (e, t) {
              return l.uniformMatrix3fv(e, !1, t);
            },
            mat4: function (e, t) {
              return l.uniformMatrix4fv(e, !1, t);
            },
          }),
          l.enable(l.DEPTH_TEST),
          l.depthFunc(l.LEQUAL),
          !1 === l.getContextAttributes().alpha &&
            (l.clearColor.apply(l, this.clearColor), l.clearDepth(1)),
          this.onSetup && this.onSetup(l),
          window.addEventListener("resize", function () {
            return t.resize();
          }),
          this.resize(),
          this.render();
      };
      (j.prototype.resize = function () {
        var e = this.gl,
          t = this.canvas,
          r = this.devicePixelRatio,
          a = this.position;
        (t.width = t.clientWidth * r), (t.height = t.clientHeight * r);
        var s = e.drawingBufferWidth,
          i = e.drawingBufferHeight,
          o = s / i;
        e.viewport(0, 0, s, i);
        var l = Math.tan((Math.PI / 180) * 22.5),
          n = [
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            a.x,
            a.y,
            -((o < 1 ? 1 : o) * a.z),
            1,
          ];
        (this.uniforms.uProjectionMatrix = {
          type: "mat4",
          value: [
            0.5 / l,
            0,
            0,
            0,
            0,
            (o / l) * 0.5,
            0,
            0,
            0,
            0,
            -(this.clip[1] + this.clip[0]) / (this.clip[1] - this.clip[0]),
            -1,
            0,
            0,
            -2 * this.clip[1] * (this.clip[0] / (this.clip[1] - this.clip[0])),
            0,
          ],
        }),
          (this.uniforms.uViewMatrix = {
            type: "mat4",
            value: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
          }),
          (this.uniforms.uModelMatrix = { type: "mat4", value: n });
      }),
        (j.prototype.toggle = function (e) {
          e !== this.shouldRender &&
            ((this.shouldRender = void 0 !== e ? e : !this.shouldRender),
            this.shouldRender && this.render());
        }),
        (j.prototype.render = function () {
          var e = this;
          this.gl.clear(16640),
            this.instances.forEach(function (t) {
              t.render(e.uniforms);
            }),
            this.onRender && this.onRender(this),
            this.shouldRender &&
              requestAnimationFrame(function () {
                return e.render();
              });
        }),
        (j.prototype.add = function (e, t) {
          void 0 === t && (t = { uniforms: {} }),
            void 0 === t.uniforms && (t.uniforms = {}),
            Object.assign(
              t.uniforms,
              JSON.parse(JSON.stringify(this.uniforms))
            ),
            Object.assign(t, { gl: this.gl, uniformMap: this.uniformMap });
          var r = new y(t);
          return this.instances.set(e, r), r;
        }),
        (j.prototype.remove = function (e) {
          var t = this.instances.get(e);
          void 0 !== t && (t.destroy(), this.instances.delete(e));
        }),
        (j.prototype.destroy = function () {
          var e = this;
          this.instances.forEach(function (t, r) {
            t.destroy(), e.instances.delete(r);
          }),
            this.toggle(!1);
        });
      var N = "theta",
        A = "mapSamples",
        _ = "mapBrightness",
        k = "baseColor",
        z = "markerColor",
        E = "glowColor",
        C = "markers",
        S = "diffuse",
        R = "devicePixelRatio",
        P = "dark",
        M = "offset",
        O = "scale",
        B = "opacity",
        T = "mapBaseBrightness",
        D = {
          phi: "A",
          [N]: "B",
          [A]: "l",
          [_]: "E",
          [k]: "R",
          [z]: "S",
          [E]: "y",
          [S]: "F",
          [P]: "G",
          [M]: "x",
          [O]: "C",
          [B]: "H",
          [T]: "I",
        },
        { PI: U, sin: F, cos: I } = Math,
        W = (e) =>
          [].concat(
            ...e.map((e) => {
              let [t, r] = e.location;
              (t = (t * U) / 180), (r = (r * U) / 180 - U);
              let a = I(t);
              return [-a * I(r), F(t), a * F(r), e.size];
            }),
            [0, 0, 0, 0]
          ),
        L = (e, t) => {
          let r = (e, r, a) => ({ type: e, value: void 0 === t[r] ? a : t[r] }),
            a = e.getContext("webgl") ? "webgl" : "experimental-webgl",
            s = new j({
              canvas: e,
              contextType: a,
              context: {
                alpha: !0,
                stencil: !1,
                antialias: !0,
                depth: !1,
                preserveDrawingBuffer: !1,
                ...t.context,
              },
              settings: {
                [R]: t[R] || 1,
                onSetup: (e) => {
                  let t = e.RGB,
                    r = e.UNSIGNED_BYTE,
                    a = e.TEXTURE_2D,
                    s = e.createTexture();
                  e.bindTexture(a, s),
                    e.texImage2D(
                      a,
                      0,
                      t,
                      1,
                      1,
                      0,
                      t,
                      r,
                      new Uint8Array([0, 0, 0, 0])
                    );
                  let i = new Image();
                  (i.onload = () => {
                    e.bindTexture(a, s),
                      e.texImage2D(a, 0, t, t, r, i),
                      e.generateMipmap(a);
                    let o = e.getParameter(e.CURRENT_PROGRAM),
                      l = e.getUniformLocation(o, "J");
                    e.texParameteri(a, e.TEXTURE_MIN_FILTER, e.NEAREST),
                      e.texParameteri(a, e.TEXTURE_MAG_FILTER, e.NEAREST),
                      e.uniform1i(l, 0);
                  }),
                    (i.src =
                      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAACAAQAAAADMzoqnAAAAAXNSR0IArs4c6QAABA5JREFUeNrV179uHEUAx/Hf3JpbF+E2VASBsmVKTBcpKJs3SMEDcDwBiVJAAewYEBUivIHT0uUBIt0YCovKD0CRjUC4QfHYh8hYXu+P25vZ2Zm9c66gMd/GJ/tz82d3bk8GN4SrByYF2366FNTACIAkivVAAazQdnf3MvAlbNUQfOPAdQDvSAimMWhwy4I2g4SU+Kp04ISLpPBAKLxPyic3O/CCi+Y7rUJbiodcpDOFY7CgxCEXmdYD2EYK2s5lApOx5pEDDYCUwM1XdJUwBV11QQMg59kePSCaPAASQMEL2hwo6TJFgxpg+TgC2ymXPbuvc40awr3D1QCFfbH9kcoqAOkZozpQo0aqAGQRKCog/+tjkgbNFEtg2FffBvBGlSxHoAaAa1u6X4PBAwDiR8FFsrQgeUhfJTSALaB9jy5NCybJPn1SVFiWk7ywN+KzhH1aKAuydhGkbEF4lWohLXDXavlyFgHY7LBnLRdlAP6BS5Cc8RfVDXbkwN/oIvmY+6obbNeBP0JwTuMGu9gTzy1Q4RS/cWpfzszeYwd+CAFrtBW/Hur0gLbJGlD+/OjVwe/drfBxkbbg63dndEDfiEBlAd7ac0BPe1D6Jd8dfbLH+RI0OzseFB5s01/M+gMdAeluLOCAuaUA9Lezo/vSgXoCX9rtEiXnp7Q1W/CNyWcd8DXoS6jH/YZ5vAJEWY2dXFQe2TUgaFaNejCzJ98g6HnlVrsE58sDcYqg+9XY75fPqdoh/kRQWiXKg8MWlJQxUFMPjqnyujhFBE7UxIMjyszk0QwQlFsezImsyvUYYYVED2pk6m0Tg8T04Fwjk2kdAwSACqlM6gRRt3vQYAFGX0Ah7Ebx1H+MDRI5ui0QldH4j7FGcm90XdxD2Jg1AOEAVAKhEFXSn4cKUELurIAKwJ3MArypPscQaLhJFICJ0ohjDySAdH8AhDtCiTuMycH8CXzhH9jUACAO5uMhoAwA5i+T6WAKmmAqnLy80wxHqIPFYpqCwxGaYLt4Dyievg5kEoVEUAhs6pqKgFtDQYOuaXypaWKQfIuwwoGSZgfLsu/XAtI8cGN+h7Cc1A5oLOMhwlIPXuhu48AIvsSBkvtV9wsJRKCyYLfq5lTrQMFd1a262oqBck9K1V0YjQg0iEYYgpS1A9GlXQV5cykwm4A7BzVsxQqo7E+zCegO7Ma7yKgsuOcfKbMBwLC8wvVNYDsANYalEpOAa6zpWjTeMKGwEwC1CiQewJc5EKfgy7GmRAZA4vUVGwE2dPM/g0xuAInE/yG5aZ8ISxWGfYigUVbdyBElTHh2uCwGdfCkOLGgQVBh3Ewp+/QK4CDlR5Ws/Zf7yhCf8pH7vinWAvoVCQ6zz0NX5V/6GkAVV+2/5qsJ/gU8bsxpM8IeAQAAAABJRU5ErkJggg==");
                },
              },
            });
          return (
            s.add("", {
              vertex:
                "attribute vec3 aPosition;uniform mat4 uProjectionMatrix;uniform mat4 uModelMatrix;uniform mat4 uViewMatrix;void main(){gl_Position=uProjectionMatrix*uModelMatrix*uViewMatrix*vec4(aPosition,1.);}",
              fragment:
                "precision highp float;uniform vec2 t,x;uniform vec3 R,S,y;uniform vec4 z[64];uniform float A,B,l,C,D,E,F,G,H,I;uniform sampler2D J;float K=1./l;mat3 L(float a,float b){float c=cos(a),d=cos(b),e=sin(a),f=sin(b);return mat3(d,f*e,-f*c,0.,c,e,f,d*-e,d*c);}vec3 w(vec3 c,out float v){c=c.xzy;float p=max(2.,floor(log2(2.236068*l*3.141593*(1.-c.z*c.z))*.72021));vec2 g=floor(pow(1.618034,p)/2.236068*vec2(1.,1.618034)+.5),d=fract((g+1.)*.618034)*6.283185-3.883222,e=-2.*g,f=vec2(atan(c.y,c.x),c.z-1.),q=floor(vec2(e.y*f.x-d.y*(f.y*l+1.),-e.x*f.x+d.x*(f.y*l+1.))/(d.x*e.y-e.x*d.y));float n=3.141593;vec3 r;for(float h=0.;h<4.;h+=1.){vec2 s=vec2(mod(h,2.),floor(h*.5));float j=dot(g,q+s);if(j>l)continue;float a=j,b=0.;if(a>=524288.)a-=524288.,b+=.803894;if(a>=262144.)a-=262144.,b+=.901947;if(a>=131072.)a-=131072.,b+=.950973;if(a>=65536.)a-=65536.,b+=.475487;if(a>=32768.)a-=32768.,b+=.737743;if(a>=16384.)a-=16384.,b+=.868872;if(a>=8192.)a-=8192.,b+=.934436;if(a>=4096.)a-=4096.,b+=.467218;if(a>=2048.)a-=2048.,b+=.733609;if(a>=1024.)a-=1024.,b+=.866804;if(a>=512.)a-=512.,b+=.433402;if(a>=256.)a-=256.,b+=.216701;if(a>=128.)a-=128.,b+=.108351;if(a>=64.)a-=64.,b+=.554175;if(a>=32.)a-=32.,b+=.777088;if(a>=16.)a-=16.,b+=.888544;if(a>=8.)a-=8.,b+=.944272;if(a>=4.)a-=4.,b+=.472136;if(a>=2.)a-=2.,b+=.236068;if(a>=1.)a-=1.,b+=.618034;float k=fract(b)*6.283185,i=1.-2.*j*K,m=sqrt(1.-i*i);vec3 o=vec3(cos(k)*m,sin(k)*m,i);float u=length(c-o);if(u<n)n=u,r=o;}v=n;return r.xzy;}void main(){vec2 b=(gl_FragCoord.xy/t*2.-1.)/C-x*vec2(1.,-1.)/t;b.x*=t.x/t.y;float c=dot(b,b);vec4 M=vec4(0.);float m=0.;if(c<=.64){for(int d=0;d<2;d++){vec4 e=vec4(0.);float a;vec3 u=vec3(0.,0.,1.),f=normalize(vec3(b,sqrt(.64-c)));f.z*=d>0?-1.:1.,u.z*=d>0?-1.:1.;vec3 g=f*L(B,A),h=w(g,a);float n=asin(h.y),i=acos(-h.x/cos(n));i=h.z<0.?-i:i;float N=max(texture2D(J,vec2(i*.5/3.141593,-(n/3.141593+.5))).x,I),O=smoothstep(8e-3,0.,a),j=dot(f,u),v=pow(j,F)*E,o=N*O*v,T=mix((1.-o)*pow(j,.4),o,G)+.1;e+=vec4(R*T,1.);int U=int(D);float p=0.;for(int k=0;k<64;k++){if(k>=U)break;vec4 q=z[k];vec3 r=q.xyz,P=r-g;float s=q.w;if(dot(P,P)>s*s*4.)continue;vec3 V=w(r,a);a=length(V-g),a<s?p+=smoothstep(s*.5,0.,a):0.;}p=min(1.,p*v),e.xyz=mix(e.xyz,S,p),e.xyz+=pow(1.-j,4.)*y,M+=e*(1.+(d>0?-H:H))/2.;}m=pow(dot(normalize(vec3(-b,sqrt(1.-c))),vec3(0.,0.,1.)),4.)*smoothstep(0.,1.,.2/(c-.64));}else{float Q=sqrt(.2/(c-.64));m=smoothstep(.5,1.,Q/(Q+1.));}gl_FragColor=M+vec4(m*y,m);}",
              uniforms: {
                t: { type: "vec2", value: [t.width, t.height] },
                A: r("float", "phi"),
                B: r("float", N),
                l: r("float", A),
                E: r("float", _),
                I: r("float", T),
                R: r("vec3", k),
                S: r("vec3", z),
                F: r("float", S),
                y: r("vec3", E),
                G: r("float", P),
                z: { type: "vec4", value: W(t[C]) },
                D: { type: "float", value: t[C].length },
                x: r("vec2", M, [0, 0]),
                C: r("float", O, 1),
                H: r("float", B, 1),
              },
              mode: 4,
              geometry: {
                vertices: [
                  { x: -100, y: 100, z: 0 },
                  { x: -100, y: -100, z: 0 },
                  { x: 100, y: 100, z: 0 },
                  { x: 100, y: -100, z: 0 },
                  { x: -100, y: -100, z: 0 },
                  { x: 100, y: 100, z: 0 },
                ],
              },
              onRender: ({ uniforms: e }) => {
                let r = {};
                if (t.onRender) {
                  for (let a in ((r = t.onRender(r) || r), D))
                    void 0 !== r[a] && (e[D[a]].value = r[a]);
                  void 0 !== r[C] &&
                    ((e.z.value = W(r[C])), (e.D.value = r[C].length)),
                    r.width && r.height && (e.t.value = [r.width, r.height]);
                }
              },
            }),
            s
          );
        },
        H = r(22965),
        Q = r(54073),
        G = r.n(Q),
        V = () => {
          let { resolvedTheme: e } = (0, H.F)(),
            t = (0, d.useRef)(),
            r = 0,
            s = 0,
            i = (0, d.useCallback)(
              () => t.current && (s = t.current.offsetWidth),
              [e]
            );
          return (
            (0, d.useEffect)(() => {
              let a = G()(i, 10);
              window.addEventListener("resize", a), i();
              let o = L(t.current, {
                devicePixelRatio: 2,
                width: 2 * s,
                height: 2 * s,
                phi: 0,
                theta: 0.3,
                dark: (null == e ? void 0 : e.includes("dark")) ? 1 : 0,
                diffuse: 3,
                scale: 1,
                opacity: 0.8,
                mapSamples: 2e4,
                mapBrightness: 4,
                baseColor: [1, 1, 1],
                markerColor: [62 / 255, 207 / 255, 142 / 255],
                glowColor: [1, 1, 1],
                markers: [
                  { location: [53.4084, 2.9916], size: 0.06 },
                  { location: [1.3521, 103.8198], size: 0.06 },
                  { location: [-40.9006, 174.886], size: 0.06 },
                  { location: [14.0583, 108.2772], size: 0.06 },
                  { location: [37.7749, -122.4194], size: 0.06 },
                  { location: [41.3874, 2.1686], size: 0.06 },
                  { location: [49.2827, -123.1207], size: 0.06 },
                  { location: [-36.9848, 143.3906], size: 0.06 },
                  { location: [42.3601, -71.0589], size: 0.06 },
                  { location: [52.52, 13.405], size: 0.06 },
                  { location: [33.749, -84.388], size: 0.06 },
                  { location: [35.6762, 139.6503], size: 0.06 },
                  { location: [9.19, -75.0152], size: 0.06 },
                  { location: [-25.2521, -52.0215], size: 0.06 },
                ],
                onRender: (e) => {
                  (e.phi = r),
                    (r += 0.0025),
                    (e.width = 2 * s),
                    (e.height = 2 * s);
                },
              });
              return (
                setTimeout(() => (t.current.style.opacity = "0.8"), 10),
                () => {
                  window.removeEventListener("resize", i), o.destroy();
                }
              );
            }, [e]),
            (0, a.jsx)("canvas", {
              ref: t,
              className:
                "absolute inset-0 w-full h-full opacity-0 transition-opacity object-contain",
            })
          );
        },
        Y = r(27478),
        K = r(37637);
      let X = "64d76968-1fe1-458c-8c6d-8859168c3fb7",
        J = (e) => e.id === X;
      var q = JSON.parse(
        '{"S9":[{"number":"5+","text":"team members\\n\\nin 2+ countries"},{"number":"5+","text":"languages spoken"},{"number":"5+","text":"community members"}],"X9":[{"icon":"Team-First Attitude","title":"Team-First Attitude","text":"Focused on the mission, not individual recognition."},{"icon":"Versatile Developer","title":"Versatile Developer","text":"Adapts to multiple languages and is always learning."},{"icon":"Efficiency Focused","title":"Efficiency Focused","text":"Automates and optimizes processes for long-term impact."},{"icon":"honesty","title":"Objective Thinker","text":"Prioritizes facts over personal bias."},{"icon":"flexibility","title":"Continuous Improvement","text":"Always seeking to refine and enhance every aspect."}],"bn":[{"icon":"remote","title":"Fully Remote","text":"We hire globally. We believe you can do your best work from anywhere. we provide a co-working membership that you can use anywhere in the world."},{"icon":"flexibility","title":"Flexible Work","text":"Work remotely from anywhere in the world. We work in teams, but we work asynchronously. You know what you need to do and when it needs to be done."}],"rO":[{"title":"Recruiter Interview","text":"Chat with our recruiter to tell us about your career journey, professional goals and we\'ll share more about Farcal, the role & our recruitment process."},{"title":"Technical / Skill-based Interview","text":"Meet with the team lead. In this interview we\'ll aim to learn about your hard skills and problem solving approach."},{"title":"Another Technical / Skill-based Interview","text":"You\'ll either meet the department lead or peer. This interview will dive deeper into your hard skills and our expectations for this role."},{"title":"Final Founders Interview","text":"Our co-founders meet every candidate as the final step."}]}'
      );
      let Z = (e) => {
        let { job: t } = e,
          r = t.id === X;
        return (0, a.jsxs)(l(), {
          href: t.jobUrl,
          className:
            " first-of-type:rounded-t-md last-of-type:rounded-b-md cursor-pointer md:cursor-default bg-surface-75 border border-muted drop-shadow-sm p-4 px-7 flex flex-col md:flex-row md:items-center transition hover:bg-surface-100 hover:cursor-pointer ",
          target: "_blank",
          children: [
            (0, a.jsx)("h2", {
              className:
                "text-base min-w-[240px] lg:min-w-[316px] sm:truncate mr-6",
              children: t.title,
            }),
            (0, a.jsxs)("div", {
              className:
                "flex justify-between justify-[normal] pt-2 md:pt-0 w-full items-center",
              children: [
                (0, a.jsxs)("div", {
                  className: "flex items-center gap-4",
                  children: [
                    (0, a.jsxs)(f.C, {
                      children: [
                        (0, a.jsx)(m, { className: "w-3 h-3" }),
                        (0, a.jsx)("span", {
                          className: "ml-1",
                          children: t.location,
                        }),
                      ],
                    }),
                    (0, a.jsx)("span", {
                      className: "hidden md:block",
                      children: t.employment,
                    }),
                  ],
                }),
                (0, a.jsx)("div", {
                  className: (0, p.cn)(
                    (0, x.d)({ type: "default", size: "tiny" }),
                    "rounded-full"
                  ),
                  children: r ? "Submit resume" : "Apply for position",
                }),
              ],
            }),
          ],
        });
      };
      var $ = !0,
        ee = (e) => {
          let { jobs: t, placeholderJob: r, contributors: s } = e,
            { basePath: o } = (0, n.useRouter)(),
            d = "Careers | Supabase",
            m = "Help build software developers love";
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(c.PB, {
                title: d,
                description: m,
                openGraph: {
                  title: d,
                  description: m,
                  url: "https://supabase.com/careers",
                  images: [
                    {
                      url: "https://supabase.com".concat(
                        o,
                        "/images/career/careers_og.jpg"
                      ),
                    },
                  ],
                },
              }),
              (0, a.jsxs)(Y.default, {
                children: [
                  (0, a.jsxs)("header", {
                    className:
                      "container relative mx-auto px-6 pt-12 pb-8 lg:pt-24 lg:px-16 xl:px-20 text-center space-y-4",
                    children: [
                      (0, a.jsxs)("h1", {
                        className: "text-sm text-brand md:text-base",
                        children: [
                          (0, a.jsx)("span", {
                            className: "sr-only",
                            children: "Supabase ",
                          }),
                          "Careers",
                        ],
                      }),
                      (0, a.jsx)("h2", {
                        className:
                          "text-3xl md:text-4xl xl:text-5xl lg:max-w-2xl xl:max-w-3xl lg:mx-auto tracking-[-1.5px]",
                        children:
                          "We're building the best executor platform.",
                      }),
                      (0, a.jsx)("p", {
                        className:
                          "text-sm md:text-base text-foreground-lighter max-w-sm sm:max-w-md md:max-w-lg mx-auto",
                        children:
                          "Join our team of developers and moderators to help us take it to the next level and explore the possibilities together.",
                      }),
                      (0, a.jsx)(x.z, {
                        asChild: !0,
                        type: "primary",
                        className: "mt-4",
                        children: (0, a.jsx)(l(), {
                          href: "#positions",
                          children: "Open positions",
                        }),
                      }),
                    ],
                  }),
                  (0, a.jsx)(K.default, {
                    className: "!pt-8",
                    children: (0, a.jsx)("div", {
                      className:
                        "flex flex-wrap md:flex-nowrap -mt-6 md:mt-0 w-fit md:w-full mx-auto md:flex md:items-start justify-around lg:w-full lg:max-w-5xl",
                      children: q.S9.map((e, t) =>
                        (0, a.jsxs)(
                          "div",
                          {
                            className:
                              "border-t-[1px] mt-6 mx-2 md:mx-2 md:mt-0 md:border-0 border-brand w-[134px] md:max-w-none",
                            children: [
                              (0, a.jsx)("div", {
                                className:
                                  "hidden md:block border-t-[1px] lg:border-t-2 border-brand w-[60px] lg:w-[100px]",
                              }),
                              (0, a.jsx)("h2", {
                                className:
                                  "text-3xl lg:text-4xl pt-3 tracking-[-1.5px]",
                                children: e.number,
                              }),
                              (0, a.jsx)(g.D, {
                                className:
                                  "text-foreground-light text-sm lg:text-base",
                                children: e.text,
                              }),
                            ],
                          },
                          t
                        )
                      ),
                    }),
                  }),
                  (0, a.jsx)("div", {
                    className:
                      "py-[1.25px] bg-gradient-to-r from-background via-border to-background",
                    children: (0, a.jsxs)("div", {
                      className: "bg-alternative overflow-clip",
                      children: [
                        (0, a.jsxs)(K.default, {
                          className:
                            "md:!pt-16 md:grid md:max-h-[500px] grid-cols-1 md:grid-cols-5 md:gap-8",
                          children: [
                            (0, a.jsx)("div", {
                              className:
                                " relative md:col-span-2 aspect-square w-[calc(100%+100px)] md:w-[calc(100%+450px)] xl:w-[calc(100%+200px)] -mb-[160px] md:mb-0 -top-[160px] md:-top-[200px] xl:-top-[210px] -left-[100px] md:-left-[450px] xl:-left-[200px] ",
                              children: (0, a.jsx)(V, {}),
                            }),
                            (0, a.jsxs)("div", {
                              className: "relative md:col-span-3",
                              children: [
                                (0, a.jsx)("h2", {
                                  className:
                                    "text-2xl sm:text-3xl xl:text-4xl max-w-[300px] md:max-w-xs tracking-[-1.5px]",
                                  children: "We work together, wherever we are",
                                }),
                                (0, a.jsx)("p", {
                                  className:
                                    "text-foreground-light mt-4 text-xs sm:text-sm md:text-base md:w-full",
                                  children:
                                    "Working in a globally distributed team is rewarding but has its challenges. We are across many different timezones, so we use tools like Discord to stay connected to our team, and our community.",
                                }),
                                (0, a.jsxs)("div", {
                                  className:
                                    "max-w-[300px] sm:max-w-md md:max-w-md mt-20",
                                  children: [
                                    (0, a.jsx)("div", {
                                      className:
                                        "border-t-2 border-brand w-4/12",
                                    }),
                                    (0, a.jsx)("h2", {
                                      className:
                                        "text-2xl sm:text-3xl md:text-4xl pt-2 tracking-[-1.5px]",
                                      children:
                                        "We firmly believe in the potential of serverside executors and their ability to make a strong comeback through collaborative innovation.",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                       
                        (0, a.jsxs)(K.default, {
                          children: [
                            (0, a.jsx)("h2", {
                              className:
                                "text-2xl sm:text-3xl xl:text-4xl tracking-[-1.5px]",
                              children: "Human powered",
                            }),
                            (0, a.jsx)("p", {
                              className:
                                "text-foreground-lighter text-xs sm:text-sm lg:text-base pt-3 sm:w-3/5 lg:max-w-sm",
                              children:
                                "As a completely remote and asynchronous team, we focus on these five traits to keep our team effective:",
                            }),
                            (0, a.jsx)("div", {
                              className:
                                "grid pt-10 gap-8 grid-cols-2 md:grid-cols-3 lg:gap-16 lg:grid-cols-5",
                              children: q.X9.map((e, t) =>
                                (0, a.jsx)(
                                  "div",
                                  {
                                    className: "flex flex-col gap-3",
                                    children: (0, a.jsxs)("div", {
                                      children: [
                                        (0, a.jsx)("h2", {
                                          className: "text-base",
                                          children: e.title,
                                        }),
                                        (0, a.jsx)("p", {
                                          className:
                                            "text-foreground-light text-xs lg:text-sm",
                                          children: e.text,
                                        }),
                                      ],
                                    }),
                                  },
                                  t
                                )
                              ),
                            }),
                          ],
                        }),
                        
                      ],
                    }),
                  }),
                  (0, a.jsx)(K.default, {
                    children: (0, a.jsxs)("div", {
                      className:
                        "xl:flex lg:items-start xl:gap-10 justify-between",
                      children: [
                        (0, a.jsx)("div", {
                          className: "xl:min-w-[300px] xl:max-w-[400px]",
                          children: (0, a.jsx)("h2", {
                            className:
                              "text-2xl sm:text-3xl xl:text-4xl max-w-[280px] sm:max-w-xs xl:max-w-none tracking-[-1.5px]",
                            children: "Great people deserve great benefits",
                          }),
                        }),
                        (0, a.jsx)("div", {
                          className:
                            "mt-12 xl:mt-0 space-y-6 lg:space-y-0 sm:w-fit sm:mx-auto lg:grid lg:grid-cols-2 lg:gap-16",
                          children: q.bn.map((e, t) =>
                            (0, a.jsx)(
                              "div",
                              {
                                className:
                                  "h-full flex items-start space-x-6 w-full",
                                children: (0, a.jsxs)("div", {
                                  className: "h-fit text-sm lg:text-base",
                                  children: [
                                    (0, a.jsx)("h2", {
                                      className: "text-sm",
                                      children: e.title,
                                    }),
                                    (0, a.jsx)(g.D, {
                                      className: "prose pt-1 text-sm",
                                      children: e.text,
                                    }),
                                  ],
                                }),
                              },
                              t
                            )
                          ),
                        }),
                      ],
                    }),
                  }),
                  (0, a.jsxs)(K.default, {
                    children: [
                      (0, a.jsxs)("div", {
                        className:
                          "text-center sm:max-w-md md:w-3/4 lg:max-w-lg xl:max-w-2xl mx-auto",
                        children: [
                          (0, a.jsx)("h2", {
                            className:
                              "text-2xl sm:text-3xl xl:text-4xl tracking-[-1.5px]",
                            children: "How we hire",
                          }),
                          (0, a.jsx)("p", {
                            className:
                              "text-xs sm:text-sm lg:text-base text-foreground-light pt-3",
                            children:
                              "The entire process is fully remote, and all communication happens through Discord. The interviews are conducted via voice chat, without video, and typically last between 20-45 minutes. We know you're evaluating us too, so feel free to ask any questions. We're happy to provide answers.",
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className:
                          "mt-16 md:ml-36 lg:flex lg:items-start lg:w-fit lg:mx-auto",
                        children: [
                          q.rO.map((e, t) =>
                            (0, a.jsxs)(
                              "div",
                              {
                                className:
                                  "flex lg:block items-start space-x-6 lg:space-x-0 lg:w-full",
                                children: [
                                  (0, a.jsxs)("div", {
                                    className: "lg:flex items-center",
                                    children: [
                                      (0, a.jsx)("h3", {
                                        className:
                                          "bg-brand-400 border-[1px] border-brand-300 text-brand-600 text-md text-center w-[44px] px-2 py-1.5 rounded-md",
                                        children: t + 1,
                                      }),
                                      (0, a.jsx)("div", {
                                        className:
                                          "h-[100px] w-[1px] sm:h-[100px] mx-auto lg:h-[1px] lg:w-full bg-brand-500 lg:pr-6",
                                      }),
                                    ],
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: "lg:mt-6",
                                    children: [
                                      (0, a.jsx)("h2", {
                                        className:
                                          "sm:text-lg max-w-[75%] xl:max-w-none xl:w-11/12 lg:max-w-none",
                                        children: e.title,
                                      }),
                                      (0, a.jsx)("p", {
                                        className:
                                          "text-foreground-light text-xs sm:text-sm mt-1 md:w-3/4 lg:w-11/12",
                                        children: e.text,
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              t + 1
                            )
                          ),
                          (0, a.jsx)("h3", {
                            className:
                              "bg-brand-400 border-[1px] border-brand-300 text-brand-600 text-xl w-[44px] lg:min-w-[40px] min-h-[40px] px-2 py-1 rounded-md grid justify-items-center items-center",
                            children: (0, a.jsx)(u.Z, {}),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsx)(h.Z, {}),
                  (0, a.jsx)("div", {
                    id: "positions",
                    className: "max-w-6xl mx-auto",
                    children: (0, a.jsxs)(K.default, {
                      children: [
                        (0, a.jsx)("h2", {
                          className:
                            "text-xl sm:text-3xl xl:text-3xl tracking-[-1.5px] mb-3",
                          children: "Open positions",
                        }),
                        (0, a.jsxs)("p", {
                          className: "max-w-xl text-foreground-lighter",
                          children: [
                            "Want to build the best developer platform?",
                            (0, a.jsx)("br", {}),
                            " We’d love to talk to you.",
                          ],
                        }),
                        (0, a.jsx)("div", {
                          className: "mt-10 flex flex-col gap-4",
                          children: Object.entries(t).map((e) => {
                            let [t, r] = e;
                            return (0, a.jsxs)(
                              "div",
                              {
                                children: [
                                  (0, a.jsx)("h4", {
                                    className:
                                      "text-foreground-lighter text-sm",
                                    children: t,
                                  }),
                                  (0, a.jsx)("div", {
                                    className: "mt-2 -space-y-px",
                                    children: r
                                      .filter((e) => !J(e))
                                      .map((e) =>
                                        (0, a.jsx)(Z, { job: e }, e.id)
                                      ),
                                  }),
                                ],
                              },
                              t
                            );
                          }),
                        }),
                        r &&
                          (0, a.jsx)("div", {
                            className:
                              "pt-4 mt-4 border-t border-muted -space-y-px",
                            children: (0, a.jsx)(Z, { job: r }),
                          }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          });
        };
    },
    42380: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return u;
        },
      });
      var a = r(52322),
        s = r(7560),
        i = r(2784),
        o = r(57915);
      let l = "horizontal",
        n = ["horizontal", "vertical"],
        c = (0, i.forwardRef)((e, t) => {
          let { decorative: r, orientation: a = l, ...n } = e,
            c = d(a) ? a : l;
          return (0, i.createElement)(
            o.WV.div,
            (0, s.Z)(
              { "data-orientation": c },
              r
                ? { role: "none" }
                : {
                    "aria-orientation": "vertical" === c ? c : void 0,
                    role: "separator",
                  },
              n,
              { ref: t }
            )
          );
        });
      function d(e) {
        return n.includes(e);
      }
      c.propTypes = {
        orientation(e, t, r) {
          let a = e[t],
            s = String(a);
          return a && !d(a)
            ? Error(`Invalid prop \`orientation\` of value \`${s}\` supplied to \`${r}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${l}\`.`)
            : null;
        },
      };
      var m = r(44382);
      let u = i.forwardRef((e, t) => {
        let {
          className: r,
          orientation: s = "horizontal",
          decorative: i = !0,
          ...o
        } = e;
        return (0, a.jsx)(c, {
          ref: t,
          decorative: i,
          orientation: s,
          className: (0, m.cn)(
            "shrink-0 bg-border-muted",
            "horizontal" === s ? "h-[1px] w-full" : "h-full w-[1px]",
            r
          ),
          ...o,
        });
      });
      u.displayName = c.displayName;
    },
    60426: function (e) {
      e.exports = {
        "contributors-bg-circle": "career_contributors-bg-circle__Gfw_N",
        "contributors-0": "career_contributors-0__IgH4x",
        "contributors-1": "career_contributors-1__w5MOX",
        "contributors-2": "career_contributors-2__ZBxEN",
        "contributors-3": "career_contributors-3__MBkFP",
        "contributors-4": "career_contributors-4__jFVUO",
        "contributors-5": "career_contributors-5__5wmdq",
        "contributors-6": "career_contributors-6__Uga54",
        "contributors-7": "career_contributors-7__jAC4J",
        "contributors-8": "career_contributors-8__l9UCH",
        "contributors-9": "career_contributors-9__pmfkn",
        "contributors-10": "career_contributors-10__MvGUu",
        "contributors-11": "career_contributors-11__v_jty",
        "contributors-12": "career_contributors-12__hEBEY",
        "contributors-13": "career_contributors-13__7pcyq",
        "contributors-14": "career_contributors-14__aK9ly",
        "contributors-15": "career_contributors-15__9izEK",
        "contributors-16": "career_contributors-16__Uspfi",
        "contributors-17": "career_contributors-17__WL5PL",
        "contributors-18": "career_contributors-18__DWfxE",
        "contributors-19": "career_contributors-19__ePOIW",
      };
    },
    68262: function (e, t, r) {
      "use strict";
      var a = r(23586);
      function s() {}
      function i() {}
      (i.resetWarningCache = s),
        (e.exports = function () {
          function e(e, t, r, s, i, o) {
            if (o !== a) {
              var l = Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
              );
              throw ((l.name = "Invariant Violation"), l);
            }
          }
          function t() {
            return e;
          }
          e.isRequired = e;
          var r = {
            array: e,
            bigint: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: i,
            resetWarningCache: s,
          };
          return (r.PropTypes = r), r;
        });
    },
    13980: function (e, t, r) {
      e.exports = r(68262)();
    },
    23586: function (e) {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
  },
  function (e) {
    e.O(
      0,
      [5126, 2787, 2251, 4697, 977, 4525, 8147, 7478, 6999, 2888, 9774, 179],
      function () {
        return e((e.s = 85506));
      }
    ),
      (_N_E = e.O());
  },
]);
