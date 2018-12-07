<template>
   <div>
      <div @touchmove.stop.prevent @click="close" class="sidebar-mask" :class="{show:sideBarMask,hide:!sideBarMaskHide}">
      </div>
      <div @touchmove.stop.prevent class="sidebar" :class="{open:sideBarShow}">
          <div @click="routerToLogin" class="actives">
              <div>{{userInfo.phone}}</div>
          </div>
         <div @click="routerToOrderList" class="actives">
              <div>
                  <img class="sidebar-img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiBAMAAADIaRbxAAAAKlBMVEUAAAA2oeo3oe42oepPu/83ouo2oOo3oOo2oeo3oes3oeo3oes9qvM2oOmhJGjdAAAADXRSTlMAgC73BYnv0MO0kFgKGcH4ggAAAGFJREFUKM9jwAa0BBEgCCTAdBcZKABFWFFEFgBFGFFEBGguchHsPFlMkSFvlywhEQS4vAFd5JoDmsjlEgY0EfMDaCKXexjQRCyApqDE8rUpQC5KSsh0gKYWVVhS2cCAHQAAn6E2p8JFU+sAAAAASUVORK5CYII=" alt="">
              </div>
              <div>我的订单</div>
          </div>
          <div @click="routerToCostDes" class="actives">
              <div>
                  <img class="sidebar-img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAMAAAANmfvwAAAAaVBMVEUAAAA5o+w2oOo1oeo2oOo2oeo2oeo2o+s2oeo3ouo4oew4ou45ou02oeo3ous4oes4pew2oOo2oeo2oepJqv9mzP82oek1oOo2oeg3oew2oeo4oeo3oOk3oeo7p+s2oOnq9fz///9zve8PgVIaAAAAH3RSTlMANfP08Pb7XaJfPC0pwkoyI9m2rgoF7M3LkIh3dGIaEJ4maAAAALtJREFUOMu10jcWg0AMRVGYZDA5OdsC9r9I4+8CGIE6Xn3PV6PgkIomy+ro8YrzsGy7LREaR7+cMkbZS7IhFK078w3yqjppA1kmWPojCWQKJhjJd8TY9yMh9Z6FpkX9MPSE3NMTnNDdu8IPUcQEq4ZoSSgDiZxAKpCbIBz9VwRhU5B0/5CZBMplgWK9LfB0klEQ3PA/mI31N8LA77Q2ehLc6OUGXl/a0RCCgZCNhdgz2k2kDKSS6NpM4oC+5CdBl0w7LcIAAAAASUVORK5CYII=" alt="">
              </div>
              <div>资费说明</div>
          </div>
          <div @click="routerToUserGuide" class="actives">
                <div>
                    <img class="sidebar-img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAMAAAANmfvwAAAASFBMVEUAAAA2oeo/t/s2oOo3oeo3o+o3oek2oeo3oOo2ouo3ouo3oOo3oeo3oes3ouo3oek2oeo3oes3ouw9pe04ous5pu84ous2oOmHS/WIAAAAF3RSTlMA9QfjhVPp2sB1O4yolEnMn31bFzEfZYiAap8AAADmSURBVDjLrZPZDoQgDEUpssq46/D/fzrDEmnBhBfvg7HkpNDblr2v0RkNoI0b2aO4Vf6Wsrwl5OCJBlkTwjcSlPj4B306OfxA8sgHYJ//X3nXMtQAbJwtAeQZsTWxHox945/NiKKAOUPmdKiypwTQkhSQfHYIgOzqBfnAxdBgZK58MjHUhZgmmOndOiJQchwsMUs5QkguMTI7uplepDmLDG66Rs8tdq/EpFQ0ifgGGHHEujMEe9WvETdgDfTiqdTdxlTw1Q6WxcOwcQHt1HA8UkL5VrIazFaiP979JemvWn9hu2v/un64QzOl0D0zLwAAAABJRU5ErkJggg==" alt="">
                </div>
                <div>用户指南</div>
          </div>
          <div @click="downLoad" class="actives">
                <div>
                    <img class="sidebar-img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAAAXNSR0IArs4c6QAAApNJREFUWAntV0FrE0EUnrfZhmw0IcG6IApVEKQHDyK0tS0SqwERbKkHsVrEn+JfsRXbixQ9eGlpF6Gt9aAHDx4UakF7SCsNKTSxye74XnDC7jDZbHcTTzuXmffevO/79u2bzYSxeHgrAF4zuDU2v3el7jiTGmOn1FlaRdP11xtP8jvquNcbSsjI3P4gd+xPnLGUF062oAx64urW7JmfckS28YHCDOdBZxGEy3Os4dwLwhBKCOfsdBDwppS2r86LEEqIF6I7VixErmNckbgicgVkW5cdwh57s5dxynDHZs554WvNnF9vrTssAPj40ItSXd6WYNovLcdX1qfOHlJM+YkvvKr0V+u1Tc75ZRmgmzYAfDf6Ujesx9l95ampNf5M91oEPRBxEBetlUKwTkcU/C/jH5dSyN3Z/gUUs9RzIcjR5EIipZDnAM6AYT7Cd/iuV2IImziIiziUzSrIC2s8Vd0pvcWf/KLwdWNG0mVjwJy0bkFN4CkrIoK0UUubU8DAEr6oM2ERplsEYfoKoQ2bD6FqpNl9BFgnO8ogDMIiTBnH99W4Nw+//J1ldmMZL0VDbn/QNQD7yBJ6Ea+NFVVOYCGUXFg6yB1V6qv4AbimAmvrA/iczvZNWNP5crs9HV+NO5GAMixVRPVf3H6/Ne2lHD8RlH+iigjC0blD0+ZVC7+Mg8KnmvGIfk2AUdh4mimp4m7fiSoiEgk4qcFtbL5vwifPFKM9QURQbqiKCFJs4AvYwO+xgS8JXxMU2DY25s0g/2dEXiQhBDKycHCRHx+vCjF4OrYhmZz4MJP/IUiCzJGFEAkdbW47M8AZZ7q22O6I+gnyFYIXml08quf8AMLGsId2t56ZrUuXb7M2nzAsU5wXsQJ/Ac1Hvl1KW552AAAAAElFTkSuQmCC" alt="">
                </div>
                <div>下载</div>

          </div>
          <div class="actives call">
              <a href="tel:4006785966">
                  <div>
                    <div>
                         <img class="sidebar-img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAMAAAAPzWOAAAAAjVBMVEUAAAA2oeo2oek7pO5Yw/83oOo2oeo3oes5o+w9p/I8qu1BsP83oeo2oOo2oeo3oeo3oeo6oe44o+43oeo2oeo2oeo2oeo3oOo3oes4oeuA//82oek2oeo2oeo2oOo2oeo2oeo3oeo3o+s4pOw9pu02oeo2oeo2oeo3ous3oeo4ouk3oeo4ous5ous2oOnAsQtDAAAALnRSTlMA/PgYBOfeaDMTDQjz79W4fywh8cqxq5BXTALt4trPv6CGPiccxXlfUZWOckY5D8HAFQAAAaRJREFUWMPt18d2wkAMBdBxT1zB2PTeEtr7/89LTjiBIDvIUsiOu2TxzqCZkTzmiRceik6W/yliGHTwafRi9JwNzpKVOuPFw7fJqzajg6vZUJXRTvDTVpMRpbhhaYrbA5G68o2xQbXEIQtU2OJ93qCqlIYkqLF8REghDElR5ygLyVAnk4XsUceSXaEjauWyU2+jRuI+oCg9I9NHVSztKq6Hf7k9o1Acsq6Udv6IjtLS9PqYhHSNQoue17Zm+tENKlxFSr9aFYUSxLsiZE1rG2vKEoDwckVKF4TvyENexyBSxWxfWpUUxVq2oCZrecoc1Fg+3KMCVDy4fJANdmWryb47Y1DW4usGuG+T89VsS76ZrqZL4wT+JbQX8ltko+r2N4+/EQMLrDm7mDfw/BN/i3jWgV2LBV434lpUk5TC4aprg+dzveI0Am/MrSWfgJex7WUGVszP+R44qeG9JyA0gzKf4q5+swazuHdiRlHT99SdxQSmKXdro95mKBmOc/KfdGNpVdZkrOTPxB3pmzPVozUMZtfieMHQKIWDfTb1bL/sR+bpNx83BOm1RKttewAAAABJRU5ErkJggg==" alt="">
                    </div>
                    <div>
                        <p >联系客服</p>
                        <p>8:00 - 20:00</p>
                    </div>
                  </div>  
              </a>   
          </div>
      </div>
   </div>
