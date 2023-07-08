import React from 'react'

import gardenIcon from './gardenIcon.png'
import hardscapeIcon from './hardIcon.png'
import irrigationIcon from './irrigationIcon.png'
import landscapeIcon from './landscapeIcon.png'
import lawnCareIcon from './lawnIcon.png'
import treeCareIcon from './treeCareIcon.png'

const Services = () => {
  return (
    <div>
      <h1>Services</h1>
      <div>
        <div>
          <h2>Landscape Design</h2>
          <img src={landscapeIcon} alt="Landscape Design" />
          <p>
            Our landscape design service works closely with clients to create
            custom landscape plans that suit their preferences and needs. This
            includes developing layouts, selecting appropriate plants and
            materials, and creating an overall vision for the outdoor space.
          </p>
        </div>
        <div>
          <h2>Garden Maintenance</h2>
          <img src={gardenIcon} alt="Garden Maintenance" />
          <p>
            Our garden maintenance service ensures your garden stays healthy and
            beautiful all year round. We provide regular upkeep, including
            pruning, weeding, fertilizing, and pest control.
          </p>
        </div>
        <div>
          <h2>Tree and Shrub Care</h2>
          <img src={treeCareIcon} alt="Tree and Shrub Care" />
          <p>
            Our tree and shrub care service includes pruning, disease
            management, and fertilization to keep your trees and shrubs healthy
            and vibrant.
          </p>
        </div>
        <div>
          <h2>Lawn Care</h2>
          <img src={lawnCareIcon} alt="Lawn Care" />
          <p>
            Our lawn care service includes regular mowing, fertilization, weed
            control, and aeration to ensure your lawn is lush and green.
          </p>
        </div>
        <div>
          <h2>Irrigation Systems</h2>
          <img src={irrigationIcon} alt="Irrigation Systems" />
          <p>
            We provide irrigation system installation and maintenance to ensure
            your landscape receives the right amount of water it needs to
            thrive.
          </p>
        </div>
        <div>
          <h2>Hardscape Installation</h2>
          <img src={hardscapeIcon} alt="Hardscape Installation" />
          <p>
            Our hardscape installation service includes the design and
            installation of patios, walkways, and retaining walls to enhance the
            functionality and aesthetics of your outdoor space.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Services
