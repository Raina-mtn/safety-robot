<template>
  <div
    :class="[
      'robot-item',
      robot.deviceStatus === deviceStatus[0].value ? 'online' : 'outline',
    ]"
    @click="openSystem"
  >
    <div class="name-top">
      <span class="name">{{ robot.title }}</span>
    </div>
    <img :src="robot.profile? robot.profile: require('@/assets/robot_real.png')">
    <i :class="['tri','tri-t-l']" />
    <i :class="['tri','tri-t-r']" />
    <i :class="['tri','tri-b-l']" />
    <i :class="['tri','tri-b-r']" />
  </div>
</template>
<script>
import { deviceStatus } from "@/utils/config";
export default {
  props: {
    robot: {
      type: Object,
      default: () => {},
    }
  },
  data() {
    return { deviceStatus };
  },
  methods: {
    openSystem(){
      window.open(this.robot.systemUrl)
    }
  },
};
</script>
<style lang="scss" scoped>
.robot-item {
  position: relative;
  width: 250px;
  height: 300px;
  
  background: #001559;
  border: 1px #D3DEDE solid;
  border-radius: 5px;
  overflow: hidden;
  margin-right: 3rem;
  float: left;
  cursor: pointer;
  &:last-child {
    margin-right: 0;
  }
  .name-top {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    .name {
      font-size: 16px;
      font-weight: 500;
      color: #1cdafc;
      text-align: center;
    }
  }
  .status {
    position: relative;
    padding-left: 15px;
    &::after {
      content: "";
      position: absolute;
      width: 10px;
      height: 10px;
      border-radius: 10px;
      left: 0;
      top: 2px;
    }
  }
  img {
    display: block;
    width: 100%;
    margin: 30px auto 0 auto;
  }
  &.online {
    .status {
      color: #00c23a;
      &::after {
        background: #00c23a;
      }
    }
  }
  &.outline {
    .status {
      color: #888;
      &::after {
        background: #888;
      }
    }
  }
  .tri{
    display: block;
    width: 18px;
    height: 18px;
    background: url('~@/assets/tri.png') no-repeat;
    position: absolute;
    &.tri-t-l{
      top: -1px;
      left: -1px;
    }
    &.tri-t-r{
      top: -1px;
      right: -1px;
      transform: rotate(90deg);
    }
    &.tri-b-l{
      bottom: -1px;
      left: -1px;
      transform:rotate(270deg);
    }
    &.tri-b-r{
      bottom: -1px;
      right: -1px;
      transform: rotate(180deg);
    }
  }
}
</style>