</template>

<script>
export default {
  mounted() {},
  data() {
    return {
      sideBarMaskHide: false,
      sideBarMask: false,
      sideBarShow: false
    };
  },
  computed: {
    userInfo() {
      return this.$store.state.userInfo;
    }
  },
  methods: {
    open() {
      this.sideBarMask = true;
      this.sideBarMaskHide = true;
      setTimeout(() => {
        this.sideBarShow = true;
      }, 10);
    },
    close() {
      this.sideBarShow = false;
      setTimeout(() => {
        this.sideBarMask = false;
        setTimeout(() => {
          this.sideBarMaskHide = false;
        }, 300);
      }, 100);
    },
    routerToLogin() {
      if (!this.userInfo.token) {
        this.$router.push({ name: "login" });
      }
    },
    routerToOrderList() {
        console.log('我的订单')
      if (this.userInfo.token) {
        this.$router.push({ name: "orderList" });
      } else {
        this.$router.push({ name: "login" });
      }
    },
    routerToCostDes() {
      this.$router.push({ name: "getPriceInfo" });
    },
    routerToUserGuide() {
      this.$router.push({ name: "userGuide" });
    },

    downLoad() {
      window.location.href = "https://www.lanxiniu.com/common/downMhApp";
    }
  }
};
</script>
<style scoped lang="less">
.sidebar {
  position: fixed;
  top: 44px;
  max-height: 100%;
  height: 100%;
  max-width: 80%;
  background-color: #efefef;
  min-width: 45px;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 9999;
  -webkit-overflow-scrolling: touch;
  will-change: transform;
  width: 3.2rem;
  background-image: url(data:image/png;base64,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);
  background-size: 3.2rem 100%;
  transition: transform 233ms cubic-bezier(0, 0, 0.21, 1);
  transform: translateX(-100%);
}
.sidebar.open {
  left: 0;
  transform: translateX(0);
}

