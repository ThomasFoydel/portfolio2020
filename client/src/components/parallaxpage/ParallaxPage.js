import React, { useEffect, useContext } from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { config } from 'react-spring';
import { CTX } from 'context/Store';

import './ParallaxPage.scss';

const ParallaxPage = () => {
  const [appState, updateState] = useContext(CTX);
  const { page } = appState;

  let parallax;

  useEffect(() => {
    parallax.scrollTo(page);
  }, [page]);

  return (
    <div>
      <Parallax
        className='parallax-main'
        ref={(ref) => (parallax = ref)}
        pages={4}
        config={config.wobbly}
      >
        <ParallaxLayer offset={0} speed={0.3}>
          <div className='parallax-image-container'>
            <div className='parallax-image parallax-image1' />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={1}>
          <div className='parallax-inner'>
            THOMAS FOYDEL
            <p className='parallax-inner-text'>
              Hire me <br />
              I build web pages
              <br />
              Mostly MERN stack
            </p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.3}>
          <div className='parallax-image-container'>
            <div className='parallax-image parallax-image2' />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={1} className='parallax-textlayer'>
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
        <ParallaxLayer offset={1} speed={1}>
          <div className='parallax-inner'>
            FIAT
            <div className='prarallax-order-button'>place order</div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.3}>
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
            ABOUT
            <p className='parallax-inner-text'>Me trying to come off normal</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={0.3}>
          <div className='parallax-image-container'>
            <div className='parallax-image parallax-image4' />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={1} className='parallax-textlayer'>
          <div className='infobox'>
            <h2>Just Another Console Cowboy</h2>
            <p>
              I work as a substitute teacher's assistant at Northwestern
              University's full stack web development coding bootcamp. I also
              work as a tutor, grader, and learning assistant for Trilogy/2U's
              web development program. Before tech, I worked in healthcare
              (autism therapy). I love building web apps, with a focus on the
              MERN stack, though not exclusively.
            </p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={1}>
          <div className='parallax-inner'>
            CON
            <br />
            TACT
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
