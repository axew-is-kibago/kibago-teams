import { app, input } from '@azure/functions';

/**
 * プロフィールを取得する関数
 */
const sqlInput = input.generic({
    type: 'sql',
    commandText: 'select * from User_profile',
    commandType: 'Text',
    connectionStringSetting: 'SqlConnectionString'
})

app.http('GetProfile', {
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
