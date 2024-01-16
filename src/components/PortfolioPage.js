import React from 'react'
import Portfolio from './Portfolio'
import PortfolioInner from './PortfolioInner'
import WorkWithUs from './WorkWithUs'

const PortfolioPage = () => {
  return (
    <div className='portfolioinner'>
      <div className="offergradient"></div>
      <div className="offergradient2"></div>
      <div className="offergradient3"></div>
      <div className="portfolioinner__topgap"></div>
      <PortfolioInner />
      <WorkWithUs />
    </div>
  )
}

export default PortfolioPage