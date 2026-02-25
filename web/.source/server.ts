// @ts-nocheck
import * as __fd_glob_5 from "../src/blog/content/tempo-carga-descarga.mdx?collection=docs"
import * as __fd_glob_4 from "../src/blog/content/roubo-carga.mdx?collection=docs"
import * as __fd_glob_3 from "../src/blog/content/react-portfolio-templates.mdx?collection=docs"
import * as __fd_glob_2 from "../src/blog/content/kpi-tecnologia.mdx?collection=docs"
import * as __fd_glob_1 from "../src/blog/content/cargas-sensiveis.mdx?collection=docs"
import * as __fd_glob_0 from "../src/blog/content/cargas-especiais.mdx?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const docs = await create.docs("docs", "src/blog/content", {}, {"cargas-especiais.mdx": __fd_glob_0, "cargas-sensiveis.mdx": __fd_glob_1, "kpi-tecnologia.mdx": __fd_glob_2, "react-portfolio-templates.mdx": __fd_glob_3, "roubo-carga.mdx": __fd_glob_4, "tempo-carga-descarga.mdx": __fd_glob_5, });