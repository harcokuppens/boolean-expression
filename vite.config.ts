import { defineConfig } from 'vite';

export default defineConfig({

    build: {
        sourcemap: true,
        lib: {
            entry: 'src/BooleanExpression.ts',
            // note: main.ts and logger.ts are not used by BooleanExpression.ts and therefor not included in bundle!
            // entry: {
            //     library: 'src/BooleanExpression.ts',
            //     mainNodeJs: 'src/mainNodeJs.ts'
            // },
            //   formats: ['es','umd'],
            name: 'boolean-expression',
            //  do not set 'formats' , default value for it is ok.
            //fileName: (format) => `boolean-expression.${format}.js`
            fileName: (format, entryName) => `${entryName}.${format}.js`
        },
        rollupOptions: {
            // Ensure to externalize deps that shouldn't be bundled
            // into your library
            external: ['antlr4'],
            output: {
                globals: {
                    antlr4: 'antlr4'
                }
            }
        }
    }
});