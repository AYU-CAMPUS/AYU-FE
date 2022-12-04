import tw from "twin.macro";

function Home() {
  return (
    <div
      css={[
        tw`flex flex-col items-center justify-center h-screen`,
        tw`bg-gradient-to-b `,
      ]}
    />
  );
}

export default Home;