.sidebar-mask {
  position: fixed;
  top: 44px;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: none;
  background-color: rgba(0, 0, 0, 0);
  z-index: 9998;
  transition: background-color 0.5s 0.05s;
}
.sidebar-mask.hide {
  display: none;
}
.sidebar-mask.show {
  display: block;
  background-color: rgba(0, 0, 0, 0.2);
}
.sidebar {
  color: #333333;
  > div {
    display: flex;
    align-items: center;
    padding-left: 0.4425rem;
    font-size: 0.28rem;
    > div {
      padding: 10px 0;
    }
    > div:last-child {
      padding-left: 10px;
      position: relative;
      top: -0.03rem;
    }
  }
  > div:first-child {
    padding: 0.8rem 0;
    padding-left: 0.34rem;
  }
}

.user_img {
  height: 0.56rem;
  width: 0.56rem;
}

.sidebar-img {
  height: 0.34rem;
  width: 0.34rem;
}

.call {
  position: fixed;
  bottom: 1rem;
  font-size: 0.28rem;
  width: 100%;
  a {
    display: block;
    width: 100%;
    color: #36a0e9 !important;
    > div {
      display: flex;
      align-items: center;
      font-size: 0.28rem;
      > div {
        padding: 10px 0;
      }
      > div:last-child {
           text-align: left;
           padding-left: 10px;
           position: relative;
           top: -0.03rem;
      }
    }
  }

}
</style>
