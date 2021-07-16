<template>
  <div class="user-activity">
    <div class="post">
      <div class="user-block">
        <img class="img-circle" :src="user.avatar">
        <span class="username text-muted">{{ user.name }}</span>
        <span class="description">  --恋爱第一天-- </span>
      </div>
      <p>
        2021-01-23，我们在一起了！！！🎉🎉🎉
      </p>
      <ul class="list-inline">
        <li>
          <span class="link-black text-sm">
            <i class="el-icon-share" />
            Share
          </span>
        </li>
        <li>
          <span class="link-black text-sm">
            <svg-icon icon-class="like" />
            Like
          </span>
        </li>
      </ul>
    </div>
    <div class="post">
      <div class="user-block">
        <img class="img-circle" :src="user.avatar">
        <span class="username">{{ user.name }}</span>
        <span class="description"> -- 忘记发图片了，补上 --</span>
      </div>
      <div class="user-images">
        <el-carousel :interval="6000" type="card" height="520px">
          <el-carousel-item v-for="item in carouselImagesB" :key="item">
            <img :src="item" class="image">
          </el-carousel-item>
        </el-carousel>
      </div>
      <ul class="list-inline">
        <li><span class="link-black text-sm"><i class="el-icon-share" /> Share</span></li>
        <li>
          <span class="link-black text-sm">
            <svg-icon icon-class="like" /> Like</span>
        </li>
      </ul>
    </div>
    <div class="post">
      <div class="user-block">
        <img class="img-circle" :src="user.avatar">
        <span class="username">{{ user.name }}</span>
        <span class="description"> -- 今天是5月20号，收到了花花，开心 --</span>
      </div>
      <div class="user-images">
        <el-carousel :interval="6000" type="card" height="520px">
          <el-carousel-item v-for="item in carouselImagesD" :key="item">
            <img :src="item" class="image">
          </el-carousel-item>
        </el-carousel>
      </div>
      <ul class="list-inline">
        <li><span class="link-black text-sm"><i class="el-icon-share" /> Share</span></li>
        <li>
          <span class="link-black text-sm">
            <svg-icon icon-class="like" /> Like</span>
        </li>
      </ul>
    </div>
    <div class="post">
      <div class="user-block">
        <img class="img-circle" :src="user.avatar">
        <span class="username">{{ user.name }}</span>
        <span class="description"> -- 我们的旅游 --</span>
      </div>
      <div class="user-images">
        <el-carousel :interval="6000" type="card" height="550px">
          <el-carousel-item v-for="item in carouselImagesA" :key="item">
            <img :src="item" class="image">
          </el-carousel-item>
        </el-carousel>
      </div>
      <ul class="list-inline">
        <li><span class="link-black text-sm"><i class="el-icon-share" /> Share</span></li>
        <li>
          <span class="link-black text-sm">
            <svg-icon icon-class="like" /> Like</span>
        </li>
      </ul>
    </div>
    <div class="post">
      <div class="user-block">
        <img class="img-circle" :src="user.avatar">
        <span class="username">{{ user.name }}</span>
        <span class="description"> -- 考博冲冲冲，第一天 --</span>
      </div>
      <div class="user-images">
        <el-carousel :interval="6000" type="card" height="520px">
          <el-carousel-item v-for="item in carouselImagesC" :key="item">
            <img :src="item" class="image">
          </el-carousel-item>
        </el-carousel>
      </div>
      <ul class="list-inline">
        <li><span class="link-black text-sm"><i class="el-icon-share" /> Share</span></li>
        <li>
          <span class="link-black text-sm">
            <svg-icon icon-class="like" /> Like</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      user: {},
      carouselImagesA: [
        'http://47.115.84.234/picture/2061626356472.jpg',
        'http://47.115.84.234/picture/2051626356471.jpg',
        'http://47.115.84.234/picture/2031626356446.jpg',
        'http://47.115.84.234/picture/2001626356445.jpg',
        'http://47.115.84.234/picture/1971626356443.jpg',
        'http://47.115.84.234/picture/1981626356444.jpg'
      ],
      carouselImagesB: [
        'http://47.115.84.234/picture/2041626356471.jpg'
      ],
      carouselImagesC: [
        'http://47.115.84.234/picture/681751626321592.jpg',
        'http://47.115.84.234/picture/681761626321598.jpg'
      ],
      carouselImagesD: [
        'http://47.115.84.234/picture/1951626356441.jpg'
      ]
    }
  },
  computed: {
    ...mapGetters([
      'name',
      'avatar',
      'roles',
      'nickname'
    ])
  },
  created() {
    this.getUser()
  },
  methods: {
    getUser() {
      this.user = {
        name: this.name,
        role: this.roles.join(' | '),
        email: this.email,
        avatar: this.avatar,
        nickname: this.nickname
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.user-activity {
  .user-block {

    .username,
    .description {
      display: block;
      margin-left: 50px;
      padding: 2px 0;
    }

    .username{
      font-size: 16px;
      color: #000;
    }

    :after {
      clear: both;
    }

    .img-circle {
      border-radius: 50%;
      width: 40px;
      height: 40px;
      float: left;
    }

    span {
      font-weight: 500;
      font-size: 12px;
    }
  }

  .post {
    font-size: 14px;
    border-bottom: 1px solid #d2d6de;
    margin-bottom: 15px;
    padding-bottom: 15px;
    color: #666;

    .image {
      width: 100%;
      height: 100%;

    }

    .user-images {
      padding-top: 20px;
    }
  }

  .list-inline {
    padding-left: 0;
    margin-left: -5px;
    list-style: none;

    li {
      display: inline-block;
      padding-right: 5px;
      padding-left: 5px;
      font-size: 13px;
    }

    .link-black {

      &:hover,
      &:focus {
        color: #999;
      }
    }
  }

}

.box-center {
  margin: 0 auto;
  display: table;
}

.text-muted {
  color: #777;
}
</style>
