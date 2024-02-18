import { PanelsContainer, Panel, Content, Image } from "./PanelsContainer";

function Panels({ handleButtonClick }) {
  return (
    <>
      <PanelsContainer>
        {/* Left Panel */}
        <Panel isLeft={true}>
          <Content
            title="New to Code Saga ?"
            description="Discover a world of possibilities! Join us and explore a vibrant Saga where ideas flourish and connections thrive."
            buttonText="Sign up"
            onClick={handleButtonClick}
          />
          <Image
            src="https://i.ibb.co/6HXL6q1/Privacy-policy-rafiki.png"
            alt=""
          />
        </Panel>

        {/* Right Panel */}
        <Panel isLeft={false}>
          <Content
            title="One of Our Valued Members"
            description="Thank you for being part of our community. Your presence enriches our shared experiences. Let's continue this journey together!"
            buttonText="Sign in"
            onClick={handleButtonClick}
          />
          <Image
            src="https://i.ibb.co/nP8H853/Mobile-login-rafiki.png"
            alt=""
          />
        </Panel>
      </PanelsContainer>
    </>
  );
}

export default Panels;
