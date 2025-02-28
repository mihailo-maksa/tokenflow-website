import React, { useState } from "react";
import { copyToClipboard } from "../utils/utils";
import { FAQItem } from "./common/FAQItem";
import "./faqs.scss";

type FAQsProps = {
  children?: React.ReactNode;
};

export const FAQs: React.FC<FAQsProps> = (): JSX.Element => {
  const [copiedEthUsdt, setCopiedEthUsdt] = useState<boolean>(false);
  const [copiedBtc, setCopiedBtc] = useState<boolean>(false);
  const [copiedTronUsdt, setCopiedTronUsdt] = useState<boolean>(false);

  const handleSetCopiedEthUsdt = (): void => {
    setCopiedEthUsdt(true);

    setTimeout(() => {
      setCopiedEthUsdt(false);
    }, 2000);
  };

  const handleSetCopiedBtc = (): void => {
    setCopiedBtc(true);

    setTimeout(() => {
      setCopiedBtc(false);
    }, 2000);
  };

  const handleSetCopiedTronUsdt = (): void => {
    setCopiedTronUsdt(true);

    setTimeout(() => {
      setCopiedTronUsdt(false);
    }, 2000);
  };

  return (
    <div
      className="faq-container container col-lg-6 col-md-8 col-sm-9"
      id="faqs"
    >
      <h1
        className="text-center faq-title-main bold"
        style={{ borderBottom: "1px solid #999" }}
      >
        Frequently Asked Questions
      </h1>
      <FAQItem
        question="1.) What types of smart contracts do you build?"
        answer={
          <span>
            Our specialty is in the development of token and NFT contracts for
            various use cases. However, we have the experience in building smart
            contracts for all sorts of specialized use cases.
            <br /> <br /> Here's the link to{" "}
            <a
              className="faq-link"
              href="/contract_types.pdf"
              rel="noopener noreferrer"
              target="_blank"
              title="Smart Contract Types Supported by TokenFlow"
            >
              the list of 80+ smart contract types
            </a>{" "}
            that we can build for you. We love challenges and are always eager
            to help you out!
          </span>
        }
      />
      <FAQItem
        question="2.) What does 0 to 1 End-to-End Development mean?"
        answer={
          <span>
            From concept to MVP launch, we simplify your project's journey with
            comprehensive, all-in-one development expertise. You'll experience a
            seamless journey as we construct your project from the ground up,
            ensuring that your frontend UI and backend APIs are seamlessly
            integrated with the blockchains and smart contracts of your choice
            for unparalleled success.
          </span>
        }
      />
      <FAQItem
        question="3.) Which blockchains do you support?"
        answer={
          <span>
            Our primary supported blockchains include: Ethereum mainnet,
            Arbitrum One, Optimism, Polygon, Polygon zkEVM, zkSync Era, Linea,
            Scroll, Taiko, Base, BNB Smart Chain (BSC), Avalanche C-Chain,
            Fantom, Celo and Fuse. In addition to these, we also support and can
            build smart contracts for you on{" "}
            <a
              className="faq-link"
              href="/supported_chains.pdf"
              rel="noopener noreferrer"
              target="_blank"
              title="Blockchains Supported by TokenFlow"
            >
              100+ other blockchains.
            </a>
          </span>
        }
      />
      <FAQItem
        question="4.) Which payment methods do you accept?"
        answer={
          <span>
            As a crypto-native company, our primary payment methods include BTC,
            ETH and USDT. You can send ETH and USDT to our ENS address (
            <a
              className="faq-link"
              href="https://etherscan.io/address/tokenflowai.eth"
              rel="noopener noreferrer"
              target="_blank"
            >
              tokenflowai.eth
            </a>
            ). If you'd like to use the traditional address format, our address
            is as follows for the ETH and USDT:{" "}
            <span
              onClick={() => {
                copyToClipboard("0x32acDAdB2D7E7FAF79A60a6AEfEC5264D9A5a790");
                handleSetCopiedEthUsdt();
              }}
              className="payment-address"
            >
              0x32acDAdB2D7E7FAF79A60a6AEfEC5264D9A5a790
            </span>{" "}
            {copiedEthUsdt ? (
              <span
                style={{
                  color: "#28a745",
                  marginLeft: "10px",
                  fontWeight: "bold",
                }}
              >
                ✔ Copied to Clipboard!
              </span>
            ) : (
              <span>(click on the address to copy).</span>
            )}
            <br /> <br />
            For BTC payments, our address is as follows:{" "}
            <span
              onClick={() => {
                copyToClipboard("bc1qq6amn3u2g4n3lc0fx3942x9k2dljlr5lzc83qa");
                handleSetCopiedBtc();
              }}
              className="payment-address"
            >
              bc1qq6amn3u2g4n3lc0fx3942x9k2dljlr5lzc83qa
            </span>{" "}
            {copiedBtc ? (
              <span
                style={{
                  color: "#28a745",
                  marginLeft: "10px",
                  fontWeight: "bold",
                }}
              >
                ✔ Copied to Clipboard!
              </span>
            ) : (
              <span>(click on the address to copy).</span>
            )}
            <br /> <br />
            We accept ETH and USDT on any of the following networks: Ethereum
            Mainnet, Arbitrum One, Optimism, Polygon, Polygon zkEVM, zkSync Era,
            BNB Smart Chain (BSC), Avalanche C-Chain, Fantom and Celo. As for
            BTC, we accept it on the Bitcoin network only.
            <br /> <br />
            Also, due to popular demand, we've introduced the USDT payments on
            the Tron (TRC20) network starting from June 1st, 2023, where our
            address is as follows:{" "}
            <span
              onClick={() => {
                copyToClipboard("TBpscrTjwGMRT9aH4PzWLFBLBjR2RJAyES");
                handleSetCopiedTronUsdt();
              }}
              className="payment-address"
            >
              TBpscrTjwGMRT9aH4PzWLFBLBjR2RJAyES
            </span>{" "}
            {copiedTronUsdt ? (
              <span
                style={{
                  color: "#28a745",
                  marginLeft: "10px",
                  fontWeight: "bold",
                }}
              >
                ✔ Copied to Clipboard!
              </span>
            ) : (
              <span>(click on the address to copy).</span>
            )}
            <br /> <br />
            In case you want to pay using the traditional bank transfer, we can
            provide you with our bank account details upon your request, as a
            part of the onboarding process.
          </span>
        }
      />
      <FAQItem
        question="5.) What is the payment structure for your development services?"
        answer={
          <span>
            Our payment structure is 50% upfront and 50% after the project is
            completed to your satisfaction.
            <br /> <br />
            This structure ensures that we have the resources necessary to start
            the project, while also giving you the peace of mind that the rest
            of the payment is due only after you are completely satisfied with
            the final product.
          </span>
        }
      />
      <FAQItem
        question="6.) What is your typical project delivery time?"
        answer={
          <span>
            The project delivery time varies depending on the complexity of the
            contracts and other factors. In general, typical project delivery
            takes 1-3 months. We offer a 30-minute free consultation call to
            provide a better estimate of the development time. You can{" "}
            <a
              className="faq-link"
              href="https://calendly.com/tokenflow-ai/30min"
              rel="noopener noreferrer"
              target="_blank"
            >
              schedule the call
            </a>{" "}
            here at any time.
          </span>
        }
      />
      <FAQItem
        question="7.) Is there an option to get a faster service delivery?"
        answer={
          <span>
            Yes, we can deliver your project in as little as 2-4 weeks{" "}
            (depending on the project's complexity) with the fast-track delivery
            option, which is 50% more expensive than the originally agreed upon
            project price.
          </span>
        }
      />
      <FAQItem
        question="8.) Are there any additional fees or charges?"
        answer={
          <span>
            We typically charge a gas fee rebate for the projects which involve
            deploying smart contracts on the Ethereum mainnet. This fee is
            charged in order to cover the gas costs of the deployment, and the
            fee amount is verifiable on blockchain explorers. <br /> <br />
            Similarly to the gas fee rebate, we may also charge a rebate for the
            hosting and related services involved in creating and maintaining
            the project. Apart from that, there are no additional fees or
            charges, and all costs will be agreed upon before the project
            starts.
          </span>
        }
      />
      <FAQItem
        question="9.) Are the smart contracts you develop audited, tested and secure?"
        answer={
          <span>
            Even though we are not an auditing firm, we take security very
            seriously and do our best to ensure that the{" "}
            <a
              href="/our_contracts.pdf"
              rel="noopener noreferrer"
              target="_blank"
              className="faq-link"
              title="List of Smart Contracts Developed by TokenFlow"
            >
              smart contracts that we develop
            </a>{" "}
            are secure and bug-free. We offer 100% test coverage for all of the
            contracts that we develop, which means that we test every single
            line of code.
            <br /> <br />
            In an unfortunate event that you find a bug in the contract, or if
            it gets hacked, we will try to provide a fix for it free of charge.{" "}
            If a third-party audit of the smart contracts interests you, we can
            facilitate introductions to our smart contract auditing partners -{" "}
            <a
              href="https://hacken.io"
              rel="noopener noreferrer"
              target="_blank"
              className="faq-link"
              title="Hacken"
            >
              Hacken
            </a>
            ,{" "}
            <a
              href="https://certik.com"
              rel="noopener noreferrer"
              target="_blank"
              className="faq-link"
              title="CertiK"
            >
              CertiK
            </a>
            ,{" "}
            <a
              href="https://beosin.com"
              rel="noopener noreferrer"
              target="_blank"
              className="faq-link"
              title="Beosin"
            >
              Beosin
            </a>
            , among others (refer to the list of our partners above). These
            firms are all leaders in the blockchain security space, and have a
            proven track record.
          </span>
        }
      />
      <FAQItem
        question="10.) Do you offer blockchain consulting services?"
        answer={
          <span>
            Yes, we offer blockchain consulting services, either as a part of
            the development package, or as a standalone service. If you are
            interested in our consulting services, please feel free to schedule
            a call with us{" "}
            <a
              className="faq-link"
              href="https://calendly.com/tokenflow-ai/30min"
              rel="noopener noreferrer"
              target="_blank"
            >
              here
            </a>
            . First 30-minute consultation call is free of charge.
          </span>
        }
      />
      <FAQItem
        question="11.) Do you have a partnership or referral programs currently active?"
        answer={
          <span>
            Yes, we have a referral program for our smart contract development
            services. If you like our work and know of anyone who might be
            interested in our services, please feel free to refer them to us. We
            will be more than happy to provide you with a 10% referral
            commission for every project that we get through your referral. If
            you are interested in our referral program, or wish to explore
            potential collaborations and synergies through a partnership, please
            feel free to schedule a call with us{" "}
            <a
              className="faq-link"
              href="https://calendly.com/tokenflow-ai/30min"
              rel="noopener noreferrer"
              target="_blank"
            >
              here
            </a>
            .
          </span>
        }
      />
      <FAQItem
        question="12.) I haven't found an answer to my question. Where can I get help?"
        answer={
          <span>
            You can always contact us directly via email at{" "}
            <a
              className="faq-link"
              href="mailto:tokenflow@proton.me"
              rel="noopener noreferrer"
              target="_blank"
            >
              tokenflow@proton.me
            </a>{" "}
            or{" "}
            <a
              className="faq-link"
              href="https://t.me/TokenFlow_ai"
              rel="noopener noreferrer"
              target="_blank"
            >
              Telegram
            </a>
            , and also by scheduling a 30-minute free consultation call with us{" "}
            <a
              className="faq-link"
              href="https://calendly.com/tokenflow-ai/30min"
              rel="noopener noreferrer"
              target="_blank"
            >
              here
            </a>
            . We love questions, and would love to help you out!
          </span>
        }
      />
    </div>
  );
};
