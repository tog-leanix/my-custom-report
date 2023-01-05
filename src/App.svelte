<script lang="ts">
</script>

<main>
  <div class="circle">
    Hello World
    <iframe
    title="Diagram"
    src="https://demo-eu-1.leanix.net/togBtmDemo/widget/diagrams/freedraw/3d0ab562-5037-4783-82a0-74e42e6d897a">
    </iframe>
  </div>
</main>

<style lang="scss">
  @import './constants';
  .circle{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
    width: 100%;
    background: linear-gradient($primary, $secondary) ;
    clip-path: circle();
    font-size: 3rem;
    flex-direction: column;
    animation: rotate 10s infinite linear;
    &:hover{
      animation-play-state: paused;
    }
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  iframe{
    border: none;
    box-shadow: #4deeea 0px 2px 8px;
    height: 40%;
    width: 50%;
  }
</style>