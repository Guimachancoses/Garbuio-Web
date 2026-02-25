// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  docs: create.doc("docs", {"cargas-especiais.mdx": () => import("../src/blog/content/cargas-especiais.mdx?collection=docs"), "cargas-sensiveis.mdx": () => import("../src/blog/content/cargas-sensiveis.mdx?collection=docs"), "kpi-tecnologia.mdx": () => import("../src/blog/content/kpi-tecnologia.mdx?collection=docs"), "react-portfolio-templates.mdx": () => import("../src/blog/content/react-portfolio-templates.mdx?collection=docs"), "roubo-carga.mdx": () => import("../src/blog/content/roubo-carga.mdx?collection=docs"), "tempo-carga-descarga.mdx": () => import("../src/blog/content/tempo-carga-descarga.mdx?collection=docs"), }),
};
export default browserCollections;