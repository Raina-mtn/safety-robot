<template>
  <div
    :class="[
      'robot-item',
      robot.deviceStatus === deviceStatus[0].value ? 'online' : 'outline',
    ]"
    @click="openSystem"
  >
    <div class="name-top">
      <span class="name"><i class="status" />{{ robot.title }}</span>
    </div>
    <img :src="robot.profile? robot.profile: require('@/assets/robot_real.png')">
  </div>
</template>
<script>
import { deviceStatus } from "@/utils/config";
import { getTokenByKey } from "@/utils/token";
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
      const token = getTokenByKey('token') || 'test'
      window.open(`${this.robot.systemUrl}?token=${token}`)
    }
  },
};
</script>
<style lang="scss" scoped>
.robot-item {
  position: relative;
  width: 250px;
  height: 300px;
background: #E5EEFF;
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
      color: #3377FF;
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
      color: #3377FF;
      &::after {
        background: #3377FF;
      }
    }
  }
}
</style>