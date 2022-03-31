import Profile from '../../imgs/Profile.png';
import '../../../src/intro.css';
import Pdf from '../documents/VictorMacielResume2022v4.pdf';


function ProfilePage() {
  return (
    <div className="Profile">
      <header className="Profile-header">
        <img src={Profile} className="Profile-logo" alt="profile" /><br/>
        <div className="Social-icons">
        <a
          href="https://github.com/victorgmaciel">
            <i className="icon-cog fab fa-github fa-lg"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/victor-maciel-925b48168/">
          <i className="icon-cog fab fa-linkedin fa-lg"></i>
        </a>
        <a
          href="mailto:victorgmaciel@protonmail.com">
          <i className="icon-cog fa-solid fa-envelope"></i>
        </a>
        <a
          href={Pdf} target= "_blank" rel='noreferrer' >
          <i className="icon-cog fa-solid fa-file"></i>
        </a>
        </div>
      </header>
      <h1 className="font-cursive main-heading big">
        Hello, I'm Victor Maciel
      </h1>
      <p className="description">
        Student | Veteran | Artist | Developer
      </p>
    </div>
  );
}

export default ProfilePage;