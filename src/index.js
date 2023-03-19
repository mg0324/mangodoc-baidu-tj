import install from './baidu'

if (!window.$mangodoc) {
  window.$mangodoc = {}
}

window.$mangodoc.plugins = (window.$mangodoc.plugins || []).concat(install)