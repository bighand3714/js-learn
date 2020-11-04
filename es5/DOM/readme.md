# DOM
## 概述
* DOM模型：结构化文档（HTML/XML）解析为DOM Tree
* 节点node：Document, DocumentType, Element, Attr, Text, Comment, DocumentFragment
* 节点树document：parentNode, childNodes, sibling
* Node 节点
* NodeList 接口
* HTMLCollection 接口
* ParentNode 接口，ChildNode 接口
* Document 节点
* Element 节点
* Mutation Observer API

## Node 接口
* 属性
  * Node.prototype.nodeType
  * Node.prototype.nodeName
  * Node.prototype.nodeValue
  * Node.prototype.textContent
  * Node.prototype.baseURI
  * Node.prototype.ownerDocument
  * Node.prototype.nextSibling
  * Node.prototype.previousSibling
  * Node.prototype.parentNode
  * Node.prototype.parentElement
  * Node.prototype.firstChild，Node.prototype.lastChild
  * Node.prototype.childNodes
  * Node.prototype.isConnected
* 方法
  * Node.prototype.appendChild()
  * Node.prototype.hasChildNodes()
  * Node.prototype.cloneNode()
  * Node.prototype.insertBefore()
  * Node.prototype.removeChild()
  * Node.prototype.replaceChild()
  * Node.prototype.contains()
  * Node.prototype.compareDocumentPosition()
  * Node.prototype.isEqualNode()，Node.prototype.isSameNode()
  * Node.prototype.normalize()
  * Node.prototype.getRootNode()

## NodeList 接口，HTMLCollection 接口
* NodeList接口：数组，成员：节点
* NodeList.prototype.length
* .forEach()
* .item()
* .keys(), .values(), .entries()
* HTMLCollection.prototype.length
* .item()
* .namedItem()

## ParentNode 接口，ChildNode 接口
* ParentNode.children
* ParentNode.firstElementChild
* ParentNode.lastElementChild
* ParentNode.childElementCount
* ParentNode.append()，ParentNode.prepend()

* ChildNode.remove()
* ChildNode.before()，ChildNode.after()
* ChildNode.replaceWith()

## Document 节点
* 属性
  * 快捷方式属性
    * document.defaultView
    * document.doctype
    * document.documentElement
    * document.body，document.head
    * document.scrollingElement
    * document.activeElement
    * document.fullscreenElement
  * 节点集合属性
    * document.links
    * document.forms
    * document.images
    * document.embeds，document.plugins
    * document.scripts
    * document.styleSheets
  * 文档静态信息属性
    * document.documentURI，document.URL
    * document.domain
    * document.location
    * document.lastModified
    * document.title
    * document.characterSet
    * document.referrer
    * document.dir
    * document.compatMode
  * 文档状态属性
    * document.hidden
    * document.visibilityState
    * document.readyState
  * document.cookie
  * document.designMode
  * document.currentScript
  * document.implementation
* 方法
  * document.open()，document.close()
  * document.write()，document.writeln()
  * document.querySelector()，document.querySelectorAll()
  * document.getElementsByTagName()
  * document.getElementsByClassName()
  * document.getElementsByName()
  * document.getElementById()
  * document.elementFromPoint()，document.elementsFromPoint()
  * document.createElement()
  * document.createTextNode()
  * document.createAttribute()
  * document.createComment()
  * document.createEvent()
  * document.addEventListener()，document.removeEventListener()，document.dispatchEvent()
  * document.hasFocus()
  * document.adoptNode()，document.importNode()
  * document.createNodeIterator()
  * document.createTreeWalker()
  * document.execCommand()，document.queryCommandSupported()，document.queryCommandEnabled()
  * document.getSelection()

## Element 节点
* 实例属性
  * 元素特性的相关属性
    * Element.id
    * Element.tagName
    * Element.dir
    * Element.accessKey
    * Element.draggable
    * Element.lang
    * Element.tabIndex
    * Element.title
  * 元素状态的相关属性
    * Element.hidden
    * Element.contentEditable，Element.isContentEditable
  * Element.attributes
  * Element.className，Element.classList
  * Element.dataset
  * Element.innerHTML
  * Element.outerHTML
  * Element.clientHeight，Element.clientWidth
  * Element.clientLeft，Element.clientTop
  * Element.scrollHeight，Element.scrollWidth
  * Element.scrollLeft，Element.scrollTop
  * Element.offsetParent
  * Element.offsetHeight，Element.offsetWidth
  * Element.offsetLeft，Element.offsetTop
  * Element.style
  * Element.children，Element.childElementCount
  * Element.firstElementChild，Element.lastElementChild
  * Element.nextElementSibling，Element.previousElementSibling
* 实例方法
  * 属性相关方法
    * Element.querySelector()
    * Element.querySelectorAll()
    * Element.getElementsByClassName()
    * Element.getElementsByTagName()
    * Element.closest()
    * Element.matches()
    * Element.getAttribute()
    * Element.getAttributeNames()
    * Element.setAttribute()
    * Element.hasAttribute()
    * Element.hasAttributes()
    * Element.removeAttribute()
  * 事件相关方法
    * Element.scrollIntoView()
    * Element.getBoundingClientRect()
    * Element.getClientRects()
    * Element.insertAdjacentElement()
    * Element.insertAdjacentHTML()，Element.insertAdjacentText()
    * Element.remove()
    * Element.focus()，Element.blur()
    * Element.click()

## Text 节点，DocumentFragment 节点
* Text 节点的属性
  * data
  * wholeText
  * length
  * nextElementSibling，previousElementSibling
* Text 节点的方法
  * appendData()，deleteData()，insertData()，replaceData()，subStringData()
  * remove()
  * splitText()

## CSS 操作
CSSStyleDeclaration 实例属性
  CSSStyleDeclaration.cssText
  CSSStyleDeclaration.length
  CSSStyleDeclaration.parentRule
CSSStyleDeclaration 实例方法
  CSSStyleDeclaration.getPropertyPriority()
  CSSStyleDeclaration.getPropertyValue()
  CSSStyleDeclaration.item()
  CSSStyleDeclaration.removeProperty()
  CSSStyleDeclaration.setProperty()
CSS 模块的侦测
CSS 对象
  CSS.escape()
  CSS.supports()
  window.getComputedStyle()
CSS 伪元素
  StyleSheet 接口
实例属性
  StyleSheet.disabled
  Stylesheet.href
  StyleSheet.media
  StyleSheet.title
  StyleSheet.type
  StyleSheet.parentStyleSheet
  StyleSheet.ownerNode
  CSSStyleSheet.cssRules
  CSSStyleSheet.ownerRule
实例方法
  CSSStyleSheet.insertRule()
  CSSStyleSheet.deleteRule()
  CSSRuleList 接口
  CSSRule 接口
概述
  CSSRule 实例的属性
  CSSRule.cssText
  CSSRule.parentStyleSheet
  CSSRule.parentRule
  CSSRule.type
  CSSStyleRule 接口
  CSSStyleRule.selectorText
  CSSStyleRule.style
  CSSMediaRule 接口
window.matchMedia()
  MediaQueryList 接口的实例属性
    MediaQueryList.media
    MediaQueryList.matches
    MediaQueryList.onchange

## Mutation Observer API
MutationObserver 的实例方法
  observe()
  disconnect()，takeRecords（）