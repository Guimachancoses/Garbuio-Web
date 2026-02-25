export interface Author {
    name: string;
    position: string;
    avatar: string;
  }
  
  export const authors: Record<string, Author> = {
    dillion: {
      name: "Dillion Verma",
      position: "Software Engineer",
      avatar: "/authors/dillion.png",
    },
    tecnologia: {
      name: "Bruno Rissio",
      position: "Head de TI&C | Coordenador de Governança de TI",
      avatar: "/authors/bruno.png",
    },
    GR: {
      name: "Nicolas Fernandes de Paula",
      position: "Coordenador de Gerenciamento de Riscos e Eficiência Logística",
      avatar: "/authors/nicolas.png",
    },
    operacao: {
      name: "Luiz Henrique Bordinhão",
      position: "Gestor Operacional",
      avatar: "/authors/luiz.png",
    }
    ,
    SSMA: {
      name: "Rafael Lopez",
      position: "Gerente de SSMAQ",
      avatar: "/authors/rafael.png",
    }
  } as const;
  
  export type AuthorKey = keyof typeof authors;
  
  export function getAuthor(key: AuthorKey): Author {
    return authors[key];
  }
  
  export function isValidAuthor(key: string): key is AuthorKey {
    return key in authors;
  }