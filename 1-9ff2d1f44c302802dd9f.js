;(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    144: function(e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'graphql', function() {
          return f
        }),
        n.d(t, 'StaticQueryContext', function() {
          return m
        }),
        n.d(t, 'StaticQuery', function() {
          return g
        })
      var a = n(0),
        r = n.n(a),
        i = n(4),
        o = n.n(i),
        c = n(143),
        s = n.n(c)
      n.d(t, 'Link', function() {
        return s.a
      }),
        n.d(t, 'withPrefix', function() {
          return c.withPrefix
        }),
        n.d(t, 'navigate', function() {
          return c.navigate
        }),
        n.d(t, 'push', function() {
          return c.push
        }),
        n.d(t, 'replace', function() {
          return c.replace
        }),
        n.d(t, 'navigateTo', function() {
          return c.navigateTo
        })
      var u = n(35)
      n.d(t, 'waitForRouteChange', function() {
        return u.c
      })
      var l = n(151),
        d = n.n(l)
      n.d(t, 'PageRenderer', function() {
        return d.a
      })
      var p = n(48)
      n.d(t, 'parsePath', function() {
        return p.a
      })
      var m = r.a.createContext({}),
        g = function(e) {
          return r.a.createElement(m.Consumer, null, function(t) {
            return e.data || (t[e.query] && t[e.query].data)
              ? (e.render || e.children)(e.data ? e.data.data : t[e.query].data)
              : r.a.createElement('div', null, 'Loading (StaticQuery)')
          })
        }
      function f() {
        throw new Error(
          'It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.'
        )
      }
      g.propTypes = {
        data: o.a.object,
        query: o.a.string.isRequired,
        render: o.a.func,
        children: o.a.func,
      }
    },
    145: function(e, t, n) {
      'use strict'
      var a = n(153),
        r = n(0),
        i = n.n(r),
        o = n(4),
        c = n.n(o),
        s = n(148),
        u = n.n(s),
        l = n(144),
        d = (n(146), n(50), n(7)),
        p = n.n(d),
        m = [
          { title: 'Home', link: '/' },
          { title: 'Projetos', link: '/projects' },
          { title: 'Stack', link: '/stack' },
          { title: 'Posts', link: '/posts' },
        ],
        g = (function(e) {
          function t(t) {
            var n
            return (
              ((n = e.call(this, t) || this).handleMenu = function() {
                n.setState(function(e) {
                  return { isMenuOpen: !e.isMenuOpen }
                })
              }),
              (n.closeMenu = function() {
                return n.setState({ isMenuOpen: !1 })
              }),
              (n.render = function() {
                var e = n.props.siteTitle,
                  t = n.state.isMenuOpen ? 'is-active' : ''
                return i.a.createElement(
                  'nav',
                  { className: 'navbar' },
                  i.a.createElement(
                    'div',
                    { className: 'container' },
                    i.a.createElement(
                      'div',
                      { className: 'navbar-brand' },
                      i.a.createElement(
                        l.Link,
                        {
                          className: 'navbar-item is-size-4',
                          to: '/',
                          onClick: n.closeMenu,
                        },
                        e
                      ),
                      i.a.createElement(
                        'button',
                        {
                          className: 'navbar-burger has-text-light ' + t,
                          type: 'button',
                          'aria-label': 'menu',
                          onClick: n.handleMenu,
                        },
                        i.a.createElement('span', { 'aria-hidden': 'true' }),
                        i.a.createElement('span', { 'aria-hidden': 'true' }),
                        i.a.createElement('span', { 'aria-hidden': 'true' })
                      )
                    ),
                    i.a.createElement(
                      'div',
                      { className: 'navbar-menu ' + t },
                      i.a.createElement(
                        'div',
                        { className: 'navbar-end' },
                        m.map(function(e) {
                          return i.a.createElement(
                            l.Link,
                            {
                              className: 'navbar-item is-size-5',
                              to: e.link,
                              key: e.title,
                              onClick: n.closeMenu,
                            },
                            e.title
                          )
                        })
                      )
                    )
                  )
                )
              }),
              (n.state = { isMenuOpen: !1 }),
              n
            )
          }
          return p()(t, e), t
        })(r.Component),
        f = (n(165), n(167)),
        h = n.n(f),
        v = function(e) {
          var t = e.children
          return i.a.createElement(l.StaticQuery, {
            query: '3067373562',
            render: function(e) {
              return i.a.createElement(
                i.a.Fragment,
                null,
                i.a.createElement(
                  u.a,
                  {
                    title: e.site.siteMetadata.title,
                    meta: [
                      {
                        name: 'description',
                        content:
                          'Desenvolvedor Front-end, criando apps e páginas Web',
                      },
                      {
                        name: 'keywords',
                        content:
                          'React, Node, Gatsby, Front-end, desenvolvedor, API',
                      },
                      { name: 'theme-color', content: '#303030' },
                      { property: 'og:url', content: e.site.siteMetadata.url },
                      { property: 'og:type', content: 'website' },
                      {
                        property: 'og:title',
                        content: e.site.siteMetadata.title,
                      },
                      {
                        property: 'og:description',
                        content:
                          'Desenvolvedor Front-end, criando apps e páginas Web',
                      },
                      {
                        property: 'og:image',
                        content: '' + e.site.siteMetadata.url + h.a,
                      },
                      {
                        property: 'og:image:alt',
                        content:
                          'Desenvolvedor Front-end, criando apps e páginas Web',
                      },
                      { property: 'og:image:type', content: 'image/jpg' },
                      { property: 'og:image:width', content: '1365' },
                      { property: 'og:image:height', content: '1365' },
                    ],
                  },
                  i.a.createElement('html', { lang: 'pt' })
                ),
                i.a.createElement(g, { siteTitle: e.site.siteMetadata.title }),
                i.a.createElement('div', null, t)
              )
            },
            data: a,
          })
        }
      v.propTypes = { children: c.a.node.isRequired }
      t.a = v
    },
    151: function(e, t, n) {
      var a
      e.exports = ((a = n(163)) && a.default) || a
    },
    153: function(e) {
      e.exports = {
        data: {
          site: {
            siteMetadata: {
              title: 'Luan Orlandi',
              url: 'https://luanorlandi.github.io/gatsby-course',
            },
          },
        },
      }
    },
    163: function(e, t, n) {
      'use strict'
      n.r(t)
      n(36)
      var a = n(0),
        r = n.n(a),
        i = n(4),
        o = n.n(i),
        c = n(71),
        s = n(1),
        u = function(e) {
          var t = e.location,
            n = s.default.getResourcesForPathnameSync(t.pathname)
          return r.a.createElement(
            c.a,
            Object.assign({ location: t, pageResources: n }, n.json)
          )
        }
      ;(u.propTypes = {
        location: o.a.shape({ pathname: o.a.string.isRequired }).isRequired,
      }),
        (t.default = u)
    },
    165: function(e, t, n) {},
    167: function(e, t, n) {
      e.exports =
        n.p + 'static/luanorlandi-7606c19d2c8b47776729b2bdec1fa9a7.jpg'
    },
  },
])
//# sourceMappingURL=1-9ff2d1f44c302802dd9f.js.map
