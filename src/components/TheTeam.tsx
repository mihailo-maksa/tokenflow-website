import React from "react";
import "./theTeam.scss";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import LanguageIcon from "@material-ui/icons/Language";
import mihailo from "../assets/mihailo_small_white_bg.png";
import andela from "../assets/andela_small.png";

type TheTeamProps = {
  children?: React.ReactNode;
};

export const TheTeam: React.FC<TheTeamProps> = (): JSX.Element => {
  return (
    <div className="the-team-container">
      <div className="the-team-title-container">
        <p className="the-team-subtitle">Leading the Flow</p>
        <h2 className="the-team-title">The Team</h2>
      </div>

      <div className="team-members-container">
        <div className="team-member team-member-mihailo">
          <img className="team-member-image" src={mihailo} alt="Team Member" />
          <div className="team-member-info">
            <h3 className="team-member-name">Mihailo Maksa</h3>
            <p className="team-member-position text-muted">
              Senior Smart Contract Engineer
            </p>
            <div className="team-member-socials">
              <a
                className="team-member-social"
                href="https://twitter.com/MihailoMaksa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterIcon style={{ color: "#04ABED", fontSize: "2em" }} />
              </a>
              <a
                className="team-member-social"
                href="https://linkedin.com/in/mihailomaksa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon style={{ color: "#0177B7", fontSize: "2em" }} />
              </a>
              <a
                className="team-member-social"
                href="https://github.com/mihailo-maksa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon style={{ color: "#000", fontSize: "2em" }} />
              </a>
              <a
                className="team-member-social"
                href="https://mihailomaksa.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LanguageIcon style={{ color: "#333", fontSize: "2.18em" }} />
              </a>
            </div>
            <div className="team-member-description">
              Mihailo is a highly skilled smart contract engineer with over 4
              years of experience in the development of DeFi protocols,
              cross-chain bridges, NFTs, DAOs, and more.
              <br /> <br />
              He efficiently manages client work delivery and has a strong
              record of providing secure, audited smart contracts approved by
              reputable security firms.
            </div>
          </div>
        </div>

        <div className="team-member">
          <img className="team-member-image" src={andela} alt="Team Member" />
          <div className="team-member-info">
            <h3 className="team-member-name">Angela Bobic</h3>
            <p className="team-member-position text-muted">
              Head of Business Operations
            </p>
            <div className="team-member-socials">
              <a
                className="team-member-social"
                href="https://twitter.com/angela_bobic"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterIcon style={{ color: "#04ABED", fontSize: "2em" }} />
              </a>
              <a
                className="team-member-social"
                href="https://linkedin.com/in/angelabobic"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon style={{ color: "#0177B7", fontSize: "2em" }} />
              </a>
            </div>
            <div className="team-member-description">
              Angela's extensive background in the crypto startup scene and
              strategic vision empower her to identify novel business prospects
              and craft innovative solutions.
              <br /> <br />
              Her robust leadership skills and operational excellence play a
              pivotal role in propelling the company toward growth and success.
              #WomenInBlockchain
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
