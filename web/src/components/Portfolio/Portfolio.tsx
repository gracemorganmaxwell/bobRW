import React from 'react'

import ButtonLink from '../ButtonLink/ButtonLink'

import AndersonAfter from './AndersonAfter1.png'
import AndersonBefore from './AndersonBefore1.png'
import RoganAfter from './RogansAfter.png'
import RoganBefore from './RogansBefore.png'
import SmithAfter from './SmithsAfter1.png'
import SmithBefore from './SmithsBefore1.png'
import './portfolio.css'

const Portfolio = () => {
  return (
    <div className="container">
      <div className="portfolio">
        <h1>Examples of my handywork:</h1>
        <div>
          <div className="card">
            <h2>The Andersons</h2>
            <img
              src={AndersonBefore}
              alt="Andersons before of their yard before it was landscaped."
            />
            <img
              src={AndersonAfter}
              alt="Andersons after of their yard before it was landscaped."
            />
            <p>
              <em>
                &quot;We hired Bob&apos;s Backyard to redesign our garden and we
                couldn&apos;t happier with the results. Bob and his team were
                professional, creative, and attentive to every detail. They
                transformed our dull, overgrown yard into a beautiful oasis,
                complete with a water feature that has become the envy of our
                neighbors. The team&apos;s knowledge of plants was impressive
                and they chose a variety of species that bloom different times,
                ensuring our garden looks vibrant throughout the year. We highly
                recommend Bob&apos;s Backyard for any landscaping needs.&quot;
              </em>
            </p>
          </div>
          <div className="card">
            <h2>The Smiths</h2>
            <img
              src={SmithBefore}
              alt="Smiths before of their yard before it was landscaped."
            />
            <img
              src={SmithAfter}
              alt="Smiths after of their yard before it was landscaped."
            />
            <p>
              <em>
                &quot;Bob&apos;s Backyard has been taking care of our lawn
                maintenance for the past year and we have been extremely
                satisfied with their service. Our lawn has never looked better!
                They are punctual, reliable, and always do a thorough job. Bob
                himself is very friendly and always takes the time to answer our
                questions. He even gave us tips on how to maintain our lawn
                between his visits. It&apos;s clear that he takes pride in his
                work and cares about his clients. We can&apos;t recommend
                Bob&apos;s Backyard enough!&quot;
              </em>
            </p>
          </div>
          <div className="card">
            <h2>The Rogans</h2>
            <img
              src={RoganBefore}
              alt="Rogans before of their yard before it was landscaped."
            />
            <img
              src={RoganAfter}
              alt="Rogans after of their yard before it was landscaped."
            />
            <p>
              <em>
                &quot;We recently moved into a new home with a backyard that was
                in dire need of some TLC. We reached out to Bob&apos;s Backyard
                for help with hardscaping and installing an irrigation system.
                Bob and his team exceeded our expectations! They installed a
                beautiful stone patio and walkway, and set up an efficient
                irrigation system that has made watering our lawn and garden a
                breeze. The transformation was incredible and we&apos;ve
                received so many compliments from our friends and family. If
                you&apos;re looking for high-quality landscaping services, look
                no further than Bob&apos;s Backyard!&quot;
              </em>
            </p>
          </div>
        </div>

        <ButtonLink />
      </div>
    </div>
  )
}

export default Portfolio
