<template>
  <div>
    <!-- Banner -->
    <section id="banner">
      <div class="inner">
        <h1>Industrious</h1>
        <p>
          A responsive business oriented template with a video background<br />
          designed by <a href="https://templated.co/">TEMPLATED</a> and released
          under the Creative Commons License.
        </p>
      </div>
      <video
        autoplay
        loop
        muted
        playsinline
        src="@/assets/images/banner.mp4"
      ></video>
    </section>

    <!-- Highlights -->
    <section class="wrapper">
      <div class="inner">
        <header class="special">
          <h2>Sem turpis amet semper</h2>
          <p>
            In arcu accumsan arcu adipiscing accumsan orci ac. Felis id enim
            aliquet. Accumsan ac integer lobortis commodo ornare aliquet
            accumsan erat tempus amet porttitor.
          </p>
        </header>
        <div class="highlights">
          <Highlight
            v-for="highlight of highlights"
            :key="highlight.iconClass"
            :icon-class="highlight.iconClass"
            :title="highlight.title"
            :text="highlight.text"
          />
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section id="cta" class="wrapper">
      <div class="inner">
        <h2>Curabitur ullamcorper ultricies</h2>
        <p>
          Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio
          porttitor sem non mi integer non faucibus ornare mi ut ante amet
          placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan
          varius montes viverra nibh in adipiscing. Lorem ipsum dolor vestibulum
          ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis
          iaculis volutpat ac adipiscing sed feugiat eu faucibus. Integer ac sed
          amet praesent. Nunc lacinia ante nunc ac gravida.
        </p>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="wrapper">
      <div class="inner">
        <header class="special">
          <h2>Faucibus consequat lorem</h2>
          <p>
            In arcu accumsan arcu adipiscing accumsan orci ac. Felis id enim
            aliquet. Accumsan ac integer lobortis commodo ornare aliquet
            accumsan erat tempus amet porttitor.
          </p>
        </header>
        <div class="testimonials">
          <Review
            v-for="review in reviews"
            :key="review.index"
            :text="review.text"
            :src="review.src"
            :name="review.name"
          />
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer id="footer">
      <div class="inner">
        <div class="content">
          <section>
            <h3>Accumsan montes viverra</h3>
            <p>
              Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida
              odio porttitor sem non mi integer non faucibus ornare mi ut ante
              amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem
              accumsan varius montes viverra nibh in adipiscing. Lorem ipsum
              dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit
              adipiscing eu felis iaculis volutpat ac adipiscing sed feugiat eu
              faucibus. Integer ac sed amet praesent. Nunc lacinia ante nunc ac
              gravida.
            </p>
          </section>
          <section>
            <h4>Sem turpis amet semper</h4>
            <ul class="alt">
              <li><a href="#">Dolor pulvinar sed etiam.</a></li>
              <li><a href="#">Etiam vel lorem sed amet.</a></li>
              <li><a href="#">Felis enim feugiat viverra.</a></li>
              <li><a href="#">Dolor pulvinar magna etiam.</a></li>
            </ul>
          </section>
          <section>
            <h4>Magna sed ipsum</h4>
            <ul class="plain">
              <li>
                <a href="#"><i class="icon fa-twitter">&nbsp;</i>Twitter</a>
              </li>
              <li>
                <a href="#"><i class="icon fa-facebook">&nbsp;</i>Facebook</a>
              </li>
              <li>
                <a href="#"><i class="icon fa-instagram">&nbsp;</i>Instagram</a>
              </li>
              <li>
                <a href="#"><i class="icon fa-github">&nbsp;</i>Github</a>
              </li>
            </ul>
          </section>
        </div>
        <div class="copyright">
          &copy; Untitled. Photos <a href="https://unsplash.co">Unsplash</a>,
          Video <a href="https://coverr.co">Coverr</a>.
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Highlight from "@/components/Highlight";
import Review from "@/components/Review";
export default {
  name: "Index",
  components: { Highlight, Review },
  data() {
    return {
      highlights: [
        {
          inconClass: "fa-vcard-o",
          title: "Feugiat consequat",
          text:
            "Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.",
        },
        {
          inconClass: "fa-files-o",
          title: "Ante sem integer",
          text:
            "Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.",
        },
        {
          inconClass: "fa-floppy-o",
          title: "Ipsum consequat",
          text:
            "Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.",
        },
        {
          inconClass: "fa-line-chart",
          title: "Interdum gravida",
          text:
            "Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.",
        },
        {
          inconClass: "fa-paper-plane-o",
          title: "Faucibus consequat",
          text:
            "Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.",
        },
        {
          inconClass: "fa-qrcode",
          title: "Accumsan viverra",
          text:
            "Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.",
        },
      ],
      reviews: [
        {
          text:
            "Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.",
          src: "pic01.jpg",
          name: "Jane Doe",
        },
        {
          text:
            "Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.",
          src: "pic03.jpg",
          name: "John Doe",
        },
        {
          text:
            "Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.",
          src: "pic02.jpg",
          name: "Janet Smith",
        },
      ],
    };
  },
};
</script>

<style></style>
