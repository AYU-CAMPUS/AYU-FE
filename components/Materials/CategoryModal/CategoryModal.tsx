import { Dispatch, SetStateAction, MouseEvent } from "react";
import { css } from "@emotion/react";

import Tabs from "./Tabs";

interface CategoryModalProps {
  setSelectedCategories: Dispatch<SetStateAction<string[]>>;
  closeCategoryDialog: (e?: MouseEvent<HTMLDivElement>) => void;
}

function CategoryModal({
  setSelectedCategories,
  closeCategoryDialog,
}: CategoryModalProps) {
  return (
    <div
      // modal overlay 중에 modal 부분은 이벤트가 퍼져나가면 안된다.
      // 그래서 이벤트를 막아준다.
      // div 태그에 onClick 이벤트를 넣으면 a11y에 위반되기 때문에 role을 바꿔준다.
      role="presentation"
      onClick={e => e.stopPropagation()}
      css={css`
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 30;
        background-color: white;
        cursor: default;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
      `}
    >
      <Tabs
        setSelectedCategories={setSelectedCategories}
        closeCategoryDialog={closeCategoryDialog}
      />
    </div>
  );
}

export default CategoryModal;
