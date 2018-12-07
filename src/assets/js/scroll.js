/**
 * 滚动
 */
export default ({
  Scroll: function () {
    /**
     * 滚动类
     *
     * @class
     * @param {string} id 选择器
     * @param {Object} params 配置参数
     */
    function Scroll(id, params) {
      this.scroller = document.getElementById(id)
      this.childNode = this.scroller.childNodes[0]
      this.options = {
        step: true, // 是否开启步长模式
        defaultPlace: 0, // 默认列表位置
        callback: null
      }

      this.startPageY = 0
      this.startTime = 0
      this.endTime = 0
      this.offsetTop = 0 // 上一次滚动位置

      this.scrollerHeight = this.scroller.clientHeight // scroller高度
      this.childNodeHeight = this.childNode.clientHeight // scroller子元素的高度
      this.scrollHeight = this.childNodeHeight - this.scrollerHeight // 滚动高度

      let childNodes = this.childNode.childNodes
      this.stepLen = childNodes.length > 0 ? childNodes[0].clientHeight : 0 // 步长

      // 设置参数
      for (let i in params) {
        if (params.hasOwnProperty(i)) {
          this.options[i] = params[i]
        }
      }

      // 默认列表位置
      let defaultPlace = this.options.defaultPlace ? this.options.defaultPlace : 0
      this.scrollTo(0, defaultPlace)

      this.start()
      this.move()
      this.end()
    }

    Scroll.prototype = {
      constructor: Scroll,
      start: function () {
        let self = this
        self.scroller.addEventListener('touchstart', function (e) {
          e.stopPropagation()
          e.preventDefault()

          self.startTime = self.getTime()
          let touches = e.touches ? e.touches[0] : e
          self.startPageY = touches.pageY // 起始触摸点

          self.browserVendor('transition', 'none')
        }, false)
      },

      move: function () {
        let self = this
        self.scroller.addEventListener('touchmove', function (e) {
          e.stopPropagation()
          e.preventDefault()

          let timestamp = self.getTime()
          let touches = e.touches ? e.touches[0] : e

          // 滚动高度
          let diffPageY = touches.pageY - self.startPageY
          let movePageY = diffPageY + self.offsetTop

          // 最少移动10px
          if (timestamp - self.endTime > 300 && Math.abs(diffPageY) < 10) {
            return
          }

          // 超过边缘滚动有阻力
          if (movePageY > 0) {
            movePageY /= 3
          } else if (Math.abs(movePageY) > Math.abs(self.scrollHeight)) {
            movePageY = Math.abs(self.scrollHeight) - Math.abs(movePageY)
            movePageY = movePageY / 3 - self.scrollHeight
          }

          self.browserVendor('transform', 'translate(0, ' + movePageY + 'px)')
        }, false)
      },

      end: function () {
        let self = this
        self.scroller.addEventListener('touchend', function (e) {
          e.stopPropagation()
          e.preventDefault()

          self.endTime = self.getTime()
          let duration = self.endTime - self.startTime

          let touches = e.changedTouches ? e.changedTouches[0] : e
          let offsetHeight = touches.pageY - self.startPageY // 本次滚动偏移位置
          self.offsetTop += offsetHeight // 记录总偏移位置
          if ((self.offsetTop > 0) || (Math.abs(self.offsetTop) > Math.abs(self.scrollHeight))) {
            // 上边缘&下边缘
            self.browserVendor('transition', 'all 500ms')
          } else if (duration < 300) { // 惯性滚动
            let speed = Math.abs(offsetHeight) / duration // 惯性移动速度
            let moveTime = duration * speed * 20 // 惯性滚动时间(动画)
            moveTime = moveTime > 2000 ? 2000 : moveTime
            self.offsetTop += offsetHeight * speed * 10; // 惯性移动距离

            self.browserVendor('transitionProperty', 'all')
            self.browserVendor('transitionDuration', moveTime + 'ms')
            self.browserVendor('transitionTimingFunction', 'cubic-bezier(0.1, 0.57, 0.1, 1)')
          } else {
            self.browserVendor('transition', 'all 500ms')
          }

          if (self.offsetTop > 0) {
            self.offsetTop = 0
          } else if (Math.abs(self.offsetTop) > Math.abs(self.scrollHeight)) {
            self.offsetTop = -self.scrollHeight
          }

          // 步长模式
          if (self.options.step && self.stepLen > 0) {
            let nowEndY = self.offsetTop
            let h = Math.abs(nowEndY % self.stepLen) // 滚动多余不足step的高度
            let halfHeight = self.stepLen / 2 // step一半的高度

            // 超过行一半的高度，则滚动一行
            let moveY = (h >= halfHeight) ? (nowEndY - self.stepLen + h) : (nowEndY + h)

            let index = parseInt(Math.abs(moveY) / self.stepLen, 10)
            self.options.callback({
              index: index,
              node: self.childNode.childNodes
            })
            self.offsetTop = moveY
          }

          self.browserVendor('transform', 'translate(0, ' + self.offsetTop + 'px)')
        }, false)
      },

      // 滚动到指定位置
      scrollTo: function (x, y, time) {
        let self = this

        if (time && time > 0) {
          self.browserVendor('transitionProperty', 'all')
          self.browserVendor('transitionDuration', time + 'ms')
          self.browserVendor('transitionTimingFunction', 'cubic-bezier(0.1, 0.57, 0.1, 1)')
        } else {
          self.browserVendor('transition', 'none')
        }

        y = -y
        self.offsetTop = y
        self.browserVendor('transform', 'translate(0, ' + y + 'px)')
      },

      // 刷新
      refresh: function () {
        this.childNode = this.scroller.childNodes[0]
        this.startPageY = 0
        this.startTime = 0
        this.endTime = 0
        this.offsetTop = 0

        this.scrollerHeight = this.scroller.clientHeight // scroller高度
        this.childNodeHeight = this.childNode.clientHeight // scroller子元素的高度
        this.scrollHeight = this.childNodeHeight - this.scrollerHeight // 滚动高度

        let childNodes = this.childNode.childNodes
        this.stepLen = childNodes.length > 0 ? childNodes[0].clientHeight : 0 // 步长

        this.scrollTo(0, 0, 500)
      },

      // 浏览器兼容
      browserVendor: function (styleStr, value) {
        let self = this
        let vendors = ['t', 'WebkitT', 'MozT', 'msT', 'OT']
        let styleObj
        let len = vendors.length
        let elementStyle = self.childNode.style

        for (let i = 0; i < len; i++) {
          styleObj = vendors[i] + styleStr.substr(1)
          if (styleObj in elementStyle) {
            elementStyle[styleObj] = value
          }
        }
      },

      // 获取当前时间
      getTime: function () {
        return parseInt(new Date().getTime(), 10)
      }
    }
    return Scroll
  }
})
