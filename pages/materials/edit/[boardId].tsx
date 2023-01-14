import { GetServerSideProps } from "next";
import Script from "next/script";
import { ParsedUrlQuery } from "querystring";
import { ReactElement } from "react";
import { getRegisteredBoardItem } from "../../../src/api/getRegisteredBoardItem";

import MainLayout from "../../../src/components/Layout/MainLayout";
import EditForm from "../../../src/components/Materials/EditForm";

import * as Styled from "./Edit.style";

interface BoradContent {
  title: string;
  boardCategory: {
    category: string;
    departmentType: string;
    fileType: string;
    gradeType: string;
    subjectName: string;
    professorName: string;
  };
  numberOfFilePages: number;
  originalFileName: string;
  content: string;
}

interface EditMaterialsProps {
  boardContent: BoradContent;
}

export default function EditMaterials({ boardContent }: EditMaterialsProps) {
  console.log(boardContent);

  return (
    <Styled.Container>
      <EditForm />
    </Styled.Container>
  );
}

EditMaterials.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      <Script src="https://unpkg.com/react-tabs/dist/react-tabs.development.js" />
      {page}
    </MainLayout>
  );
};

interface GetServerSidePropsParams extends ParsedUrlQuery {
  boardId: string;
}

export const getServerSideProps: GetServerSideProps = async context => {
  const { boardId } = context.params as GetServerSidePropsParams;

  try {
    const registeredBoardItemResponse = await getRegisteredBoardItem({
      boardId,
    });
    console.log(registeredBoardItemResponse);

    if (
      registeredBoardItemResponse.status !== 200 ||
      !registeredBoardItemResponse.data ||
      registeredBoardItemResponse.data.sharedStatus === "CANCEL"
    ) {
      return { notFound: true };
    }

    return {
      props: {
        boardContent: {
          ...registeredBoardItemResponse.data,
        },
      },
    };
  } catch (e) {
    console.log(e);
    return {
      notFound: true,
    };
  }
};
