import React from "react";
import "./ourServices.scss";
import crossChain from "../assets/layerss.png";
import layers from "../assets/layersss.png";
import custom from "../assets/custom.png";
import layerzero from "../assets/layerzero_logo5.png";
import arbitrum from "../assets/arb_logo.png";
import optimism from "../assets/op_logo.png";
import matic from "../assets/matic_logo.png";
import avalanche from "../assets/avax_logo.png";

export type OurServicesProps = {
  children?: React.ReactNode;
};

export const OurServices: React.FC<OurServicesProps> = (): JSX.Element => {
  return (
    <div className="pricing-card-main-container" id="our_services">
      <div className="pricing-card-text">
        <h1 className="pricing-card-title bold text-center">Our Services</h1>
      </div>

      <div className="our-services-intro">
        <div className="pricing-cards-container">
          <div className="pricing-card pricing-card-1">
            <img
              src={crossChain}
              alt="Cross-Chain Development"
              width={100}
              height={100}
              style={{
                marginBottom: "22px",
              }}
            />

            <h2 className="pricing-plan-title">Cross-Chain Development</h2>

            <div className="plan-features">
              <p className="plan-feature">
                <span className="pricing-tick">✔</span> Tokens and NFTs built
                for the omnichain future, with no fees and liquidity
                requirements
              </p>
              <p className="plan-feature">
                <span className="pricing-tick">✔</span> Enjoy the highest
                security standards thanks to using LayerZero's tech stack
              </p>
            </div>

            <div className="layerzero-group">
              <span className="powered-by-layerzero">Powered by</span>
              <a
                href="https://layerzero.network"
                target="_blank"
                rel="noopener noreferrer"
                title="LayerZero"
              >
                <img
                  src={layerzero}
                  alt="LayerZero"
                  className="layerzero-image"
                />
              </a>
            </div>
          </div>

          <div className="pricing-card pricing-card-1">
            <img
              src={layers}
              alt="Layer 2 & Layer 3 Blockchain Development"
              className="pricing-card-image"
            />

            <h2 className="pricing-plan-title">
              Layer 2 & Layer 3 Blockchain Development
            </h2>

            <div className="plan-features">
              <p className="plan-feature">
                <span className="pricing-tick pricing-tick">✔</span> Custom-made
                layer 2 and layer 3 chains (appchains) for your project
              </p>
              <p className="plan-feature">
                <span className="pricing-tick pricing-tick">✔</span> Coming
                soon: Arbitrum Orbit, OP Stack, Polygon Supernets, Avalanche
                Subnets & more
              </p>
            </div>

            <div className="layer3-group">
              <a
                href="https://arbitrum.foundation/orbit"
                target="_blank"
                rel="noopener noreferrer"
                title="Arbitrum Orbit"
              >
                <img
                  src={arbitrum}
                  alt="Arbitrum Orbit"
                  className="layer3-image"
                />
              </a>
              <a
                href="https://app.optimism.io/superchain"
                target="_blank"
                rel="noopener noreferrer"
                title="OP Stack"
              >
                <img src={optimism} alt="OP Stack" className="layer3-image" />
              </a>
              <a
                href="https://polygon.technology/polygon-supernets"
                target="_blank"
                rel="noopener noreferrer"
                title="Polygon Supernets"
              >
                <img
                  src={matic}
                  alt="Polygon Supernets"
                  className="layer3-image"
                />
              </a>
              <a
                href="https://avax.network/subnets"
                target="_blank"
                rel="noopener noreferrer"
                title="Avalanche Subnets"
              >
                <img
                  src={avalanche}
                  alt="Avalanche Subnets"
                  className="layer3-image"
                />
              </a>
            </div>
          </div>

          <div className="pricing-card pricing-card-2">
            <img
              src={custom}
              alt="Custom Dapp Development"
              className="pricing-card-image"
            />

            <h2 className="pricing-plan-title">Custom Dapp Development</h2>

            <div className="plan-features">
              <p className="plan-feature">
                <p className="plan-feature">
                  <span className="pricing-tick">✔</span> From idea to MVP,
                  custom-made Dapps optimized for both security and scale
                </p>
                <span className="pricing-tick">✔</span> 80+ types of{" "}
                <a
                  href="/contract_types.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pricing-link"
                  title="Smart Contract Types Supported by TokenFlow"
                >
                  custom smart contracts
                </a>{" "}
                that we can build for you
              </p>
              <p className="plan-feature">
                <span className="pricing-tick">✔</span>{" "}
                <a
                  href="/supported_chains.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pricing-link"
                  title="Blockchains Supported by TokenFlow"
                >
                  120+ chains
                </a>{" "}
                supported by TokenFlow
              </p>
            </div>
          </div>
        </div>

        <p className="our-services-intro-text">
          We provide full-service smart contract development with benefits which
          include:
        </p>

        <div className="intro-features">
          <div className="intro-features-subcontainer">
            <p className="intro-feature">
              <span className="pricing-tick">✔</span> 100% test coverage & full
              project documentation
            </p>
            <p className="intro-feature">
              <span className="pricing-tick">✔</span> Testnet & mainnet
              deployment
            </p>
            <p className="intro-feature">
              <span className="pricing-tick">✔</span> 24/7 email & Telegram
              support
            </p>
          </div>
          <div className="intro-features-subcontainer">
            <p className="intro-feature">
              <span className="pricing-tick">✔</span> Weekly updates on the
              project progress
            </p>
            <p className="intro-feature">
              <span className="pricing-tick">✔</span> Free code revision in case
              of any issues
            </p>
            <p className="intro-feature">
              <span className="pricing-tick">✔</span> World-class{" "}
              <a
                className="faq-link"
                href="https://calendly.com/tokenflow-ai/30min"
                rel="noopener noreferrer"
                target="_blank"
              >
                blockchain consulting services
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
