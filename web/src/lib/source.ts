import { docs } from "fumadocs-mdx:collections/server";
import { loader } from "fumadocs-core/source";

export const source = loader({
  baseUrl: "/[locale]/blog",
  source: docs.toFumadocsSource(),
});
