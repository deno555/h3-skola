<template>
  <div class="flex pt-5 m-6" id="subject_rating">
    <h1>{{ rateTheme }}</h1>
    <div class="rating">
      <ul class="list" >
        <li :key="star" v-for="star in maxStars" :class="{ 'active': star <= stars }" @click="rate(star)" class="star">
          <icon scale="2.5" :name="star <= stars ? 'star' : 'star-o'"/>
        </li> 
      </ul>
    </div>
  </div>
</template>

<script>
  import 'vue-awesome/icons/star'
  import 'vue-awesome/icons/star-o'

  import Icon from 'vue-awesome/components/Icon'
  
  export default {
    components: { Icon },   
     
    props: {
      grade: {
        type: Number,
        required: true
      },
      maxStars: {
        type: Number,
        default: 5
      },
      hasCounter: {
        type: Boolean,
        default: true
      },
      rateTheme: {
        type: String,
      },
    },
    data() {
      return {
        stars: this.grade,
      }
    },
    methods: {
      rate(star) {
        if (
          typeof star === 'number' &&
          star <= this.maxStars &&
          star >= 0
        )
          this.stars = this.stars === star ? star - 1 : star

          this.$emit("sendingStar", this.stars)
      },
    },
  }
</script>

<style scoped lang="scss">
  $active-color: #f3d23e;

  .rating {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 22px;
    color: #a7a8a8;
  }
  .list {
    margin: 0 0 5px 0;
    padding: 0;
    list-style-type: none;
    &:hover {
      .star {
        color: $active-color;
      }
    }
  }
  .star {
    display: inline-block;
    cursor: pointer;
    padding-right: 5px;
    &:hover {
      &~.star {
        &:not(.active) {
          color: inherit;
        }
      }
    }
  }
  .active {
    color: $active-color;
  }
</style>
