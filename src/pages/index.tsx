import Head from "next/head";
import { FC } from "react";
import Button, { ButtonVariantEnum } from "../components/Button/Button";
import ContentSection from "../components/styled-common/ContentSection";
import PageContainer from "../components/styled-common/PageContainer";

const IndexPage: FC = () => {
  return (
    <>
      <Head>
        <title>Foosball</title>
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, viewport-fit=cover"
        />
        <link
          rel="icon"
          href={`${process.env.NEXT_PUBLIC_BASE_PATH}/favicon.ico`}
        />
      </Head>
      <main>
        <PageContainer>
          <ContentSection>
            <h1>Something</h1>
            <p>Something something</p>
            <Button onClick={() => console.log("nothing")}>
              Button primary
            </Button>
            <Button
              onClick={() => console.log("nothing")}
              variant={ButtonVariantEnum.SECONDARY}
            >
              Button secondary
            </Button>
          </ContentSection>
        </PageContainer>
      </main>
    </>
  );
};

export default IndexPage;
