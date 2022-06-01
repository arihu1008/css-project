import { ReactComponent as AudioPhile } from './client-audiophile.svg';
import { ReactComponent as Databiz } from './client-databiz.svg';
import { ReactComponent as Maker } from './client-maker.svg';
import { ReactComponent as Meet } from './client-meet.svg';


const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-logos">
        <Databiz />
        <AudioPhile />
        <Meet />
        <Maker />
      </div>
    </div>
  )
}

export default Footer;
