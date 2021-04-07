<template>
  <aside class="banner">
    <div class="contents theme-default-content">
      <div class="logo-text-wrapper">
        <svg
          class="discord-logo"
          xmlns="http://www.w3.org/2000/svg"
          id="Layer_1"
          viewBox="0 0 245 240"
        >
          <style>
            .st0 {
              fill: #fff;
            }
          </style>
          <path
            class="st0"
            d="M104.4 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1.1-6.1-4.5-11.1-10.2-11.1zm36.5 0c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z"
          />
          <path
            class="st0"
            d="M189.5 20h-134C44.2 20 35 29.2 35 40.6v135.2c0 11.4 9.2 20.6 20.5 20.6h113.4l-5.3-18.5 12.8 11.9 12.1 11.2 21.5 19V40.6c0-11.4-9.2-20.6-20.5-20.6zm-38.6 130.6s-3.6-4.3-6.6-8.1c13.1-3.7 18.1-11.9 18.1-11.9-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.5-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.7-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.3-1.8-1-2.8-1.7-2.8-1.7s4.8 8 17.5 11.8c-3 3.8-6.7 8.3-6.7 8.3-22.1-.7-30.5-15.2-30.5-15.2 0-32.2 14.4-58.3 14.4-58.3 14.4-10.8 28.1-10.5 28.1-10.5l1 1.2c-18 5.2-26.3 13.1-26.3 13.1s2.2-1.2 5.9-2.9c10.7-4.7 19.2-6 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.6 0 0-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3 28.1 10.5c0 0 14.4 26.1 14.4 58.3 0 0-8.5 14.5-30.6 15.2z"
          />
        </svg>
        <div class="description">
          <h2>Chat with us on Discord</h2>
          <p>We're now on Discord! Hop in and make yourselves at home</p>
        </div>
      </div>

      <a href="https://bit.ly/vueblr-discord" class="cta-btn"
        >Join #VueBLR on Discord!</a
      >
    </div>
  </aside>
</template>

<style scoped>
.theme-default-content:not(.custom) > *:first-child {
  margin-top: 0;
}

.banner {
  --c-brand: #3eaf7c;
  position: relative;
  width: 100vw;
  left: 50%;
  right: -50vw;
  margin-left: -50vw;
  margin-right: -50vw;
  background-color: #3eaf7c;
  color: #fff;
  margin-top: 30px;
  margin-bottom: 30px;
}

h2 {
  margin: 0;
  border: none;
  font-weight: 800;
  font-size: 1.5rem;
  line-height: 1;
}

p {
  margin: 0;
  margin-top: 0.1rem;
  line-height: 1.2;
}

.contents {
  display: flex;
  align-items: center;
}

.logo-text-wrapper {
  display: flex;
  align-items: center;
  margin-right: auto;
}

.discord-logo {
  height: 75px;
  flex-shrink: 0;
}

.description {
  margin-left: 20px;
  padding-right: 20px;
}

.cta-btn {
  display: block;
  flex-shrink: 0;
  white-space: nowrap;
  text-align: center;
  box-sizing: border-box;
  min-width: 150px;
  background-color: #fff;
  border: 1px solid #eee;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.01), 0 2px 3px rgba(0, 0, 0, 0.1);
  border-radius: 7px;
  padding: 1.1rem 1.5rem;
  font-weight: 600;
  color: var(--c-brand);
  font-size: 1.05rem;
  text-decoration: none !important;
  cursor: pointer;
  line-height: 0.95;
}

.cta-btn:hover {
  background-color: #f3f3f3;
}

.cta-btn:active {
  background-color: #e5e5e5;
}

.cta-btn:focus {
  outline: none;
}

.cta-btn:focus:focus-visible {
  box-shadow: 0 0 0 3px var(--c-brand), 0 0 0 6px #fff;
}

@media (max-width: 720px) {
  .contents {
    display: block;
  }

  .discord-logo {
    height: 55px;
  }

  h2 {
    font-size: 1.2rem;
  }

  .cta-btn {
    margin-top: 0.5rem;
    padding: 1.05rem 1.15rem;
    font-size: 1rem;
  }
}
</style>
