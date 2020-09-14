<template>
  <div  class='flip-item' :class="{play: isPlay}">
    <ul class="flip">
      <li
        class="item"
        v-for="(item, key) in total + 1"
        :class="{active: current === key, before: key === before}"
        :key="item"
      >
        <div class="up">
          <div class="shadow"></div>
          <div class="inn">{{key}}</div>
        </div>
        <div class="down">
          <div class="shadow"></div>
          <div class="inn">{{key}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    total: {
      type: Number,
      default: 9,
    },
    current: {
      type: Number,
      default: -1,
    },
  },
  data() {
    return {
      // before: this.total === this.current ? -1 : this.total,
      before: null,
      isPlay: false,
    };
  },
  watch: {
    current(current, preCurrent) {
      console.log(current, preCurrent);
      this.before = preCurrent;
      if (!this.isPlay) {
        this.isPlay = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
$width: 60px;
$height: 90px;
$fontSize: 80px;
$lineWidth: 3px;

.flip-item {
  margin: 5px;
  .flip {
    position: relative;
    height: $height;
    width: $width;
    line-height: $height - $lineWidth;
    font-size: $fontSize;
    font-weight: bold;
    border-radius: 6px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.7);
    .item {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      perspective: 200px;
      z-index: 1;
    }
     &.active {
      z-index: 2;
    }
    &:first-child {
      z-index: 2;
    }
    .up,
    .down {
      position: absolute;
      left: 0;
      width: 100%;
      height: 50%;
      overflow: hidden;
      z-index: 1;
    }
    .up {
      transform-origin: 50% 100%;
      top: 0;
      .inn {
        top: 0;
      }
      &::after {
        content: "";
        position: absolute;
        top: 44px;
        left: 0;
        z-index: 5;
        width: 100%;
        height: $lineWidth;
        background-color: rgba(0, 0, 0, 0.4);
      }
    }
    .down {
      transform-origin: 50% 0%;
      bottom: 0;
      .inn {
        bottom: 0;
      }
    }
    .inn {
      position: absolute;
      left: 0;
      z-index: 1;
      width: 100%;
      height: 200%;
      color: #ccc;
      text-shadow: 0 1px 2px #000;
      text-align: center;
      background-color: #333;
      border-radius: 6px;
    }
  }
}
//.play
.play {
  .item {
    &.before {
      z-index: 3;
    }
    &.active {
      animation: asd 0.5s 0.5s linear both;
      z-index: 2;
    }
    &.before .up {
      z-index: 2;
      animation: turn-up 0.5s linear both;
    }
    &.active .down {
      z-index: 2;
      animation: turn-down 0.5s 0.5s linear both;
    }
  }
}

.play {
  .shadow {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 2;
  }
  .before .up .shadow {
    background: linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 1) 100%);
    animation: show 0.5s linear both;
  }
  .active .up .shadow {
    background: linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 1) 100%);
    animation: hide 0.5s 0.3s linear both;
  }
  .before .down .shadow {
    background: linear-gradient(rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.1) 100%);
    animation: show 0.5s linear both;
  }
  .active .down .shadow {
    background: linear-gradient(rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.1) 100%);
    animation: hide 0.5s 0.3s linear both;
  }
}

@keyframes asd {
  0% {
    z-index: 2;
  }
  5% {
    z-index: 4;
  }
  100% {
    z-index: 4;
  }
}
//下半部分翻90
@keyframes turn-down {
  0% {
    transform: rotateX(90deg);
  }
  100% {
    transform: rotateX(0deg);
  }
}
//上半部分翻90
@keyframes turn-up {
  0% {
    transform: rotateX(0deg);
  }
  100% {
    transform: rotateX(-90deg);
  }
}

@keyframes show {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes hide {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
