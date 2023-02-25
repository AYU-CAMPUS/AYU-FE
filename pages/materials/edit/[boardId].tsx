import { ReactElement, useEffect, useState } from "react";
import { useRouter } from "next/router";

import MainLayout from "../../../src/components/Layout/MainLayout";
import EditForm from "../../../src/components/Materials/EditForm";
import { getRegisteredBoardItem } from "../../../src/api/getRegisteredBoardItem";

import * as Styled from "./Edit.style";
import {
  BoardContent,
  EditMaterialsPageQuery,
} from "../../../src/components/Materials/types";

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
    <Styled.Container>
      <EditForm boardContent={boardContent} />
    </Styled.Container>
  );
}

EditMaterials.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
