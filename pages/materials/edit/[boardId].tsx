import { ReactElement, useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "@emotion/styled";

import MainLayout from "../../../src/components/Layout/MainLayout";
import EditForm from "../../../src/components/Materials/EditForm";
import { getRegisteredBoardItem } from "../../../src/api/getRegisteredBoardItem";

import {
  BoardContent,
  EditMaterialsPageQuery,
} from "../../../src/components/Materials/types";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function EditMaterials() {
  const { boardId } = useRouter().query as EditMaterialsPageQuery;
  const [boardContent, setBoardContent] = useState<BoardContent>();
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const registeredBoardItemResponse = await getRegisteredBoardItem({
          boardId,
        });

        if (
          registeredBoardItemResponse.status !== 200 ||
          !registeredBoardItemResponse.data
        ) {
          setError(true);
          return;
        }

        setBoardContent({
          ...registeredBoardItemResponse.data,
        });
      } catch (e) {
        console.error(e);
        setError(true);
      }
    }

    fetchData();
  }, [boardId]);

  if (error) {
    return <p>An error occurred while loading the data.</p>;
  }

  if (!boardContent) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      <EditForm boardContent={boardContent} />
    </Container>
  );
}

EditMaterials.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
