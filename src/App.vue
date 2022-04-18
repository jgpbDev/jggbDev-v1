<template>
  <v-app>
    <v-main>
      <div class="sections-menu">
        <span
          class="menu-point"
          v-bind:class="{active: activeSection == index}"
          v-on:click="scrollToSection(index)"
          v-for="(offset, index) in offsets"
          v-bind:key="index">
        </span>
      </div>
      <section class="fullpage">
        <GreetingSection/>
      </section>
      <section>
        Second section:)
      </section>
    </v-main>
  </v-app>
</template>

<script>
import GreetingSection from './components/GreetingSection';
// import TheNavbar from './components/App/Navbar';

export default {
  name: 'App',
  components: {
    GreetingSection,
    // TheNavbar
  },
  data: () => ({
    inMove: false,
    activeSection: 0,
    offsets: [],
    touchStartY: 0
  }),
    methods: {
      calculateSectionOffsets() {
        let sections = document.getElementsByTagName('section');
        let length = sections.length;
        for (let i = 0; i < length; i++) {
            let sectionOffset = sections[i].offsetTop;
            this.offsets.push(sectionOffset);
        }
      },
      scrollToSection(id, force = false) {
        if (this.inMove && !force) return false;
        this.activeSection = id;
        this.inMove = true;

        document.getElementsByTagName('section')[id].scrollIntoView({
          behavior: 'smooth'
        });

        setTimeout(() => {
          this.inMove = false;
        }, 400);
      },
      handleMouseWheel: function(e) {
        if (e.wheelDelta < 30 && !this.inMove) {
          this.moveUp();
        } else if (e.wheelDelta > 30 && !this.inMove) {
          this.moveDown();
        }

        e.preventDefault();
        return false;
      },
      moveDown() {
        this.inMove = true;
        this.activeSection--;

        if (this.activeSection < 0) this.activeSection = this.offsets.length - 1;

        this.scrollToSection(this.activeSection, true);
      },
      moveUp() {
        this.inMove = true;
        this.activeSection++;

        if (this.activeSection > this.offsets.length - 1) this.activeSection = 0;

        this.scrollToSection(this.activeSection, true);
      },
      touchStart(e) {
        e.preventDefault();

        this.touchStartY = e.touches[0].clientY;
      },
      touchMove(e) {
        if (this.inMove) return false;
        e.preventDefault();

        const currentY = e.touches[0].clientY;

        if (this.touchStartY < currentY) {
          this.moveDown();
        } else {
          this.moveUp();
        }

        this.touchStartY = 0;
        return false;
      }
    },
    created() {
      this.calculateSectionOffsets();
      window.addEventListener('DOMMouseScroll', this.handleMouseWheelDOM); // Mozilla Firefox
      window.addEventListener('mousewheel', this.handleMouseWheel, {
        passive: false
      }); // Other browsers

      window.addEventListener('touchstart', this.touchStart, {
        passive: false
      }); // mobile devices
      window.addEventListener('touchmove', this.touchMove, {
        passive: false
      }); // mobile devices
    },
    destroyed() {
      window.removeEventListener('mousewheel', this.handleMouseWheel, {
        passive: false
      }); // Other browsers
      window.removeEventListener('DOMMouseScroll', this.handleMouseWheelDOM); // Mozilla Firefox

      window.removeEventListener('touchstart', this.touchStart); // mobile devices
      window.removeEventListener('touchmove', this.touchMove); // mobile devices
    }
};
</script>

<style scoped>
.fullpage {
  background-color: #000733;
  height: 100vh;
  width: 100%;
}
.sections-menu {
  position: fixed;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
}

.sections-menu .menu-point {
  width: 10px;
  height: 10px;
  background-color: #FFF;
  display: block;
  margin: 1rem 0;
  opacity: .6;
  transition: .4s ease all;
}

.sections-menu .menu-point.active {
  opacity: 1;
  transform: scale(1.5);
}
</style>