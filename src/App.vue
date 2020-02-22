<template>
  <section class="section" id="app">
    <div class="container">
      <div class="columns">
        <div class="column is-3">
          <div>
            <router-link
              :to="{
                name: 'ListPullRequest'
              }"
              >Menu</router-link
            >
          </div>
        </div>
        <div class="column is-9">
          <router-view />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss"></style>
