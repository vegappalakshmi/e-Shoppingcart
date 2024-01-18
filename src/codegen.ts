
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    overwrite: true,
    schema: "https://assignmentdemo.saleor.cloud/graphql/",
    documents: "graphql/**/*.graphql",
    generates: {
        "src/saleor/": {
            preset: "client",
            plugins: []
        }
    }
};

export default config;
