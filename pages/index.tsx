import tw from "twin.macro";

import Button from "../src/components/Button";

function Home() {
  return (
    <div
      css={[
        tw`flex flex-col items-center justify-center h-screen`,
        tw`bg-gradient-to-b `,
      ]}
    >
      <div tw="flex flex-col justify-center h-full space-y-5">
        <Button isPrimary tw="text-h3 text-primary-5">
          Submit
        </Button>
        <Button isSecondary>Cancel</Button>
        <Button isSmall>Close</Button>
      </div>
    </div>
  );
}

export default Home;
