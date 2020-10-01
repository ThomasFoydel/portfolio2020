import React, { useEffect, useContext } from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { config } from 'react-spring';
import { CTX } from 'context/Store';
import ContactSection from 'components/ContactSection/ContactSection';
import './ParallaxPage.scss';

const ParallaxPage = () => {
  const [appState, updateState] = useContext(CTX);
  const { page } = appState;

  let parallax;

  useEffect(() => {
    parallax.scrollTo(page);
  }, [page]);

  return (
    <div className='parallax-container'>
      <Parallax
        className='parallax-main'
        ref={(ref) => (parallax = ref)}
        pages={4}
        config={config.wobbly}
      >
        <ParallaxLayer offset={0} speed={0}>
          <div className='parallax-image-container'>
            <div className='parallax-image parallax-image1' />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.4} speed={-4.2}>
          <div className='me'></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={1}>
          <div className='parallax-inner'>
            <div className='title'>THOMAS FOYDEL</div>
            <p className='parallax-inner-text'>
              thomasjfoydel@gmail.com
              <br />I build web apps. Mostly MERN stack.
            </p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0}>
          <div className='parallax-image-container'>
            <div className='parallax-image parallax-image2' />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={1} className='parallax-textlayer'>
          <div className='infobox'>
            <h2>Imagine how cool</h2>
            <p>
              it would be if you hired me. You seem cool. I'm pretty cool
              myself. Let's be cool together.
            </p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={1}>
          <div className='parallax-inner'>
            <div className='title'>PORTFOLIO</div>

            {/* <div className='prarallax-order-button'>some projects</div> */}
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0}>
          <div className='parallax-image-container'>
            <div className='parallax-image parallax-image3' />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={1} className='parallax-textlayer'>
          <div className='infobox'>
            <h2>Perspiciatis dignissimos</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              exercitationem temporibus totam iusto possimus accusamus, at
              corrupti dolorum atque sequi hic nobis sint repellat eum
              aspernatur dignissimos quia molestiae? Officiis, quibusdam
              architecto labore ab modi porro, eius velit placeat saepe
              doloribus exercitationem similique odit quod facilis consequatur.
              Eaque, temporibus aperiam repudiandae libero consequuntur saepe
              dicta nemo quidem impedit. Laborum, officia beatae dolore velit!
            </p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={1}>
          <div className='parallax-inner'>
            <div className='title'>
              LONG
              <br />
              STORY
              <br />
              SHORT
            </div>

            {/* <p className='parallax-inner-text'>Short</p> */}
            <p className='parallax-inner-text'>
              I work for Northwestern University's coding bootcamp. I build web
              apps with MongoDB, Node/Express, and React. I am hungry and
              driven.
            </p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={0}>
          <div className='parallax-image-container'>
            <div className='parallax-image parallax-image4' />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={1} className='parallax-textlayer'>
          <div className='infobox'>
            <h2>Long Story Long</h2>
            <p>
              I work as a substitute teacher's assistant at Northwestern
              University's full stack web development coding bootcamp. I also
              work as a tutor, grader, and learning assistant for Trilogy/2U's
              web development program. Before tech, I worked in healthcare
              (autism therapy). I love building web apps. I focus on the MERN
              stack, but I have also built with other technologies such as MySQL
              and Handlebars. I am passionate about the potential for web
              technology to bring people closer together in new ways and improve
              quality of life. Some of my favorite things I've built with
              include web sockets, webRTC, the Web Audio API, graphQL, and the
              react-spring animation library.
            </p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={1}>
          <div className='parallax-inner'>
            {/* <div className='title'>CONTACT</div> */}
            <ContactSection />
          </div>
        </ParallaxLayer>

        {/* <ParallaxLayer offset={3} speed={1} className='parallax-textlayer'>
          <div className='infobox'>
            <h2>Perspiciatis dignissimos</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              exercitationem temporibus totam iusto possimus accusamus, at
              corrupti dolorum atque sequi hic nobis sint repellat eum
              aspernatur dignissimos quia molestiae? Officiis, quibusdam
              architecto labore ab modi porro, eius velit placeat saepe
              doloribus exercitationem similique odit quod facilis consequatur.
              Eaque, temporibus aperiam repudiandae libero consequuntur saepe
              dicta nemo quidem impedit. Laborum, officia beatae dolore velit!
            </p>
          </div>
        </ParallaxLayer> */}

        {/* <ParallaxLayer offset={4} speed={0.3}>
          <div className='parallax-image-container'>
            <div className='parallax-image parallax-image5' />
          </div>
        </ParallaxLayer> */}
        {/* <ParallaxLayer offset={3} speed={1} className='parallax-textlayer'>
          <div className='infobox'>
            <h2>Perspiciatis dignissimos</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              exercitationem temporibus totam iusto possimus accusamus, at
              corrupti dolorum atque sequi hic nobis sint repellat eum
              aspernatur dignissimos quia molestiae? Officiis, quibusdam
              architecto labore ab modi porro, eius velit placeat saepe
              doloribus exercitationem similique odit quod facilis consequatur.
              Eaque, temporibus aperiam repudiandae libero consequuntur saepe
              dicta nemo quidem impedit. Laborum, officia beatae dolore velit!
            </p>
          </div>
        </ParallaxLayer> */}
        {/* <ParallaxLayer offset={4} speed={1}>
          <div className='parallax-inner'>CONTACT</div>
        </ParallaxLayer> */}

        {/* <ParallaxLayer offset={4} speed={1}>
          <div className='infobox'>
            <h2>Perspiciatis dignissimos</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              exercitationem temporibus totam iusto possimus accusamus, at
              corrupti dolorum atque sequi hic nobis sint repellat eum
              aspernatur dignissimos quia molestiae? Officiis, quibusdam
              architecto labore ab modi porro, eius velit placeat saepe
              doloribus exercitationem similique odit quod facilis consequatur.
              Eaque, temporibus aperiam repudiandae libero consequuntur saepe
              dicta nemo quidem impedit. Laborum, officia beatae dolore velit!
            </p>
          </div>
        </ParallaxLayer> */}
      </Parallax>
    </div>
  );
};

export default ParallaxPage;
