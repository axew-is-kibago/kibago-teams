import { app, input } from '@azure/functions';

/**
 * 申し込みを取得する関数
 */
const sqlInput = input.generic({
    type: 'sql',
    commandText: 'select * from Applies',
    commandType: 'Text',
    connectionStringSetting: 'SqlConnectionString'
})

app.http('GetApp', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    extraInputs: [sqlInput],
    handler: async (request, context) => {
        const products = JSON.stringify(context.extraInputs.get(sqlInput));

        return {
            status: 200,
            body: products
        };
    }
});
