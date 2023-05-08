import { ParsedUrlQuery } from "querystring";

export enum EnumCategory {
  신학대학,
  인문대학,
  예술체육대학,
  사회과학대학,
  창의융합대학,
  인성양성,
  리더십,
  융합실무,
  문제해결,
  글로벌,
  의사소통,
  레포트,
  PPT템플릿,
  한국사자격증,
  토익,
  토플,
  논문,
  이력서,
  컴활자격증,
}

export enum EnumDepartmentType {
  신학과,
  기독교교육과,
  국어국문학과,
  영미언어문화학과,
  러시아언어문화학과,
  중국언어문화학과,
  유아교육과,
  공연예술학과,
  음악학과,
  디지털미디어디자인학과,
  화장품발명디자인학과,
  뷰티메디컬디자인학과,
  글로벌경영학과,
  행정학과,
  관광경영학과,
  식품영양학과,
  컴퓨터공학과,
  정보전기전자공학과,
  통계데이터사이언스학과,
  소프트웨어학과,
  도시정보공학과,
  환경에너지공학과,
  AI융합학과,
}

export enum EnumFileType {
  중간고사,
  기말고사,
  필기요약,
}

export interface BoardContent {
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

export interface EditMaterialsPageQuery extends ParsedUrlQuery {
  boardId: string;
}
