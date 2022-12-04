import { css } from "@emotion/react";
import React from "react";

interface ModalOverlayProps {
  children: React.ReactNode;
  closeCategoryDialog: (e: React.MouseEvent<HTMLDivElement>) => void;
}

function ModalOverlay({ children, closeCategoryDialog }: ModalOverlayProps) {
  const handleOverlayClick = (
    e: React.MouseEvent<HTMLDivElement> & React.KeyboardEvent<HTMLDivElement>
  ) => {
    e.stopPropagation();
    closeCategoryDialog(e);
  };

  return (
    <div
      className="modal"
      role="button"
      tabIndex={-1}
      css={css`
        z-index: 9999;
        position: fixed;
        top: 0;
        background: rgba(0, 0, 0, 0.2);
        width: 100vw;
        height: 100vh;
        overflow-y: hidden;
        cursor: default;
      `}
      onClick={handleOverlayClick}
      onKeyDown={handleOverlayClick}
    >
      {children}
    </div>
  );
}

export default ModalOverlay;
